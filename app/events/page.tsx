import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import Image from "next/image";
import { getAllEvents, EventDocument } from "@/sanity/lib/queries";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import EventsList from "@/components/ui/EventsList";

export default async function EventsPage() {
  // Använder helper-funktion från queries.ts som automatiskt hanterar dummy-data
  const sanityEvents = await getAllEvents();
  
  // Fallback events om Sanity är tom
  const defaultEvents: EventDocument[] = [
    {
      _id: "default-1",
      title: "2-manna scramble",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06519.jpg",
      imageAlt: "2-manna scramble",
      excerpt: "Lågtrösklig scrambletävling med attraktiva priser från sponsorer. **Ingen anmälningsavgift** – du betalar endast för bokad simulatorspelstid. Rekommenderad speltid **2 timmar**.",
      ctaHref: "/events/veckoscramble",
      ctaLabel: "Läs mer",
      category: "tavlingar",
      slug: "veckoscramble",
    },
    {
      _id: "default-2",
      title: "Pensionärsgolf",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06519.jpg",
      imageAlt: "Pensionärsgolf",
      excerpt: "Spela dagtid med **medlemsförmån** mellan kl. **09.00–15.00**. Möjlighet till stående tider, flexibelt upplägg och kaffe på plats.",
      ctaHref: "/pensionar",
      ctaLabel: "Läs mer",
      category: "erbjudanden",
      slug: "pensionarsgolf",
    },
    {
      _id: "default-3",
      title: "Tränare & Kurser",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06519.jpg",
      imageAlt: "Tränare & Kurser",
      excerpt: "Golfträning på alla nivåer med erfarna tränare. **Privata lektioner**, **gruppträning** och möjlighet till långsiktig utvecklingsplan.",
      ctaHref: "/events/tranare-kurser",
      ctaLabel: "Läs mer",
      category: "kurser",
      slug: "tranare-kurser",
      requiresInterestForm: true,
    },
    {
      _id: "default-4",
      title: "Onsdagsgolfen",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06600.jpg",
      imageAlt: "Onsdagsgolfen",
      excerpt: "Varje onsdag spelar vi en social tävling för max 24 medlemmar. Två starttider – **13.00–15.00** eller **17.00–19.00** – och fyra omväxlande format.",
      ctaHref: "https://book.sweetspot.io/clubs/use-golf/passes/3d4941fe-3d67-4e7b-9fd2-c9a4aee12b1c",
      ctaLabel: "Anmäl dig",
      category: "ligor",
      hasExternalLink: true,
      eventType: "recurring",
      recurringDay: "wednesday",
    },
    {
      _id: "default-5",
      title: "Juniorligan",
      subtitle: "Hösten",
      imageUrl: "/images/invigning/DSC06511.jpg",
      imageAlt: "Juniorligan Hösten",
      excerpt: "Start **18 november**. 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad **1 250 kr** per person. Medlemskap **Junior User** krävs.",
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
      category: "ligor",
      slug: "juniorligan",
    },
    {
      _id: "default-6",
      title: "Friday Scratch Scramble",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06527.jpg",
      imageAlt: "Friday Scratch Scramble",
      excerpt: "Varje fredag kör vi en scratch scramble – perfekt för att avsluta veckan med en rolig tävling bland vänner. **Ingen anmälningsavgift** – du betalar bara din simulatortid.",
      ctaHref: "/events/friday-scratch-scramble",
      ctaLabel: "Läs mer",
      category: "tavlingar",
      slug: "friday-scratch-scramble",
      eventType: "recurring",
      recurringDay: "friday",
    },
    {
      _id: "default-7",
      title: "Ladies Tuesday",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06673.jpg",
      imageAlt: "Ladies Tuesday",
      excerpt: "Tisdagar tillägnade damgolf – oavsett om du är nybörjare eller van spelare. **Träning, tävling och gemenskap** i en trygg och inspirerande miljö.",
      ctaHref: "/events/ladies-tuesday",
      ctaLabel: "Läs mer",
      category: "erbjudanden",
      slug: "ladies-tuesday",
      requiresInterestForm: true,
      eventType: "recurring",
      recurringDay: "tuesday",
    },
    {
      _id: "default-8",
      title: "Simulator Scramble",
      subtitle: "Oktober – Mars",
      imageUrl: "/images/invigning/DSC06519.jpg",
      imageAlt: "Simulator Scramble",
      excerpt: "Säsongens scrambletävling som pågår **oktober till mars**. Boka simulator, spela tävlingen direkt och jämför ditt resultat med andra lag under hela säsongen.",
      ctaHref: "/events/simulator-scramble",
      ctaLabel: "Läs mer",
      category: "tavlingar",
      slug: "simulator-scramble",
      eventType: "single",
      eventDate: "2025-10-01T00:00:00Z",
      eventEndDate: "2026-03-31T00:00:00Z",
    },
    {
      _id: "default-9",
      title: "Damer",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06673.jpg",
      imageAlt: "Damer",
      excerpt: "Nybörjarkurser för damer och damliga. Steget in i golfen ska vara **enkelt, tryggt och roligt**. Inga förkunskaper krävs.",
      ctaHref: "/events/damer",
      ctaLabel: "Läs mer",
      category: "erbjudanden",
      slug: "damer",
      requiresInterestForm: true,
    },
  ];
  
  const allEvents = sanityEvents.length > 0 ? sanityEvents : defaultEvents;
  
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Event & Community"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Vänster kolumn - SectionHeader */}
              <FadeIn>
                <SectionHeader
                  label="Event & Community"
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
                    heading="Boka hela lokalen"
                    description="Hyr hela lokalen (6 simulatorer) med kompisgänget, för kickoff, kundkväll eller teambuilding. Anpassade upplägg med tävlingar, mat och dryck – kontakta oss för offert."
                    align="left"
                    maxWidth="full"
                  />
                  <div className="pt-4">
                    <a
                      href="/bokning/boka-lokalen"
                      className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    >
                      Läs mer 
                    </a>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 border-2 border-[var(--brand-secondary)] overflow-hidden">
                  <Image
                    src="/images/render2.PNG"
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
  title: "Event & Community",
  description: "Tävlingar, ligor och sociala kvällar hos USE Golf i Göteborg.",
};

export const revalidate = 60;
