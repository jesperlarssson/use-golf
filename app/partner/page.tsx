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

export default function PartnerPage() {
  const boxClass =
    "border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden flex flex-col h-full";
  const boxImageClass = "relative h-48 border-b-2 border-[var(--brand-secondary)]";
  const boxContentClass = "p-6 space-y-4 flex-1 flex flex-col";
  const ctaClass =
    "inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition";

  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/render2.PNG"
          alt="Företag / Partner"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh] justify-center">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20 mx-auto">
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
                label="Företag / Partner"
                heading="Företagsevent, konferens & partner"
                description="Hyr hela lokalen för exklusiva event, boka konferens med golf som aktivitet – eller bli partner hos USE Golf. Vi tar hand om allt."
                align="left"
                labelColor="rgb(255, 255, 255)"
                headingColor="rgb(255, 255, 255)"
                textColor="rgba(255, 255, 255, 0.9)"
                maxWidth="full"
              />
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">
          {/* Fyra boxar: Hyr hela lokalen + Konferens överst, Partner + Official Partner under */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-screen-2xl mx-auto">
              {/* Rad 1: Hyr hela lokalen */}
              <FadeIn>
                <div className={boxClass}>
                  <div className={boxImageClass}>
                    <Image src="/images/render2.PNG" alt="Hyr hela lokalen" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-2xl sm:text-3xl md:text-4xl text-[var(--brand-primary)] text-center px-4">
                        Hyr hela lokalen
                      </h4>
                    </div>
                  </div>
                  <div className={boxContentClass}>
                    <Heading as={3} className="text-lg font-horus">
                      Hyr hela lokalen hos USE Golf
                    </Heading>
                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
                      <li>Exklusiv tillgång till hela anläggningen – en privat och personlig upplevelse</li>
                      <li>Ett perfekt val för företagsevent, kickoff, konferens och kundaktiviteter</li>
                      <li>Moderna golfsimulatorer anpassade för både tävlingsmoment och socialt spel</li>
                      <li>Stora, öppna ytor som bjuder in till mingel, umgänge och gemenskap</li>
                      <li>Möjlighet till scramble, tävlingsupplägg eller helt skräddarsydda aktiviteter</li>
                      <li>Mat, fika och dryck kan ordnas helt efter era önskemål</li>
                      <li>Professionella golftränare kan bokas som anpassar genomgång och träning efter gruppens nivå</li>
                      <li>Alltid personal på plats som tar hand om helheten, så ni kan fokusera på upplevelsen</li>
                      <li>En aktivitet där alla kan delta, oavsett tidigare golfvana</li>
                      <li>Flexibla tider – dag, kväll eller helg</li>
                    </ul>
                    <div className="pt-4">
                      <a href="?type=event#forfragan" className={ctaClass}>
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Rad 1: Konferens */}
              <FadeIn delay={0.1}>
                <div className={boxClass}>
                  <div className={boxImageClass}>
                    <Image src="/images/invigning/DSC06600.jpg" alt="Konferens" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-2xl sm:text-3xl md:text-4xl text-[var(--brand-primary)] text-center px-4">
                        Konferens
                      </h4>
                    </div>
                  </div>
                  <div className={boxContentClass}>
                    <Heading as={3} className="text-lg font-horus">
                      Konferens hos USE Golf
                    </Heading>
                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
                      <li>Konferens i moderna och unika lokaler som bryter av från det traditionella</li>
                      <li>Lunch inkluderad – smidigt och bekvämt för hela gruppen</li>
                      <li>Golf i simulatorer som aktivitet under valfri speltid</li>
                      <li>Golfklubbor finns på plats – alla kan delta direkt</li>
                      <li>Inspirerande introduktion till golfen för nybörjare</li>
                      <li>Möjlighet att boka utbildade tränare som leder gruppen genom spelets moment</li>
                      <li>En perfekt mix av fokus, energi och socialt umgänge</li>
                      <li>En konferens som stärker teamkänslan och skapar samtal även efteråt</li>
                    </ul>
                    <Text className="text-sm font-medium">
                      Vi tar hand om allt – skicka in en intresseanmälan så tar vi kontakt och sätter ihop en dag ni sent glömmer.
                    </Text>
                    <div className="pt-4">
                      <a href="?type=konferens#forfragan" className={ctaClass}>
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Rad 2: Partner */}
              <FadeIn delay={0.2}>
                <div className={boxClass}>
                  <div className={boxImageClass}>
                    <Image src="/images/baller2.png" alt="Partner" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Partner</h4>
                    </div>
                  </div>
                  <div className={boxContentClass}>
                    <Text className="text-lg font-semibold">Pris: 35 000 kr / år</Text>
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
                      <a href="?type=partner&level=Partner#forfragan" className={ctaClass}>
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Rad 2: Official Partner */}
              <FadeIn delay={0.3}>
                <div className={boxClass}>
                  <div className={boxImageClass}>
                    <Image src="/images/baller2-front.png" alt="Official Partner" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Official Partner</h4>
                    </div>
                  </div>
                  <div className={boxContentClass}>
                    <Text className="text-lg font-semibold">Pris: 60 000 kr / år</Text>
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
                      <a href="?type=partner&level=Official%20Partner#forfragan" className={ctaClass}>
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
                  description="Fyll i formuläret nedan så hör vi av oss med mer information. Välj ärende – hyr hela lokalen, konferens eller partnernivå."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <Suspense fallback={<div className="text-sm opacity-70">Laddar formulär…</div>}>
                  <InquiryForm subject="Förfrågan Företag / Partner" />
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
  title: "Företag / Partner | USE Golf",
  description: "Hyr hela lokalen, boka konferens eller bli partner. Företagsevent, kickoff och kundaktiviteter hos USE Golf Göteborg.",
};
