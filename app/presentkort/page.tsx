import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Lead, Text } from "@/components/ui/Typography";

export default function PresentkortPage() {
  return (
    <Page variant="subpage">
      <Section className="pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Heading as={2}>Presentkort</Heading>
            <Lead className="text-[var(--brand-olive-900)]">
              Ge bort en runda, en timme i simulatorn eller en anledning att hänga i Hovås.
            </Lead>
            <Text>
              Våra presentkort är en enkel gåva till golfaren (eller den som vill bli en). Kom in till oss för att köpa ditt
              presentkort på plats – eller maila oss så löser vi det snabbt och smidigt.
            </Text>

            <div className="pt-2">
              <p className="font-semibold uppercase tracking-wide text-sm text-[var(--brand-secondary)]">Så köper du</p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
                <li>
                  <strong>På plats</strong> – sväng förbi oss på Krogabäcksvägen 2 (plan 3), 436 53 Hovås.
                </li>
                <li>
                  <strong>Via mail</strong> – skriv till{" "}
                  <a className="underline underline-offset-4" href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF">
                    hello@usegolf.se
                  </a>{" "}
                  så hjälper vi dig.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF"
                className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                data-cursor-target
                data-cursor-padding="10"
              >
                Maila oss
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition"
                data-cursor-target
                data-cursor-padding="10"
              >
                Kontakt
              </a>
            </div>
          </div>

          <aside className="space-y-3">
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-2">Besök oss</h3>
              <Text>Krogabäcksvägen 2</Text>
              <Text>Plan 3</Text>
              <Text>436 53 Hovås</Text>
              <Text className="mt-3">Alla dagar: 09:00–22:00</Text>
            </div>
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-2">Snabbast via mail</h3>
              <Text>
                <a className="underline underline-offset-4" href="mailto:hello@usegolf.se?subject=Presentkort%20%E2%80%93%20USE%20GOLF">
                  hello@usegolf.se
                </a>
              </Text>
            </div>
          </aside>
        </div>
      </Section>
    </Page>
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


