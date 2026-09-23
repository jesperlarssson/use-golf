import type { Metadata } from "next";
import Image from "next/image";
import EditorialHero from "@/components/ui/EditorialHero";
import StaendeTidCalculator from "@/components/ui/StaendeTidCalculator";
import { getPricingData, getClosures } from "@/sanity/lib/pricingQueries";
import { defaultPricingData } from "@/lib/prices";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Stående tider",
  description: "Spela på samma tid varje vecka hos USE Golf i Göteborg. Beräkna ett pris och skicka en förfrågan för ditt sällskap.",
  path: "/bokning/staende-tid",
});
export const revalidate = 60;

export default async function StaendeTidPage() {
  const [pricing, closures] = await Promise.all([getPricingData(), getClosures()]);
  return <>
    <EditorialHero label="Stående tider" title="En tid att se fram emot. Varje vecka." description="Samla kompisarna eller kollegorna på en återkommande golftid. Ni väljer dag, tid och antal simulatorer, så hjälper vi er med upplägget." image="/images/swing/3.png" imageAlt="Golfspel hos USE">
      <a href="#berakna" className="cta-sweep inline-flex min-h-14 items-center justify-center bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)]">Beräkna ert pris</a>
    </EditorialHero>
    <section className="bg-[#293329] text-[var(--brand-primary)]">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-6 px-6 py-10 sm:px-10 lg:px-16">
        <Image src="/images/highlights/golf-angular.png" alt="" width={64} height={64} className="h-16 w-16 shrink-0 object-contain" />
        <p className="max-w-xl text-base leading-relaxed">Samma dag och tid varje vecka. Tiden kan användas av någon annan i ert sällskap om ni får förhinder.</p>
      </div>
    </section>
    <section id="berakna" className="scroll-mt-24 mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">Beräkna ert pris</h2>
      <p className="mb-10 mt-5 max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">Välj antal simulatorer, tid och period för en uppskattning. Skicka sedan en förfrågan till oss.</p>
      <StaendeTidCalculator pricingData={pricing || defaultPricingData} closures={closures} />
    </section>
    <section className="border-t border-black/15 bg-[#ebe8dc]">
      <div className="mx-auto grid max-w-screen-2xl gap-8 px-6 py-16 sm:px-10 md:grid-cols-[.6fr_1.4fr] lg:px-16">
        <h2 className="text-3xl font-normal tracking-tight">Villkor för stående tider</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Den stående tiden gäller samma dag och tid varje vecka under perioden ovan.</li>
                  <li>Missad tid kan inte flyttas eller återbetalas.</li>
                  <li>Tiden är ej personlig – den kan användas av annan person i ditt sällskap.</li>
                  <li>Vid helgdagar eller om anläggningen är stängd kompenseras motsvarande tillfälle vid ett senare datum.</li>
                  <li>Vid längre driftavbrott kontaktas du av personal för ersättningstid.</li>
                </ul>
      </div>
    </section>
  </>;
}
