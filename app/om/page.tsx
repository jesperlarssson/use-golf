import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";

export const metadata: Metadata = {
  title: "Om USE",
  description: "Golf på dina villkor. Lär känna USE Golf i Nya Hovås – TrackMan, mat, dryck och gemenskap året runt.",
};

export default function OmPage() {
  return <>
    <EditorialHero label="Om USE Golf" title="Golf på dina villkor." description="Vi startade USE för att göra golfen mer tillgänglig, mer social och roligare. En plats att spela året runt – och gärna stanna en stund till." image="/images/people/7.png" imageAlt="Golf och gemenskap hos USE Golf">
      <Link href="/bokning" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Boka simulator</Link>
    </EditorialHero>

    <section className="mx-auto grid max-w-screen-2xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
      <div><h2 className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Golf och gemenskap i Nya Hovås.</h2><div className="mt-7 max-w-lg space-y-5 text-base leading-relaxed text-[var(--foreground)]/75"><p>En anläggning där du kan träna seriöst eller bara hänga med vänner. Hos oss möts golf, design och gemenskap i en avslappnad miljö i Nya Hovås.</p><p>Sex TrackMan-simulatorer gör det möjligt att spela oavsett väder. Mat, dryck och en fullständig bar gör det lätt att låta rundan bli en hel kväll.</p><p>Du behöver varken vara medlem eller erfaren golfare. Kom som du är, med ditt sällskap och din nyfikenhet på spelet.</p></div></div>
      <div className="relative aspect-[4/5] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-['']"><Image src="/images/people/8.png" alt="Gäster som spelar och umgås hos USE" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
    </section>

    <section className="border-y border-black/15"><div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-3 lg:px-16 lg:py-20">{[
      { title: "Golf för alla", text: "Första svingen eller nästa personbästa. Här finns plats för alla nivåer, alla årstider." },
      { title: "Känsla för detaljer", text: "TrackMan-teknik och en genomtänkt miljö. För dig som uppskattar både spelet och allt runt omkring." },
      { title: "Bättre tillsammans", text: "En runda med vänner, en kväll med kollegor eller nya bekantskaper. Människorna gör USE." },
    ].map((item, index) => <div key={item.title}><p className="mb-5 text-xs tabular-nums text-[var(--brand-olive-900)]">0{index + 1}</p><h2 className="text-2xl font-normal tracking-tight">{item.title}</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--foreground)]/75">{item.text}</p></div>)}</div></section>

    <section className="bg-[var(--brand-olive-900)] text-[var(--brand-primary)]"><div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-center lg:px-16 lg:py-20"><div><p className="mb-5 text-xs uppercase tracking-[.2em] text-white/75">Välkommen till Nya Hovås</p><h2 className="text-3xl font-normal tracking-[-.035em] md:text-4xl">Gör nästa runda till en kväll.</h2></div><Link href="/kontakt" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 border border-white/50 px-7 text-sm transition-colors">Hitta till USE</Link></div></section>
  </>;
}
