import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import BokaLokalenCalculator from "@/components/ui/BokaLokalenCalculator";
import Image from "next/image";
import { getClosures, getVenueBookingPricing } from "@/sanity/lib/pricingQueries";

export default async function BokaLokalenPage() {
  // Hämta stängningsdatum från Sanity
  const closures = await getClosures();
  
  // Hämta venue booking pricing från Sanity
  const venuePricing = await getVenueBookingPricing();
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Boka hela lokalen för en exklusiv kväll med golf, mat och gemenskap.
                </Lead>
                <Text>
                  Samla kollegor, kunder eller samarbetspartners för en oförglömlig kväll på USE Golf. Ni får hela lokalen för er själva – sex TrackMan-simulatorer, lounge, café och musik. Perfekt för after work, kundevent eller en intern tävling.
                </Text>
              </div>
              <div>
                <div className="relative h-64 lg:h-80 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/wall.png" alt="USE Golf lokalen" fill className="object-cover" />
                </div>
              </div>
            </div>
          </Section>

          {/* Take over */}
          <Section className=" -mt-16 sm:-mt-24">
            <div className="space-y-6 max-w-3xl">
              <div>
                <div className="space-y-4">
                  <div>
                    <Heading as={3}>Take over</Heading>
                  </div>
                  <Text>
                    En tillfälle för att få ut så mycket som möjligt av vår upplevelse. Vi hjälper er att ta fram det perfekta upplägget. Mat och dryck enligt önskemål.
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Heading as={4} className="text-lg font-semibold text-[var(--brand-secondary)]">Ingår i paketet:</Heading>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Exklusiv tillgång till hela lokalen i minst 2 timmar</li>
                    <li>6 TrackMan-simulatorer för spel, tävling eller fri träning</li>
                    <li>Möjlighet att lägga till mat, dryck och tävlingsupplägg</li>
                    <li>Personal på plats under hela eventet</li>
                    <li>Förslag på upplägg, spelform och priser ingår</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <Heading as={4} className="text-lg font-semibold text-[var(--brand-secondary)]">Tillval:</Heading>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Förtäring (t.ex. wraps, dryck)</li>
                    <li>Tävling & prisbord</li>
                    <li>Företagsprofilering i simulatorer eller lokalen</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Estimera Pris och förfrågan */}
          <Section className="pt-8 pb-16">
            <Heading as={3} className="mb-6">Estimera Pris och förfrågan</Heading>
            <BokaLokalenCalculator closures={closures} venuePricing={venuePricing} />
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

