import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";

export default function VeckoscramblePage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>2-mannascramble – Veckoscramble</Heading>
                <Text className="text-[var(--brand-olive-900)] text-lg">
                  Serie över 10 veckor med ny bana varje vecka. Spelas mån–sön, valfri tid. Giltigt TrackMan-handikapp krävs. Bra prisbord utlovas – mer info kommer. Uppehåll över jul/nyår, vecka 7 och påsk.
                </Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Format:</strong> Tvåmannascramble – ny bana varje vecka</li>
                  <li><strong>När:</strong> Måndag–söndag, valfri tid under hallens öppettider</li>
                  <li><strong>Period:</strong> 10 veckor</li>
                  <li><strong>Avgift:</strong> 200 kr/lag/vecka (går oavkortat till prispotten för finalomgången)</li>
                </ul>
                <div>
                  <a href="/bokning" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka speltid</a>
                </div>
              </div>
              <div>
                <div className="relative h-56 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/render2.PNG" alt="Veckoscramble" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Format & regler and Så funkar det combined */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Format & regler</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>2 spelare per lag.</li>
                  <li>Scramble på veckans utvalda bana.</li>
                  <li>Spela valfri dag och tid under veckan.</li>
                  <li>Registrera rundan i TrackMan och spara score.</li>
                  <li>Båda slår ut – välj bästa boll och spela därifrån tills hålat.</li>
                  <li>Minst 3 utslag per spelare ska räknas per 18 hål.</li>
                  <li>Mulligans och gimme’s ej tillåtna om inte annat anges.</li>
                  <li>Följ simulatormiljöns lokala regler och etikett.</li>
                </ul>
              </div>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Så funkar det</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Boka valfri simulatortid under veckan och spela veckans bana.</li>
                  <li>Registrera laget i receptionen före start.</li>
                  <li>Skicka in scorekortet direkt efter ronden.</li>
                  <li>Resultat och leaderboard publiceras varje måndag.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Regler i korthet (förtydligad) */}
          {/* Deleted this entire Section as requested */}

          {/* Banor som spelas under säsongen */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="space-y-4">
              <Heading as={3}>Banor som spelas under säsongen</Heading>
              <Text>Varje vecka spelas en ny ikonisk bana från världens mest legendariska golfdestinationer:</Text>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li><strong>Leatherstocking Golf Club</strong> – klassisk amerikansk parkbana med breda fairways och generösa greener. Perfekt start.</li>
                <li><strong>Le Touquet Resort</strong> – platt, kustnära bana med öppen layout och mjuk vindpåverkan.</li>
                <li><strong>Wilshire Country Club</strong> – stadsklassiker i Los Angeles med raka hål och lättspelade greener.</li>
                <li><strong>The Links at Spanish Bay</strong> – vacker seaside-layout, lätt kupering och lagom utmaning.</li>
                <li><strong>Casa de Campo (Teeth of the Dog)</strong> – spektakulär karibisk bana med visuella utmaningar men förlåtande design.</li>
                <li><strong>Adare Manor</strong> – modern resortbana med breda fairways och tekniska greener.</li>
                <li><strong>TPC Sawgrass (Stadium Course)</strong> – ikonisk layout med risk/reward-hål, inklusive det berömda 17:e öhålet.</li>
                <li><strong>Primland Resort (Highlands Course)</strong> – kuperad bergsbana med varierande höjdskillnader och snabba greener.</li>
                <li><strong>Royal Troon</strong> – klassisk skotsk links med vind och strategiskt tuffa hål.</li>
                <li><strong>Royal St. George’s Golf Club</strong> – ojämna fairways, djupa bunkrar och små marginaler – kräver precision.</li>
                <li><strong>Wentworth Golf Club (West Course)</strong> – trixiga greener och smala landningsytor – kräver strategi.</li>
                <li><strong>Royal Portrush Golf Club (Dunluce Links)</strong> – dramatisk terräng och små felmarginaler i vinden.</li>
                <li><strong>Pebble Beach Golf Links</strong> – ikonisk bana med små greener och tuff vind längs klipporna.</li>
                <li><strong>The Reserve at Moonlight Basin</strong> – extrem längd och höjdvariation – en fysisk och mental utmaning.</li>
                <li><strong>St. Andrews Links (Old Course)</strong> – historisk och oförlåtande i vinden, kräver både mod och strategi.</li>
              </ol>
            </div>
          </Section>

          {/* Final & prispott */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Image src="/icons/prize.png" alt="Prispott" width={48} height={48} />
                <h3 className="font-horus text-2xl">Final & prispott</h3>
              </div>
              <Text>Serien pågår under 10 veckor – alla anmälningsavgifter går till den gemensamma prispotten för finalen.</Text>
              <Text>Kval sker via säsongens sammanlagda poäng – topp 10 lagen kvalificerar sig till finalspel på en av säsongens banor.</Text>
            </div>
          </Section>

          {/* Anmälan */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
              <h3 className="font-horus text-2xl">Anmälan</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Boka din simulatorslot som vanligt och lägg till <strong>“Veckoscramble”</strong> i kassan eller receptionen.</li>
                <li>Drop-in i mån av plats – först till kvarn.</li>
              </ul>
              <div>
                <a href="/bokning" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka speltid</a>
              </div>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Veckoscramble – 2-mannascramble",
  description: "Ny bana varje vecka. Spelas mån–sön, valfri tid. 200 kr/lag + simulatorhyra.",
};
