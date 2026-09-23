import { getMembershipPricing } from "@/lib/membershipPricing";
import { bookingLinks } from "@/lib/bookingLinks";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Medlemskap",
  description: "Bli USE:R hos USE Golf i Göteborg. 10 % rabatt på spel och merch, förtur till event och en timmes speltid när du registrerar dig.",
  path: "/medlemskap",
});

const membershipUrl = bookingLinks.membership;
const benefits = [
  { value: "10", unit: "%", title: "Rabatt på spel", text: "Medlemsrabatt på alla bokade tider. För vardagsrundan, helgmatchen och allt däremellan." },
  { value: "1", unit: "timme", title: "Speltid vid registrering", text: "En timmes speltid ingår när du registrerar dig som medlem." },
  { value: "10", unit: "%", title: "Rabatt på merch", text: "Rabatt på USE Golf merch. Samma känsla, även utanför simulatorn." },
  { value: "Förtur", unit: "", title: "Förtur till aktiviteter", text: "Prioriterad plats på event, ligor och tävlingar. Mer att se fram emot tillsammans." },
];

export default async function MembershipPage() {
  const { userAnnualPrice } = await getMembershipPricing();
  return <>
    <EditorialHero label="Medlemskap · USE:R" title="Spela mer, betala mindre." description="Gör USE till din plats för golf. Medlemsförmåner, fler rundor och en gemenskap att komma tillbaka till – året runt." image="/images/swing/4.png" imageAlt="Golfspelare som slår ett slag i en TrackMan-simulator hos USE">
      <a href="#medlemskap" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Upptäck USE:R</a>
    </EditorialHero>

    <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div data-reveal className="mb-12 flex max-w-2xl flex-col gap-6"><div><h2 className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Det här ingår.</h2></div><p className="max-w-sm text-base leading-relaxed text-[var(--foreground)]/75">För dig som gärna spelar en runda till. Här är det som ingår när du blir en del av USE.</p></div>
      <div className="grid border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(benefit => <article key={benefit.title} data-reveal className="border-b border-black/20 py-8 sm:odd:pr-8 sm:even:pl-8 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:last-child)]:border-r">
        <p className="flex min-h-20 flex-wrap items-baseline gap-2 text-[var(--brand-olive-900)]"><span className={`${benefit.value === "Förtur" ? "text-5xl" : "text-7xl"} font-normal leading-none tracking-[-.06em] tabular-nums`}>{benefit.value}</span>{benefit.unit && <span className="text-xl">{benefit.unit}</span>}</p>
        <h3 className="mt-6 text-xl font-normal tracking-tight">{benefit.title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/75">{benefit.text}</p>
      </article>)}</div>
    </section>

    <section id="medlemskap" className="scroll-mt-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
      <div className="mx-auto grid max-w-screen-2xl md:grid-cols-2">
        <div data-reveal="image" className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-['']"><Image src="/images/people/7.png" alt="Golfspelare som umgås hos USE" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" /><p className="absolute bottom-8 left-6 font-logo text-4xl text-white sm:left-10 lg:left-16">USE GOLF</p></div>
        <div data-reveal className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20"><h2 className="text-5xl font-normal tracking-[-.04em]">USE:R</h2>{userAnnualPrice !== null ? <p className="mt-7 flex items-baseline gap-3"><span className="text-7xl font-normal tracking-[-.06em] tabular-nums">{userAnnualPrice.toLocaleString("sv-SE")}</span><span className="text-lg text-white/80">kr / år</span></p> : <a href={membershipUrl} className="mt-7 inline-flex min-h-11 items-center text-lg underline underline-offset-4">Se aktuellt pris i Alba</a>}<p className="mt-6 max-w-md text-base leading-relaxed text-white/80">Rabatt på spel och merch, en timmes speltid vid registrering och förtur till det som händer hos oss.</p><div className="my-8 border-y border-white/25 py-5"><p className="text-sm leading-relaxed">Dessutom ingår gratis Custom Fitting hos CustomClubs under 2026.</p></div><a href={membershipUrl} className="cta-sweep inline-flex min-h-14 items-center justify-between gap-8 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Bli medlem</a><Link href="/medlemsvillkor" className="mt-4 inline-flex min-h-11 items-center text-sm text-white/80 underline underline-offset-4">Läs medlemsvillkoren</Link></div>
      </div>
    </section>

    <section className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-[.8fr_1.2fr] lg:px-16 lg:py-28"><div data-reveal><h2 className="text-4xl font-normal tracking-[-.035em]">Frågor om medlemskapet.</h2></div><div data-reveal className="border-t border-black/20">{[
      { q: "Behöver jag vara medlem för att spela?", a: "Nej, du kan boka simulator och spela utan medlemskap. Medlemskap krävs för våra aktiviteter och tävlingar." },
      { q: "Vad ingår vid registreringen?", a: "En timmes speltid ingår när du registrerar dig. Bollar och inomhuspegg finns på plats." },
    ].map(item => <details key={item.q} className="group border-b border-black/20"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-base [&::-webkit-details-marker]:hidden">{item.q}<span aria-hidden="true" className="text-xl group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl group-open:block">−</span></summary><p className="max-w-xl pb-6 text-sm leading-relaxed text-[var(--foreground)]/75">{item.a}</p></details>)}<Link href="/kontakt" className="mt-5 inline-flex min-h-11 items-center gap-6 text-sm underline underline-offset-4">Fler frågor? Kontakta oss</Link></div></section>
  </>;
}
