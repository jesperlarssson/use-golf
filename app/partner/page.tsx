import type { Metadata } from "next";
import { Suspense } from "react";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import InquiryForm from "@/components/ui/InquiryForm";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ForetagseventPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/render2.PNG"
          alt="Partner"
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
                  label="Partner"
                  heading="Partnernivåer"
                  description="Syns, spela och nätverka med USE Golf. Välj nivå som passar er närvaro, från återkommande tider till hela anläggningen för event. Vi erbjuder två partnernivåer för företag som vill ha en fast närvaro och exponering hos USE Golf."
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
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Varför bli partner?</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Synlighet</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Exponering på partner-tavla och hemsida.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Återkommande tider</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Möjlighet att boka stående tider varje vecka.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Nätverkande</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Perfekt för kunder, personal eller nätverk.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Företagsevent</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Möjlighet till exklusiva event med hela lokalen.</p>
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

          {/* Partnernivåer */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-screen-2xl mx-auto">
              {/* Partner */}
              <FadeIn>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/baller2.png" alt="Partner" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Partner</h4>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <Text className="text-lg font-semibold">Pris: 35 000 kr / år</Text>
                    </div>
                    <Text className="text-sm">Perfekt för företag som vill ha återkommande tider för kunder, personal eller nätverk.</Text>
                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
                      <li>30 timmars speltid per år</li>
                      <li>Exponering av företagsnamn på vår partner-tavla i entrén</li>
                      <li>Företagsnamn på hemsidan under våra partners</li>
                      <li>2 bagar i förvaring</li>
                      <li>Möjlighet att boka en stående tid varje vecka</li>
                      <li>Kaffe, dryck och snacks vid varje speltillfälle</li>
                    </ul>
                    <Text className="text-sm">Ett paket för företag som vill synas och ha en fast närvaro på anläggningen.</Text>
                    <div className="pt-4">
                      <a href="?type=partner&level=Partner#forfragan" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Official Partner */}
              <FadeIn delay={0.1}>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/baller2-front.png" alt="Official Partner" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Official Partner</h4>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <Text className="text-lg font-semibold">Pris: 60 000 kr / år</Text>
                    </div>
                    <Text className="text-sm">För företag som vill ha en större närvaro, exponering och fler möjligheter hos USE Golf.</Text>
                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
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
                    <Text className="text-sm">Ett premiumkoncept för företag som vill skapa upplevelser, bygga relationer och få maximal synlighet – både digitalt och på plats.</Text>
                    <div className="pt-4">
                      <a href="?type=partner&level=Official%20Partner#forfragan" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>

          {/* Förfrågan */}
          <Section id="forfragan" className="py-20 -mt-10 sm:-mt-18 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className="max-w-screen-2xl mx-auto space-y-8">
              <FadeIn>
                <SectionHeader
                  label="Förfrågan"
                  heading="Skicka förfrågan"
                  description="Fyll i formuläret nedan så hör vi av oss med mer information om våra partnernivåer."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <Suspense fallback={<div className="text-sm opacity-70">Laddar formulär…</div>}>
                  <InquiryForm subject="Förfrågan Partner" defaultType="partner" />
                </Suspense>
              </FadeIn>
            </div>
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Partner",
  description: "Partnernivåer för företag – syns, spelar och nätverkar med USE Golf. Välj nivå som passar er närvaro.",
};


