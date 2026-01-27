import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function KontaktPage() {
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="Kontakt"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Vänster kolumn - SectionHeader */}
              <FadeIn>
                <SectionHeader
                  label="Kontakt"
                  heading="Kontakta oss"
                  description="Har du frågor eller vill boka ett event? Hör av dig så hjälper vi dig."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
              {/* Höger kolumn - Kontaktinfo med glassy effekt */}
              <FadeIn delay={0.1}>
                <div className="backdrop-blur-md bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)]/30 p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-horus text-xl md:text-2xl mb-3 text-[var(--brand-primary)]">Besök oss</h3>
                      <Text className="text-[var(--brand-primary)]">Krogabäcksvägen 2</Text>
                      <Text className="text-[var(--brand-primary)]">436 53 Hovås</Text>
                    </div>
                    <div>
                      <h3 className="font-horus text-xl md:text-2xl mb-3 text-[var(--brand-primary)]">Kontakt</h3>
                      <Text className="text-[var(--brand-primary)]">hello@usegolf.se</Text>
                    </div>
                    <div>
                      <h3 className="font-horus text-xl md:text-2xl mb-3 text-[var(--brand-primary)]">Öppettider</h3>
                      <Text className="text-[var(--brand-primary)]">Alla dagar: 09:00–22:00</Text>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">
          {/* Kontaktformulär */}
          <Section className="py-20 -mt-10 sm:-mt-18 pb-16">
            <div className="max-w-screen-2xl mx-auto">
              <FadeIn>
                <div className="max-w-2xl">
                  <SectionHeader
                    label="Meddelande"
                    heading="Skicka meddelande"
                    description="Fyll i formuläret nedan så hör vi av oss så snart som möjligt."
                    align="left"
                    maxWidth="full"
                    variant="small"
                  />
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta USE Golf i Hovås – adress, e-post och öppettider.",
};



