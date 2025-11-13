import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import InquiryForm from "@/components/ui/InquiryForm";
import Image from "next/image";

export default function ForetagseventPage() {
  return (
    <Page>
      <Section className="pt-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4 max-w-3xl">
            <Heading as={2}>Partnernivåer</Heading>
            <Lead className="text-[var(--brand-olive-900)]">Syns, spela och nätverka med USE Golf. Välj nivå som passar er närvaro, från återkommande tider till hela anläggningen för event.</Lead>
            <Text>Vi erbjuder två partnernivåer för företag som vill ha en fast närvaro och exponering hos USE Golf.</Text>
          </div>
        </div>
      </Section>

      {/* Partnernivåer */}
      <Section className="-mt-10 sm:-mt-18">
        <div className="mx-auto max-w-screen-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Partner */}
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden">
              <div className="relative h-32 border-b-2 border-[var(--brand-secondary)]">
                <Image src="/images/baller2.png" alt="Partner" fill className="object-cover brightness-90" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="font-horus text-2xl text-[var(--brand-primary)]">Partner</h4>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <Text><strong>Pris: 35 000 kr / år</strong></Text>
                <Text>Perfekt för företag som vill ha återkommande tider för kunder, personal eller nätverk.</Text>
                <ul className="list-disc pl-5 space-y-2">
                  <li>30 timmars speltid per år</li>
                  <li>Exponering av företagsnamn på vår partner-tavla i entrén</li>
                  <li>Företagsnamn på hemsidan under våra partners</li>
                  <li>2 bagar i förvaring</li>
                  <li>Möjlighet att boka en stående tid varje vecka</li>
                  <li>Kaffe, dryck och snacks vid varje speltillfälle</li>
                </ul>
                <Text>Ett paket för företag som vill synas och ha en fast närvaro på anläggningen.</Text>
                <div className="flex flex-wrap gap-3">
                  <a href="?type=partner&level=Partner#forfragan" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">Skicka förfrågan</a>
                </div>
              </div>
            </div>
            {/* Official Partner */}
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden">
              <div className="relative h-32 border-b-2 border-[var(--brand-secondary)]">
                <Image src="/images/baller2-front.png" alt="Official Partner" fill className="object-cover brightness-90" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="font-horus text-2xl text-[var(--brand-primary)]">Official Partner</h4>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <Text><strong>Pris: 60 000 kr / år</strong></Text>
                <Text>För företag som vill ha en större närvaro, exponering och fler möjligheter hos USE Golf.</Text>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Företagstävling med hela lokalen i 2 timmar (6 simulatorer)</li>
                  <li>TrackMan-exponering i alla simulatorer under eventet</li>
                  <li>Möjlighet till unikt upplägg med Hole-in-One-priser och företagsbranding</li>
                  <li>40 timmars speltid per år utöver företagseventet</li>
                  <li>2 bagar i förvaring</li>
                  <li>Möjlighet att boka en stående tid varje vecka</li>
                  <li>Tillgång till fria låneklubbor för gäster</li>
                  <li>Kaffe, dryck och snacks vid varje speltillfälle</li>
                  <li>Möjlighet att lägga till matpaket som tillval</li>
                  <li>Företagets logo på partnerskärm</li>
                </ul>
                <Text>Ett premiumkoncept för företag som vill skapa upplevelser, bygga relationer och få maximal synlighet – både digitalt och på plats.</Text>
                <div className="flex flex-wrap gap-3">
                  <a href="?type=partner&level=Official%20Partner#forfragan" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">Skicka förfrågan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Förfrågan */}
      <Section id="forfragan" className="pb-16 pt-2 -mt-10 sm:-mt-18">
        <div className="mx-auto max-w-screen-2xl">
          <Heading as={3} className="mb-4">Skicka förfrågan</Heading>
          <Suspense fallback={<div className="text-sm opacity-70">Laddar formulär…</div>}>
            <InquiryForm subject="Förfrågan Partner" defaultType="partner" />
          </Suspense>
        </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Partner",
  description: "Partnernivåer för företag – syns, spelar och nätverkar med USE Golf. Välj nivå som passar er närvaro.",
};


