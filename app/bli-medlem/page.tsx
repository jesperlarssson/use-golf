import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import EmailNotifyForm from "@/components/ui/EmailNotifyForm";

export default function BliMedlemPage() {
  return (
    <Page variant="subpage">
      <Section className="py-24">
        <Container>
          <div className="space-y-6">
            <div>
              <Heading as={2}>Portalen öppnar snart!</Heading>
              <Lead className="mt-2">Håll utkik – vi lanserar medlemsportalen inom kort.</Lead>
            </div>
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <Text className="mb-3">Få ett mail när portalen är öppen:</Text>
              <EmailNotifyForm />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}



