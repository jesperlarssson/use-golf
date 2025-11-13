"use client";

import { useState, useMemo, useEffect } from "react";
import { dayLabels, type DayType, type Weekday, weekdayLabels, getAvailableStartTimes, getDayTypeFromWeekday, bokaLokalenPriser, getBokaLokalenBasPris } from "@/lib/prices";
import DatePicker from "./DatePicker";
import Link from "next/link";

const ANTAL_SIMULATORER = 6; // Alltid 6 simulatorer för hela lokalen
const MIN_TIMAR = 2; // Minst 2 timmar

// Konvertera Date till Weekday
function dateToWeekday(date: Date): Weekday {
  const day = date.getDay();
  const weekdayMap: Weekday[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return weekdayMap[day];
}

// Formatera datum till svensk format
function formatDate(date: Date): string {
  return date.toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BokaLokalenCalculator() {
  const [timmar, setTimmar] = useState(MIN_TIMAR);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTid, setStartTid] = useState(() => {
    const times = getAvailableStartTimes("monday-thursday");
    return times.length > 0 ? times[0] : "07:00";
  });
  const [harSnackspaket, setHarSnackspaket] = useState(false);
  const [harMatpaket, setHarMatpaket] = useState(false);
  const [harDryck, setHarDryck] = useState(false);
  const [harKlubbhyra, setHarKlubbhyra] = useState(false);
  const [antalDeltagare, setAntalDeltagare] = useState(12);
  const [showCalculation, setShowCalculation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Kontrollera om något tillval är valt
  const harTillval = harSnackspaket || harMatpaket || harDryck || harKlubbhyra;

  // Hämta veckodag från valt datum
  const veckodag = useMemo(() => {
    if (!selectedDate) return null;
    return dateToWeekday(selectedDate);
  }, [selectedDate]);

  // Konvertera veckodag till DayType (prisspann)
  const dag = useMemo(() => {
    if (!veckodag) return "monday-thursday";
    return getDayTypeFromWeekday(veckodag);
  }, [veckodag]);

  // Hämta tillgängliga starttider för vald dag
  const availableStartTimes = useMemo(() => getAvailableStartTimes(dag), [dag]);

  // Uppdatera starttid när datum ändras
  useEffect(() => {
    if (selectedDate && availableStartTimes.length > 0) {
      const currentTimeExists = availableStartTimes.includes(startTid);
      if (!currentTimeExists) {
        setStartTid(availableStartTimes[0]);
      }
    }
  }, [selectedDate, availableStartTimes, startTid]);

  // Hantera datumval
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Baspris för hela lokalen (minst 2 timmar) baserat på veckodag
  const basPris = useMemo(() => {
    if (!veckodag) return 0;
    return getBokaLokalenBasPris(veckodag);
  }, [veckodag]);

  // Extra timmar (utöver 2 timmar)
  const extraTimmar = Math.max(0, timmar - MIN_TIMAR);
  const extraTimmarPris = useMemo(() => {
    return extraTimmar * bokaLokalenPriser.extraTimme;
  }, [extraTimmar]);

  // Lokalhyra (baspris + extra timmar)
  const lokalhyraPris = useMemo(() => {
    return basPris + extraTimmarPris;
  }, [basPris, extraTimmarPris]);

  return (
    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-6">
      {/* Datum och val */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kalender - vänster */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">
              Välj datum
            </label>
            <DatePicker
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              minDate={new Date()}
            />
            {selectedDate && (
              <p className="mt-2 text-sm text-[var(--brand-olive-900)] opacity-80">
                Valt datum: {formatDate(selectedDate)}
              </p>
            )}
          </div>
        </div>

        {/* Tid, timmar och tillval - höger */}
        <div className="space-y-6 lg:col-span-2">
          {/* Starttid och antal timmar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Starttid */}
            <div className="space-y-2">
              <label htmlFor="starttid" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
                Starttid
              </label>
              <select
                id="starttid"
                value={startTid}
                onChange={(e) => setStartTid(e.target.value)}
                disabled={!selectedDate}
                className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {availableStartTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Tid (timmar) */}
            <div className="space-y-2">
              <label htmlFor="timmar" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
                Antal timmar
              </label>
              <select
                id="timmar"
                value={timmar}
                onChange={(e) => setTimmar(Number(e.target.value))}
                className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              >
                {[2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "timme" : "timmar"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tillval */}
          <div className="border-t-2 border-[var(--brand-secondary)] pt-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)] mb-4">
              Tillval
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 cursor-pointer p-3 border-2 border-[var(--brand-secondary)]/40 hover:border-[var(--brand-secondary)] transition">
                <input
                  type="checkbox"
                  checked={harSnackspaket}
                  onChange={(e) => setHarSnackspaket(e.target.checked)}
                  className="w-5 h-5 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]"
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-[var(--brand-olive-900)]">
                    Snackspaket
                  </span>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-70 mt-1">
                    På förfrågan
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer p-3 border-2 border-[var(--brand-secondary)]/40 hover:border-[var(--brand-secondary)] transition">
                <input
                  type="checkbox"
                  checked={harMatpaket}
                  onChange={(e) => setHarMatpaket(e.target.checked)}
                  className="w-5 h-5 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]"
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-[var(--brand-olive-900)]">
                    Matpaket
                  </span>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-70 mt-1">
                    På förfrågan
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer p-3 border-2 border-[var(--brand-secondary)]/40 hover:border-[var(--brand-secondary)] transition">
                <input
                  type="checkbox"
                  checked={harDryck}
                  onChange={(e) => setHarDryck(e.target.checked)}
                  className="w-5 h-5 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]"
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-[var(--brand-olive-900)]">
                    Dryck
                  </span>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-70 mt-1">
                    På förfrågan
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer p-3 border-2 border-[var(--brand-secondary)]/40 hover:border-[var(--brand-secondary)] transition">
                <input
                  type="checkbox"
                  checked={harKlubbhyra}
                  onChange={(e) => setHarKlubbhyra(e.target.checked)}
                  className="w-5 h-5 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]"
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-[var(--brand-olive-900)]">
                    Klubbhyra
                  </span>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-70 mt-1">
                    På förfrågan
                  </p>
                </div>
              </label>
            </div>

            {/* Antal deltagare - visas endast när tillval är valt */}
            {harTillval && (
              <div className="mt-4 pt-4 border-t border-[var(--brand-secondary)]/40">
                <label htmlFor="deltagare" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">
                  Antal deltagare
                </label>
                <input
                  id="deltagare"
                  type="number"
                  min="1"
                  value={antalDeltagare}
                  onChange={(e) => setAntalDeltagare(Math.max(1, Number(e.target.value)))}
                  className="w-full max-w-xs px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resultat och knappar */}
      <div className="border-t-2 border-[var(--brand-secondary)] pt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-[var(--brand-olive-900)] opacity-80 mb-1">Estimerat pris (inkl. 6% moms):</p>
            <p className="text-3xl font-semibold text-[var(--brand-secondary)]">
              {lokalhyraPris === 0 ? "Välj ett datum" : `${lokalhyraPris.toLocaleString("sv-SE")} kr`}
              {harTillval && lokalhyraPris > 0 && (
                <span className="text-lg ml-2 opacity-80">+ tillval enligt offert</span>
              )}
            </p>
            <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
              Lokalhyra: {timmar} {timmar === 1 ? "timme" : "timmar"} • {ANTAL_SIMULATORER} simulatorer
              {extraTimmar > 0 && (
                <span className="block mt-1">+ {extraTimmar} extra {extraTimmar === 1 ? "timme" : "timmar"} ({extraTimmarPris.toLocaleString("sv-SE")} kr)</span>
              )}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowCalculation(!showCalculation)}
              className="text-sm text-[var(--brand-olive-900)] opacity-80 underline hover:opacity-100 transition"
            >
              {showCalculation ? "Dölj beräkning" : "Visa beräkning"}
            </button>
            <button
              type="button"
              onClick={() => {
                if (!selectedDate) {
                  alert("Vänligen välj ett datum först");
                  return;
                }
                setIsModalOpen(true);
              }}
              disabled={!selectedDate}
              className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Skicka förfrågan
            </button>
          </div>
        </div>

        {/* Dold beräkning */}
        {showCalculation && (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/40 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[var(--brand-olive-900)] opacity-80 mb-2">Lokalhyra:</p>
                <div className="space-y-1">
                  <p className="text-xs">
                    Baspris (2 timmar): {basPris.toLocaleString("sv-SE")} kr
                  </p>
                  {extraTimmar > 0 && (
                    <p className="text-xs">
                      Extra timmar ({extraTimmar} × {bokaLokalenPriser.extraTimme.toLocaleString("sv-SE")} kr): {extraTimmarPris.toLocaleString("sv-SE")} kr
                    </p>
                  )}
                  <p className="text-xs font-semibold mt-2 pt-2 border-t border-[var(--brand-secondary)]/20">
                    Totalt lokalhyra: {lokalhyraPris.toLocaleString("sv-SE")} kr
                  </p>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-2">
                    Inkluderar: {ANTAL_SIMULATORER} simulatorer, förberedelser, uppstart, tävlingsupplägg, presentationer, uppvärmning och introduktion
                  </p>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
                    {dayLabels[dag]}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[var(--brand-olive-900)] opacity-80 mb-2">Tillval:</p>
                <div className="space-y-1 text-xs">
                  {harSnackspaket && (
                    <p>
                      Snackspaket ({antalDeltagare} deltagare): På förfrågan
                    </p>
                  )}
                  {harMatpaket && (
                    <p>
                      Matpaket ({antalDeltagare} deltagare): På förfrågan
                    </p>
                  )}
                  {harDryck && (
                    <p>
                      Dryck ({antalDeltagare} deltagare): På förfrågan
                    </p>
                  )}
                  {harKlubbhyra && (
                    <p>
                      Klubbhyra ({antalDeltagare} deltagare): På förfrågan
                    </p>
                  )}
                  {!harTillval && (
                    <p className="opacity-60 italic">Inga tillval valda</p>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--brand-secondary)]/40">
              <p className="text-xs text-[var(--brand-olive-900)] opacity-60">
                {selectedDate && (
                  <>
                    <span className="font-semibold">Valt datum:</span> {formatDate(selectedDate)}
                    <br />
                  </>
                )}
                <span className="font-semibold">Vald tid:</span> {startTid} ({timmar} {timmar === 1 ? "timme" : "timmar"}) på {dayLabels[dag]}
              </p>
            </div>
          </div>
        )}

        <p className="text-xs text-[var(--brand-olive-900)] opacity-60 italic">
          * Detta är en uppskattning. Kontakta oss för exakt offert baserat på önskad dag och tid.
        </p>
      </div>

      {/* Modal för förfrågan */}
      {isModalOpen && (
        <InquiryModal
          onClose={() => setIsModalOpen(false)}
          summary={{
            selectedDate,
            veckodag: veckodag || "monday",
            startTid,
            timmar,
            antalDeltagare,
            harSnackspaket,
            harMatpaket,
            harDryck,
            harKlubbhyra,
            lokalhyraPris,
            harTillval,
            dag,
          }}
        />
      )}
    </div>
  );
}

type SummaryData = {
  selectedDate: Date | null;
  veckodag: Weekday;
  startTid: string;
  timmar: number;
  antalDeltagare: number;
  harSnackspaket: boolean;
  harMatpaket: boolean;
  harDryck: boolean;
  harKlubbhyra: boolean;
  lokalhyraPris: number;
  harTillval: boolean;
  dag: DayType;
};

function InquiryModal({ onClose, summary }: { onClose: () => void; summary: SummaryData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    // Validera att företagsnamn är ifyllt om det är företag
    if (isCompany && !companyName.trim()) {
      setStatus("error");
      setError("Företagsnamn krävs när det är för ett företag");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company: isCompany && companyName ? companyName : name,
          type: "boka-lokalen",
          subject: "Förfrågan Boka hela lokalen",
          message: `Förfrågan om att boka hela lokalen:
- Datum: ${summary.selectedDate ? formatDate(summary.selectedDate) : "Ej valt"}
- Veckodag: ${weekdayLabels[summary.veckodag]} (${dayLabels[summary.dag]})
- Starttid: ${summary.startTid}
- Antal timmar: ${summary.timmar} ${summary.timmar === 1 ? "timme" : "timmar"}
- Antal simulatorer: ${ANTAL_SIMULATORER}
- Lokalhyra (estimerat): ${summary.lokalhyraPris.toLocaleString("sv-SE")} kr
- Tillval:
  - Snackspaket: ${summary.harSnackspaket ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}
  - Matpaket: ${summary.harMatpaket ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}
  - Dryck: ${summary.harDryck ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}
  - Klubbhyra: ${summary.harKlubbhyra ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}
${summary.harTillval ? "- Tillval: enligt offert" : ""}`,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Kunde inte skicka");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        setName("");
        setEmail("");
        setPhone("");
        setIsCompany(false);
        setCompanyName("");
      }, 2000);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Något gick fel");
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <button
        aria-label="Stäng"
        className="absolute inset-0 bg-black/50 backdrop-enter backdrop-blur-xs"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md max-h-[90vh] bg-[var(--brand-secondary)] text-[var(--brand-primary)] shadow-xl border-4 border-[var(--brand-primary)] p-6 md:p-8 modal-enter overflow-y-auto"
      >
        <h2 className="text-2xl md:text-3xl font-horus uppercase">Skicka förfrågan</h2>
        <p className="mt-2 text-sm md:text-base opacity-80">
          Fyll i formuläret så återkommer vi till dig.
        </p>

        {/* Summering */}
        <div className="mt-4 p-4 bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/40">
          <p className="text-sm font-semibold uppercase tracking-wide mb-2 text-[var(--brand-primary)]">
            Din förfrågan:
          </p>
          <div className="space-y-1 text-sm text-[var(--brand-primary)] opacity-90">
            <p>
              <span className="opacity-70">Datum:</span> {summary.selectedDate ? formatDate(summary.selectedDate) : "Ej valt"}
            </p>
            <p>
              <span className="opacity-70">Veckodag:</span> {weekdayLabels[summary.veckodag]} ({dayLabels[summary.dag]})
            </p>
            <p>
              <span className="opacity-70">Starttid:</span> {summary.startTid}
            </p>
            <p>
              <span className="opacity-70">Antal timmar:</span> {summary.timmar} {summary.timmar === 1 ? "timme" : "timmar"}
            </p>
            <p>
              <span className="opacity-70">Antal simulatorer:</span> {ANTAL_SIMULATORER}
            </p>
            <p>
              <span className="opacity-70">Lokalhyra (estimerat):</span> {summary.lokalhyraPris.toLocaleString("sv-SE")} kr
            </p>
            <p className="pt-2 border-t border-[var(--brand-primary)]/40 mt-2">
              <span className="opacity-70">Tillval:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Snackspaket: {summary.harSnackspaket ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}</li>
              <li>Matpaket: {summary.harMatpaket ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}</li>
              <li>Dryck: {summary.harDryck ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}</li>
              <li>Klubbhyra: {summary.harKlubbhyra ? `Ja (${summary.antalDeltagare} deltagare)` : "Nej"}</li>
            </ul>
            {summary.harTillval && (
              <p className="pt-2 border-t border-[var(--brand-primary)]/40 mt-2 font-semibold">
                <span className="opacity-70">Totalt:</span> {summary.lokalhyraPris.toLocaleString("sv-SE")} kr + tillval enligt offert
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className={`mt-6 space-y-4 transition-all duration-500 ${
            status === "success" ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm uppercase tracking-wide mb-1">
              Namn
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-[var(--brand-primary)] bg-white/80 text-[var(--brand-olive-900)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              placeholder="Ditt namn"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wide mb-1">
              E-post
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-[var(--brand-primary)] bg-white/80 text-[var(--brand-olive-900)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              placeholder="namn@exempel.se"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm uppercase tracking-wide mb-1">
              Telefonnummer
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-[var(--brand-primary)] bg-white/80 text-[var(--brand-olive-900)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              placeholder="070-123 45 67"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isCompany}
                onChange={(e) => setIsCompany(e.target.checked)}
                className="w-4 h-4 border-2 border-[var(--brand-primary)] bg-white/80"
              />
              <span className="text-sm uppercase tracking-wide">
                Är det för ett företag?
              </span>
            </label>
          </div>

          {isCompany && (
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm uppercase tracking-wide mb-1">
                Företagsnamn <span className="text-red-400">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                required={isCompany}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border-2 border-[var(--brand-primary)] bg-white/80 text-[var(--brand-olive-900)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
                placeholder="Företagsnamn"
              />
            </div>
          )}

          {error && (
            <p className="text-accent-orange text-sm" role="alert">
              {error}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center px-5 py-3 bg-[var(--brand-primary)] text-[var(--brand-secondary)] font-medium hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? "Skickar…" : "Skicka förfrågan"}
            </button>
          </div>
        </form>

        {/* Success-overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${
            status === "success" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-live="polite"
        >
          <div className="w-full h-full bg-[var(--brand-secondary)] flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-[var(--brand-primary)] font-horus tracking-wide">
              Förfrågan skickad!
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Stäng dialog"
          className="absolute right-3 top-3 p-2 hover:opacity-70"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

