import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text, Lead } from "@/components/ui/Typography";

export default function MedlemsvillkorPage() {
  return (
    <Page variant="subpage">
      <Section id="villkor" className="pt-8">
        <div className="space-y-8 max-w-5xl">
          <Heading as={2}>USE Golf Göteborg – Medlemskap, Partnerportal, Simulatorpaket & Prislista</Heading>
          <Lead className="italic">Krogabäcksvägen 2, Nya Hovås</Lead>

          {/* 1. Allmänt */}
          <div className="space-y-4">
            <Heading as={2}>1. Allmänt</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Medlemskapet är personligt och gäller endast den person som tecknat det.</li>
              <li>Bokning och spel får endast ske via medlemmens eget konto.</li>
              <li>Gäster får delta under medlemmens bokade timmar utan extra kostnad.</li>
              <li>Det är inte tillåtet att ta med egen mat eller dryck (undantaget vatten) i lokalerna.</li>
              <li>USE Golf har rätt att tillfälligt eller permanent avsluta medlemskap vid brott mot dessa villkor.</li>
              <li>Samtliga medlemskap är giltiga under <strong>12 månader</strong>, då de nollställs inför ny säsong.</li>
              <li>All verksamhet sker på egen risk. USE Golf ansvarar inte för personliga tillhörigheter eller skador.</li>
            </ul>
          </div>

          {/* 2. Privat medlemskap */}
          <div className="space-y-4">
            <Heading as={2}>2. Privat medlemskap</Heading>
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
              <li>Giltigt i <strong>12 månader</strong>.</li>
              <li>Gäller endast på <strong>USE Golf Göteborg</strong>.</li>
              <li>Avbokning ska ske senast <strong>3 timmar före speltid</strong>.</li>
              <li>
                Vid bokad <strong>fast tid</strong> (t.ex. veckovis återkommande tid) gäller inte avbokningsregeln – denna tid debiteras oavsett närvaro. Undantag kan
                göras under lovveckor.
              </li>
            </ul>
          </div>

          {/* 3. Företagsmedlemskap / Partnerportal */}
          <div className="space-y-6">
            <Heading as={2}>3. Företagsmedlemskap / Partnerportal</Heading>
            <Text>
              Företagsmedlemskap hanteras via vår <strong>partnerportal</strong> och är utformat för företag, nätverk eller grupper som vill spela regelbundet, boka
              simulatorer och arrangera företagsaktiviteter.
            </Text>

            {/* 3.1 Företagspott */}
            <div className="space-y-3">
              <Heading as={3}>3.1 Företagspott</Heading>
              <Text>Företaget laddar sitt konto med valfritt belopp och får <strong>10 % extra i spelvärde</strong>.</Text>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                  <thead>
                    <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                      <th className="px-3 py-2 text-left">Laddning</th>
                      <th className="px-3 py-2 text-left">Bonus</th>
                      <th className="px-3 py-2 text-left">Totalt spelvärde</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--brand-secondary)]/40">
                      <td className="px-3 py-2">5 000 kr</td>
                      <td className="px-3 py-2">+500 kr</td>
                      <td className="px-3 py-2">5 500 kr</td>
                    </tr>
                    <tr className="border-t border-[var(--brand-secondary)]/40">
                      <td className="px-3 py-2">10 000 kr</td>
                      <td className="px-3 py-2">+1 000 kr</td>
                      <td className="px-3 py-2">11 000 kr</td>
                    </tr>
                    <tr className="border-t border-[var(--brand-secondary)]/40">
                      <td className="px-3 py-2">15 000 kr</td>
                      <td className="px-3 py-2">+1 500 kr</td>
                      <td className="px-3 py-2">16 500 kr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Spelvärdet gäller för bokningar, simulatorer och löpande spel.</li>
                <li>Potten gäller till och med <strong>1 september varje år</strong>.</li>
                <li>Ingen rabatt utgår vid bokning – bonusen ges som extra värde vid laddning.</li>
                <li>Mat och dryck faktureras separat.</li>
              </ul>
            </div>

            {/* 3.2 Anslutna spelare */}
            <div className="space-y-3">
              <Heading as={3}>3.2 Anslutna spelare</Heading>
              <ul className="list-disc pl-5 space-y-2">
                <li>Varje person som kopplas till företagets konto kostar <strong>250 kr/person och säsong</strong>.</li>
                <li>Varje ansluten spelare får en egen inloggning kopplad till företagets pott.</li>
                <li>Bokningar dras automatiskt från företagets saldo.</li>
              </ul>
            </div>

            {/* 3.3 Event och aktiviteter */}
            <div className="space-y-3">
              <Heading as={3}>3.3 Event och aktiviteter</Heading>
              <ul className="list-disc pl-5 space-y-2">
                <li>Företag kan boka egna events, ligaspel, after work eller tävlingar via partnerportalen.</li>
                <li>Enstaka företagsevent bokas separat och offereras av USE Golf.</li>
                <li>Event ingår inte i bonuspotten.</li>
              </ul>
            </div>

            {/* 3.4 Partnerportal & kommunikation */}
            <div className="space-y-3">
              <Heading as={3}>3.4 Partnerportal & kommunikation</Heading>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Alla företag registreras i vår partnerportal och får:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Nyhetsbrev med erbjudanden och nyheter.</li>
                    <li>Tillgång till specialpaket och nätverksträffar.</li>
                  </ul>
                </li>
                <li>Fakturering sker via <strong>USE Golf Europe AB</strong>.</li>
              </ul>
            </div>
          </div>

          {/* 4. Lektioner & kurser */}
          <div className="space-y-4">
            <Heading as={2}>4. Lektioner & kurser</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lektioner och paket gäller i <strong>12 månader från köp</strong>.</li>
              <li>Avbokning ska ske minst <strong>24 timmar innan bokad tid</strong>.</li>
              <li>Ytterligare information om kurser och juniorträning publiceras löpande.</li>
            </ul>
          </div>

          {/* 5. Bagförvaring */}
          <div className="space-y-4">
            <Heading as={2}>5. Bagförvaring</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bagförvaring finns under vintersäsongen till en kostnad av <strong>500 kr per säsong</strong> för seniorer.</li>
              <li>Juniorer har förtur till bagförvaring till priset av <strong>700 kr per säsong</strong>.</li>
              <li>Förvaring sker i låst utrymme med kameraövervakning.</li>
              <li>Förvaringen fungerar som en garderob – du ansvarar själv för din utrustning.</li>
              <li>USE Golf ansvarar inte för förlorade eller skadade tillhörigheter.</li>
              <li>Maxantal: <strong>80 baggar totalt</strong>, varav <strong>50 reserveras för juniorer</strong>.</li>
            </ul>
          </div>

          {/* 6. Simulatorpaket – Företagsevent & Gruppspel */}
          <div className="space-y-4">
            <Heading as={2}>6. Simulatorpaket – Företagsevent & Gruppspel</Heading>
            <Text>Alla paket inkluderar:</Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>2 timmar spel i våra TrackMan-simulatorer</li>
              <li>Hjälp med uppstart och introduktion</li>
              <li>Tävlingsupplägg anpassat för sällskapet</li>
              <li>Klubbhyra ingår</li>
            </ul>

            <Heading as={3}>Priser</Heading>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Period</th>
                    <th className="px-3 py-2 text-left">Simulatorpaket (2 h)</th>
                    <th className="px-3 py-2 text-left">Extra timme</th>
                    <th className="px-3 py-2 text-left">Hela lokalen / h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Måndag–Tisdag</td>
                    <td className="px-3 py-2">1 200 kr</td>
                    <td className="px-3 py-2">600 kr</td>
                    <td className="px-3 py-2">6 000 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Onsdag–Torsdag</td>
                    <td className="px-3 py-2">1 400 kr</td>
                    <td className="px-3 py-2">600 kr</td>
                    <td className="px-3 py-2">7 000 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Fredag–Söndag</td>
                    <td className="px-3 py-2">1 500 kr</td>
                    <td className="px-3 py-2">650 kr</td>
                    <td className="px-3 py-2">12 000 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Tillval för en komplett upplevelse</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Snackspaket – 110 kr/person</strong></li>
              <li><strong>Matpaket – 250 kr/person</strong></li>
            </ul>

            <Heading as={3}>Dryck – förbeställning</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>8 x <strong>USE Lager (ljus lager)</strong> – 544 kr (75 kr/st)</li>
              <li>Flaska <strong>Cava Ramiro Brut</strong> – 395 kr</li>
            </ul>
            <Text className="italic opacity-80">
              (Detta är våra populäraste förbeställningsdrycker. Större sortiment, inklusive alkoholfria alternativ, finns på plats.)
            </Text>

            <Heading as={3}>Bokningsinformation</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Paketet <strong>måste beställas för hela sällskapet.</strong> Det är inte möjligt att endast beställa mat eller snacks för enstaka personer.
              </li>
              <li>
                För skräddarsydda upplägg eller specialönskemål, kontakta oss på: <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a>
              </li>
            </ul>
          </div>

          {/* 7. Prislista – Simulatorbokning (Medlemspriser) */}
          <div className="space-y-4">
            <Heading as={2}>7. Prislista – Simulatorbokning (Medlemspriser)</Heading>

            <Heading as={3}>Vardagar (Måndag–Fredag)</Heading>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Tid</th>
                    <th className="px-3 py-2 text-left">Pris</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">07:00–09:00</td>
                    <td className="px-3 py-2">295 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">09:00–17:00</td>
                    <td className="px-3 py-2">350 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">17:00–21:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">21:00–22:00</td>
                    <td className="px-3 py-2">350 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">22:00–23:00</td>
                    <td className="px-3 py-2">295 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Lördagar</Heading>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Tid</th>
                    <th className="px-3 py-2 text-left">Pris</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">07:00–10:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">10:00–18:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">18:00–20:00</td>
                    <td className="px-3 py-2">395 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">21:00–23:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Söndagar</Heading>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-sm">
                <thead>
                  <tr className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] uppercase tracking-wide">
                    <th className="px-3 py-2 text-left">Tid</th>
                    <th className="px-3 py-2 text-left">Pris</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">07:00–10:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">10:00–17:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">18:00–21:00</td>
                    <td className="px-3 py-2">395 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">21:00–23:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Högtider och röda dagar</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                På <strong>jul, nyår och samtliga röda dagar</strong> tillkommer ett pristillägg på <strong>+40 kr per timme</strong> på samtliga tider.
              </li>
            </ul>
          </div>

          {/* 8. Drift & kommunikation */}
          <div className="space-y-4">
            <Heading as={2}>8. Drift & kommunikation</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>USE Golf förbehåller sig rätten att ändra öppettider, priser och utbud vid behov.</li>
              <li>Lokalen kan tillfälligt stängas för service, underhåll eller event.</li>
              <li>Påverkas din bokning av planerat avbrott, återbetalas eller ombokas tiden kostnadsfritt.</li>
              <li>All information och nyheter skickas ut via e-post, sms och sociala medier till medlemmar och partners.</li>
              <li>Vi reserverar oss för eventuella skrivfel och prisändringar.</li>
            </ul>
          </div>

          <Text className="italic opacity-80">Alla priser anges exklusive moms.</Text>
        </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Medlemsvillkor",
  description: "Villkor för medlemskap, partnerportal och simulatorpaket hos USE Golf Göteborg.",
};


