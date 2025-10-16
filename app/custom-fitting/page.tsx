import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Lead } from "@/components/ui/Typography";

export default function CustomFittingPage() {
  return (
    <Page>
      <Section className="py-24">
        <div className="text-center">
        
          <Lead className="mt-2">Kommer snart</Lead>
        </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Custom fitting",
  description: "Custom fitting hos USE Golf – optimera din utrustning med data.",
};




