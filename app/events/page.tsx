import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import Image from "next/image";
import { getAllEvents } from "@/sanity/lib/queries";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import EventsList from "@/components/ui/EventsList";

export default async function EventsPage() {
  // Sanity + lokala WhatsApp-event (mergeEventsWithLocal i getAllEvents), fallback till dummy vid tom/fel
  const allEvents = await getAllEvents();
  
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/people/1.png"
          alt="Event & Community"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-8 py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Vänster kolumn - SectionHeader */}
              <FadeIn>
                <SectionHeader
                  label="Event"
                  heading="Spela, häng, utvecklas"
                  description="Vi samlar golfare – nybörjare till single – för tävlingar, ligor och sociala kvällar. USE Golf är mer än simulatorer. Här blandas seriös golf med en avslappnad stämning."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Vi erbjuder med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Vi erbjuder:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">TrackMan Tournaments & Challenges</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Mäta dig mot andra och vinn grymma priser.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Företagsevent & kickoffs</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Golf + mat + dryck i en social miljö.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Sociala kvällar</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">After work med golf, musik och gemenskap.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Clinics och workshops</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Utveckla ditt spel med hjälp av experter.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">
          {/* Events med sökfunktion */}
          <Section className="py-20 -mt-10 sm:-mt-18 max-w-screen-2xl mx-auto">
            <Suspense fallback={<div className="text-sm opacity-70 py-8">Laddar events…</div>}>
              <EventsList events={allEvents} />
            </Suspense>
          </Section>

          {/* Boka hela lokalen - Special section */}
          <Section className="py-20 -mt-10 sm:-mt-18 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-screen-2xl mx-auto">
                <div className="space-y-6">
                  <SectionHeader
                    label="Företagsevent"
                    heading="Hyr hela lokalen"
                    description="Hyr hela lokalen (6 simulatorer) med kompisgänget, för kickoff, kundkväll eller teambuilding. Anpassade upplägg med tävlingar, mat och dryck – kontakta oss för offert."
                    align="left"
                    maxWidth="full"
                  />
                  <div className="pt-4">
                    <a
                      href="/foretag"
                      className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    >
                      Läs mer
                    </a>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 border-2 border-[var(--brand-secondary)] overflow-hidden">
                  <Image
                    src="/images/lokalen/3.png"
                    alt="Boka hela lokalen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </FadeIn>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Event",
  description: "Tävlingar, ligor och sociala kvällar hos USE Golf i Göteborg.",
};

export const revalidate = 60;
