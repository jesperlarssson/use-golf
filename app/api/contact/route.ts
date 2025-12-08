import { NextRequest, NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minut
const RATE_LIMIT_MAX = 10; // max 10 req per IP per minut
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
    const { name, email, phone, message, hp } = body || {};

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
    const toAddress = process.env.CONTACT_TO || "hello@usegolf.se";
    const fromAddress = process.env.CONTACT_FROM || "no-reply@usegolf.se";
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Missing BREVO_API_KEY" }, { status: 500 });
    }

    const client = new Brevo.TransactionalEmailsApi();
    client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const subject = `Kontaktformulär: ${escapeHtml(name)}`;
    const htmlContent = `
      <div>
        <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Meddelande:</strong></p>
        <p>${escapeHtml(message || "").replace(/\n/g, "<br/>")}</p>
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
    if (process.env.CONTACT_AUTOREPLY_FROM) {
      try {
        await client.sendTransacEmail({
          subject: "Tack för ditt meddelande",
          sender: { email: process.env.CONTACT_AUTOREPLY_FROM, name: "USE GOLF" },
          to: [{ email }],
          htmlContent: `<p>Tack ${escapeHtml(name)}! Vi återkommer så snart vi kan.</p>`,
        });
      } catch {
        // svälj autosvarsfel tyst
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


