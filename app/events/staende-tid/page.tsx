import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import InquiryForm from "@/components/ui/InquiryForm";
import Image from "next/image";
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
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
         
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Boka fasta tider hela säsongen och säkra din plats i simulatorn.
                </Lead>
                <Text>
                  För er som vill spela regelbundet och slippa stressa med bokningar, erbjuder vi stående tider under hela säsongen. Perfekt för ligor, företag eller kompisgäng. Ni väljer antal simulatorer, dagar och tider - vi reserverar platsen. Önskar ni specifika upplägg för tiden i form av ligaspel, tävlingar eller annat, kontakta oss så hjälper vi er att ordna den bästa upplevelsen.
                </Text>
              </div>
              <div>
                <div className="relative h-56 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/render2.PNG" alt="Stående tider" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Kalkylator */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="space-y-4">
              <Heading as={3}>Beräkna ditt pris</Heading>
              <Text className="text-sm text-[var(--brand-olive-900)] opacity-80">
                Välj antal simulatorer, tid och period för att få en uppskattning av kostnaden.
              </Text>
              <StaendeTidCalculator pricingData={pricingDataToUse} closures={closures} />
            </div>
          </Section>

         
          {/* Villkor */}
          <Section>
            <Heading as={3}>Villkor</Heading>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Den stående tiden gäller samma dag och tid varje vecka under perioden ovan.</li>
              <li>Missad tid kan inte flyttas eller återbetalas.</li>
              <li>Tiden är ej personlig – den kan användas av annan person i ditt sällskap.</li>
              <li>Vid helgdagar eller om anläggningen är stängd kompenseras motsvarande tillfälle vid ett senare datum.</li>
              <li>Vid längre driftavbrott kontaktas du av personal för ersättningstid.</li>
            </ul>
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

