import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Page from "@/components/ui/Page";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import EmailNotifyForm from "@/components/ui/EmailNotifyForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Boka träning",
  description: "Boka träning med John Parkinson, PGA-professionell och instruktör med över 30 års erfarenhet.",
};

export default function TrainingBookingPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Träning med John Parkinson</Heading>
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Snart kommer du kunna boka träning med John Parkinson, PGA-professionell och instruktör med över 30 års erfarenhet inom golf.
                </Lead>
                <Text>
                  John kombinerar traditionell teknikträning med modern analys, bland annat använder han TrackMan-systemet och video/AI-verktyg för att hjälpa dig utvecklas snabbare.
                </Text>
              </div>
              <div>
                <div className="relative h-96 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/john-p.png" alt="John Parkinson" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
          </Section>

          {/* Vad du kan förvänta dig */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="space-y-4">
              <Heading as={3}>Vad du kan förvänta dig</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                  <Text>
                    John arbetar med spelare på alla nivåer – nybörjare, juniorer, vuxna och elit.
                  </Text>
                  <Text>
                    Fokus ligger på att snabbt identifiera vad som hindrar ditt spel och sedan införa tydliga förändringar för att maximera ditt resultat.
                  </Text>
                </div>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                  <Text>
                    Träningen omfattar hela spelet: full swing, wedge/spel runt green, putting, bollhastighet och spelförståelse.
                  </Text>
                  <Text>
                    Oavsett om du tar en enstaka lektion eller går en kurs ser John till att upplägget skräddarsys efter din förutsättning och dina mål.
                  </Text>
                </div>
              </div>
            </div>
          </Section>

      

          {/* Varför träna med John? */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="space-y-4">
              <Heading as={3}>Varför träna med John?</Heading>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>John är kvalificerad som Class A professionell vid British PGA sedan 1996. </li>
                  <li>2010 belönades han med "Master"-status från TrackMan.</li>
                  <li>Han har coachat spelare över flera kontinenter och har en dokumenterad förmåga att höja spelare från nybörjare till tävlingsnivå.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Email notify */}
          <Section className="pt-2 pb-16 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <Text className="mb-3">Få ett mail när träningsbokningen är öppen:</Text>
              <EmailNotifyForm />
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}


