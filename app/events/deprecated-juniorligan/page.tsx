import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";

const sharedDescription = [
  "Juniorligan samlar unga golfare för lek, utveckling och gemenskap.",
  "Tisdagsträffar, 2 timmar: 9 hål + lek/övning.",
  "Lottade lag.",
  "Fokus på glädje och utveckling.",
];

const sharedSetup = ["3 spelare per simulator", "9 hål + spel/lek resterande tid"];
const sharedPerks = ["10% rabatt på bokade tider", "10% rabatt på merch"];

export default function JuniorliganPage() {
  return (
    <Page variant="subpage">
      <Section className="pt-16 ">
        <div className="space-y-4 max-w-4xl">
     
          <Text className="text-[var(--brand-olive-900)] text-lg">
            Juniorligan är vår lekfulla satsning för unga golfare som vill spela ihop, träna
            tillsammans och tävla i ett peppigt lagformat.
          </Text>
          <Text>
            Vi kör två säsonger per år – höst/vinter och vår – där varje träff innehåller nio
            hål, träning och fri lek. Glädje och utveckling står i centrum, och alla får pris i
            slutet.
          </Text>
        </div>
      </Section>

      <Section className="pb-12 -mt-18">
        <div className="space-y-6 text-sm text-[var(--brand-olive-900)]">
          <div>
            <Heading as={3}>Beskrivning</Heading>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {sharedDescription.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as={3}>Upplägg</Heading>
            <p className="mt-1 text-[var(--brand-secondary)] font-semibold">15:00–17:00</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {sharedSetup.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as={3}>Medlemsförmåner</Heading>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {sharedPerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as={3}>Anmälan</Heading>
            <Text>
              Skicka “Juniorligan Höst Vinter” eller “Juniorligan Vår” till{" "}
              <a href="mailto:hello@usegolf.se" className="underline text-[var(--brand-secondary)]">
                hello@usegolf.se
              </a>
              , ange namn + ålder.
            </Text>
          </div>
        </div>
      </Section>

      <Section className="space-y-10 pb-20 -mt-18">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-none border border-white/20 bg-[var(--brand-primary)] space-y-5 text-sm text-[var(--brand-olive-900)]">
            <div>
              <Heading as={3}>Juniorligan – Höst/Vinter 25/26</Heading>
              <Heading as={4} className="mt-4 text-sm font-semibold text-inherit">
                Datum
              </Heading>
              <div className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
                {["18/11", "25/11", "2/12", "9/12", "16/12 (avslutning)"].map((date) => (
                  <span key={date} className="px-3 py-1 rounded-sm border border-[var(--brand-secondary)]/20 bg-[var(--brand-secondary)]/10">
                    {date}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Heading as={4}>Final & priser</Heading>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Avslutning 16/12</li>
                  <li>Alla får pris på något sätt</li>
                </ul>
                <Text className="text-[var(--brand-secondary)] font-semibold mt-1">
                  1 250 kr
                  <span className="text-[var(--brand-olive-900)] font-normal">
                    {" "}
                    (exkl. Junior Use:r-medlemskap á 400 kr/år – inkluderar 1h speltid)
                  </span>
                </Text>
              </div>
              <div>
                <Heading as={4}>Övrigt</Heading>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Begränsat antal platser</li>
                  <li>Lottning avgör grupper</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-none border border-white/20 bg-[var(--brand-primary)] space-y-5 text-sm text-[var(--brand-olive-900)]">
            <div>
              <Heading as={3}>Juniorligan – Våren 2026</Heading>
              <Heading as={4} className="mt-4 text-sm font-semibold text-inherit">
                Datum
              </Heading>
              <div className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
                {[
                  "20/1",
                  "27/1",
                  "3/2",
                  "17/2",
                  "24/2",
                  "3/3",
                  "10/3",
                  "17/3",
                  "24/3 (stor avslutning)",
                ].map((date) => (
                  <span key={date} className="px-3 py-1 rounded-sm border border-[var(--brand-secondary)]/20 bg-[var(--brand-secondary)]/10">
                    {date}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Heading as={4}>Final & priser</Heading>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Avslutning 24/3</li>
                  <li>Alla får pris på något sätt</li>
                </ul>
                <Text className="text-[var(--brand-secondary)] font-semibold mt-1">
                  2 500 kr
                  <span className="text-[var(--brand-olive-900)] font-normal">
                    {" "}
                    (exkl. Junior Use:r-medlemskap á 400 kr/år – inkluderar 1h speltid)
                  </span>
                </Text>
              </div>
              <div>
                <Heading as={4}>Övrigt</Heading>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Begränsat antal platser</li>
                  <li>Lottning avgör grupper</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "Juniorligan",
  description: "All information om Juniorligan – höst, vinter och våren 2026.",
};

