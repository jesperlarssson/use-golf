import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import InterestForm from "@/components/ui/InterestForm";

export default function TranareKurserPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Tränare & Kurser</Heading>
                <Lead className="text-[var(--brand-olive-900)] text-lg">
                  Vi erbjuder golfträning på alla nivåer, från nybörjare till erfarna golfare som vill utveckla sitt spel ytterligare.
                </Lead>
                <Text>
                  Träningen sker i moderna simulatorer och anpassas efter varje spelares mål och nivå. Våra erfarna tränare hjälper dig att nå dina mål – oavsett om du vill lära dig grunderna eller förbättra ditt redan starka spel.
                </Text>
              </div>
              <div>
                <div className="relative h-56 sm:h-72 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image 
                    src="/images/invigning/DSC06519.jpg" 
                    alt="Tränare & Kurser" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Vad vi erbjuder */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
              <Heading as={3}>Vad vi erbjuder</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Träningsformer</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Privata lektioner</strong> – individuell träning anpassad efter dina behov</li>
                    <li><strong>Gruppträning</strong> – träna tillsammans med andra</li>
                    <li><strong>Träning för nybörjare</strong> – lägg en solid grund</li>
                    <li><strong>Träning för fortsättare</strong> – utveckla ditt spel vidare</li>
                    <li><strong>Träning för erfarna spelare</strong> – finslipa din teknik</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Flexibelt upplägg</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Möjlighet till långsiktig utvecklingsplan</strong> – strukturerad träning över tid</li>
                    <li><strong>Enstaka lektioner</strong> – när det passar dig</li>
                    <li><strong>Anpassad efter mål</strong> – vi tränar på det du vill förbättra</li>
                    <li><strong>Modern utrustning</strong> – TrackMan-simulatorer ger exakt feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Våra tränare */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <Heading as={3} className="mb-6">Våra erfarna tränare</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                  <div>
                    <h4 className="font-horus text-xl mb-2">Duncan Robinson</h4>
                    <Text className="text-sm mb-4">
                      Erfaren tränare som hjälper dig att utveckla ditt spel oavsett nivå.
                    </Text>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--brand-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:0708584308" className="text-[var(--brand-secondary)] hover:text-[var(--brand-olive-900)] transition">
                        070-858 43 08
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                  <div>
                    <h4 className="font-horus text-xl mb-2">Markus Forsbohl</h4>
                    <Text className="text-sm mb-4">
                      Expert på att hjälpa spelare att nå sina mål med strukturerad träning.
                    </Text>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--brand-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:0708430440" className="text-[var(--brand-secondary)] hover:text-[var(--brand-olive-900)] transition">
                        070-843 04 40
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>

          {/* Kontakt */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
              <Heading as={3}>Hur tar jag kontakt?</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Kontakta tränarna direkt</h4>
                  <Text className="text-sm">
                    Ring eller skicka meddelande till Duncan eller Markus direkt. De hjälper dig att hitta rätt upplägg för just dig.
                  </Text>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 uppercase tracking-wider text-sm">Skicka intresseanmälan</h4>
                  <Text className="text-sm">
                    Intresseanmälan är ett viktigt komplement då alla inte vill eller kan ta kontakt direkt. På så sätt tappar vi inga personer som är nyfikna eller intresserade av träning.
                  </Text>
                </div>
              </div>
            </div>
          </Section>

          {/* Intresseanmälan */}
          <Section className="pt-2 -mt-10 sm:-mt-18 pb-16">
            <div className="max-w-2xl space-y-4">
              <Heading as={3}>Intresseanmälan för träning</Heading>
              <Text>
                Fyll i formuläret nedan så hör vi av oss och hjälper till att hitta rätt upplägg för dig. Oavsett om du är nybörjare eller erfaren spelare – vi har något för dig.
              </Text>
              <InterestForm 
                eventTitle="Tränare & Kurser"
              />
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Tränare & Kurser",
  description: "Golfträning på alla nivåer med erfarna tränare. Privata lektioner, gruppträning och långsiktiga utvecklingsplaner.",
};
