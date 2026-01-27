import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PresentkortPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Presentkort"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Vänster kolumn - SectionHeader */}
              <FadeIn>
                <SectionHeader
                  label="Presentkort"
                  heading="Ge golfglädje"
                  description="Våra presentkort är en enkel gåva till golfaren (eller den som vill bli en). Kom in till oss för att köpa ditt presentkort på plats – eller maila oss så löser vi det snabbt och smidigt."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Köp presentkort med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Så köper du:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">På plats</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Sväng förbi oss på Krogabäcksvägen 2 (plan 3), 436 53 Hovås.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Via mail</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">
                          Skriv till{" "}
                          <a className="underline underline-offset-2 hover:opacity-80 transition" href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF">
                            hello@usegolf.se
                          </a>{" "}
                          så hjälper vi dig.
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
          {/* Kontaktinformation */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="max-w-screen-2xl mx-auto">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Besök oss */}
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                    <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-4">Besök oss</h3>
                    <div className="space-y-2">
                      <Text>Krogabäcksvägen 2</Text>
                      <Text>Plan 3</Text>
                      <Text>436 53 Hovås</Text>
                      <Text className="mt-3">Alla dagar: 09:00–22:00</Text>
                    </div>
                  </div>

                  {/* Snabbast via mail */}
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                    <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-4">Snabbast via mail</h3>
                    <Text>
                      <a 
                        className="underline underline-offset-4 hover:opacity-80 transition" 
                        href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF"
                      >
                        hello@usegolf.se
                      </a>
                    </Text>
                  </div>
                </div>
              </FadeIn>

              {/* CTA-knappar */}
              <FadeIn delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-6 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    data-cursor-target
                    data-cursor-padding="10"
                  >
                    Maila oss
                  </a>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] px-6 py-3 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition"
                    data-cursor-target
                    data-cursor-padding="10"
                  >
                    Kontakt
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
  title: "Presentkort",
  description: "Köp presentkort hos USE Golf – kom in till oss i Hovås eller maila hello@usegolf.se så hjälper vi dig.",
  alternates: {
    canonical: "/presentkort",
  },
  openGraph: {
    title: "Presentkort – USE GOLF",
    description: "Köp presentkort hos USE Golf – kom in till oss i Hovås eller maila hello@usegolf.se.",
    url: "/presentkort",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentkort – USE GOLF",
    description: "Köp presentkort hos USE Golf – kom in till oss i Hovås eller maila hello@usegolf.se.",
  },
};
