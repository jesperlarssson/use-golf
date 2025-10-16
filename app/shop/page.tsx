import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function ShopPage() {
  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Shop</Heading>
          <Text className="mt-4">Merch & lifestyle</Text>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded p-4">
                <div className="aspect-square bg-black/5 rounded mb-3" />
                <p>Produkt {i + 1}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 border rounded">
            <p className="font-semibold">Limited – släpps {"{"}{"{"}datum{"}"}{"}"}</p>
            <a href="#" className="mt-2 inline-block rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-4 py-2">Handla nu</a>
          </div>
      </Section>
    </Page>
  );
}


