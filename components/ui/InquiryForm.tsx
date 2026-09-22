"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...fields, guests: Number(fields.guests), type: "event", subject: "Förfrågan företagsevent" }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Kunde inte skicka");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return <form onSubmit={submit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
    <input type="text" name="hp" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />
    {[
      { name: "company", label: "Företag", type: "text", autoComplete: "organization" },
      { name: "name", label: "Kontaktperson", type: "text", autoComplete: "name" },
      { name: "guests", label: "Antal personer", type: "number", autoComplete: "off" },
      { name: "date", label: "Önskat datum", type: "date", autoComplete: "off" },
      { name: "phone", label: "Telefon", type: "tel", autoComplete: "tel" },
      { name: "email", label: "Mejl", type: "email", autoComplete: "email" },
    ].map(field => <div key={field.name}><label htmlFor={`event-${field.name}`} className="mb-2 block text-sm">{field.label}</label><input id={`event-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required min={field.name === "guests" ? 1 : undefined} step={field.name === "guests" ? 1 : undefined} maxLength={field.type === "text" ? 200 : undefined} className="scroll-mt-28 min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-olive-900)]" /></div>)}
    <div className="sm:col-span-2"><button disabled={status === "submitting"} type="submit" className="mt-3 inline-flex min-h-14 w-full items-center justify-center gap-10 bg-[var(--brand-olive-900)] px-7 text-sm text-white transition-colors hover:bg-[#3e4837] disabled:cursor-wait disabled:opacity-60 sm:w-auto">{status === "submitting" ? "Skickar…" : "Skicka förfrågan"}<span aria-hidden="true">↗</span></button>
      <div aria-live="polite" aria-atomic="true" className="mt-4 text-sm leading-relaxed">{status === "success" && <p>Tack! Vi har tagit emot er förfrågan och hör av oss med ett förslag.</p>}{status === "error" && <p role="alert">Det gick inte att skicka just nu. Försök igen eller mejla <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a>.</p>}</div>
    </div>
  </form>;
}
