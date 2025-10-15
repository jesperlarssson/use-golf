import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import InquiryForm from "@/components/ui/InquiryForm";
import Image from "next/image";

export default function ForetagseventPage() {
  return (
    <Page>
      <Section className="pt-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4 max-w-3xl">
            <Heading as={2}>Företagsevent</Heading>
            <Lead className="text-[var(--brand-olive-900)]">Kickoff, kundevent eller teamdag – vi skräddarsyr helheten: spel, tävlingar, mat och dryck.</Lead>
            <Text>
              Oavsett om ni vill ha en prestigefylld tävling, en social AW eller en kundkväll så sätter vi upp ett paket som passar er. Hör av er för förslag och prisexempel.
            </Text>
          </div>
        </div>
      </Section>

      {/* Företagstävlingar (torsdagar) i medlemskaps-stil (bild + overlay + text) */}
      <Section className="-mt-16">
        <div className="mx-auto max-w-screen-2xl">
          <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
            <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
              <Image src="/images/render2.PNG" alt="Företagstävlingar (torsdagar)" fill className="object-cover blur-sm scale-105 brightness-90" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Företagstävlingar</h3>
                <p className="text-md text-[var(--brand-primary)]/80 uppercase tracking-wider">Torsdagar</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <Text>
                Torsdagar kommer vara allokerade för företagsevent där man som bolag kan hyra hela lokalen i antingen 2 eller 3 timmar.
              </Text>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>2 timmar</strong> – 9&nbsp;500 kr ex moms för hela lokalen (6 simulatorer) plus tillval såsom branding i lokalen/på TrackMan samt mat och dryck.
                </li>
                <li>
                  <strong>3 timmar</strong> – 12&nbsp;000 kr ex moms för hela lokalen (6 simulatorer) plus tillval såsom branding i lokalen/på TrackMan samt mat och dryck.
                </li>
              </ul>
              <div>
                <a href="#forfragan" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Skicka förfrågan</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Förfrågan */}
      <Section id="forfragan" className="pb-16 -mt-10">
        <div className="mx-auto max-w-screen-2xl">
          <Heading as={3} className="mb-4">Skicka förfrågan</Heading>
          <InquiryForm subject="Förfrågan Företagstävlingar (torsdagar)" />
        </div>
      </Section>
    </Page>
  );
}


