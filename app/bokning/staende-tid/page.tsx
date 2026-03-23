import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import StaendeTidCalculator from "@/components/ui/StaendeTidCalculator";
import { getPricingData, getClosures } from "@/sanity/lib/pricingQueries";
import { defaultPricingData, type PricingData } from "@/lib/prices";

export default async function StaendeTidPage() {
  // Hämta Pricing Data från Sanity, använd fallback om Sanity-data inte finns
  const sanityPricingData = await getPricingData();
  const pricingDataToUse: PricingData = sanityPricingData || defaultPricingData;

  // Hämta stängningsdatum från Sanity
  const closures = await getClosures();
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/swing/3.png"
          alt="Stående tider"
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
                  label="Bokning"
                  heading="Stående tider"
                  description="För er som vill spela regelbundet och slippa stressa med bokningar, erbjuder vi stående tider under hela säsongen. Perfekt för ligor, företag eller kompisgäng. Ni väljer antal simulatorer, dagar och tider - vi reserverar platsen."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>

              {/* Höger kolumn - Fördelar med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Varför stående tider?</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Säkra din plats</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Samma dag och tid varje vecka under hela säsongen.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Perfekt för ligor</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Idealisk för ligor, företag eller kompisgäng.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Flexibelt upplägg</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Ni väljer antal simulatorer, dagar och tider.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Anpassat innehåll</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Vi hjälper er att ordna ligaspel, tävlingar eller annat.</p>
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

          {/* Kalkylator */}
          <Section className="py-20 -mt-10 sm:-mt-18 max-w-screen-2xl mx-auto">
            <div className="space-y-8">
              <FadeIn>
                <SectionHeader

                  heading="Beräkna ditt pris"
                  description="Välj antal simulatorer, tid och period för att få en uppskattning av kostnaden."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <StaendeTidCalculator pricingData={pricingDataToUse} closures={closures} />
              </FadeIn>
            </div>
          </Section>

          {/* Villkor */}
          <Section className="py-20  pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className="space-y-8 max-w-screen-2xl mx-auto">
              <FadeIn>
                <SectionHeader

                  heading="Villkor"
                  description="Viktig information om stående tider."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Den stående tiden gäller samma dag och tid varje vecka under perioden ovan.</li>
                  <li>Missad tid kan inte flyttas eller återbetalas.</li>
                  <li>Tiden är ej personlig – den kan användas av annan person i ditt sällskap.</li>
                  <li>Vid helgdagar eller om anläggningen är stängd kompenseras motsvarande tillfälle vid ett senare datum.</li>
                  <li>Vid längre driftavbrott kontaktas du av personal för ersättningstid.</li>
                </ul>
              </FadeIn>
            </div>
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Stående tider – Boka fasta tider",
  description: "Boka fasta tider hela säsongen och säkra din plats i simulatorn. Perfekt för ligor, företag eller kompisgäng.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

