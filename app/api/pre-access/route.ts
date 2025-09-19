import { NextRequest, NextResponse } from "next/server";

// Enkel e-postvalidering
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

async function ensureFolderByName(name: string): Promise<number> {
  let offset = 0;
  const limit = 50;
  while (true) {
    const data = await brevoFetch(`/contacts/folders?limit=${limit}&offset=${offset}`, { method: "GET" });
    const folders = data?.folders || data?.items || [];
    const found = folders.find((f: any) => f.name === name);
    if (found) return found.id as number;
    const count = folders.length;
    if (!count || count < limit) break;
    offset += limit;
  }
  const created = await brevoFetch(`/contacts/folders`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  return created.id as number;
}

async function ensureListInFolder(listName: string, folderId: number): Promise<number> {
  let offset = 0;
  const limit = 50;
  while (true) {
    const data = await brevoFetch(`/contacts/folders/${folderId}/lists?limit=${limit}&offset=${offset}`, { method: "GET" });
    const lists = data?.lists || data?.items || [];
    const found = lists.find((l: any) => l.name === listName);
    if (found) return found.id as number;
    const count = lists.length;
    if (!count || count < limit) break;
    offset += limit;
  }
  const created = await brevoFetch(`/contacts/lists`, {
    method: "POST",
    body: JSON.stringify({ name: listName, folderId }),
  });
  return created.id as number;
}

async function upsertContactIntoList(email: string, listId: number) {
  await brevoFetch(`/contacts`, {
    method: "POST",
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Felaktig Content-Type" }, { status: 415 });
    }

    const body = await req.json().catch(() => null) as { email?: string } | null;
    const email = body?.email?.trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Ogiltig e-post" }, { status: 400 });
    }

    // Skicka direkt till Brevo /contacts med fast listId 4 och updateEnabled: false
    const payload = { email, listIds: [4], updateEnabled: false };
    console.log("[pre-access] Försöker skapa kontakt i Brevo", { email, listIds: [4], updateEnabled: false });
    const result = await brevoFetch(`/contacts`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log("[pre-access] Brevo svar lyckades", result);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[pre-access] Brevo fel", err);
    const message = (err as any)?.message || "Serverfel";
    const includeDebug = process.env.NODE_ENV !== "production";
    return NextResponse.json({ error: message, ...(includeDebug ? { debug: String(err) } : {}) }, { status: 500 });
  }
}
