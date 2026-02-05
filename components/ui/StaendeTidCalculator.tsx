"use client";

import { useState, useMemo, useEffect } from "react";
import { dayLabels, type DayType, type Weekday, weekdayLabels, calculateHourlyPrices, getAvailableStartTimes, getDayTypeFromWeekday, type PricingData, defaultPricingData } from "@/lib/prices";
import Link from "next/link";
import type { ClosureDocument } from "@/sanity/lib/pricingQueries";

interface StaendeTidCalculatorProps {
  pricingData?: PricingData;
  closures?: ClosureDocument[];
}

export default function StaendeTidCalculator({ pricingData, closures = [] }: StaendeTidCalculatorProps) {
  // Använd pricing-data från Sanity eller fallback
  const pricing = pricingData || defaultPricingData;
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
  const availableStartTimes = useMemo(() => getAvailableStartTimes(dag, pricing), [dag, pricing]);
  
  // Sätt starttid baserat på tillgängliga tider
  const initialTimes = useMemo(() => getAvailableStartTimes("monday-friday", pricing), [pricing]);
  const [startTid, setStartTid] = useState(() => {
    return initialTimes.length > 0 ? initialTimes[0] : "07:00";
  });

  // Uppdatera starttid när dag ändras (sätt första tillgängliga tiden)
  const handleVeckodagChange = (newVeckodag: Weekday) => {
    setVeckodag(newVeckodag);
    const newDayType = getDayTypeFromWeekday(newVeckodag);
    const newTimes = getAvailableStartTimes(newDayType, pricing);
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
  }, [availableStartTimes, startTid, pricing]);

  // Beräkna priset för varje timme
  const hourlyPrices = useMemo(() => {
    return calculateHourlyPrices(dag, startTid, timmar, pricing);
  }, [dag, startTid, timmar, pricing]);

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

  // Beräkna alla datum för perioden
  const bookingDates = useMemo(() => {
    const dates: { date: Date; isClosed: boolean; closureTitle?: string; replacementDate?: Date }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Hitta nästa förekommande av vald veckodag
    const weekdayMap: Record<Weekday, number> = {
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
      sunday: 0,
    };
    
    const targetWeekday = weekdayMap[veckodag];
    const currentWeekday = today.getDay();
    let daysUntilNext = (targetWeekday - currentWeekday + 7) % 7;
    if (daysUntilNext === 0) daysUntilNext = 7; // Om det är samma dag, välj nästa vecka
    
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + daysUntilNext);
    
    // Generera datum för alla veckor i perioden
    for (let week = 0; week < period; week++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + (week * 7));
      
      // Kontrollera om datumet faller inom en stängningsperiod
      let isClosed = false;
      let closureTitle: string | undefined;
      
      for (const closure of closures) {
        const closureStart = new Date(closure.startDate);
        closureStart.setHours(0, 0, 0, 0);
        const closureEnd = new Date(closure.endDate);
        closureEnd.setHours(23, 59, 59, 999);
        
        if (date >= closureStart && date <= closureEnd) {
          isClosed = true;
          closureTitle = closure.title;
          break;
        }
      }
      
      dates.push({ date, isClosed, closureTitle });
    }
    
    // Beräkna ersättningsdatum för stängda datum
    // Ersättningsdatumet är nästkommande veckodag efter det sista datumet i perioden
    const lastDate = dates[dates.length - 1]?.date;
    if (lastDate) {
      dates.forEach((item) => {
        if (item.isClosed && !item.replacementDate) {
          // Beräkna nästa veckodag efter det sista datumet
          const replacementDate = new Date(lastDate);
          replacementDate.setDate(lastDate.getDate() + 7);
          item.replacementDate = replacementDate;
        }
      });
    }
    
    return dates;
  }, [veckodag, period, closures]);

  const closedDatesCount = useMemo(() => {
    return bookingDates.filter(d => d.isClosed).length;
  }, [bookingDates]);

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

        {/* Datumlista */}
        {bookingDates.length > 0 && (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/40">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-[var(--brand-olive-900)] uppercase tracking-wider">
                Planerade speldatum ({bookingDates.length - closedDatesCount} av {bookingDates.length})
              </p>
              {closedDatesCount > 0 && (
                <p className="text-xs text-[var(--brand-olive-900)] opacity-60">
                  {closedDatesCount} {closedDatesCount === 1 ? 'datum hoppas över' : 'datum hoppas över'}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-48 overflow-y-auto">
              {bookingDates.map((item, index) => {
                const dateStr = item.date.toLocaleDateString('sv-SE', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                });
                const replacementDateStr = item.replacementDate?.toLocaleDateString('sv-SE', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                });
                return (
                  <div
                    key={index}
                    className={`p-2 text-xs border-2 rounded ${
                      item.isClosed
                        ? 'border-red-300 bg-red-50 text-red-700 opacity-60'
                        : 'border-[var(--brand-secondary)]/40 bg-[var(--brand-primary)] text-[var(--brand-olive-900)]'
                    }`}
                    title={item.isClosed && item.replacementDate ? `Stängt: ${item.closureTitle}. Ersätts med: ${replacementDateStr}` : item.isClosed ? `Stängt: ${item.closureTitle}` : undefined}
                  >
                    {item.isClosed ? (
                      <>
                        <div className="font-semibold line-through">{dateStr.split(' ')[0]}</div>
                        <div className="text-xs opacity-80 line-through">{dateStr.split(' ').slice(1).join(' ')}</div>
                        <div className="text-[10px] mt-1 opacity-70">{item.closureTitle}</div>
                        {item.replacementDate && replacementDateStr && (
                          <>
                            <div className="text-[10px] mt-1 font-semibold text-green-700">→ {replacementDateStr.split(' ')[0]}</div>
                            <div className="text-[10px] text-green-700 opacity-80">{replacementDateStr.split(' ').slice(1).join(' ')}</div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="font-semibold">{dateStr.split(' ')[0]}</div>
                        <div className="text-xs opacity-80">{dateStr.split(' ').slice(1).join(' ')}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {closedDatesCount > 0 && (
              <p className="text-xs text-[var(--brand-olive-900)] opacity-60 mt-3 italic">
                * Datum som faller inom stängningsperioder hoppas över och kompenseras vid ett senare datum enligt våra villkor.
              </p>
            )}
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
            bookingDates,
            closedDatesCount,
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
  bookingDates: { date: Date; isClosed: boolean; closureTitle?: string; replacementDate?: Date }[];
  closedDatesCount: number;
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
- Estimerat pris: ${summary.totalPris.toLocaleString("sv-SE")} kr
- Planerade speldatum: ${summary.bookingDates.length - summary.closedDatesCount} av ${summary.bookingDates.length}
${summary.closedDatesCount > 0 ? `- ${summary.closedDatesCount} datum hoppas över på grund av stängning\n` : ''}
Speldatum:
${summary.bookingDates.map((item, index) => {
  const dateStr = item.date.toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  if (item.isClosed && item.replacementDate) {
    const replacementStr = item.replacementDate.toLocaleDateString('sv-SE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return `${index + 1}. ${dateStr} (STÄNGT: ${item.closureTitle}) → Ersätts med: ${replacementStr}`;
  }
  return `${index + 1}. ${dateStr}${item.isClosed ? ` (STÄNGT: ${item.closureTitle})` : ''}`;
}).join('\n')}`,
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
            {summary.bookingDates.length > 0 && (
              <>
                <p className="pt-2 border-t border-[var(--brand-primary)]/40 mt-2">
                  <span className="opacity-70">Speldatum:</span> {summary.bookingDates.length - summary.closedDatesCount} av {summary.bookingDates.length}
                  {summary.closedDatesCount > 0 && (
                    <span className="text-xs opacity-60 ml-2">({summary.closedDatesCount} hoppas över)</span>
                  )}
                </p>
                <div className="mt-2 max-h-32 overflow-y-auto space-y-1 text-xs">
                  {summary.bookingDates.slice(0, 10).map((item, index) => {
                    const dateStr = item.date.toLocaleDateString('sv-SE', {
                      weekday: 'short',
                      day: 'numeric',
                      month: 'short',
                    });
                    const replacementDateStr = item.replacementDate?.toLocaleDateString('sv-SE', {
                      weekday: 'short',
                      day: 'numeric',
                      month: 'short',
                    });
                    return (
                      <p key={index} className={item.isClosed ? 'opacity-50' : ''}>
                        {item.isClosed ? (
                          <>
                            <span className="line-through">{dateStr} ({item.closureTitle})</span>
                            {item.replacementDate && (
                              <span className="ml-2 text-green-300">→ {replacementDateStr}</span>
                            )}
                          </>
                        ) : (
                          dateStr
                        )}
                      </p>
                    );
                  })}
                  {summary.bookingDates.length > 10 && (
                    <p className="opacity-60 italic">... och {summary.bookingDates.length - 10} fler</p>
                  )}
                </div>
              </>
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

