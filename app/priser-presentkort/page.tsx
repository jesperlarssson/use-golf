import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Typography";

export default function PriserPage() {
  return (
    <Page variant="subpage">
      <Section>
        <Container>
          <Heading as={2}>Priser & presentkort</Heading>
          <ul className="space-y-2 mt-4">
            <li>Timpris bay: mån–tors {"{"}{"{"}pris{"}"}{"}"} kr/h | fre–sön {"{"}{"{"}pris{"}"}{"}"} kr/h</li>
            <li>Medlemspris: {"{"}{"{"}xx{"}"}{"}"}% rabatt</li>
            <li>Hyra klubbor: {"{"}{"{"}pris{"}"}{"}"} kr/pass</li>
            <li>Presentkort: Köp i receptionen/online</li>
          </ul>
        </Container>
      </Section>
    </Page>
  );
}


