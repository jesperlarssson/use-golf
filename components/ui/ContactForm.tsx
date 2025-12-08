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
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Något gick fel");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
      <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="sm:col-span-2">
        <label className="block text-sm mb-1">Namn</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" required />
      </div>
      <div>
        <label className="block text-sm mb-1">E-post</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" required />
      </div>
      <div>
        <label className="block text-sm mb-1">Telefon</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm mb-1">Meddelande</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full min-h-28 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
      </div>
      <div className="sm:col-span-2 flex items-center gap-4">
        <button disabled={state === "submitting"} type="submit" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition disabled:opacity-70">
          {state === "submitting" ? "Skickar..." : "Skicka"}
        </button>
        {state === "success" ? <span className="text-sm">Tack! Ditt meddelande är skickat.</span> : null}
        {state === "error" ? <span className="text-sm text-red-500">{error}</span> : null}
      </div>
    </form>
  );
}


