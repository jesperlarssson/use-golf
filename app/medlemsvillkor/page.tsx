import { getMembershipPricing, formatAnnualPrice } from "@/lib/membershipPricing";
import { bookingLinks } from "@/lib/bookingLinks";
import { albaEnabled } from "@/lib/bookingLinks";
import type { Metadata } from "next";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import { defaultPricingData, dayLabels, type DayType, type PricingData } from "@/lib/prices";
import { getPricingData } from "@/sanity/lib/pricingQueries";

export default async function MedlemsvillkorPage() {
  const membershipPricing = await getMembershipPricing();
  // Hämta Pricing Data från Sanity, använd fallback om Sanity-data inte finns
  const sanityPricingData = await getPricingData();
  const pricingDataToUse: PricingData = sanityPricingData || defaultPricingData;
  return (
    <FullBleed>
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-36 sm:px-10 lg:pt-44">
        <h1 className="text-5xl font-normal tracking-[-.04em] sm:text-6xl">Medlemsvillkor</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">Här hittar du villkoren för medlemskap, bokningar och spel hos USE Golf.</p>
      </header>
      <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-10 lg:pb-28">
        <section id="villkor" className="border-t border-black/20 pt-10">
          <div className="space-y-12 text-sm leading-relaxed">

          {/* 1. Allmänt */}
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">1. Allmänt</h2>
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
          </div>

          {/* 2. Privat medlemskap */}
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">2. Medlemskap</h2>
            <Text>
              Privata medlemskap ger <strong>10 % rabatt på allt spel</strong> som bokas via {albaEnabled ? "Alba" : "Sweetspot"}. Rabatten gäller ej på events, mat eller dryck.
            </Text>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black/20 bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[#293329] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Typ</th>
                    <th className="px-3 py-2 text-left">Pris per år</th>
                    <th className="px-3 py-2 text-left">Förmåner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-black/20/40">
                    <td className="px-3 py-2 align-top font-semibold">Jr USE:R</td>
                    <td className="px-3 py-2 align-top">{membershipPricing.juniorAnnualPrice === null ? <a href={bookingLinks.membership} className="underline underline-offset-4">Se aktuellt pris i Alba</a> : formatAnnualPrice(membershipPricing.juniorAnnualPrice)}</td>
                    <td className="px-3 py-2 align-top">10 % rabatt på allt spel + 1 timmes spel inkluderad</td>
                  </tr>
                  <tr className="border-t border-black/20/40">
                    <td className="px-3 py-2 align-top font-semibold">USE:R</td>
                    <td className="px-3 py-2 align-top">{membershipPricing.userAnnualPrice === null ? <a href={bookingLinks.membership} className="underline underline-offset-4">Se aktuellt pris i Alba</a> : formatAnnualPrice(membershipPricing.userAnnualPrice)}</td>
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
          </div>

          {/* 3. Bagförvaring */}
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">3. Bagförvaring</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bagförvaring finns under vintersäsongen till en kostnad av <strong>700 kr per säsong</strong> för både seniorer och juniorer.</li>
              <li>Juniorer har förtur till bagförvaring, med platsreservationer under vintersäsongen.</li>
              <li>Förvaringen sker som en garderobslösning i ett låst utrymme med kameraövervakning.</li>
              <li>Du ansvarar själv för din utrustning.</li>
              <li>USE Golf ansvarar inte för förlorade eller skadade tillhörigheter.</li>
              <li>Maxantal: <strong>80 bagar totalt</strong>, varav <strong>50 reserveras för juniorer</strong>.</li>
            </ul>
            </div>
          </div>

          {/* 4. Företagsevent & Gruppspel */}
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">4. Företagsevent & Gruppspel</h2>
            <Text>Alla företagsevent bokas för <strong>hela lokalen (6 simulatorer)</strong> med en <strong>minsta speltid på 2 timmar</strong>. I bokningen ingår:</Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>Förberedelse och uppstart av eventet</li>
              <li>Hjälp med tävlingsupplägg, loggor och presentationer</li>
              <li>Uppvärmning och introduktion för spelare</li>
            </ul>
            <h3 className="text-xl font-normal tracking-tight">Priser (från)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black/20 bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[#293329] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Period</th>
                    <th className="px-3 py-2 text-left">Hela lokalen (minst 2 h)</th>
                    <th className="px-3 py-2 text-left">Extra timmar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-black/20/40">
                    <td className="px-3 py-2">Måndag–Tisdag</td>
                    <td className="px-3 py-2">från 16 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                  <tr className="border-t border-black/20/40">
                    <td className="px-3 py-2">Onsdag–Torsdag</td>
                    <td className="px-3 py-2">från 20 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                  <tr className="border-t border-black/20/40">
                    <td className="px-3 py-2">Fredag–Söndag</td>
                    <td className="px-3 py-2">från 24 000 kr</td>
                    <td className="px-3 py-2">3 600 kr/h</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-normal tracking-tight">Tillval</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Snackspaket – på förfrågan</li>
              <li>Matpaket – på förfrågan</li>
              <li>Dryck – enligt meny på plats</li>
            </ul>
            <Text className="mt-2">När ni bokar hela lokalen står vi för att sätta upp eventet, skapa tävlingar och koordinera upplevelsen för era spelare.</Text>
            <h3 className="text-xl font-normal tracking-tight">Bokningsinformation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Paketet måste bokas för hela sällskapet.</li>
              <li>Tillägg som snacks, mat och dryck beställs separat.</li>
              <li>För offert eller skräddarsytt upplägg, kontakta oss på: <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a>              </li>
            </ul>
            </div>
          </div>

          {/* 5. Prislista – Simulatorbokning */}
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">5. Prislista – Simulatorbokning</h2>
              <Text>Priserna nedan gäller under högsäsong. Aktuella priser för respektive tid ser du alltid i bokningen.</Text>

            {(Object.entries(pricingDataToUse) as [DayType, typeof pricingDataToUse[DayType]][]).map(([dayType, timeSlots]) => (
              <div key={dayType} className="space-y-2">
                <h3 className="text-xl font-normal tracking-tight">{dayLabels[dayType]}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-2 border-black/20 bg-[var(--brand-primary)] text-sm">
                    <thead>
                      <tr className="bg-[#293329] text-[var(--brand-primary)] uppercase tracking-wide">
                        <th className="px-3 py-2 text-left">Tid</th>
                        <th className="px-3 py-2 text-left">Pris</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((slot, index) => (
                        <tr key={index} className="border-t border-black/20/40">
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
          </div>

          {/* 6. Företagspaket & Partnernivåer */}
          <div>
            <div className="space-y-6">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">6. Partnernivåer</h2>
            <Text>
              USE Golf erbjuder företag möjligheten att synas, spela och nätverka på ett unikt sätt. Våra partnerpaket kombinerar exklusiv speltid i våra TrackMan-simulatorer med exponering, förmåner och skräddarsydda företagsupplevelser.
            </Text>

            <div className="space-y-4">
              <h3 className="text-xl font-normal tracking-tight">Partner</h3>
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


            </div>
          </div>
        </div>
      </section>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Medlemsvillkor",
  description: "Villkor för medlemskap, bokningar och spel hos USE Golf Göteborg.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;


