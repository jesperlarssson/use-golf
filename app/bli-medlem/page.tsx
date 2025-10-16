import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import EmailNotifyForm from "@/components/ui/EmailNotifyForm";

export default function BliMedlemPage() {
  return (
    <Page variant="subpage">
      <Section className="py-24">
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
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Bli medlem",
  description: "Bli medlem i USE Golf – få rabatt på bokningar, förtur till event och speltid vid registrering.",
};



