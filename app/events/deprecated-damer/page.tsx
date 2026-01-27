import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import InterestForm from "@/components/ui/InterestForm";

export default function DamerPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Damer</Heading>
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Vi vill göra golfen mer tillgänglig och välkomnande för kvinnor – oavsett om du är helt ny inom golfen eller redan spelar och söker mer gemenskap.
                </Lead>
                <Text>
                  Steget in i golfen ska vara enkelt, tryggt och roligt. Vi erbjuder både nybörjarkurser och en damliga där gemenskap och spelglädje står i centrum.
                </Text>
              </div>
              <div>
                <div className="relative h-56 sm:h-72 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image 
                    src="/images/invigning/DSC06673.jpg" 
                    alt="Damer" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Nybörjarkurser */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="space-y-6">
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                <Heading as={3}>Nybörjarkurser för damer</Heading>
                <Text>
                  Vi erbjuder nybörjarkurser där steget in i golfen ska vara enkelt, tryggt och roligt. Inga förkunskaper krävs – vi börjar från början.
                </Text>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="font-semibold mb-3 uppercase tracking-wider text-sm">Vad ingår?</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Inga förkunskaper krävs</strong> – vi börjar från början</li>
                      <li><strong>Låneklubbor finns på plats</strong> – du behöver inte köpa utrustning direkt</li>
                      <li><strong>Erfarna tränare</strong> som guidar er i lugnt tempo</li>
                      <li><strong>Möjlighet att ta sig hela vägen till grönt kort</strong> för den som vill</li>
                      <li><strong>Upplägget anpassas</strong> efter gruppens nivå och önskemål</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 uppercase tracking-wider text-sm">Gruppstorlek</h4>
                    <Text className="text-sm mb-3">
                      Minst 2 och max 12 personer per kurs. Perfekt för att träffa andra som också är nya inom golfen.
                    </Text>
                    <Text className="text-sm">
                      <strong>Är ni ett gäng vänner</strong> som varit sugna på att testa golf men aldrig riktigt kommit i gång? Tveka inte att ta kontakt – vi hjälper er att sätta upp ett upplägg som gör att ni på ett enkelt och ärligt sätt får känna efter om golf är något för er.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Damliga */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/icons/prize.png" alt="Damliga" width={48} height={48} />
                <Heading as={3}>Damliga</Heading>
              </div>
              <Text>
                Vi har även en damliga där man spelar 2-manna scramble med fokus på gemenskap, spelglädje och ett avslappnat upplägg.
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Perfekt för dig som vill</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Spela mer golf</li>
                    <li>Träffa andra damer som gillar golf</li>
                    <li>Utvecklas tillsammans</li>
                    <li>Ha kul utan prestationskrav</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Upplägg</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>2-manna scramble</li>
                    <li>Fokus på gemenskap och spelglädje</li>
                    <li>Avslappnat tempo</li>
                    <li>Inga prestationskrav</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Intresseanmälan */}
          <Section className="pt-2 -mt-10 sm:-mt-18 pb-16">
            <div className="max-w-2xl space-y-4">
              <Heading as={3}>Intresseanmälan</Heading>
              <Text>
                Är du intresserad av nybörjarkurser eller damligan? Fyll i formuläret nedan så hör vi av oss med mer information och hjälper dig att komma igång.
              </Text>
              <InterestForm 
                eventTitle="Damer (nybörjarkurser eller damliga)"
              />
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Damer",
  description: "Nybörjarkurser för damer och damliga. Steget in i golfen ska vara enkelt, tryggt och roligt.",
};
