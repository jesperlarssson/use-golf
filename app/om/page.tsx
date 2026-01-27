import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OmPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Om USE Golf"
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
                  label="Om oss"
                  heading="USE Golf – modern golfkultur i Göteborg"
                  description="Vi startade USE Golf för att göra golfen mer tillgänglig, mer social och mer rolig. Alla ska kunna spela året runt, oavsett väder, och i en miljö som känns modern och inspirerande. Vi bygger en plats där golf möter kultur, design och community."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Värderingar med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Vi står för:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Tillgänglighet</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Golf för alla, året runt.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Kvalitet</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Bästa tekniken och bästa utrustningen.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Gemenskap</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">En community som välkomnar alla.</p>
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
          {/* Innehåll */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="max-w-screen-2xl mx-auto">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-6">
                    <Text className="text-lg">
                      En anläggning där du kan träna seriöst eller bara hänga med vänner. Vår filosofi är enkel: <strong>golf på dina villkor</strong>.
                    </Text>
                  </div>
                  <div className="relative h-64 md:h-80 border-2 border-[var(--brand-secondary)] overflow-hidden">
                    <Image src="/images/baller3.png" alt="USE Golf – bild på golfboll" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
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
  title: "Om oss",
  description: "USE Golf – modern golfkultur i Göteborg. Tillgänglig, social och rolig inomhusgolf året runt.",
};


