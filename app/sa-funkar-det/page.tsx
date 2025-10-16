import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function SaFunkarDetPage() {
  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Så funkar det</Heading>
          <Text className="mt-4">Spela simulatorgolf i tre steg.</Text>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li>Boka i app/webb. Välj bay, datum, tid. Max 4 spelare/bay.</li>
            <li>Kod skickas via SMS/e-post innan passet.</li>
            <li>Starta TrackMan, välj bana/spelläge.</li>
          </ol>
          <div className="mt-8 space-y-2">
            <p>Regler & tider: Skovård, mat/dryck, städning av plats, åldersgräns.</p>
            <p>Avbokning: Gratis fram till xx timmar före; därefter debitering x%.</p>
            <p>FAQ: Utrustning? Hyra klubbor? Handicap?</p>
          </div>
      </Section>
    </Page>
  );
}


