import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import BokaLokalenCalculator from "@/components/ui/BokaLokalenCalculator";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { getClosures, getVenueBookingPricing } from "@/sanity/lib/pricingQueries";

export default async function BokaLokalenPage() {
  // Hämta stängningsdatum från Sanity
  const closures = await getClosures();
  
  // Hämta venue booking pricing från Sanity
  const venuePricing = await getVenueBookingPricing();
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/render2.PNG"
          alt="Boka hela lokalen"
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
                  label="Företagsevent"
                  heading="Boka hela lokalen"
                  description="Samla kollegor, kunder eller samarbetspartners för en oförglömlig kväll på USE Golf. Ni får hela lokalen för er själva – sex TrackMan-simulatorer, lounge, café och musik. Perfekt för after work, kundevent eller en intern tävling."
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
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Varför boka hela lokalen?</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Exklusiv tillgång</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Hela lokalen för er själva i minst 2 timmar.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">6 TrackMan-simulatorer</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">För spel, tävling eller fri träning.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Anpassat upplägg</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Mat, dryck och tävlingsupplägg enligt önskemål.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Personal på plats</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Vi hjälper er att ta fram det perfekta upplägget.</p>
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

          {/* Take over */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="space-y-8 max-w-screen-2xl mx-auto">
              <FadeIn>
                <SectionHeader
                  label="Paket"
                  heading="Take over"
                  description="En tillfälle för att få ut så mycket som möjligt av vår upplevelse. Vi hjälper er att ta fram det perfekta upplägget. Mat och dryck enligt önskemål."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                    <Heading as={4} className="text-lg font-semibold text-[var(--brand-secondary)]">Ingår i paketet:</Heading>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Exklusiv tillgång till hela lokalen i minst 2 timmar</li>
                      <li>6 TrackMan-simulatorer för spel, tävling eller fri träning</li>
                      <li>Möjlighet att lägga till mat, dryck och tävlingsupplägg</li>
                      <li>Personal på plats under hela eventet</li>
                      <li>Förslag på upplägg, spelform och priser ingår</li>
                    </ul>
                  </div>
                  <div className="space-y-4 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                    <Heading as={4} className="text-lg font-semibold text-[var(--brand-secondary)]">Tillval:</Heading>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Förtäring (t.ex. wraps, dryck)</li>
                      <li>Tävling & prisbord</li>
                      <li>Företagsprofilering i simulatorer eller lokalen</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>

          {/* Estimera Pris och förfrågan */}
          <Section className="py-20 -mt-10 sm:-mt-18 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className=" space-y-8 max-w-screen-2xl mx-auto">
              <FadeIn>
                <SectionHeader
                  label="Förfrågan"
                  heading="Estimera pris och förfrågan"
                  description="Använd kalkylatorn nedan för att få en uppskattning av kostnaden för ditt event."
                  align="left"
                  maxWidth="full"
                  variant="small"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <BokaLokalenCalculator closures={closures} venuePricing={venuePricing} />
              </FadeIn>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "USE Golf Take over – Boka hela lokalen",
  description: "Boka hela lokalen för en exklusiv kväll med golf, mat och gemenskap. Sex TrackMan-simulatorer, lounge, café och musik. Perfekt för after work, kundevent eller intern tävling.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

