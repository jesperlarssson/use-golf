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
                  Serie över 10 veckor med ny bana varje vecka. Spelas mån–sön, valfri tid. Giltigt TrackMan-handikapp krävs. Bra prisbord utlovas – mer info kommer. Startar 8 december.
                </Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Format:</strong> Tvåmannascramble – ny bana varje vecka</li>
                  <li><strong>När:</strong> Måndag–söndag, valfri tid under hallens öppettider</li>
                  <li><strong>Period:</strong> 10 veckor*</li>
                  <li><strong>Avgift:</strong> 200 kr/lag/vecka (går oavkortat till prispotten för finalomgången)</li>
                </ul>
                <div className="space-y-2">
                  <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka speltid</a>
                  <p className="text-xs text-[var(--brand-olive-900)] opacity-70">
                    * 10 veckor: vecka 50, 51, 3, 4, 5, 6, 8, 9, 10, 11
                  </p>
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

          {/* Format & regler, Så funkar det och Säsongsupplägg */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Format & regler</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>2 spelare per lag.</li>
                  <li>Scramble på veckans utvalda bana.</li>
                  <li>Spela valfri dag och tid under veckan.</li>
                  <li>Registrera rundan i TrackMan och spara score.</li>
                  <li>Båda slår ut – välj bästa boll och spela därifrån tills hålat.</li>
                  <li>Minst 3 utslag per spelare ska räknas per 18 hål.</li>
                  <li>Mulligans och gimme's ej tillåtna om inte annat anges.</li>
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
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Veckor</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-[var(--brand-secondary)]">
                        <th className="text-left py-2 px-2 font-semibold">Vecka</th>
                        <th className="text-left py-2 px-2 font-semibold">Omgång</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">50</td>
                        <td className="py-2 px-2">Omgång 1</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">51</td>
                        <td className="py-2 px-2">Omgång 2</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">3</td>
                        <td className="py-2 px-2">Omgång 3</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">4</td>
                        <td className="py-2 px-2">Omgång 4</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">5</td>
                        <td className="py-2 px-2">Omgång 5</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">6</td>
                        <td className="py-2 px-2">Omgång 6</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">8</td>
                        <td className="py-2 px-2">Omgång 7</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">9</td>
                        <td className="py-2 px-2">Kvartsfinal</td>
                      </tr>
                      <tr className="border-b border-[var(--brand-secondary)]/40">
                        <td className="py-2 px-2">10</td>
                        <td className="py-2 px-2">Semifinal</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">11</td>
                        <td className="py-2 px-2">Final</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Section>

          {/* Regler i korthet (förtydligad) */}
          {/* Deleted this entire Section as requested */}

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
                <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka speltid</a>
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
