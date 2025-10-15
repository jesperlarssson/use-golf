import Section from "@/components/ui/Section";
import Page from "@/components/ui/Page";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import EmailNotifyForm from "@/components/ui/EmailNotifyForm";

export const metadata = {
  title: "Boka Träning | USE GOLF",
  description: "PGA Certifierade tränare kommer gå att boka inom kort.",
};

export default function TrainingBookingPage() {
  return (
    <Page variant="subpage">
      <Section className="py-12">
          <div className="space-y-6">
            <div>
              <Heading as={2}>Träningsbokning öppnar snart!</Heading>
              <Lead className="mt-2">PGA Certifierade tränare kommer gå att boka inom kort.</Lead>
            </div>
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <Text className="mb-3">Få ett mail när träningsbokningen är öppen:</Text>
              <EmailNotifyForm />
            </div>
          </div>
      </Section>
    </Page>
  );
}


