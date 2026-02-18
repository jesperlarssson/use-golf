import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function PensionarPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06519.jpg"
          alt="Pensionärsgolf hos USE Golf"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20 mx-auto flex-1 flex flex-col">
            {/* Tillbaka-knapp */}
            <div className="mb-auto pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Tillbaka</span>
              </Link>
            </div>

            {/* Centrerat innehåll */}
            <div className="max-w-5xl w-full mx-auto space-y-6 flex-1 flex flex-col justify-center items-start">
              <FadeIn>
                <span
                  className="inline-block mb-4 px-4 py-2 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm border-2 border-white/30 rounded-none text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                >
                  Pensionärer
                </span>
                <Heading as={1} className="text-4xl md:text-5xl lg:text-6xl text-white">
                  Pensionärsgolf hos USE Golf
                </Heading>
                <Lead className="text-xl md:text-2xl text-white/90">
                  En trivsam mötesplats där golf, gemenskap och välmående står i centrum – oavsett ålder.
                </Lead>
              </FadeIn>

              {/* CTA-knapp */}
              <FadeIn delay={0.2}>
                <div className="pt-6">
                  <Link
                    href="/medlemskap"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                  >
                    Bli medlem
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-18">
        <Page variant="subpage">
          {/* Innehåll */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <FadeIn>
              <div className="max-w-5xl mx-auto space-y-8 prose prose-lg text-left">
                <Text className="text-lg">
                  Hos USE Golf vill vi skapa en trivsam mötesplats där golf, gemenskap och välmående står i centrum –
                  oavsett ålder. Därför erbjuder vi förmånliga pensionärspriser för våra medlemmar över 60 år.
                </Text>

                <div>
                  <Heading as={2} className="text-2xl mb-4">
                    Pensionärspris dagtid
                  </Heading>
                  <Text>
                    Alla medlemmar över 60 år spelar hos oss vardagar mellan kl. 09.00–15.00 för endast 270 kr per
                    timme. Perfekt för dig som vill spela golf i lugnare tempo, träna eller bara njuta av spelet dagtid.
                  </Text>
                </div>

                <div>
                  <Heading as={2} className="text-2xl mb-4">
                    Mer än bara golf
                  </Heading>
                  <Text>
                    Vår lokal är något utöver det vanliga – med stora, luftiga ytor, bekväma sittplatser och en
                    avslappnad atmosfär som gör det lika trevligt att umgås som att spela. Självklart erbjuder vi även
                    fika och enklare tilltugg, så att du kan ta en paus, prata golf eller bara njuta av stunden.
                  </Text>
                </div>

                <div>
                  <Heading as={2} className="text-2xl mb-4">
                    USE Golf – Pensionärer (Facebookgrupp)
                  </Heading>
                  <Text className="mb-4">
                    För att stärka gemenskapen har vi skapat Facebookgruppen &quot;USE Golf – Pensionärer&quot;. Där kan
                    du:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Delta i gemensamma aktiviteter</li>
                    <li>Hitta spelpartners</li>
                    <li>Spela tillsammans med andra i samma ålder</li>
                    <li>Skapa nya bekantskaper och vänner</li>
                  </ul>
                  <Text>
                    För att gå med i gruppen skickar du en ansökan, och vi godkänner den när vi har stämt av att du är
                    medlem hos USE Golf.
                  </Text>
                  <p className="mt-4">
                    <a
                      href="https://www.facebook.com/groups/889339674058387/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--brand-olive-900)] font-semibold hover:underline"
                    >
                      Gå med i gruppen på Facebook
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </p>
                </div>

                <div>
                  <Heading as={2} className="text-2xl mb-4">
                    Välkommen till gemenskapen
                  </Heading>
                  <Text>
                    Oavsett om du spelar ofta eller ibland, själv eller tillsammans med andra, är du varmt välkommen till
                    USE Golf. Här kombinerar vi golfglädje, social samvaro och en miljö där man verkligen trivs.
                  </Text>
                </div>
              </div>
            </FadeIn>
          </Section>

          {/* CTA + Kontakt */}
          <Section className="py-20 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <FadeIn>
              <div className="max-w-5xl mx-auto space-y-6 text-left">
                <Heading as={2} className="text-2xl md:text-3xl">
                  Redo att bli medlem?
                </Heading>
                <Text>
                  Som medlem får du tillgång till pensionärspriser och allt annat vi erbjuder. Vill du inte bli medlem
                  direkt? Ring eller maila oss – vi hjälper dig gärna!
                </Text>
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-4">
                  <Link
                    href="/medlemskap"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                  >
                    Bli medlem
                  </Link>
                
                </div>
              </div>
            </FadeIn>
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Pensionärsgolf | USE Golf",
  description:
    "Förmånliga pensionärspriser för medlemmar över 60 år. Spela dagtid för 270 kr/timme. Gemenskap, Facebookgrupp och en trivsam miljö hos USE Golf Göteborg.",
};
