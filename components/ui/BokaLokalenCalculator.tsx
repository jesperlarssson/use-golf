"use client";

import { useRef, useState } from "react";
import DatePicker from "./DatePicker";
import InquiryForm from "./InquiryForm";
import {
  corporateNight,
  formatCorporatePrice,
  type CorporateEventDetails,
} from "@/lib/corporateOffers";
import type { ClosureDocument } from "@/sanity/lib/pricingQueries";

const controlClass =
  "min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-3 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-olive-900)]";
const extraOptions = ["Snackspaket", "Mat", "Dryck"];

export default function BokaLokalenCalculator({
  closures = [],
}: {
  closures?: ClosureDocument[];
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateFlexible, setDateFlexible] = useState(false);
  const [hours, setHours] = useState<number>(corporateNight.hours);
  const [start, setStart] = useState("18:00");
  const [guests, setGuests] = useState("12");
  const [extras, setExtras] = useState<string[]>([]);
  const [details, setDetails] = useState<CorporateEventDetails | null>(null);
  const [error, setError] = useState("");
  const inquiryHeading = useRef<HTMLHeadingElement>(null);
  const guestCount = Number(guests);
  const validGuests = Number.isSafeInteger(guestCount) && guestCount > 0;
  const extraHours = hours - corporateNight.hours;
  const hasExtras = extraHours > 0 || extras.length > 0;
  // Requested times, not live availability. Keep the complete event within 07–23.
  const startTimes = Array.from(
    { length: 24 - hours - 7 },
    (_, index) => `${String(index + 7).padStart(2, "0")}:00`,
  );

  function continueToInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedDate && !dateFlexible) {
      setError("Välj önskat datum eller markera att datum inte är bestämt.");
      return;
    }
    if (!validGuests) {
      setError("Ange ett helt antal deltagare, minst 1.");
      return;
    }
    setError("");
    // Use local calendar fields so the selected date never shifts with UTC conversion.
    const date =
      selectedDate && !dateFlexible
        ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
        : "";
    setDetails({ date, start, hours, guests: guestCount, extras: [...extras] });
    requestAnimationFrame(() => {
      inquiryHeading.current?.focus({ preventScroll: true });
      inquiryHeading.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    });
  }

  return (
    <div className="border border-black/20 bg-[#eeece2] p-5 sm:p-8 lg:p-10">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-black/15 pb-6">
        <h3 className="text-2xl tracking-tight">{corporateNight.name}</h3>
        <p className="text-sm">3 timmar. Hela lokalen. Låneklubbor ingår.</p>
      </div>
      <form
        onSubmit={continueToInquiry}
        onChange={() => {
          setDetails(null);
          setError("");
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(260px,1fr)_1.5fr] lg:gap-12">
          <fieldset className="min-w-0">
            <legend className="mb-3 text-sm font-medium">Önskat datum</legend>
            <DatePicker
              selectedDate={selectedDate}
              onDateSelect={(date) => {
                setSelectedDate(date);
                setDateFlexible(false);
                setDetails(null);
                setError("");
              }}
              closures={closures}
            />
            <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={dateFlexible}
                onChange={(event) => {
                  setDateFlexible(event.target.checked);
                  if (event.target.checked) setSelectedDate(null);
                }}
                className="size-5 accent-[var(--brand-olive-900)]"
              />
              Datum inte bestämt
            </label>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
              Vi bekräftar tillgängligheten när vi återkommer till er.
            </p>
          </fieldset>
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="starttid" className="mb-2 block text-sm">
                  Önskad starttid
                </label>
                <select
                  id="starttid"
                  value={start}
                  onChange={(event) => setStart(event.target.value)}
                  className={controlClass}
                >
                  {startTimes.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timmar" className="mb-2 block text-sm">
                  Antal timmar
                </label>
                <select
                  id="timmar"
                  value={hours}
                  onChange={(event) => {
                    const nextHours = Number(event.target.value);
                    setHours(nextHours);
                    if (Number(start.slice(0, 2)) + nextHours > 23)
                      setStart(`${23 - nextHours}:00`);
                  }}
                  className={controlClass}
                >
                  {[3, 4, 5, 6].map((value) => (
                    <option key={value} value={value}>
                      {value === 3
                        ? "3 timmar ingår"
                        : `${value} timmar, extra tid enligt offert`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="deltagare" className="mb-2 block text-sm">
                  Antal deltagare
                </label>
                <input
                  id="deltagare"
                  type="number"
                  min={1}
                  step={1}
                  required
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className={controlClass}
                />
                <p className="mt-2 text-sm text-[var(--foreground)]/75">
                  Vi hjälper er att anpassa upplägget efter gruppens storlek.
                </p>
              </div>
            </div>
            <fieldset className="mt-7">
              <legend className="mb-3 text-sm font-medium">
                Lägg till något gott
              </legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {extraOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 border border-black/20 p-4 transition-colors hover:bg-black/5 has-[:checked]:border-[var(--brand-olive-900)] has-[:checked]:bg-[var(--brand-olive-900)]/10"
                  >
                    <input
                      type="checkbox"
                      checked={extras.includes(option)}
                      onChange={(event) =>
                        setExtras((current) =>
                          event.target.checked
                            ? [...current, option]
                            : current.filter((value) => value !== option),
                        )
                      }
                      className="size-5 shrink-0 accent-[var(--brand-olive-900)]"
                    />
                    <span className="text-sm">
                      {option}
                      <span className="mt-1 block text-xs text-[var(--foreground)]/75">
                        Enligt offert
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="mt-5 text-sm leading-relaxed">
              Låneklubbor ingår alltid vid företagsevent, oavsett golfvana.
            </p>
          </div>
        </div>
        <div className="mt-8 grid items-end gap-6 border-t border-black/20 pt-7 md:grid-cols-[1fr_auto]">
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm">Paketpris exkl. moms</p>
            <p className="mt-2 text-4xl tracking-tight sm:text-5xl">
              {formatCorporatePrice(corporateNight.price)}
            </p>
            {hasExtras && (
              <p className="mt-2 text-sm font-medium">
                +{" "}
                {extraHours > 0
                  ? `${extraHours} extra ${extraHours === 1 ? "timme" : "timmar"}`
                  : ""}
                {extraHours > 0 && extras.length > 0 ? " och " : ""}
                {extras.length > 0 ? extras.join(", ").toLowerCase() : ""}{" "}
                enligt offert
              </p>
            )}
            <p className="mt-3 text-sm text-[var(--foreground)]/75">
              {validGuests
                ? `Cirka ${formatCorporatePrice(corporateNight.price / guestCount)} per person vid ${guestCount} deltagare, exkl. moms och tillval.`
                : "Ange antal deltagare för att se paketpriset per person."}
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]/75">
              Mat, dryck och extra tid ingår inte i paketpriset.
            </p>
          </div>
          <button
            type="submit"
            className="cta-sweep inline-flex min-h-14 items-center justify-center bg-[var(--brand-olive-900)] px-7 text-sm text-white"
          >
            Gå vidare med förfrågan
          </button>
        </div>
        {error && (
          <p role="alert" className="mt-4 text-sm font-medium">
            {error}
          </p>
        )}
        <details className="mt-5 text-sm">
          <summary className="min-h-11 cursor-pointer py-3 underline underline-offset-4">
            Se vad som ingår i priset
          </summary>
          <ul className="list-disc space-y-2 pb-3 pl-5">
            {corporateNight.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </form>
      {details && (
        <div className="mt-8 border-t border-black/20 pt-8">
          <h3
            ref={inquiryHeading}
            tabIndex={-1}
            className="scroll-mt-32 text-2xl tracking-tight focus:outline-none"
          >
            Er eventförfrågan
          </h3>
          <p className="mb-6 mt-3 text-sm leading-relaxed">
            {details.guests} deltagare, {details.hours} timmar.{" "}
            {details.date
              ? `Önskat datum: ${details.date}`
              : "Datum inte bestämt"}
            , start kl. {details.start}.{" "}
            {details.extras.length
              ? `Tillval: ${details.extras.join(", ")}.`
              : "Inga tillval valda."}{" "}
            Era val följer med i förfrågan.
          </p>
          <InquiryForm key={JSON.stringify(details)} eventDetails={details} />
        </div>
      )}
    </div>
  );
}
