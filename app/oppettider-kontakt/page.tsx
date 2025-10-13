import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function KontaktPage() {
  return (
    <Page variant="subpage">
      <Section>
        <Container>
          <Heading as={2}>Öppettider & kontakt</Heading>
          <Text className="mt-2">Öppet just nu: Vecka/datumintervall + tider</Text>
          
        </Container>
      </Section>
    </Page>
  );
}


