"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Page from "@/components/ui/Page";
import { Heading, Text } from "@/components/ui/Typography";
import SweetspotiFrame from "@/components/ui/SweetspotiFrame";

// Datum när bokningen öppnar: onsdag 19 november 2025 09:00
const BOOKING_OPEN_DATE = new Date("2025-11-19T08:00:00");

export default function SweetspotBookingPage() {
  const [now, setNow] = useState(new Date());
  const isBookingOpen = now >= BOOKING_OPEN_DATE;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  // Uppdatera tiden varje sekund för att kontrollera om bokningen har öppnat
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/pre-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Kunde inte skicka");
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Något gick fel");
    }
  };

  return (
    <Page variant="subpage">
      {isBookingOpen ? (
        <SweetspotiFrame className="min-h-[720px]" height={900} subPath="" />
      ) : (
        <Section className="py-16">
          <div className="space-y-8 text-center">
            <Heading as={2}>Inte riktigt än... Men snart</Heading>
            <Text className="text-lg uppercase tracking-wider opacity-80">
              get used to it
            </Text>

            {/* Email-notifiering */}
            <div className="pt-8 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="email-notify" className="block text-sm font-semibold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">
                  Bli notifierad när sweetspot öppnar
                </label>
                <div className="flex gap-2">
                  <input
                    id="email-notify"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din@email.se"
                    disabled={status === "submitting"}
                    className="flex-1 px-4 py-3 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-olive-900)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Skickar..." : status === "success" ? "Skickat!" : "Skicka"}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
                {status === "success" && (
                  <p className="text-sm text-[var(--brand-secondary)]">
                    Tack! Vi skickar ett meddelande när bokningen öppnar.
                  </p>
                )}
              </form>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-6 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider hover:opacity-90 transition"
              >
                Tillbaka till start
              </Link>
            </div>
          </div>
        </Section>
      )}
    </Page>
  );
}

