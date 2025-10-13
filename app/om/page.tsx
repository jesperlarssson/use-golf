import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import Banner from "@/components/ui/Banner";

export default function OmPage() {
  return (
    <FullBleed>

      <div className="border-y-2 border-[var(--brand-secondary)]/40">
        <Page variant="subpage">
          {/* Sektion 1 */}
          <Section>
            <Container>
              <div className="space-y-4">


                <Heading as={2} >USE Golf – modern golfkultur i Göteborg</Heading>
                <Lead className="text-[var(--brand-olive-900)]">Vi startade USE Golf för att göra golfen mer tillgänglig, mer social och mer rolig. Alla ska kunna spela året runt, oavsett väder, och i en miljö som känns modern och inspirerande.</Lead>
                <Text>
                  Vi bygger en plats där golf möter kultur, design och community. En anläggning där du kan träna seriöst eller bara hänga med vänner. Vår filosofi är enkel: golf på dina villkor.
                </Text>
                <div>
                  <p className="font-semibold">Vi står för:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Tillgänglighet</strong> – golf för alla, året runt.</li>
                    <li><strong>Kvalitet</strong> – bästa tekniken och bästa utrustningen.</li>
                    <li><strong>Gemenskap</strong> – en community som välkomnar alla.</li>
                  </ul>
                </div>
              </div>

            </Container>
          </Section>


        </Page>
      </div>
    </FullBleed>
  );
}


