import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function KontaktPage() {
  return (
    <Page variant="subpage">
      <Section>
        <Heading as={2}>Öppettider & kontakt</Heading>
        <div className="mt-4 space-y-3">
          <Text className="font-semibold uppercase tracking-wide">Ordinarie öppettider</Text>
          <Text>Alla dagar: 07:00–23:00</Text>
        
        </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Öppettider & kontakt",
  description: "Aktuella öppettider och kontaktuppgifter till USE Golf i Hovås.",
};


