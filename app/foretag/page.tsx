import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

export default function ForetagPage() {
  const tiers = [
    { name: "Bronze", price: "10 000 kr/år" },
    { name: "Silver", price: "20 000 kr/år" },
    { name: "Gold", price: "30 000 kr/år" },
  ];

  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Företag</Heading>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {tiers.map((t) => (
              <div key={t.name} className="border rounded p-4">
                <h2 className="text-xl font-semibold">{t.name}</h2>
                <p className="opacity-70">{t.price}</p>
                <ul className="mt-3 list-disc list-inside text-sm">
                  <li>Speltimmar</li>
                  <li>Konferenspass</li>
                  <li>Skärmareklam</li>
                  <li>Nätverk</li>
                  <li>Personalaktivitet</li>
                </ul>
                <a href="#" className="mt-4 inline-block rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-4 py-2">Boka möte</a>
              </div>
            ))}
          </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Företag",
  description: "Företagslösningar hos USE Golf – medlemskap, events och nätverk.",
};


