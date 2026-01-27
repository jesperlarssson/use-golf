import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
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
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/render2.PNG"
          alt="Bokning"
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
                  label="Bokning"
                  heading="Boka simulator"
                  description="Välj hur du vill boka – enstaka tider, stående tider eller hela lokalen för event. Boka direkt via vårt bokningssystem eller kontakta oss för stående tider och större event."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Bokningsalternativ med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Bokningsalternativ:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Enstaka tider</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Boka direkt via vårt bokningssystem.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Stående tider</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Fasta tider hela säsongen för ligor och kompisgäng.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Hela lokalen</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">6 simulatorer för kickoff, kundkväll eller teambuilding.</p>
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

          {/* Bokningsalternativ */}
          <Section className="py-20 -mt-10 sm:-mt-18 max-w-screen-2xl mx-auto">
            <FadeIn>
              <SectionHeader
                variant="small"
                heading="Bokningsalternativ"
                description="Välj det alternativ som passar dig bäst."
                align="left"
              />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
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
                      <a href="/bokning/staende-tid" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
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
                      <a href="/bokning/boka-lokalen" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Läs mer
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>
          {/* Lokala regler */}
          <Section className="py-20 -mt-10 sm:-mt-18 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <FadeIn>
              <div className="max-w-screen-2xl mx-auto space-y-6">
                <SectionHeader
                  label="Regler"
                  heading="Lokala regler"
                  description="För att alla ska kunna njuta av sin speltid."
                  align="left"
                  maxWidth="full"
                   variant="small"
                />
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Använd rena nya bollar</li>
                  <li>Bollar som är märkta med penna är förbjudet</li>
                  <li>Inga träpeggar, vi har peggar i alla box</li>
                  <li>Rena skor</li>
                  <li>Golfskor är ok</li>
                  <li>Respektera spelare runtomkring dig</li>
                </ul>
              </div>
            </FadeIn>
          </Section>

          {/* Prislista */}
          <Section className=" bg-[var(--brand-olive-700)]">
            <div className="space-y-8 max-w-screen-2xl mx-auto">
              <FadeIn>
                <SectionHeader
             
                  heading="Prislista"
                  description="Priser per timme för simulatorbokning."
                  align="left"
                  headingColor="var(--brand-primary)"
                  variant="small"
                />
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {(["monday-thursday", "friday-saturday", "sunday"] as DayType[])
                  .filter(dayType => pricingDataToUse[dayType])
                  .map((dayType, index) => (
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
          <Section className="py-20 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10 ">
            <div className="max-w-screen-2xl mx-auto space-y-8">
              <FadeIn>
                <SectionHeader
                  label="TrackMan"
                  heading="TrackMan-konto"
                  description="För att få ut det mesta av din upplevelse hos USE Golf behöver du ett eget TrackMan-konto. Det tar bara någon minut att skapa."
                  align="left"
                  maxWidth="full"
                />
              </FadeIn>

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
