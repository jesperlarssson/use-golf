import { NextRequest, NextResponse } from "next/server";

// Enkel e-postvalidering
function isValidEmail(email: string): boolean {
  const pattern = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  return pattern.test(email);
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

    // Placeholder: här integrerar vi med Brevo (Sendinblue) via API senare
    // Exempel: await addToBrevoList(email)

    // Simulera liten fördröjning
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
