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
                <Heading as={2}>2-manna scramble</Heading>
                <Text className="text-[var(--brand-olive-900)] text-lg">
                  Vårt mål är att alltid ha en pågående scrambletävling med attraktiva priser från sponsorer. Upplägget är enkelt och lågtröskligt.
                </Text>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Ingen anmälningsavgift</strong> – du betalar endast för bokad simulatorspelstid</li>
                  <li><strong>Rekommenderad speltid:</strong> 2 timmar</li>
                  <li><strong>Fritt antal försök</strong> att kvala in</li>
                  <li><strong>Innan rundan startar</strong> fyller spelarna i sitt utomhushandicap</li>
                  <li><strong>Ny bana varje vecka</strong> – spela när det passar dig</li>
                </ul>
                <div className="space-y-2">
                  <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka speltid</a>
                </div>
              </div>
              <div>
                <div className="relative h-56 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/invigning/DSC06519.jpg" alt="Veckoscramble" fill className="object-cover" />
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
                  <li>Boka valfri simulatortid (rekommenderat 2 timmar) och spela veckans bana.</li>
                  <li>Innan rundan startar fyller ni i ert utomhushandicap.</li>
                  <li>Spela scramble och registrera resultatet i TrackMan.</li>
                  <li>Fritt antal försök – kvala in när ni vill!</li>
                  <li>Resultat och leaderboard uppdateras löpande.</li>
                </ul>
              </div>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Varför 2-manna scramble?</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Låg tröskel</strong> – perfekt för både nybörjare och erfarna spelare</li>
                  <li><strong>Socialt spel</strong> – spela tillsammans och utvecklas</li>
                  <li><strong>Flexibelt</strong> – spela när det passar er</li>
                  <li><strong>Fritt antal försök</strong> – kvala in när ni vill</li>
                  <li><strong>Attraktiva priser</strong> från våra sponsorer</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Regler i korthet (förtydligad) */}
          {/* Deleted this entire Section as requested */}

          {/* Historik & prispott */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/icons/prize.png" alt="Prispott" width={48} height={48} />
                <h3 className="font-horus text-2xl">Attraktiva priser från sponsorer</h3>
              </div>
              <Text className="text-[var(--brand-olive-900)]">
                Vi arbetar kontinuerligt med att säkra attraktiva priser från våra sponsorer. Mer information om aktuellt prisbord publiceras löpande.
              </Text>
              
              <div className="pt-4 border-t border-[var(--brand-secondary)]/30">
                <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Historik</h4>
                <Text className="text-sm">
                  Den senaste scrambletävlingen pågick under en månad med <strong>över 100 deltagare</strong>. 
                  Finalen spelades måndag den 19:e mellan <strong>12 finalister</strong>. 
                  Samma dag som finalen spelades smygstartade omgång 1 av en ny scrambletävling.
                </Text>
              </div>
            </div>
          </Section>

          {/* Anmälan */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
              <h3 className="font-horus text-2xl">Kom igång</h3>
              <Text>
                Boka din simulatorspelstid som vanligt via Sweetspot. Innan ni startar rundan fyller ni i ert utomhushandicap. 
                Ingen extra avgift – ni betalar endast för bokad speltid.
              </Text>
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
  title: "2-manna scramble",
  description: "Lågtrösklig scrambletävling med attraktiva priser. Ingen anmälningsavgift – betala endast för bokad speltid.",
};
