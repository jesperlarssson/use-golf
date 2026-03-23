import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function CustomClubsPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/cc-3.jpeg"
          alt="CustomClubs"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh] justify-center">
          <div className="w-full max-w-screen-2xl px-4 sm:px-8 py-12 sm:py-20 mx-auto">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition group mb-8"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Tillbaka till startsidan</span>
              </Link>
              <div className="space-y-8 max-w-3xl">
                <SectionHeader
                  label="CustomClubs"
                  heading="Custom Fitting & Butik"
                  description="Vi är både glada och stolta över att ha CustomClubs under samma tak här i Nya Hovås. Tillsammans vill vi skapa en destination för golfare att umgås & utveckla sitt spel – oavsett om det handlar om simulatorspel, rätt utrustning eller professionell Custom Fitting."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
                <a
                  href="https://www.customclubs.se/info/boka-custom-fitting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                  data-cursor-target
                  data-cursor-padding="10"
                >
                  Boka Custom Fitting
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">

          {/* Golfbutik */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                <FadeIn>
                  <div className="space-y-6">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)] block">
                      Butik
                    </span>
                    <Heading as={2} className="text-3xl md:text-4xl">
                      Golfbutik
                    </Heading>
                    <Text className="text-lg leading-relaxed">
                      I anslutning till simulatorerna hittar du CustomClubs butik – en modern golfbutik med tydlig premiumprofil här i Göteborg.
                    </Text>
                    <Text className="leading-relaxed">
                      Här finns ett noggrant utvalt sortiment med allt för din golf, inklusive kläder och skor från bland andra Malbon, Local Rule, G/Fore, Peter Millar, Goatlane, FootJoy. Utbudet fylls löpande på med produkter som inte finns på alla andra ställen och limiterade drops. Letar du efter något specifikt hjälper teamet gärna till – tack vare ett brett leverantörsnätverk kan de få tag på det mesta inom golfutrustning.
                    </Text>
                    <a
                      href="https://www.customclubs.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] text-[var(--brand-olive-900)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/15 transition w-fit"
                    >
                      Besök Custom Clubs
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="grid grid-cols-2 gap-3">
                    {["/images/cc-2.jpeg", "/images/cc-3.jpeg", "/images/cc-4.jpeg", "/images/cc-5.jpeg"].map((src, i) => (
                      <div key={i} className="relative aspect-square border-2 border-[var(--brand-secondary)] overflow-hidden">
                        <Image
                          src={src}
                          alt={`CustomClubs butik ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Custom Fitting */}
          <Section className="py-20 -mt-10 sm:-mt-18 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                <FadeIn>
                  <div className="relative aspect-video border-4 border-[var(--brand-secondary)] overflow-hidden">
                    <Image
                      src="/images/cc-1.jpeg"
                      alt="Custom Fitting hos CustomClubs"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="space-y-8">
                    <div>
                      <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-primary)]/70 block mb-4">
                        Fitting
                      </span>
                      <Heading as={2} className="text-3xl md:text-4xl text-[var(--brand-primary)] mb-4">
                        Custom Fitting
                      </Heading>
                      <Text className="text-lg text-[var(--brand-primary)]/80 leading-relaxed">
                        CustomClubs är specialister på custom fitting (utprovning) av golfklubbor, med ett väl inarbetat koncept där utrustningen anpassas efter din sving, fysik och spelstil.
                      </Text>
                    </div>

                    <div className="space-y-6">
                      <div className="border-l-2 border-[var(--brand-secondary)] pl-5 space-y-2">
                        <h3 className="font-semibold text-[var(--brand-primary)] uppercase tracking-wider text-sm">
                          Ett av Europas bredaste fittingutbud
                        </h3>
                        <Text className="text-sm text-[var(--brand-primary)]/80 leading-relaxed">
                          CustomClubs arbetar med ett av Europas bredaste utbud av klubbhuvuden och skaft för fitting. Det gör att varje spelare kan testa olika kombinationer och hitta den lösning som fungerar bäst för just sin sving.
                        </Text>
                      </div>

                      <div className="border-l-2 border-[var(--brand-secondary)] pl-5 space-y-2">
                        <h3 className="font-semibold text-[var(--brand-primary)] uppercase tracking-wider text-sm">
                          Uppföljning och Justeringar
                        </h3>
                        <Text className="text-sm text-[var(--brand-primary)]/80 leading-relaxed">
                          CustomClubs tar hand om dig hela vägen, även efter din utprovning där det säkerställs att allt stämmer som det ska och skulle det behövas några justeringar så ingår fri loft- och lie-justering upp till 2 år efter din utprovning.
                        </Text>
                        <Text className="text-sm text-[var(--brand-primary)]/80 leading-relaxed">
                          För dig som letar efter Custom Fitting i Göteborg innebär det möjligheten att spela med golfklubbor som verkligen är anpassade efter ditt spel.
                        </Text>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Boka CTA */}
          <Section className="py-20  pb-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <FadeIn>
                <Heading as={2} className="text-3xl md:text-4xl">
                  Boka Custom Fitting
                </Heading>
                <Text className="text-lg text-[var(--brand-olive-700)]">
                  Vill du ta reda på vilka golfklubbor som passar bäst?
                </Text>
                <Text className="text-base text-[var(--brand-olive-700)]">
                  Läs mer om CustomClubs koncept och boka din custom fitting via länken nedan.
                </Text>
                <div className="pt-4">
                  <a
                    href="https://www.customclubs.se/info/boka-custom-fitting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-10 py-5 text-lg font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition transform hover:scale-105"
                  >
                    Boka Custom Fitting
                  </a>
                </div>
              </FadeIn>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "CustomClubs | USE Golf",
  description: "CustomClubs – Custom Fitting & Golfbutik hos USE Golf i Nya Hovås. Ett av Europas bredaste fittingutbud med fri loft/lie-justering i 2 år.",
};
