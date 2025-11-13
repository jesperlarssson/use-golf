"use client";

import { useState, useMemo, useEffect } from "react";
import { dayLabels, type DayType, type Weekday, weekdayLabels, calculateHourlyPrices, getAvailableStartTimes, getDayTypeFromWeekday } from "@/lib/prices";
import Link from "next/link";

export default function StaendeTidCalculator() {
  const [antalSim, setAntalSim] = useState(2);
  const [timmar, setTimmar] = useState(2);
  const [period, setPeriod] = useState(10);
  const [veckodag, setVeckodag] = useState<Weekday>("tuesday");
  const [showCalculation, setShowCalculation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const adminAvgift = 50; // kr/sim/h (gäller från vecka 3)

  // Konvertera veckodag till DayType (prisspann)
  const dag = useMemo(() => getDayTypeFromWeekday(veckodag), [veckodag]);

  // Hämta tillgängliga starttider för vald dag
  const availableStartTimes = useMemo(() => getAvailableStartTimes(dag), [dag]);
  
  // Sätt starttid baserat på tillgängliga tider
  const [startTid, setStartTid] = useState(() => {
    const times = getAvailableStartTimes("monday-thursday");
    return times.length > 0 ? times[0] : "07:00";
  });

  // Uppdatera starttid när dag ändras (sätt första tillgängliga tiden)
  const handleVeckodagChange = (newVeckodag: Weekday) => {
    setVeckodag(newVeckodag);
    const newDayType = getDayTypeFromWeekday(newVeckodag);
    const newTimes = getAvailableStartTimes(newDayType);
    if (newTimes.length > 0) {
      // Om nuvarande starttid finns i nya listan, behåll den, annars sätt första
      const currentTimeExists = newTimes.includes(startTid);
      setStartTid(currentTimeExists ? startTid : newTimes[0]);
    }
  };

  // Se till att starttid är giltig när availableStartTimes ändras
  useEffect(() => {
    if (!availableStartTimes.includes(startTid) && availableStartTimes.length > 0) {
      setStartTid(availableStartTimes[0]);
    }
  }, [availableStartTimes, startTid]);

  // Beräkna priset för varje timme
  const hourlyPrices = useMemo(() => {
    return calculateHourlyPrices(dag, startTid, timmar);
  }, [dag, startTid, timmar]);

  // Genomsnittligt pris per timme
  const averagePricePerHour = useMemo(() => {
    if (hourlyPrices.length === 0) return 0;
    return Math.round(hourlyPrices.reduce((sum, price) => sum + price, 0) / hourlyPrices.length);
  }, [hourlyPrices]);

  // Totalpris per vecka (utan adminavgift)
  const prisPerVecka = useMemo(() => {
    return hourlyPrices.reduce((sum, price) => sum + price, 0) * antalSim;
  }, [hourlyPrices, antalSim]);

  const totalPris = useMemo(() => {
    // De första två veckorna: ingen adminavgift
    const veckorUtanAdmin = Math.min(period, 2);
    const veckorMedAdmin = Math.max(0, period - 2);

    // Beräkning för veckor utan adminavgift
    const kostnadUtanAdmin = veckorUtanAdmin * prisPerVecka;

    // Beräkning för veckor med adminavgift (från vecka 3)
    const kostnadMedAdmin = veckorMedAdmin * (prisPerVecka + (antalSim * timmar * adminAvgift));

    return kostnadUtanAdmin + kostnadMedAdmin;
  }, [period, prisPerVecka, antalSim, timmar]);

  const veckorMedAdmin = Math.max(0, period - 2);
  const veckorUtanAdmin = Math.min(period, 2);

  return (
    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Antal simulatorer */}
        <div className="space-y-2">
          <label htmlFor="antal-sim" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
            Antal simulatorer
          </label>
          <select
            id="antal-sim"
            value={antalSim}
            onChange={(e) => setAntalSim(Number(e.target.value))}
            className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "simulator" : "simulatorer"}
              </option>
            ))}
          </select>
        </div>

        {/* Veckodag */}
        <div className="space-y-2">
          <label htmlFor="veckodag" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
            Veckodag
          </label>
          <select
            id="veckodag"
            value={veckodag}
            onChange={(e) => handleVeckodagChange(e.target.value as Weekday)}
            className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
          >
            {Object.entries(weekdayLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          
        </div>

        {/* Starttid */}
        <div className="space-y-2">
          <label htmlFor="starttid" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
            Starttid
          </label>
          <select
            id="starttid"
            value={startTid}
            onChange={(e) => setStartTid(e.target.value)}
            className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
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
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "timme" : "timmar"}
              </option>
            ))}
          </select>
        </div>

        {/* Period */}
        <div className="space-y-2">
          <label htmlFor="period" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
            Period (veckor)
          </label>
          <select
            id="period"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
            className="w-full px-4 py-2 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
          >
            {[5, 10, 15, 20, 25, 30].map((num) => (
              <option key={num} value={num}>
                {num} veckor
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultat och knappar */}
      <div className="border-t-2 border-[var(--brand-secondary)] pt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-[var(--brand-olive-900)] opacity-80 mb-1">Estimerat pris (inkl. 6% moms):</p>
            <p className="text-3xl font-semibold text-[var(--brand-secondary)]">
              {totalPris.toLocaleString("sv-SE")} kr
            </p>
            <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
              cirka {Math.round(totalPris / period).toLocaleString("sv-SE")} kr/vecka
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
              onClick={() => setIsModalOpen(true)}
              className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider hover:opacity-90 transition"
            >
              Skicka förfrågan
            </button>
          </div>
        </div>

        {/* User Pass rekommendation */}
        {totalPris >= 5000 && (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/40">
            <p className="text-sm text-[var(--brand-olive-900)] opacity-80">
              Vid större bokningar rekommenderar vi ett av våra <Link href="/medlemskap" className="text-[var(--brand-secondary)] hover:underline font-horus ">user passes</Link> för upp till 20% mer spelvärde för pengarna
            </p>
          </div>
        )}

        {/* Dold beräkning */}
        {showCalculation && (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/40 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-[var(--brand-olive-900)] opacity-80">Pris per timme:</p>
                <div className="space-y-1">
                  {hourlyPrices.map((price, index) => (
                    <p key={index} className="font-semibold">
                      Timme {index + 1}: {price} kr
                    </p>
                  ))}
                  {hourlyPrices.length > 1 && (
                    <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
                      Genomsnitt: {averagePricePerHour} kr/timme
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[var(--brand-olive-900)] opacity-80">Admin. avgift:</p>
                <p className="font-semibold text-lg">
                  {veckorMedAdmin > 0 ? `+${adminAvgift} kr/sim/h` : "Ingen (vecka 1-2)"}
                </p>
                {veckorMedAdmin > 0 && (
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
                    Från vecka 3
                  </p>
                )}
              </div>
              <div>
                <p className="text-[var(--brand-olive-900)] opacity-80">Vald tid:</p>
                <p className="font-semibold text-lg">{startTid} ({timmar} {timmar === 1 ? "timme" : "timmar"})</p>
                <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-1">
                  {dayLabels[dag]}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--brand-secondary)]/40">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--brand-olive-900)] opacity-80 mb-1">Beräkning:</p>
                  {veckorUtanAdmin > 0 && (
                    <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mb-1">
                      Vecka 1-{veckorUtanAdmin}: {veckorUtanAdmin} × {prisPerVecka.toLocaleString("sv-SE")} kr/vecka
                    </p>
                  )}
                  {veckorMedAdmin > 0 && (
                    <p className="text-xs text-[var(--brand-olive-900)] opacity-60">
                      Vecka 3-{period}: {veckorMedAdmin} × ({prisPerVecka.toLocaleString("sv-SE")} + {antalSim * timmar * adminAvgift}) kr/vecka
                    </p>
                  )}
                </div>
              </div>
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
            antalSim,
            veckodag,
            startTid,
            timmar,
            period,
            totalPris,
            dag,
          }}
        />
      )}
    </div>
  );
}

type SummaryData = {
  antalSim: number;
  veckodag: Weekday;
  startTid: string;
  timmar: number;
  period: number;
  totalPris: number;
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
          type: "staende-tid",
          subject: "Förfrågan Stående Tid",
          message: `Förfrågan om stående tid:
- Antal simulatorer: ${summary.antalSim} ${summary.antalSim === 1 ? "simulator" : "simulatorer"}
- Veckodag: ${weekdayLabels[summary.veckodag]} (${dayLabels[summary.dag]})
- Starttid: ${summary.startTid}
- Antal timmar: ${summary.timmar} ${summary.timmar === 1 ? "timme" : "timmar"}
- Period: ${summary.period} veckor
- Estimerat pris: ${summary.totalPris.toLocaleString("sv-SE")} kr`,
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
              <span className="opacity-70">Antal simulatorer:</span> {summary.antalSim} {summary.antalSim === 1 ? "simulator" : "simulatorer"}
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
              <span className="opacity-70">Period:</span> {summary.period} veckor
            </p>
            <p className="pt-2 border-t border-[var(--brand-primary)]/40 mt-2 font-semibold">
              <span className="opacity-70">Estimerat pris:</span> {summary.totalPris.toLocaleString("sv-SE")} kr
            </p>
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

