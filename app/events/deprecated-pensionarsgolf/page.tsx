import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import InterestForm from "@/components/ui/InterestForm";

export default function PensionarsgolfPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Pensionärsgolf</Heading>
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Spela dagtid med medlemsförmån – extra förmånligt för pensionärer att spela hos oss under lugnare tider.
                </Lead>
                <Text>
                  Vi vill lyfta pensionärsgolf som ett eget och tydligt erbjudande. Med rabatterat timpris dagtid mellan kl. 09.00–15.00 blir det extra förmånligt för pensionärer att spela hos oss.
                </Text>
              </div>
              <div>
                <div className="relative h-56 sm:h-72 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image 
                    src="/images/invigning/DSC06519.jpg" 
                    alt="Pensionärsgolf" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Medlemsförmån dagtid */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                  <h3 className="font-horus text-2xl">Medlemsförmån dagtid</h3>
                  <Text>
                    <strong>Medlemmar har rabatterat timpris dagtid</strong> mellan kl. <strong>09.00–15.00</strong>, vilket gör det extra förmånligt för pensionärer att spela hos oss under lugnare tider.
                  </Text>
                  <div>
                    <a href="/medlemskap" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                      Läs mer om medlemskap
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                  <h3 className="font-horus text-2xl">Vad vi erbjuder</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Möjlighet till stående tider</strong> – säkra din veckotid</li>
                    <li><strong>Flexibelt upplägg</strong> för mindre och större sällskap</li>
                    <li><strong>Kaffe finns att köpa</strong> på plats och blir en naturlig del av den sociala upplevelsen</li>
                    <li><strong>Lugnt tempo</strong> – spela i er egen takt</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Section>

          {/* Planerad Pensionärs-scramble */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/icons/prize.png" alt="Scramble" width={48} height={48} />
                <Heading as={3}>Planerad Pensionärs-scramble</Heading>
              </div>
              <Text>
                Vi planerar att starta en scramble-serie för pensionärer framöver. Om vi får in tillräckligt många intresseanmälningar kan vi snabbt ta kontakt, starta upp serien och hjälpa alla med bokning och upplägg.
              </Text>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Preliminärt upplägg</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>2 personer per lag</li>
                    <li>4 personer per simulator</li>
                    <li>Speltid: 4 timmar</li>
                    <li>Fokus på socialt spel, gemenskap och ett lugnt tempo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Varför intresseanmälan?</h4>
                  <Text className="text-sm">
                    Många pensionärer föredrar personlig kontakt i början. På plats kan vi sedan visa hur bokning via Sweetspot fungerar för framtida tillfällen.
                  </Text>
                </div>
              </div>
            </div>
          </Section>

          {/* Intresseanmälan */}
          <Section className="pt-2 -mt-10 sm:-mt-18 pb-16">
            <div className="max-w-2xl space-y-4">
              <Heading as={3}>Intresseanmälan för Pensionärs-scramble</Heading>
              <Text>
                Fyll i formuläret nedan så hör vi av oss när vi startar serien. Vi hjälper er med bokning och upplägg när det är dags.
              </Text>
              <InterestForm 
                eventTitle="Pensionärs-scramble"
              />
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Pensionärsgolf",
  description: "Spela dagtid med medlemsförmån mellan kl. 09.00–15.00. Stående tider, flexibelt upplägg och kaffe på plats.",
};
