import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function TranaPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/swing/2.png"
          alt="Träna hos USE Golf"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
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
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
              <FadeIn>
                <div className="space-y-6">
                  <SectionHeader
                    label="Träna"
                    heading="Träna smartare. Spela bättre."
                    align="left"
                    labelColor="rgb(255, 255, 255)"
                    headingColor="rgb(255, 255, 255)"
                    textColor="rgba(255, 255, 255, 0.9)"
                    maxWidth="full"
                  />
                  <div className="space-y-4 text-[var(--brand-primary)]/95 text-base md:text-lg leading-relaxed max-w-xl">
                    <p>
                      <strong className="font-semibold text-[var(--brand-primary)]">Lektionen är starten.</strong>{" "}
                      Det är i träningen mellan lektionerna som utvecklingen sker – när du omsätter det du lärt dig i våra simulatorer.
                    </p>
                    <p>
                      Vi vill att du <strong className="font-semibold text-[var(--brand-primary)]">aktivt bokar eget träningspass efter varje lektion</strong>, så att varje pass bygger vidare på förra.
                    </p>
                  </div>
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)]/40 backdrop-blur-sm px-5 py-4 max-w-xl">
                    <p className="font-horus text-lg md:text-xl text-[var(--brand-primary)] leading-snug">
                      30 min lektion + eget träningspass direkt efter
                    </p>
                    <p className="text-sm text-[var(--brand-primary)]/85 mt-2">
                      Rekommenderat upplägg – kort lektion, sedan egen tid i simulatorn medan det sitter.
                    </p>
                  </div>
                  <a
                    href="https://book.sweetspot.io/clubs/use-golf/"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    data-cursor-target
                    data-cursor-padding="10"
                  >
                    Boka lektion
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-2 text-[var(--brand-primary)]">Så funkar det</p>
                  <p className="text-sm text-[var(--brand-primary)]/80 mb-6">Lektion → Träning → Uppföljning</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg font-bold">1</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Lektion</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">
                          Du och tränaren sätter fokus – teknik, strategi och konkreta övningar.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg font-bold">2</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Träning</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">
                          Efteråt bokar du eget pass i simulatorn och tränar på det som precis var relevant.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg font-bold">3</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Uppföljning</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">
                          Nästa lektion tar vid där du är – tydlig plan och utveckling över tid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">

         

          {/* Lektioner & Priser */}
          <Section id="lektioner" className="py-20 -mt-10 sm:-mt-18 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
            <div className="max-w-screen-2xl mx-auto space-y-12">
              <FadeIn>
                <SectionHeader
                  label="Lektioner"
                  heading="Välj längd – samma upplägg i kärnan"
                  description="Simulator ingår under din träningstid."
                  align="center"
                  labelColor="rgba(255, 255, 255, 0.7)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.85)"
                />
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <FadeIn>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--foreground)] p-8 space-y-4">
                    <h3 className="font-horus text-2xl md:text-3xl">30 min</h3>
                    <p className="text-4xl font-semibold">650 kr</p>
                    <hr className="border-[var(--brand-secondary)]/30" />
                    <ul className="space-y-2 text-sm">
                      <li>&bull; Kort och effektiv lektion</li>
                      <li>&bull; Fokus på teknik + konkreta övningar</li>
                      <li>&bull; Tydlig push: träna direkt efter i simulatorn</li>
                      <li>&bull; Simulator ingår</li>
                    </ul>
                    <div className="pt-4">
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Boka lektion
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--foreground)] p-8 space-y-4">
                    <h3 className="font-horus text-2xl md:text-3xl">60 min</h3>
                    <p className="text-4xl font-semibold">1 300 kr</p>
                    <hr className="border-[var(--brand-secondary)]/30" />
                    <ul className="space-y-2 text-sm">
                      <li>&bull; Djupare genomgång</li>
                      <li>&bull; Helhet i spelet</li>
                      <li>&bull; Bygga plan framåt</li>
                      <li>&bull; Simulator ingår</li>
                    </ul>
                    <div className="pt-4">
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Boka lektion
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.15}>
                <div className="text-center bg-[var(--brand-primary)]/10 border-2 border-[var(--brand-secondary)]/20 p-6 max-w-3xl mx-auto">
                  <Text className="text-lg md:text-xl font-semibold text-[var(--brand-primary)] leading-snug">
                    Träna med coach – utvecklas mellan lektionerna i våra simulatorer
                  </Text>
                </div>
              </FadeIn>

            </div>
          </Section>

          {/* Tränare */}
          <Section id="tranare" className="py-20 ">
            <div className="max-w-screen-2xl mx-auto space-y-12">
              <FadeIn>
                <SectionHeader
                  label="Tränare"
                  heading="Våra tränare"
                  description="Erfarna tränare som hjälper dig utvecklas oavsett nivå."
                  align="center"
                />
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Duncan */}
                <FadeIn>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden">
                    <div className="relative aspect-[3/4] w-full border-b-4 border-[var(--brand-secondary)]">
                      <Image
                        src="/images/trainer/duncan.png"
                        alt="Duncan"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-6">
                        <h3 className="font-horus text-3xl text-[var(--brand-primary)]">Duncan</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold uppercase tracking-wider">Måndagar</span>
                        <span className="opacity-60">09:00 – 14:00</span>
                      </div>
                      <Text className="text-sm">
                        Boka 30 eller 60 minuters lektion med Duncan. Fokus på teknik och övningar anpassade efter din nivå.
                      </Text>
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Boka lektion
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Marcus */}
                <FadeIn delay={0.1}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden">
                    <div className="relative aspect-[3/4] w-full border-b-4 border-[var(--brand-secondary)]">
                      <Image
                        src="/images/trainer/marcus.png"
                        alt="Marcus Forsbohl"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-6">
                        <h3 className="font-horus text-3xl text-[var(--brand-primary)]">Marcus Forsbohl</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold uppercase tracking-wider">Fredagar</span>
                        <span className="opacity-60">09:00 – 15:00</span>
                      </div>
                      <Text className="text-sm">
                        Boka 30 eller 60 minuters lektion med Marcus. Helhetsfokus på spelet med personlig utvecklingsplan.
                      </Text>
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Boka lektion
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Kom igång / nybörjare + övriga spår */}
          <Section className="py-20 -mt-10 sm:-mt-18 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className="max-w-screen-2xl mx-auto space-y-12">
              <FadeIn>
                <SectionHeader
                  label="Kom igång / nybörjare"
                  heading="Mer än bara lektioner"
                  description="Kurser och program kompletterar dina privata lektioner – välj det som passar dig."
                  align="center"
                />
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kom igång-kurs */}
                <FadeIn>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-8 space-y-4 h-full flex flex-col">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)]">Kurs</span>
                    <h3 className="font-horus text-2xl md:text-3xl">Kom igång</h3>
                    <Text className="text-sm flex-1">
                      En introduktionskurs med fokus på driver, järn och wedge. Perfekt för dig som vill lära dig grunderna och börja spela. Boka via Sweetspot (Academy).
                    </Text>
                    <div className="pt-4">
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-olive-900)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                      >
                        Boka kurs
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Privatlektion */}
                <FadeIn delay={0.1}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-8 space-y-4 h-full flex flex-col">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)]">Lektion</span>
                    <h3 className="font-horus text-2xl md:text-3xl">Privatlektion</h3>
                    <Text className="text-sm flex-1">
                      En-till-en med en av våra tränare. Anpassad helt efter dina mål och din nivå. 30 min (650 kr) eller 60 min (1 300 kr) – simulator ingår.
                    </Text>
                    <div className="pt-4">
                      <a
                        href="#lektioner"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-olive-900)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                      >
                        Se priser
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Nybörjarkurs (placeholder enligt brief) */}
                <FadeIn delay={0.2}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-8 space-y-4 h-full flex flex-col">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)]">Kurs</span>
                    <h3 className="font-horus text-2xl md:text-3xl">Nybörjarkurs</h3>
                    <Text className="text-sm flex-1">
                      3–4 tillfällen med upplägg för nybörjare, plus spelmöjlighet. Vi återkommer med datum och bokning.
                    </Text>
                    <div className="pt-4">
                      <span className="inline-flex w-full items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-3 font-semibold uppercase tracking-wider rounded-none opacity-70">
                        Kommer snart
                      </span>
                    </div>
                  </div>
                </FadeIn>

                {/* Juniorligan */}
                <FadeIn delay={0.3}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-8 space-y-4 h-full flex flex-col">
                    <span className="font-label text-sm uppercase tracking-widest text-[var(--brand-secondary)]">Liga</span>
                    <h3 className="font-horus text-2xl md:text-3xl">Juniorligan</h3>
                    <Text className="text-sm flex-1">
                      Ligaspel för juniorer – 3 spelare per simulator, 9 hål plus fri lek efteråt. Utveckling och gemenskap för unga golfare. Kräver Junior-medlemskap.
                    </Text>
                    <div className="pt-4">
                      <Link
                        href="/events/juniorligan"
                        className="inline-flex w-full items-center justify-center bg-[var(--brand-olive-900)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                      >
                        Läs mer
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Träna | USE Golf",
  description:
    "Träna smartare. Spela bättre. Lektion 30 min (650 kr) eller 60 min (1 300 kr), simulator ingår. Samma pris året runt. Boka lektion + eget träningspass efter.",
};
