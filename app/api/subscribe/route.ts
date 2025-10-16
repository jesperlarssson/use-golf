import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  const pattern = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  return pattern.test(email);
}

const BREVO_API_BASE = "https://api.brevo.com/v3";

function getBrevoHeaders() {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY saknas i env");
  }
  return {
    "api-key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  } as Record<string, string>;
}

async function brevoFetch(path: string, init?: RequestInit) {
  const headers = getBrevoHeaders();
  const res = await fetch(`${BREVO_API_BASE}${path}`, {
    ...init,
    headers: { ...headers, ...(init?.headers as Record<string, string>) },
  });
  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    const message = typeof data === "string" ? data : data?.message || JSON.stringify(data);
    throw new Error(`Brevo API-fel (${res.status}): ${message}`);
  }
  return data;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Felaktig Content-Type" }, { status: 415 });
    }

    const body = (await req.json().catch(() => null)) as { email?: string; listIds?: number[] } | null;
    const email = body?.email?.trim();
    const listIds = Array.isArray(body?.listIds) ? (body!.listIds as number[]) : [];

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Ogiltig e-post" }, { status: 400 });
    }
    if (!listIds.length || !listIds.every((id) => Number.isInteger(id) && id > 0)) {
      return NextResponse.json({ error: "Ogiltiga listIds" }, { status: 400 });
    }

    const payload = { email, listIds, updateEnabled: true };
    console.log("[subscribe] Försöker skapa/uppdatera kontakt i Brevo", payload);
    const result = await brevoFetch(`/contacts`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log("[subscribe] Brevo svar lyckades", result);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Brevo fel", err);
    const message = (err as any)?.message || "Serverfel";
    const includeDebug = process.env.NODE_ENV !== "production";
    return NextResponse.json({ error: message, ...(includeDebug ? { debug: String(err) } : {}) }, { status: 500 });
  }
}


