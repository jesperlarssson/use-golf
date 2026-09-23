"use client";
import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, hp }),
      });
      
      if (!res.ok) {
        let errorMessage = "Kunde inte skicka";
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = `Serverfel: ${res.status}`;
        }
        throw new Error(errorMessage);
      }
      
      const data = await res.json();
      if (!data.ok) {
        throw new Error(data.error || "Kunde inte skicka");
      }
      
      setState("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setHp("");
    } catch (err: unknown) {
      setState("error");
      setError("Det gick inte att skicka just nu. Försök igen eller mejla hello@usegolf.se.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="sm:col-span-2">
        <label htmlFor="contact-name" className="mb-2 block text-sm">Namn</label>
        <input id="contact-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="scroll-mt-28 min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base" required />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm">Mejl</label>
        <input id="contact-email" name="email" autoComplete="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="scroll-mt-28 min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base" required />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm">Telefon (valfritt)</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="scroll-mt-28 min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="mb-2 block text-sm">Meddelande</label>
        <textarea id="contact-message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="scroll-mt-28 min-h-40 w-full resize-y border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base" />
      </div>
      <div className="sm:col-span-2 flex flex-col items-start gap-4">
        <button disabled={state === "submitting"} type="submit" className="cta-sweep inline-flex min-h-14 w-full items-center justify-center gap-10 bg-[var(--brand-olive-900)] px-7 text-sm text-white transition-colors disabled:cursor-wait disabled:opacity-60 sm:w-auto">
          {state === "submitting" ? "Skickar…" : "Skicka meddelande"}
        </button>
        <div aria-live="polite" aria-atomic="true">
        {state === "success" ? <span className="text-sm">Tack! Ditt meddelande är skickat.</span> : null}
        {state === "error" ? <span role="alert" className="text-sm leading-relaxed text-red-800">{error}</span> : null}
        </div>
      </div>
    </form>
  );
}


