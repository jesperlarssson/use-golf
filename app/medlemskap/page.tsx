import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import UserPassesSection from "@/components/ui/UserPassesSection";

export default function MedlemskapPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Medlemskap"
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
                  label="Medlemskap"
                  heading="Spela mer, betala mindre"
                  description="Som medlem får du alltid rabatt på bokningar och merch, förtur till event och ligor samt 1 timmes speltid när du registrerar dig. Bollar och inomhuspegg ingår."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Fördelar med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <p className="font-horus text-xl md:text-2xl mb-6 text-[var(--brand-primary)]">Medlemsfördelar:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Rabatt på bokningar</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">10% rabatt på alla bokade tider.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Rabatt på merch</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">10% rabatt på USE Golf merch.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Förtur till event</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">Prioriterad plats på event och ligor.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--brand-primary)] mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-[var(--brand-primary)] block">Gratis speltid</strong>
                        <p className="text-sm text-[var(--brand-primary)]/80 mt-1">1 timmes speltid ingår vid registrering.</p>
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

          {/* Medlemskapstyper */}
          <Section className="py-20 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-screen-2xl mx-auto">
              {/* Senior */}
              <FadeIn>
                <div className="overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col h-full">
                  <div className="relative h-64 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/invigning/adam-hampus.png" alt="Senior" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Use:r</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <p className="text-lg font-semibold uppercase tracking-wider">600 kr/år</p>
                      <span className="opacity-60 text-xs">Betalningen kan även delas upp månadsvis.</span>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
                      <li>10% rabatt på alla bokade tider</li>
                      <li>10% rabatt på USE Golf merch</li>
                      <li>10% rabatt på hela CustomClubs utbud från öppning och fram till 1 maj 2026</li>
                      <li>Gratis Custom Fitting hos CustomClubs under hela 2026</li>
                      <li>1 timmes speltid ingår vid registrering</li>
                    </ul>
                    <div className="pt-4">
                      <a href="https://book.sweetspot.io/clubs/use-golf/memberships" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Bli medlem
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Junior */}
              <FadeIn delay={0.1}>
                <div className="overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col h-full">
                  <div className="relative h-64 border-b-2 border-[var(--brand-secondary)]">
                    <Image src="/images/invigning/junior.png" alt="Junior" fill className="object-cover blur-xs scale-105 brightness-90" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Junior Use:r</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <p className="text-lg font-semibold uppercase tracking-wider">400 kr/år</p>
                      <span className="opacity-60 text-xs">Betalningen kan även delas upp månadsvis.</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm flex-1">
                      <li>10% rabatt på alla bokade tider</li>
                      <li>10% rabatt på USE Golf merch</li>
                      <li>10% rabatt på hela CustomClubs utbud från öppning och fram till 1 maj 2026</li>
                      <li>Gratis Custom Fitting hos CustomClubs under hela 2026</li>
                      <li>1 timmes speltid ingår vid registrering</li>
                      <li>Kvalificering till Juniorligan*</li>
                    </ul>
                    <p className="text-xs opacity-80">*För att kunna anmäla sig till Juniorligan måste man vara medlem i USE Golf (Junior).</p>
                    <div className="pt-4">
                      <a href="https://book.sweetspot.io/clubs/use-golf/memberships" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                        Bli medlem
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>

          

          <UserPassesSection />

         
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Medlemskap",
  description: "Medlemskap hos USE Golf – rabatt på spel, förtur till event och speltid vid registrering.",
};


