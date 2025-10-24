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
            <Heading as={2}>Partner</Heading>
            <Lead className="text-[var(--brand-olive-900)]">Enkelt upplägg för företagsevent och gruppspel – med tydliga priser och smidiga tillval.</Lead>
            <Text>Vi hjälper er med ett avskalat och trevligt upplägg – perfekt för kickoff, kundkväll eller teambuilding.</Text>
          </div>
        </div>
      </Section>

      {/* Simulatorpaket – bild till vänster (1/3), innehåll till höger (2/3) 
      <Section className="-mt-16">
        <div className="mx-auto max-w-screen-2xl">
          <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
            <div className="grid grid-cols-1 md:grid-cols-3">

              <div className="relative h-48 md:h-full md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-[var(--brand-secondary)]">
                <Image src="/images/render2.PNG" alt="Simulatorpaket – Företagsevent & Gruppspel" fill className="object-cover brightness-90" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-horus text-2xl sm:text-3xl text-[var(--brand-primary)]">Simulatorpaket</h3>
                    <p className="text-sm text-[var(--brand-primary)]/80 uppercase tracking-wider">Företag & Gruppspel</p>
                  </div>
                </div>
              </div>
    
              <div className="p-6 space-y-4 md:col-span-2">
                <Text>Inkluderar: 2 h TrackMan-spel, uppstart & introduktion, tävlingsupplägg anpassat för sällskapet och klubbhyra.</Text>

                <div>
                  <Heading as={3} className="text-base sm:text-lg">Priser</Heading>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm md:text-base">
                      <thead>
                        <tr className="text-left border-b border-[var(--brand-secondary)]/40">
                          <th className="py-2 pr-4 font-semibold">Period</th>
                          <th className="py-2 pr-4 font-semibold">Simulatorpaket (2 h)</th>
                          <th className="py-2 pr-4 font-semibold">Extra timme</th>
                          <th className="py-2 pr-0 font-semibold">Hela lokalen / h</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[var(--brand-secondary)]/20">
                          <td className="py-2 pr-4">Måndag–Tisdag</td>
                          <td className="py-2 pr-4">1 300 kr</td>
                          <td className="py-2 pr-4">600 kr</td>
                          <td className="py-2 pr-0">8 000 kr</td>
                        </tr>
                        <tr className="border-b border-[var(--brand-secondary)]/20">
                          <td className="py-2 pr-4">Onsdag–Torsdag</td>
                          <td className="py-2 pr-4">1 500 kr</td>
                          <td className="py-2 pr-4">650 kr</td>
                          <td className="py-2 pr-0">10 000 kr</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Fredag–Söndag</td>
                          <td className="py-2 pr-4">1 800 kr</td>
                          <td className="py-2 pr-4">700 kr</td>
                          <td className="py-2 pr-0">12 000 kr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <Heading as={3} className="text-base sm:text-lg">Tillval</Heading>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Snackspaket – 110 kr/person</li>
                    <li>Matpaket – på förfrågan</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="?type=paket#forfragan" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Skicka förfrågan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Företagsevent – samlat kort */}
      <Section className="-mt-16">
        <div className="mx-auto max-w-screen-2xl">
          <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
            <div className="relative h-40 border-b-2 border-[var(--brand-secondary)]">
              <Image src="/images/render2.PNG" alt="Företagsevent" fill className="object-cover brightness-90" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <h3 className="font-horus text-3xl text-[var(--brand-primary)]">Företagsevent</h3>
                <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider">Boka hela lokalen</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Hela lokalen (6 simulatorer) – skräddarsytt upplägg</li>
                <li>Tävlingar, TrackMan Challenges och prisbord</li>
                <li>Mat och dryck som tillval</li>
              </ul>
              <Text className="mt-2">För fasta företagstider erbjuder vi offert – kontakta oss.</Text>
              <div className="mt-4">
                <a href="#forfragan" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Skicka förfrågan</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnernivåer */}
      <Section className="-mt-8">
        <div className="mx-auto max-w-screen-2xl space-y-4">
          <Heading as={3}>Partnernivåer</Heading>
          <Text>Syns, spelar och nätverkar med USE Golf. Välj nivå som passar er närvaro – från återkommande tider till hela anläggningen för event.</Text>
         
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
                  <li>Tillgång till fria låneklubbor för gäster</li>
                  <li>Kaffe, dryck och snacks vid varje speltillfälle</li>
                  <li>Möjlighet att lägga till matpaket som tillval</li>
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
      <Section id="forfragan" className="pb-16 -mt-10">
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
  description: "Simulatorpaket och partnernivåer – tydliga priser, enkla tillval och skräddarsydda företagsupplevelser.",
};


