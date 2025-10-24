import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import Banner from "@/components/ui/Banner";
import MembershipToggle from "@/components/ui/MembershipToggle";

export default function MedlemskapPage() {
  return (
    <FullBleed>
      <div className="border-y border-[var(--brand-secondary)]">
        <Page variant="subpage">
        

         
          {/* Intro med bild + text */}
          <Section className="">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Medlemskap hos USE Golf</Heading>
                <Lead className="text-[var(--brand-olive-900)]">Välj ett medlemskap – spela mer, betala mindre, och bli en del av vårt community.</Lead>
                <Text>
                  Som medlem får du alltid rabatt på bokningar och merch, förtur till event och ligor samt 1 timmes speltid när du
                  registrerar dig. Bollar och inomhuspegg ingår.
                </Text>
              </div>
            </div>
          </Section>

         

          <Section className="pt-2 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Senior */}
              <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                  <Image src="/images/club.png" alt="Senior" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Use:r</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                  <p className="text-lg font-semibold uppercase tracking-wider ">600 kr/år </p>
                  <span className="opacity-60 text-xs ">Betalningen kan även delas upp månadsvis.</span>
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>10% rabatt på alla bokade tider</li>
                    <li>10% rabatt på USE Golf merch</li>
                    <li>Förtur till event & ligor</li>
                    <li>1 timmes speltid ingår vid registrering</li>
                  </ul>
                  <div>
                    <a href="/bli-medlem" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Bli medlem</a>
                  </div>
                </div>
              </div>

              {/* Junior */}
              <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                  <Image src="/images/club2.png" alt="Junior" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Junior Use:r</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                  <p className="text-lg font-semibold uppercase tracking-wider">400 kr/år</p>
                  <span className="opacity-60 text-xs ">Betalningen kan även delas upp månadsvis.</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>10% rabatt på alla bokade tider</li>
                    <li>10% rabatt på USE Golf merch</li>
                    <li>Förtur till event & ligor</li>
                    <li>1 timmes speltid ingår vid registrering</li>
                    <li>Kvalificering till Juniorligan*</li>

                  </ul>
                  <p className="text-xs opacity-80">*För att kunna anmäla sig till Juniorligan måste man vara medlem i USE Golf (Junior).</p>
                  <div>
                    <a href="/bli-medlem" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Bli medlem</a>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          

          <Section id="spelpott" className="pt-10 pb-6 -mt-10 sm:-mt-18">
            <div className="space-y-6">
              <Heading as={2}>User Passes</Heading>
              <Text className="max-w-3xl">
                För dig som vill spela ofta under säsongen. Välj nivå efter hur mycket du tror du kommer spela. Du kan ta med gäster utan extra kostnad och allt gäller i 12 månader från inköp. Se villkor nedan.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Spelpott Small */}
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <h3 className="font-horus text-2xl">Small</h3>
                    <hr className="border-[var(--brand-secondary)]/40" />
                    <div className="text-4xl font-semibold ">5&nbsp;000 kr</div>
                    <div className="text-sm">Spelvärde 6&nbsp;000 kr <span className="opacity-80">(17 % bonus)</span></div>
                  </div>
                  <div>
                    <span role="link" aria-disabled="true" tabIndex={-1} className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none opacity-60 cursor-not-allowed pointer-events-none transition" data-cursor-target data-cursor-padding="10">SNART TILLGÄNGLIGT</span>
                  </div>
                  <div>
                    <a href="/medlemsvillkor" className="underline text-sm">Medlemskapsvillkor</a>
                  </div>
                </div>

                {/* Medium */}
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <h3 className="font-horus text-2xl">Medium</h3>
                    <hr className="border-[var(--brand-secondary)]/40" />
                    <div className="text-4xl font-semibold ">9&nbsp;000 kr</div>
                    <div className="text-sm">Spelvärde 10&nbsp;800 kr <span className="opacity-80">(20 % bonus)</span></div>
                  </div>
                  <div>
                    <span role="link" aria-disabled="true" tabIndex={-1} className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none opacity-60 cursor-not-allowed pointer-events-none transition" data-cursor-target data-cursor-padding="10">SNART TILLGÄNGLIGT</span>
                  </div>
                  <div>
                    <a href="/medlemsvillkor" className="underline text-sm">Medlemskapsvillkor</a>
                  </div>
                </div>

                {/* Large */}
                <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <h3 className="font-horus text-2xl">Large</h3>
                    <hr className="border-[var(--brand-secondary)]/40" />
                    <div className="text-4xl font-semibold ">14&nbsp;000 kr</div>
                    <div className="text-sm">Spelvärde 17&nbsp;500 kr <span className="opacity-80">(25 % bonus)</span></div>
                  </div>
                  <div>
                    <span role="link" aria-disabled="true" tabIndex={-1} className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none opacity-60 cursor-not-allowed pointer-events-none transition" data-cursor-target data-cursor-padding="10">SNART TILLGÄNGLIGT</span>
                  </div>
                  <div>
                    <a href="/medlemsvillkor" className="underline text-sm">Medlemskapsvillkor</a>
                  </div>
                </div>
              </div>
            </div>
          </Section>

         
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Medlemskap",
  description: "Medlemskap hos USE Golf – rabatt på spel, förtur till event och speltid vid registrering.",
};


