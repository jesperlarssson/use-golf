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
    const { company, name, email, phone, date, start, message, hp, type, guests, partnerLevel, subject: subjectFromClient } = body || {};

    // Honeypot
    if (typeof hp === "string" && hp.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (![company, name, email].every(value => typeof value === "string" && value.trim().length > 0 && value.length <= 254)) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    if (type === "event" && (!Number.isInteger(guests) || guests < 1 || typeof phone !== "string" || !phone.trim() || typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)))) {
      return NextResponse.json({ ok: false, error: "Ange antal personer, telefon och önskat datum." }, { status: 400 });
    }

    const escapeHtml = (value: unknown) => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
    const apiKey = process.env.BREVO_API_KEY;
    const toAddress = process.env.INQUIRY_TO || process.env.CONTACT_TO || "hello@usegolf.se";
    const fromAddress = process.env.INQUIRY_FROM || process.env.CONTACT_FROM || "no-reply@usegolf.se";
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Missing BREVO_API_KEY" }, { status: 500 });
    }

    const client = new Brevo.TransactionalEmailsApi();
    client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const typeLabel = typeof type === "string" && type ? type : "paket";
    const subject = subjectFromClient || `Förfrågan (${typeLabel}): ${company || name}`;
    const htmlLines = [
      type ? `<p><strong>Ärende:</strong> ${escapeHtml(type)}</p>` : "",
      partnerLevel ? `<p><strong>Partnernivå:</strong> ${escapeHtml(partnerLevel)}</p>` : "",
      `<p><strong>Företag:</strong> ${escapeHtml(company)}</p>`,
      `<p><strong>Kontaktperson:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>E-post:</strong> ${escapeHtml(email)}</p>`,
      phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : "",
      guests ? `<p><strong>Antal personer:</strong> ${escapeHtml(guests)}</p>` : "",
      date ? `<p><strong>Önskat datum:</strong> ${escapeHtml(date)}</p>` : "",
      start ? `<p><strong>Starttid:</strong> ${escapeHtml(start)}</p>` : "",
      `<p><strong>Önskemål/beskrivning:</strong></p>`,
      `<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    ].filter(Boolean);

    await client.sendTransacEmail({
      subject,
      sender: { email: fromAddress, name: "USE GOLF" },
      to: [{ email: toAddress }],
      replyTo: { email, name },
      htmlContent: `<div>${htmlLines.join("\n")}</div>`,
    });

    if (process.env.INQUIRY_AUTOREPLY_FROM) {
      try {
        await client.sendTransacEmail({
          subject: "Tack för din förfrågan",
          sender: { email: process.env.INQUIRY_AUTOREPLY_FROM, name: "USE GOLF" },
          to: [{ email }],
          htmlContent: `<p>Tack ${escapeHtml(name)}! Vi hör av oss snart.</p>`,
        });
      } catch {}
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


