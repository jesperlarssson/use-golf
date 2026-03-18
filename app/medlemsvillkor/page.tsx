import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { defaultPricingData, dayLabels, type DayType, type PricingData, defaultUserPasses, type UserPassType } from "@/lib/prices";
import { getUserPasses, getPricingData } from "@/sanity/lib/pricingQueries";

export default async function MedlemsvillkorPage() {
  // Hämta User Passes från Sanity, använd fallback om Sanity-data inte finns
  const sanityUserPasses = await getUserPasses();
  const userPassesToUse = sanityUserPasses || defaultUserPasses;
  
  // Hämta Pricing Data från Sanity, använd fallback om Sanity-data inte finns
  const sanityPricingData = await getPricingData();
  const pricingDataToUse: PricingData = sanityPricingData || defaultPricingData;
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Medlemsvillkor"
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
                  label="Villkor"
                  heading="Medlemsvillkor"
                  description="Villkor för medlemskap, spelpotter, priser och partnernivåer hos USE Golf Göteborg."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Info med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-logo text-xl md:text-2xl mb-2 text-[var(--brand-primary)]">USE Golf Göteborg</h3>
                      <Text className="text-[var(--brand-primary)] italic">Krogabäcksvägen 2, Nya Hovås</Text>
                    </div>
                    <div>
                      <Text className="text-sm text-[var(--brand-primary)]/80">
                        Detta dokument innehåller alla villkor och priser för medlemskap, spelpotter och partnernivåer.
                      </Text>
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
          <Section id="villkor" className="py-20 -mt-10 sm:-mt-18 pb-16">
            <div className="space-y-12 max-w-screen-2xl mx-auto">

          {/* 1. Allmänt */}
          <FadeIn>
            <div className="space-y-4">
              <SectionHeader
                heading="1. Allmänt"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <ul className="list-disc pl-5 space-y-2">
              <li>Medlemskapet är personligt och gäller endast den person som tecknat det.</li>
              <li>Bokning och spel får endast ske via medlemmens eget konto.</li>
              <li>Gäster får delta under medlemmens bokade timmar utan extra kostnad.</li>
              <li>Det är inte tillåtet att ta med egen mat eller dryck (undantaget vatten) i lokalerna.</li>
              <li>USE Golf har rätt att tillfälligt eller permanent avsluta medlemskap vid brott mot dessa villkor.</li>
              <li>Samtliga medlemskap är giltiga under tolv månader och nollställs inför ny säsong.</li>
              <li>All verksamhet sker på egen risk. USE Golf ansvarar inte för personliga tillhörigheter eller skador.</li>
            </ul>
            </div>
          </FadeIn>

          {/* 2. Privat medlemskap */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <SectionHeader
                heading="2. Medlemskap"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <Text>
              Privata medlemskap ger <strong>10 % rabatt på allt spel</strong> som bokas via Sweetspot. Rabatten gäller ej på events, mat eller dryck.
            </Text>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Typ</th>
                    <th className="px-3 py-2 text-left">Pris per år</th>
                    <th className="px-3 py-2 text-left">Förmåner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 align-top font-semibold">Junior</td>
                    <td className="px-3 py-2 align-top">400 kr</td>
                    <td className="px-3 py-2 align-top">10 % rabatt på allt spel + 1 timmes spel inkluderad</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 align-top font-semibold">Senior</td>
                    <td className="px-3 py-2 align-top">600 kr</td>
                    <td className="px-3 py-2 align-top">10 % rabatt på allt spel + 1 timmes spel inkluderad</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              <li>Giltigt i <strong>12 månader</strong> från det att det tecknas.</li>
              <li>Gäller endast på <strong>USE Golf Göteborg</strong>.</li>
              <li>Avbokning ska ske senast <strong>3 timmar före speltid</strong>.</li>
              <li>
                Vid bokad <strong>fast tid</strong> (t.ex. veckovis återkommande tid) gäller inte avbokningsregeln – denna tid debiteras oavsett närvaro. Undantag kan
                göras under lovveckor.
              </li>
            </ul>
            </div>
          </FadeIn>

          {/* 3. Bagförvaring */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <SectionHeader
                heading="3. Bagförvaring"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <ul className="list-disc pl-5 space-y-2">
              <li>Bagförvaring finns under vintersäsongen till en kostnad av <strong>700 kr per säsong</strong> för både seniorer och juniorer.</li>
              <li>Juniorer har förtur till bagförvaring, med platsreservationer under vintersäsongen.</li>
              <li>Förvaringen sker som en garderobslösning i ett låst utrymme med kameraövervakning.</li>
              <li>Du ansvarar själv för din utrustning.</li>
              <li>USE Golf ansvarar inte för förlorade eller skadade tillhörigheter.</li>
              <li>Maxantal: <strong>80 bagar totalt</strong>, varav <strong>50 reserveras för juniorer</strong>.</li>
            </ul>
            </div>
          </FadeIn>

          {/* 4. Företagsevent & Gruppspel */}
          <FadeIn delay={0.3}>
            <div className="space-y-4">
              <SectionHeader
                heading="4. Företagsevent & Gruppspel"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <Text>Alla företagsevent bokas för <strong>hela lokalen (6 simulatorer)</strong> med en <strong>minsta speltid på 2 timmar</strong>. I bokningen ingår:</Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>Förberedelse och uppstart av eventet</li>
              <li>Hjälp med tävlingsupplägg, loggor och presentationer</li>
              <li>Uppvärmning och introduktion för spelare</li>
            </ul>
            <Heading as={3}>Priser (från)</Heading>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Period</th>
                    <th className="px-3 py-2 text-left">Hela lokalen (minst 2 h)</th>
                    <th className="px-3 py-2 text-left">Extra timmar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Måndag–Tisdag</td>
                    <td className="px-3 py-2">från 16 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Onsdag–Torsdag</td>
                    <td className="px-3 py-2">från 20 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Fredag–Söndag</td>
                    <td className="px-3 py-2">från 24 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Heading as={3}>Tillval</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Snackspaket – på förfrågan</li>
              <li>Matpaket – på förfrågan</li>
              <li>Dryck – enligt meny på plats</li>
            </ul>
            <Text className="mt-2">När ni bokar hela lokalen står vi för att sätta upp eventet, skapa tävlingar och koordinera upplevelsen för era spelare.</Text>
            <Heading as={3}>Bokningsinformation</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Paketet måste bokas för hela sällskapet.</li>
              <li>Tillägg som snacks, mat och dryck beställs separat.</li>
              <li>För offert eller skräddarsytt upplägg, kontakta oss på: 📧 <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a>              </li>
            </ul>
            </div>
          </FadeIn>

          {/* 5. Prislista – Simulatorbokning */}
          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <SectionHeader
                heading="5. Prislista – Simulatorbokning"
                align="left"
                maxWidth="full"
                variant="small"
              />

            {(Object.entries(pricingDataToUse) as [DayType, typeof pricingDataToUse[DayType]][]).map(([dayType, timeSlots]) => (
              <div key={dayType} className="space-y-2">
                <Heading as={3}>{dayLabels[dayType]}</Heading>
                <div className="overflow-x-auto">
                  <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                    <thead>
                      <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                        <th className="px-3 py-2 text-left">Tid</th>
                        <th className="px-3 py-2 text-left">Pris</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((slot, index) => (
                        <tr key={index} className="border-t border-[var(--brand-secondary)]/40">
                          <td className="px-3 py-2">{slot.time}</td>
                          <td className="px-3 py-2">{slot.price} kr</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            </div>
          </FadeIn>

          {/* 6. Spelpass – Förbetalda spelpotter */}
          <FadeIn delay={0.5}>
            <div className="space-y-4">
              <SectionHeader
                heading="6. User Passes – Förbetalda spelpotter"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <Text>Tre nivåer av spelpass för dig som spelar ofta och vill få mer värde för pengarna.</Text>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Pass</th>
                    <th className="px-3 py-2 text-left">Insättning</th>
                    <th className="px-3 py-2 text-left">Spelvärde</th>
                    <th className="px-3 py-2 text-left">Bonus / Rabatt</th>
                  </tr>
                </thead>
                <tbody>
                  {(['small', 'medium', 'large'] as UserPassType[]).map((passType) => {
                    const pass = userPassesToUse[passType];
                    return (
                      <tr key={passType} className="border-t border-[var(--brand-secondary)]/40">
                        <td className="px-3 py-2 font-semibold">{pass.name} User</td>
                        <td className="px-3 py-2">{pass.price.toLocaleString('sv-SE')} kr</td>
                        <td className="px-3 py-2">{pass.playValue.toLocaleString('sv-SE')} kr</td>
                        <td className="px-3 py-2">+{pass.bonusPercent} %</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Heading as={3}>Villkor för spelpass</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Du behöver inte vara medlem för att kunna fylla och använda din spelpott.</li>
              <li>Gäller alla tider, alla dagar.</li>
              <li>Spelvärdet laddas på ditt konto i Sweetspot.</li>
              <li>Giltigt i <strong>12 månader</strong> från inköpsdatum.</li>
              <li>Ej personligt – kan användas för flera spelare på samma bokning.</li>
              <li>Kan <strong>inte</strong> kombineras med medlemsrabatten på 10 %.</li>
              <li>Vid stående bokningar under säsong måste samtliga spelare vara medlemmar.</li>
              <li>Spelpotten används som betalning för de bokade tiderna.</li>
              <li>De första <strong>två veckorna</strong> gäller ordinarie pris. Från och med <strong>tredje veckan</strong> tillkommer en <strong>bokningsavgift på 50 kr/h och simulator</strong> för stående tider.</li>
            </ul>
            </div>
          </FadeIn>

          {/* 7. Företagspaket & Partnernivåer */}
          <FadeIn delay={0.6}>
            <div className="space-y-6">
              <SectionHeader
                heading="7. Partnernivåer"
                align="left"
                maxWidth="full"
                variant="small"
              />
            <Text>
              USE Golf erbjuder företag möjligheten att synas, spela och nätverka på ett unikt sätt. Våra partnerpaket kombinerar exklusiv speltid i våra TrackMan-simulatorer med exponering, förmåner och skräddarsydda företagsupplevelser.
            </Text>

            <div className="space-y-4">
              <Heading as={3}>Partner</Heading>
              <Text><strong>Pris: 35 000 kr / år</strong> – Perfekt för företag som vill ha återkommande tider för kunder, personal eller nätverk.</Text>
              <ul className="list-disc pl-5 space-y-2">
                <li>30 timmars speltid per år</li>
                <li>Exponering av företagsnamn på vår partner-tavla i entrén</li>
                <li>Företagsnamn på hemsidan under våra partners</li>
                <li>2 bagar i förvaring</li>
                <li>Möjlighet att boka en stående tid varje vecka</li>
                <li>Kaffe, dryck och snacks vid varje speltillfälle</li>
              </ul>
              <Text>Ett paket för företag som vill synas och ha en fast närvaro på anläggningen.</Text>
            </div>

            <div className="space-y-4">
              <Heading as={3}>Official Partner</Heading>
              <Text><strong>Pris: 60 000 kr / år</strong> – För företag som vill ha en större närvaro, exponering och fler möjligheter hos USE Golf.</Text>
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
            </div>
            </div>
          </FadeIn>
        </div>
      </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Medlemsvillkor – MASTER DOKUMENT",
  description: "MASTER: Villkor för medlemskap, spelpotter, priser och partnernivåer hos USE Golf Göteborg.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;


