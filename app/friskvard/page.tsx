import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function FriskvardPage() {
  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Friskvårdsbidrag</Heading>
          <Text className="mt-4">Simulatorgolf som friskvård – upp till 5 000 kr</Text>
          <Text className="mt-2">Betalning: Epassi/Benify?</Text>
          <Text className="mt-2">Intyg: Så här får du kvitto/underlag</Text>
      </Section>
    </Page>
  );
}


