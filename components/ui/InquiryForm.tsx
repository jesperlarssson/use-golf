"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

type InquiryType = "paket" | "event" | "konferens" | "partner";
type PartnerLevel = "Partner" | "Official Partner";

type InquiryFormProps = {
  to?: string;
  subject?: string;
  defaultType?: InquiryType;
  defaultPartnerLevel?: PartnerLevel;
};

export default function InquiryForm({ to = "hello@usegolf.se", subject = "Förfrågan Företagsevent", defaultType, defaultPartnerLevel }: InquiryFormProps) {
  const searchParams = useSearchParams();
  const typeFromQuery = (searchParams.get("type") as InquiryType | null) || null;
  const levelFromQuery = (searchParams.get("level") as PartnerLevel | null) || null;

  const initialType: InquiryType = useMemo(() => typeFromQuery || defaultType || "paket", [typeFromQuery, defaultType]);
  const initialLevel: PartnerLevel | "" = useMemo(() => levelFromQuery || defaultPartnerLevel || "", [levelFromQuery, defaultPartnerLevel]);

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialType);
  const [partnerLevel, setPartnerLevel] = useState<PartnerLevel | "">(initialLevel);
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
        body: JSON.stringify({ company, name, email, phone, date, start, message, hp, type: inquiryType, partnerLevel: partnerLevel || undefined, subject }),
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
      setMessage("");
      setHp("");
      setInquiryType(initialType);
      setPartnerLevel(initialLevel);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Något gick fel");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div>
        <label className="block text-sm mb-1">Ärende</label>
        <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value as InquiryType)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none">
          <option value="paket">Simulatorpaket</option>
          <option value="event">Event (hela lokalen)</option>
          <option value="konferens">Konferens</option>
          <option value="partner">Partnernivå</option>
        </select>
      </div>
      {inquiryType === "partner" ? (
        <div>
          <label className="block text-sm mb-1">Partnernivå</label>
          <select value={partnerLevel} onChange={(e) => setPartnerLevel(e.target.value as PartnerLevel)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none">
            <option value="">Välj nivå</option>
            <option value="Partner">Partner</option>
            <option value="Official Partner">Official Partner</option>
          </select>
        </div>
      ) : (
        <div />
      )}
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
      {inquiryType !== "partner" ? (
        <>
          <div>
            <label className="block text-sm mb-1">Önskat datum</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Starttid</label>
            <input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
          </div>
        </>
      ) : (
        <>
          <div />
          <div />
        </>
      )}
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


