import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { defaultPricingData, dayLabels, type DayType, type PricingData } from "@/lib/prices";
import { getPricingData } from "@/sanity/lib/pricingQueries";

export const metadata: Metadata = {
  title: "Bokning",
  description: "Boka simulator, stående tider eller hela lokalen hos USE Golf.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

export default async function BookingPage() {
  // Hämta Pricing Data från Sanity, använd fallback om Sanity-data inte finns
  const sanityPricingData = await getPricingData();
  const pricingDataToUse: PricingData = sanityPricingData || defaultPricingData;
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="space-y-4 max-w-3xl">
              <Heading as={2}>Boka simulator</Heading>
              <Lead className="text-[var(--brand-olive-900)] text-lg">
                Välj hur du vill boka – enstaka tider, stående tider eller hela lokalen för event.
              </Lead>
              <Text>
                Boka direkt via vårt bokningssystem eller kontakta oss för stående tider och större event.
              </Text>
            </div>
          </Section>

          {/* Bokningsalternativ */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Boka simulator */}
              <FadeIn>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden h-full flex flex-col">
                  <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/render2.PNG" alt="Boka simulator" fill className="object-cover blur-sm scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-horus text-2xl sm:text-3xl text-[var(--brand-primary)]">Boka simulator</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <Text className="text-sm">
                      Boka enstaka tider direkt via vårt bokningssystem. Välj dag, tid och antal simulatorer.
                    </Text>
                    <div className="mt-auto">
                      <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Boka nu
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Stående tider */}
              <FadeIn delay={0.1}>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden h-full flex flex-col">
                  <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/club.png" alt="Stående tider" fill className="object-cover blur-sm scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-horus text-2xl sm:text-3xl text-[var(--brand-primary)]">Stående tider</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <Text className="text-sm">
                      Boka fasta tider hela säsongen och säkra din plats. Perfekt för ligor, företag eller kompisgäng.
                    </Text>
                    <div className="mt-auto">
                      <a href="/events/staende-tid" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Läs mer
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Boka hela lokalen */}
              <FadeIn delay={0.2}>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden h-full flex flex-col">
                  <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/render2.PNG" alt="Boka hela lokalen" fill className="object-cover blur-sm scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-horus text-2xl sm:text-3xl text-[var(--brand-primary)]">Boka hela lokalen</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <Text className="text-sm">
                      Hyr hela lokalen (6 simulatorer) för kickoff, kundkväll eller teambuilding. Anpassade upplägg med tävlingar, mat och dryck.
                    </Text>
                    <div className="mt-auto">
                      <a href="/events/boka-lokalen" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Läs mer
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>
          <Section className="-mt-10 sm:-mt-18">
  <div className="max-w-3xl space-y-4">
    <Heading as={2}>Lokala regler</Heading>
    <ul className="list-disc pl-5 space-y-1 text-sm">
      <li>Använd rena nya bollar</li>
      <li>Bollar som är märkta med penna är förbjudet</li>
      <li>Inga träpeggar, vi har peggar i alla box</li>
      <li>Rena skor</li>
      <li>Golfskor är ok</li>
      <li>Respektera spelare runtomkring dig</li>
    </ul>
  </div>
</Section>

          {/* Prislista */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="space-y-6">
              <div className="max-w-3xl">
                <Heading as={2}>Prislista</Heading>
                <Text className="mt-2">
                  Priser per timme för simulatorbokning. 
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Object.keys(pricingDataToUse) as DayType[]).map((dayType, index) => (
                  <FadeIn key={dayType} delay={index * 0.1}>
                    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                      <div className="bg-[var(--brand-secondary)] px-6 py-4">
                        <h3 className="font-horus text-xl text-[var(--brand-primary)]">
                          {dayLabels[dayType]}
                        </h3>
                      </div>
                      <div className="p-6 space-y-3">
                        {pricingDataToUse[dayType].map((slot, slotIndex) => (
                          <div
                            key={slotIndex}
                            className="flex justify-between items-center py-2 border-b border-[var(--brand-secondary)]/20 last:border-0"
                          >
                            <Text className="text-sm">{slot.time}</Text>
                            <Text className="font-semibold text-[var(--brand-secondary)]">
                              {slot.price} kr/h
                            </Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Section>

          {/* TrackMan-konto */}
          <Section className="-mt-10 sm:-mt-18 pb-16">
            <div className="max-w-3xl space-y-6">
              <div>
                <Heading as={2}>TrackMan-konto</Heading>
                <Text className="mt-2">
                  För att få ut det mesta av din upplevelse hos USE Golf behöver du ett eget TrackMan-konto. Det tar bara någon minut att skapa.
                </Text>
              </div>

              <div className="space-y-4">
                <div>
                  <Text className="text-sm">
                    <strong>1. Ladda ner appen</strong> – Sök efter TrackMan Golf (orange ikon med TrackMan-loggan) i App Store eller Google Play.
                  </Text>
                </div>

                <div>
                  <Text className="text-sm">
                    <strong>2. Skapa konto</strong> – Öppna appen och välj "Create Account". Fyll i namn, e-postadress och lösenord.
                  </Text>
                </div>

                <div>
                  <Text className="text-sm">
                    <strong>3. Verifiera kontot</strong> – Gå till din e-post och bekräfta registreringen via länken från TrackMan.
                  </Text>
                </div>

                <div>
                  <Text className="text-sm">
                    <strong>4. Logga in hos oss</strong> – När du står vid simulatorn öppna TrackMan-appen och välj "Scan to log in". Scanna QR-koden på TV-skärmen i ditt bås eller på dukens högra hörn.
                  </Text>
                </div>

                <div className="pt-2">
                  <Text className="text-sm opacity-80">
                    💡 <strong>Tips:</strong> Har du redan ett TrackMan-konto? Använd samma inloggning – all din data sparas automatiskt oavsett var du spelar.
                  </Text>
                </div>
              </div>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}
