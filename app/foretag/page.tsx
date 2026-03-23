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
import Link from "next/link";

export default function ForetagPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/lokalen/3.png"
          alt="Företag"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh] justify-center">
          <div className="w-full max-w-screen-2xl px-4 sm:px-8 py-12 sm:py-20 mx-auto">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition group mb-8"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Tillbaka till startsidan</span>
              </Link>
              <SectionHeader
                label="Företag"
                heading="Official Partner"
                description="Bli en del av USE Golf som Official Partner. Ett premiumkoncept för företag som vill skapa upplevelser, bygga relationer och få maximal synlighet – både digitalt och på plats."
                align="left"
                labelColor="rgb(255, 255, 255)"
                headingColor="rgb(255, 255, 255)"
                textColor="rgba(255, 255, 255, 0.9)"
                
              />
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">

          {/* Official Partner – Huvuderbjudande */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Vänster: Info */}
                <FadeIn>
                  <div className="space-y-8">
                    <div>
                      <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)] mb-2 block">
                        Official Partner
                      </span>
                      <Heading as={2} className="text-3xl md:text-4xl mb-4">
                        60 000 kr / år
                      </Heading>
                      <Text className="text-lg text-[var(--brand-olive-700)]">
                        Ett helhetskoncept för företag som vill synas, spela och nätverka hos USE Golf.
                      </Text>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Företagstävling</strong>
                          <p className="text-sm opacity-80">2 timmar med hela lokalen (6 simulatorer) – exklusivt för ert team.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">TrackMan-exponering</strong>
                          <p className="text-sm opacity-80">Ert företag exponeras i alla simulatorer under ert event.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Hole-in-One & branding</strong>
                          <p className="text-sm opacity-80">Möjlighet till unikt upplägg med Hole-in-One-priser och företagsbranding.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">20 timmars speltid / år</strong>
                          <p className="text-sm opacity-80">Utöver företagseventet – använd för kunder, personal eller nätverk.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Stående veckotid</strong>
                          <p className="text-sm opacity-80">Möjlighet att boka en stående tid varje vecka.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Låneklubbor</strong>
                          <p className="text-sm opacity-80">Tillgång till fria låneklubbor för gäster.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Mat & dryck</strong>
                          <p className="text-sm opacity-80">Möjlighet att lägga till matpaket som tillval.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--brand-secondary)] mt-1 text-lg font-bold">&bull;</span>
                        <div>
                          <strong className="block">Logo på partnerskärm</strong>
                          <p className="text-sm opacity-80">Ert varumärke synligt för alla besökare – hålpartner på anläggningen.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                {/* Höger: Bild + CTA */}
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    <div className="relative aspect-square border-4 border-[var(--brand-secondary)] overflow-hidden">
                      <Image
                        src="/images/lokalen/3.png"
                        alt="Official Partner hos USE Golf"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-8">
                        <p className="font-horus text-3xl md:text-4xl text-[var(--brand-primary)]">Official Partner</p>
                        <p className="text-[var(--brand-primary)]/80 mt-2">
                          Skapa upplevelser, bygg relationer och få maximal synlighet.
                        </p>
                      </div>
                    </div>
                    <a
                      href="#forfragan"
                      className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-6 py-4 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition text-lg"
                      data-cursor-target
                      data-cursor-padding="10"
                    >
                      Skicka förfrågan
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Företagsevent / Hyr hela lokalen */}
          <Section className="py-20  bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <FadeIn>
                  <div className="relative aspect-video border-4 border-[var(--brand-secondary)] overflow-hidden">
                    <Image
                      src="/images/lokalen/3.png"
                      alt="Företagsevent"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-primary)]/70 mb-2 block">
                      Företagsevent
                    </span>
                    <Heading as={2} className="text-3xl md:text-4xl text-[var(--brand-primary)]">
                      Hyr hela lokalen
                    </Heading>
                    <Text className="text-lg text-[var(--brand-primary)]/80">
                      Exklusiv tillgång till hela anläggningen med 6 simulatorer – perfekt för kickoff, kundkväll eller teambuilding. Vi tar hand om allt.
                    </Text>
                    <ul className="space-y-2 text-sm text-[var(--brand-primary)]/80">
                      <li>&bull; Moderna golfsimulatorer för tävling och socialt spel</li>
                      <li>&bull; Mat, fika och dryck efter era önskemål</li>
                      <li>&bull; Professionella tränare kan bokas</li>
                      <li>&bull; Alla kan delta oavsett golfvana – låneklubbor finns</li>
                      <li>&bull; Flexibla tider – dag, kväll eller helg</li>
                    </ul>
                    <a
                      href="#forfragan"
                      className="inline-flex items-center justify-center bg-[var(--brand-primary)] text-[var(--brand-olive-900)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    >
                      Skicka förfrågan
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Förfrågan */}
          <Section id="forfragan" className="py-20  pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className="max-w-screen-2xl mx-auto space-y-8">
              <FadeIn>
                <SectionHeader
                  label="Förfrågan"
                  heading="Skicka förfrågan"
                  description="Fyll i formuläret nedan så hör vi av oss med mer information om Official Partner eller företagsevent."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <Suspense fallback={<div className="text-sm opacity-70">Laddar formulär…</div>}>
                  <InquiryForm subject="Förfrågan Företag / Official Partner" />
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
  title: "Företag | USE Golf",
  description: "Bli Official Partner hos USE Golf – företagsevent, exponering och exklusiv tillgång. 60 000 kr/år.",
};
