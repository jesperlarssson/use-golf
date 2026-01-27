import { NextRequest, NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minut
const RATE_LIMIT_MAX = 10;
const ipHits = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (req: NextRequest) => {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown");
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const rec = ipHits.get(ip);
  if (!rec || now > rec.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  rec.count += 1;
  if (rec.count > RATE_LIMIT_MAX) return true;
  return false;
};

const escapeHtml = (text: string) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "Rate limited" }, { status: 429 });
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Invalid content-type" }, { status: 400 });
    }

    const body = await req.json();
    const { eventTitle, eventDate, eventId, name, email, phone, message, hp } = body || {};

    // Honeypot
    if (typeof hp === "string" && hp.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // Validering
    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // Brevo config
    const apiKey = process.env.BREVO_API_KEY;
    const toAddress = process.env.INTEREST_TO || "hello@usegolf.se";
    const fromAddress = process.env.INTEREST_FROM || process.env.CONTACT_FROM || "no-reply@usegolf.se";
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Missing BREVO_API_KEY" }, { status: 500 });
    }

    const client = new Brevo.TransactionalEmailsApi();
    client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const formatDate = (dateString?: string) => {
      if (!dateString) return '';
      try {
        return new Date(dateString).toLocaleDateString('sv-SE', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          ...(dateString.includes('T') ? { hour: '2-digit', minute: '2-digit' } : {})
        });
      } catch {
        return dateString;
      }
    };

    const subject = `Intresseanmälan: ${escapeHtml(eventTitle || 'Event')}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #322e2c;">
        <h2 style="color: #A58E75; margin-bottom: 1rem;">Intresseanmälan</h2>
        <p><strong>Event:</strong> ${escapeHtml(eventTitle || 'Okänt event')}</p>
        ${eventDate ? `<p><strong>Datum:</strong> ${escapeHtml(formatDate(eventDate))}</p>` : ""}
        ${eventId ? `<p><strong>Event-ID:</strong> ${escapeHtml(eventId)}</p>` : ""}
        <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${message ? `<p><strong>Meddelande:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      </div>
    `;

    await client.sendTransacEmail({
      subject,
      sender: { email: fromAddress, name: "USE GOLF" },
      to: [{ email: toAddress }],
      replyTo: { email, name },
      htmlContent,
    });

    // Valfritt: autosvar
    if (process.env.INTEREST_AUTOREPLY_FROM || process.env.CONTACT_AUTOREPLY_FROM) {
      try {
        await client.sendTransacEmail({
          subject: "Tack för din intresseanmälan",
          sender: { 
            email: process.env.INTEREST_AUTOREPLY_FROM || process.env.CONTACT_AUTOREPLY_FROM || fromAddress, 
            name: "USE GOLF" 
          },
          to: [{ email }],
          htmlContent: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #322e2c;">
              <p>Hej ${escapeHtml(name)}!</p>
              <p>Tack för din intresseanmälan för <strong>${escapeHtml(eventTitle || 'eventet')}</strong>${eventDate ? ` (${escapeHtml(formatDate(eventDate))})` : ''}.</p>
              <p>Vi hör av oss så snart vi kan med mer information.</p>
              <p>Med vänliga hälsningar,<br/>USE Golf</p>
            </div>
          `,
        });
      } catch {
        // svälj autosvarsfel tyst
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Interest form error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
