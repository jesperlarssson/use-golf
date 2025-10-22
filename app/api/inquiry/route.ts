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
    const { company, name, email, phone, date, start, duration, message, hp, type, partnerLevel, subject: subjectFromClient } = body || {};

    // Honeypot
    if (typeof hp === "string" && hp.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!company || !name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

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
      type ? `<p><strong>Ärende:</strong> ${type}</p>` : "",
      partnerLevel ? `<p><strong>Partnernivå:</strong> ${partnerLevel}</p>` : "",
      `<p><strong>Företag:</strong> ${company}</p>`,
      `<p><strong>Kontaktperson:</strong> ${name}</p>`,
      `<p><strong>E-post:</strong> ${email}</p>`,
      phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : "",
      date ? `<p><strong>Önskat datum:</strong> ${date}</p>` : "",
      start ? `<p><strong>Starttid:</strong> ${start}</p>` : "",
      duration ? `<p><strong>Varaktighet:</strong> ${duration}</p>` : "",
      `<p><strong>Önskemål/beskrivning:</strong></p>`,
      `<p>${(message || "").replace(/\n/g, "<br/>")}</p>`,
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
          htmlContent: `<p>Tack ${name}! Vi hör av oss snart.</p>`,
        });
      } catch {}
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


