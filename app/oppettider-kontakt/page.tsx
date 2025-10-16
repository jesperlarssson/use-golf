import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function KontaktPage() {
  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Öppettider & kontakt</Heading>
          <Text className="mt-2">Öppet just nu: Vecka/datumintervall + tider</Text>
          
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Öppettider & kontakt",
  description: "Aktuella öppettider och kontaktuppgifter till USE Golf i Hovås.",
};


