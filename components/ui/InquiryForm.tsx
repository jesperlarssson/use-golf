"use client";
import { useState } from "react";

type InquiryFormProps = {
  to?: string;
  subject?: string;
};

export default function InquiryForm({ to = "hello@usegolf.se", subject = "Förfrågan Företagsevent" }: InquiryFormProps) {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("2 timmar");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ company, name, email, phone, date, start, duration, message, hp }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Kunde inte skicka");
      setStatus("success");
      setCompany("");
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setStart("");
      setDuration("2 timmar");
      setMessage("");
      setHp("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Något gick fel");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="sm:col-span-2">
        <label className="block text-sm mb-1">Företag</label>
        <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" required />
      </div>
      <div>
        <label className="block text-sm mb-1">Kontaktperson</label>
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
      <div>
        <label className="block text-sm mb-1">Önskat datum</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
      </div>
      <div>
        <label className="block text-sm mb-1">Starttid</label>
        <input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
      </div>
      <div>
        <label className="block text-sm mb-1">Varaktighet</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none">
          <option>2 timmar</option>
          <option>3 timmar</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm mb-1">Önskemål/beskrivning</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full min-h-28 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
      </div>
      <div className="sm:col-span-2">
        <button disabled={status === "submitting"} type="submit" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition disabled:opacity-70">
          {status === "submitting" ? "Skickar..." : "Skicka förfrågan"}
        </button>
        {status === "success" ? <span className="ml-3 text-sm">Tack! Din förfrågan är skickad.</span> : null}
        {status === "error" ? <span className="ml-3 text-sm text-red-500">{error}</span> : null}
      </div>
    </form>
  );
}


