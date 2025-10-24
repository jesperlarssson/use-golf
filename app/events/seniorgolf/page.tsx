import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";

export default function SeniorgolfPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Intro */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Seniorgolf – Order of Merit (55+)</Heading>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>När:</strong> Måndag–torsdag</li>
                  <li><strong>Tider:</strong> 09.00–12.00 eller 12.00–15.00</li>
                  <li><strong>Pris:</strong> 300 kr per person (vid bokning av simulator för fyra personer)</li>
                  <li><strong>Platser:</strong> Först till kvarn</li>
                </ul>
                <div>
                  <a href="/bokning" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka seniorblock</a>
                </div>
              </div>
              <div>
                <div className="relative h-56 border-2 border-[var(--brand-secondary)]/60 overflow-hidden">
                  <Image src="/images/club.png" alt="Seniorgolf" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </Section>

          {/* Så anmäler du dig & Bra att veta */}
          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Så anmäler du dig</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Boka en av seniorblocken (09–12 eller 12–15) och meddela “Seniorgolf”.</li>
                  <li>Betalning sker på plats eller i samband med bokning.</li>
                </ul>
              </div>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <h3 className="font-horus text-2xl">Bra att veta</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Vi anpassar banor och spelformat för jämnt och roligt spel.</li>
                  <li>Vid fullbokning tillämpas väntelista.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Upplägg */}
          <Section className="-mt-10 sm:-mt-18">
            <Heading as={3}>Upplägg</Heading>
            <Text className="max-w-xl">
              Spela inom angivna tider, ensam eller i fyrboll. Poäng räknas till vår Order of Merit – de bästa går vidare till slutspel i slutet av säsongen. Veckovisa leaderboard och totalställning uppdateras här på sidan.
            </Text>
          </Section>

          
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Seniorgolf – Order of Merit",
  description: "Mån–tors 09–12 eller 12–15. 300 kr per person vid fyrapersbokning. Först till kvarn.",
};


