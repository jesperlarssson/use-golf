import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/ui/InquiryForm";
import BokaLokalenCalculator from "@/components/ui/BokaLokalenCalculator";
import { getClosures, getVenueBookingPricing } from "@/sanity/lib/pricingQueries";

export const metadata: Metadata = {
  title: "Företag & event",
  description: "After work, företagsevent eller hyr hela USE Golf i Nya Hovås. Planera en kväll med TrackMan, mat och dryck för ert team.",
};

// Kalkylatorns priser och stängda datum kommer från Sanity; webhooken revaliderar direkt.
export const revalidate = 60;

export default async function ForetagPage() {
  const [closures, venuePricing] = await Promise.all([getClosures(), getVenueBookingPricing()]);
  return <>
    <section className="relative isolate flex min-h-[640px] overflow-hidden items-end bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
      <div className="hero-parallax absolute inset-0"><Image src="/images/lokalen/3.png" alt="USE Golfs lounge och simulatorer för företagsevent" fill priority sizes="100vw" className="hero-media object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="hero-copy hero-copy-scroll relative mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-40 sm:px-10 lg:px-16 lg:pb-20">
        <p className="mb-6 text-xs uppercase tracking-[.2em] text-white/80">Företag & event</p>
        <h1 className="max-w-3xl text-balance text-5xl font-normal leading-[1.06] tracking-[-.04em] sm:text-6xl lg:text-7xl">En bättre kväll<br />med kollegorna.</h1>
        <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/85">Byt mötesrummet mot golf, god mat och något att skåla i. Vi skapar ett event som passar er, oavsett golfvana.</p>
      </div>
    </section>
    <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <h2 data-reveal className="mb-12 text-balance text-4xl font-normal tracking-[-.035em] md:text-5xl">Samla kollegor och kunder på USE.</h2>
      <div className="grid gap-10 md:grid-cols-3">{[
        { title: "After Work", image: "/images/people/9.png", text: "Runda av arbetsdagen med avslappnat spel och något gott i glaset. En enkel anledning att ses utanför kontoret." },
        { title: "Företagsevent", image: "/images/people/1.png", text: "Kickoff, kundkväll eller teambuilding. Vi hjälper er att kombinera golf, mat och dryck i ett gemensamt upplägg." },
        { title: "Hyr hela USE", image: "/images/lokalen/2.png", text: "Hela lokalen, alla sex TrackMan-simulatorer och en kväll bara för er. Gott om plats för både tävling och mingel.", href: "#priskalkyl", cta: "Räkna på priset" },
      ].map(item => <article key={item.title} data-reveal>
        <div data-reveal="image" className="relative mb-6 aspect-[4/3] overflow-hidden outline outline-1 -outline-offset-1 outline-black/10"><Image src={item.image} alt={item.title + " hos USE Golf"} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" /></div>
        <h3 className="text-2xl font-normal tracking-tight">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/75">{item.text}</p><a href={item.href ?? "#forfragan"} className="mt-5 inline-flex min-h-11 items-center gap-6 text-sm underline underline-offset-8">{item.cta ?? "Planera ert event"}</a>
      </article>)}</div>
    </section>
    <section id="priskalkyl" aria-labelledby="priskalkyl-heading" className="scroll-mt-24 border-t border-black/10">
      <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div data-reveal className="mb-12 flex max-w-2xl flex-col gap-6"><h2 id="priskalkyl-heading" className="text-balance text-4xl font-normal tracking-[-.035em] md:text-5xl">Räkna på hela lokalen.</h2><p className="max-w-md text-base leading-relaxed text-[var(--foreground)]/75">Välj datum, tid och tillval för att få en uppskattning av priset. Skicka sedan en förfrågan direkt – den är inte bindande.</p></div>
        <div data-reveal><BokaLokalenCalculator closures={closures} venuePricing={venuePricing} /></div>
      </div>
    </section>
    <section id="forfragan" className="scroll-mt-24 border-t border-black/10 bg-[#ebe8dc]">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:px-16 lg:py-28">
        <div data-reveal><h2 className="text-balance text-4xl font-normal tracking-[-.035em] md:text-5xl">Planera ert event.</h2><p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--foreground)]/75">Fyll i era uppgifter så hör vi av oss med ett upplägg för ert sällskap. Förfrågan är inte bindande.</p><p className="mt-8 text-sm">Vill du hellre prata med oss?<br /><a href="tel:+46767174034" className="inline-flex min-h-11 items-center underline underline-offset-4">076-717 40 34</a></p></div>
        <InquiryForm />
      </div>
    </section>
  </>;
}
