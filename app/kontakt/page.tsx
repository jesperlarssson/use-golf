import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import ContactForm from "@/components/ui/ContactForm";

export default function KontaktPage() {
  return (
    <Page variant="subpage">
      <Section className="pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <Heading as={2}>Kontakt</Heading>
              <div className="space-y-3">
                <Text className="font-semibold uppercase tracking-wide text-sm text-[var(--brand-secondary)]">Öppettider</Text>
                <Text>Alla dagar: 07:00–23:00</Text>

                <ContactForm />
              </div>
            </div>
            <aside className="space-y-3">
              <div>
                <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-2">Besök oss</h3>
                <Text>Krogabäcksvägen 2</Text>
                <Text>436 53 Hovås</Text>
              </div>
              <div>
                <h3 className="font-semibold uppercase text-xl text-[var(--brand-secondary)] mb-2">Kontakt</h3>
                <Text>hello@usegolf.se</Text>
              </div>
            </aside>
          </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta USE Golf i Hovås – adress, e-post och öppettider.",
};



