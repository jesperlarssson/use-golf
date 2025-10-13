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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyLines = [
      `Företag: ${company}`,
      `Kontaktperson: ${name}`,
      `E-post: ${email}`,
      `Telefon: ${phone}`,
      `Önskat datum: ${date}`,
      `Starttid: ${start}`,
      `Varaktighet: ${duration}`,
      "",
      message ? `Önskemål/beskrivning:\n${message}` : "",
    ].filter(Boolean);
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <button type="submit" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
          Skicka förfrågan
        </button>
      </div>
    </form>
  );
}


