import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text, Lead } from "@/components/ui/Typography";

export default function MedlemsvillkorPage() {
  return (
    <Page variant="subpage">
      <Section id="villkor" className="pt-8">
        <div className="space-y-8 max-w-5xl">
          <Heading as={2}>USE Golf Göteborg – Medlemskap, Simulatorpaket & Prislista</Heading>
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
              <li>Samtliga medlemskap är giltiga under tolv månader och nollställs inför ny säsong.</li>
              <li>All verksamhet sker på egen risk. USE Golf ansvarar inte för personliga tillhörigheter eller skador.</li>
            </ul>
          </div>

          {/* 2. Privat medlemskap */}
          <div className="space-y-4">
            <Heading as={2}>2. Medlemskap</Heading>
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
                    <td className="px-3 py-2 align-top font-semibold">Junior Use:r</td>
                    <td className="px-3 py-2 align-top">400 kr</td>
                    <td className="px-3 py-2 align-top">10 % rabatt på allt spel + 1 timmes spel inkluderad</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 align-top font-semibold">Use:r</td>
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

          {/* 3. Bagförvaring */}
          <div className="space-y-4">
            <Heading as={2}>3. Bagförvaring</Heading>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bagförvaring finns under vintersäsongen till en kostnad av <strong>700 kr per säsong</strong> för både seniorer och juniorer.</li>
              <li>Juniorer har förtur till bagförvaring, med platsreservationer under vintersäsongen.</li>
              <li>Förvaringen sker som en garderobslösning i ett låst utrymme med kameraövervakning.</li>
              <li>Du ansvarar själv för din utrustning.</li>
              <li>USE Golf ansvarar inte för förlorade eller skadade tillhörigheter.</li>
              <li>Maxantal: <strong>80 bagar totalt</strong>, varav <strong>50 reserveras för juniorer</strong>.</li>
            </ul>
          </div>

          {/* 4. Företagsevent & Gruppspel */}
          <div className="space-y-4">
            <Heading as={2}>4. Företagsevent & Gruppspel</Heading>
            <Text>Alla företagsevent bokas för <strong>hela lokalen (6 simulatorer)</strong> med en <strong>minsta speltid på 2 timmar</strong>. I bokningen ingår:</Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>Förberedelse och uppstart av eventet</li>
              <li>Hjälp med tävlingsupplägg, loggor och presentationer</li>
              <li>Uppvärmning och introduktion för spelare</li>
              <li>Priser (från)</li>
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
                    <td className="px-3 py-2">På förfrågan</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Onsdag–Torsdag</td>
                    <td className="px-3 py-2">från 20 000 kr</td>
                    <td className="px-3 py-2">På förfrågan</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">Fredag–Söndag</td>
                    <td className="px-3 py-2">från 24 000 kr</td>
                    <td className="px-3 py-2">På förfrågan</td>
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
              <li>För offert eller skräddarsytt upplägg, kontakta oss på: <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a></li>
            </ul>
          </div>

          {/* 5. Prislista – Simulatorbokning */}
          <div className="space-y-4">
            <Heading as={2}>5. Prislista – Simulatorbokning</Heading>

            <Heading as={3}>Måndag–Torsdag</Heading>
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
                    <td className="px-3 py-2">330 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">10:00–16:00</td>
                    <td className="px-3 py-2">425 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">16:00–19:00</td>
                    <td className="px-3 py-2">495 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">19:00–22:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">22:00–23:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Fredag–Lördag</Heading>
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
                    <td className="px-3 py-2">425 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">10:00–16:00</td>
                    <td className="px-3 py-2">495 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">16:00–22:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">22:00–23:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Heading as={3}>Söndag</Heading>
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
                    <td className="px-3 py-2">425 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">10:00–16:00</td>
                    <td className="px-3 py-2">495 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">16:00–22:00</td>
                    <td className="px-3 py-2">450 kr</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2">22:00–23:00</td>
                    <td className="px-3 py-2">300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Spelpass – Förbetalda spelpotter */}
          <div className="space-y-4">
            <Heading as={2}>6. User Passes – Förbetalda spelvärden</Heading>
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
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 font-semibold">User Pass – Small</td>
                    <td className="px-3 py-2">5 000 kr</td>
                    <td className="px-3 py-2">6 000 kr</td>
                    <td className="px-3 py-2">+17 %</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 font-semibold">User Pass – Medium</td>
                    <td className="px-3 py-2">9 000 kr</td>
                    <td className="px-3 py-2">10 800 kr</td>
                    <td className="px-3 py-2">+20 %</td>
                  </tr>
                  <tr className="border-t border-[var(--brand-secondary)]/40">
                    <td className="px-3 py-2 font-semibold">User Pass – Large</td>
                    <td className="px-3 py-2">14 000 kr</td>
                    <td className="px-3 py-2">17 500 kr</td>
                    <td className="px-3 py-2">+25 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Heading as={3}>Villkor för User Passes</Heading>
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

          {/* 7. Företagspaket & Partnernivåer */}
          <div className="space-y-6">
            <Heading as={2}>7. Företagspaket & Partnernivåer</Heading>
            <Text>
              USE Golf erbjuder företag möjligheten att synas, spela och nätverka på ett unikt sätt. Våra partnerpaket kombinerar exklusiv speltid i våra TrackMan-simulatorer med exponering, förmåner och skräddarsydda företagsupplevelser.
            </Text>

            <div className="space-y-4">
              <Heading as={3}>Partner</Heading>
              <Text><strong>Pris: 35 000 kr / år</strong> – Perfekt för företag som vill ha återkommande tider för kunder, personal eller nätverk.</Text>
              <ul className="list-disc pl-5 space-y-2">
                <li>30 voucher-timmar per år</li>
                <li>Exponering av företagsnamn på vår partner-tavla i entrén</li>
                <li>Företagsnamn på hemsidan under våra partners</li>
                <li>2 bagar i förvaring</li>
                <li>Möjlighet att boka en stående tid varje vecka. De första <strong>två veckorna</strong> gäller ordinarie pris. Från och med <strong>tredje veckan</strong> tillkommer en <strong>bokningsavgift på 50 kr/h och simulator</strong> för stående tider.</li>
                <li>Möjlighet att beställa kaffe, dryck och snacks som tillägg vid varje speltillfälle</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Heading as={3}>Official Partner</Heading>
              <Text><strong>Pris: 60 000 kr / år</strong> – För företag som vill ha en större närvaro, exponering och tillgång till fler möjligheter hos USE Golf.</Text>
              <ul className="list-disc pl-5 space-y-2">
                <li>Företagstävling med hela lokalen i 2 timmar (6 simulatorer)
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>TrackMan-exponering i alla simulatorer under eventet</li>
                    <li>Möjlighet till unikt upplägg med Hole-in-One-priser och företagsbranding</li>
                  </ul>
                </li>
                <li>40 voucher-timmar per år utöver företagseventet</li>
                <li>2 bagar i förvaring</li>
                <li>Tillgång till fria låneklubbor för gäster</li>
                <li>Möjlighet att boka en stående tid varje vecka. De första <strong>två veckorna</strong> gäller ordinarie pris. Från och med <strong>tredje veckan</strong> tillkommer en <strong>bokningsavgift på 50 kr/h och simulator</strong> för stående tider.</li>
                <li>Möjlighet att beställa kaffe, dryck och snacks som tillägg vid varje speltillfälle</li>
                <li>Möjlighet att lägga till matpaket (t.ex. ciabatta eller chark) som tillval</li>
              </ul>
            </div>

            <div>
              <Heading as={3}>Bokning & kontakt</Heading>
              <ul className="list-disc pl-5 space-y-2">
                <li>För mer information eller offert: <a href="mailto:hello@usegolf.se" className="underline">hello@usegolf.se</a></li>
                <li>Adress: Krogabäcksvägen 2, Nya Hovås</li>
              </ul>
            </div>
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


