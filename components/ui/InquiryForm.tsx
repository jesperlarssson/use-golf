"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  businessPartner,
  corporateEventSummary,
  corporateNight,
  type CorporateEventDetails,
} from "@/lib/corporateOffers";

type Offer = "event" | "partner";
const inputClass =
  "scroll-mt-28 min-h-12 w-full border border-black/25 bg-[var(--brand-primary)] px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-olive-900)]";

export default function InquiryForm({
  eventDetails,
}: {
  eventDetails?: CorporateEventDetails;
}) {
  const id = useId();
  const sending = useRef(false);
  const [offer, setOffer] = useState<Offer>("event");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [dateFlexible, setDateFlexible] = useState(false);

  useEffect(() => {
    if (eventDetails) return;
    const selectOffer = () => {
      if (window.location.hash === "#business-partner") {
        setOffer("partner");
        setStatus("idle");
      }
    };
    selectOffer();
    window.addEventListener("hashchange", selectOffer);
    return () => window.removeEventListener("hashchange", selectOffer);
  }, [eventDetails]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const isEvent = offer === "event";
    const packageName = isEvent ? corporateNight.name : businessPartner.name;
    const flexible =
      isEvent && (eventDetails ? !eventDetails.date : dateFlexible);
    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...fields,
          type: offer,
          packageName,
          guests: isEvent
            ? (eventDetails?.guests ?? Number(fields.guests))
            : undefined,
          date: isEvent
            ? flexible
              ? ""
              : (eventDetails?.date ?? fields.date)
            : undefined,
          dateFlexible: flexible,
          start: isEvent ? eventDetails?.start : undefined,
          subject: `Förfrågan ${packageName}`,
          message: [
            eventDetails
              ? corporateEventSummary(eventDetails)
              : `Intresse för ${packageName}.`,
            fields.message,
          ]
            .filter(Boolean)
            .join("\n\n"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Kunde inte skicka");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input
        type="text"
        name="hp"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />
      {!eventDetails && (
        <div id="business-partner" className="scroll-mt-32 sm:col-span-2">
          <label htmlFor={`${id}-offer`} className="mb-2 block text-sm">
            Jag är intresserad av
          </label>
          <select
            id={`${id}-offer`}
            value={offer}
            onChange={(event) => {
              setOffer(event.target.value as Offer);
              setStatus("idle");
              if (window.location.hash === "#business-partner")
                window.history.replaceState(null, "", "#forfragan");
            }}
            className={inputClass}
          >
            <option value="event">Corporate Golf Night</option>
            <option value="partner">Business Partner</option>
          </select>
        </div>
      )}
      {status !== "success" && (
        <>
          {[
            {
              name: "company",
              label: "Företag",
              type: "text",
              autoComplete: "organization",
            },
            {
              name: "name",
              label: "Kontaktperson",
              type: "text",
              autoComplete: "name",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`${id}-${field.name}`}
                className="mb-2 block text-sm"
              >
                {field.label}
              </label>
              <input
                id={`${id}-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                maxLength={200}
                className={inputClass}
              />
            </div>
          ))}
          {!eventDetails && offer === "event" && (
            <>
              <div>
                <label htmlFor={`${id}-guests`} className="mb-2 block text-sm">
                  Antal personer
                </label>
                <input
                  id={`${id}-guests`}
                  name="guests"
                  type="number"
                  required
                  min={1}
                  step={1}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={`${id}-date`} className="mb-2 block text-sm">
                  Önskat datum
                </label>
                <input
                  id={`${id}-date`}
                  name="date"
                  type="date"
                  required={!dateFlexible}
                  disabled={dateFlexible}
                  className={`${inputClass} disabled:opacity-50`}
                />
                <label className="mt-2 flex min-h-11 items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={dateFlexible}
                    onChange={(event) => setDateFlexible(event.target.checked)}
                    className="size-5 accent-[var(--brand-olive-900)]"
                  />
                  Datum inte bestämt
                </label>
              </div>
            </>
          )}
          {[
            {
              name: "phone",
              label: offer === "partner" ? "Telefon (valfritt)" : "Telefon",
              type: "tel",
              autoComplete: "tel",
            },
            {
              name: "email",
              label: "Mejl",
              type: "email",
              autoComplete: "email",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`${id}-${field.name}`}
                className="mb-2 block text-sm"
              >
                {field.label}
              </label>
              <input
                id={`${id}-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required={field.name === "email" || offer === "event"}
                maxLength={254}
                className={inputClass}
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label htmlFor={`${id}-message`} className="mb-2 block text-sm">
              Övriga önskemål (valfritt)
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={3}
              maxLength={4000}
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm text-[var(--foreground)]/75">
              Förfrågan är inte bindande. Vi återkommer med ett förslag.
            </p>
            <button
              disabled={status === "submitting"}
              type="submit"
              className="cta-sweep mt-5 inline-flex min-h-14 w-full items-center justify-center bg-[var(--brand-olive-900)] px-7 text-sm text-white disabled:cursor-wait disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting"
                ? "Skickar…"
                : offer === "partner"
                  ? "Skicka intresseanmälan"
                  : "Skicka eventförfrågan"}
            </button>
          </div>
        </>
      )}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="text-sm leading-relaxed sm:col-span-2"
      >
        {status === "success" && (
          <p className="border-l-2 border-[var(--brand-olive-900)] pl-4">
            Tack! Vi har tagit emot{" "}
            {offer === "partner"
              ? "er intresseanmälan för Business Partner"
              : "er eventförfrågan"}{" "}
            och hör av oss med ett förslag.
          </p>
        )}
        {status === "error" && (
          <p role="alert">
            Det gick inte att skicka just nu. Försök igen eller mejla{" "}
            <a href="mailto:hello@usegolf.se" className="underline">
              hello@usegolf.se
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
