import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Page from "@/components/ui/Page";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import SweetspotEmbed from "@/components/ui/SweetspotEmbed";
import FullBleed from "@/components/ui/FullBleed";
import Banner from "@/components/ui/Banner";
import EmailNotifyForm from "@/components/ui/EmailNotifyForm";

export const metadata = {
  title: "Bokning | USE GOLF",
};

export default function BookingPage() {
  return (
    <Page variant="subpage">


      <Section className="py-12">
        <Container>
          <div className="space-y-6">
            <div>
              <Heading as={2}>Bokningsportalen öppnar snart!</Heading>
              <Lead className="mt-2">Håll utkik – vi lanserar bokningsportalen inom kort.</Lead>
            </div>
            <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
              <Text className="mb-3">Få ett mail när bokningen är öppen:</Text>
              <EmailNotifyForm />
            </div>
          </div>
          {/** 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start ">
            <SweetspotEmbed className="min-h-[520px]" height={720} />
            <div className="max-w-prose text-base leading-relaxed">
              <Heading as={3} className="uppercase tracking-wider mb-2">Träna. Spela. Utmana.</Heading>
              <p>
                Hos oss bokar du din tid direkt via <strong>Sweetspot</strong> – enkelt och smidigt.
              </p>
              <p className="mt-4">
                Alla våra simulatorer är utrustade med <strong>TrackMan</strong>, teknologin som används världen över. Vill du spela Augusta eller St Andrews? Eller bara köra en 9-håls med polarna efter jobbet? Du bestämmer.
              </p>
              <p className="mt-4">Det här får du när du bokar en simulator hos oss:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>300+ banor världen över</strong> – från klassiker till bucket list-banor.</li>
                <li><strong>Exakt data på varje slag</strong> – från bollhastighet till spinn.</li>
                <li><strong>Spela eller träna</strong> – välj mellan casual golf, tävling eller djup analys.</li>
                <li><strong>Alltid perfekt väder</strong> – året runt, oavsett Göteborgs klimat.</li>
              </ul>
            </div>
          </div>
           */}
        </Container>
      </Section>
    </Page>
  );
}


