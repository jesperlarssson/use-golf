import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VenueHighlights from "@/components/ui/VenueHighlights";

export const metadata: Metadata = {
  title: "Göteborgs premiumdestination för indoor golf",
  description: "Spela på TrackMan, umgås och njut av mat och dryck hos USE Golf i Nya Hovås. Boka simulator eller planera ert nästa företagsevent.",
};

const questions = [
  { q: "Behöver jag vara medlem för att spela?", a: "Nej, alla är välkomna. Som medlem får du rabatt på spel och fler förmåner.", href: "/medlemskap", label: "Se medlemskapet" },
  { q: "Hur bokar jag en simulator?", a: "På vår bokningssida hittar du priser och vägen till lediga tider. Välj en tid som passar dig och ditt sällskap.", href: "/bokning", label: "Till bokning" },
  { q: "Kan vi boka ett företagsevent?", a: "Absolut. Från en avslappnad after work till ett event med hela USE för er själva. Vi hjälper er med golf, mat och dryck.", href: "/foretag#forfragan", label: "Planera ert event" },
  { q: "Var ligger USE och finns det parkering?", a: "Du hittar oss på Krogabäcksvägen 2 i Nya Hovås, på plan 3. Två timmars fri parkering finns i parkeringshuset. Aktivera parkeringen i EasyPark när du kommer." },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate flex min-h-[min(850px,100svh)] items-end overflow-hidden bg-[#262b23] text-[var(--brand-primary)]">
        {/* Befintlig bild tills Axel levererar nytt hero-material. */}
        <div className="hero-parallax absolute inset-0"><Image src="/hero/1.png" alt="TrackMan-simulatorer och lounge hos USE Golf i Nya Hovås" fill priority sizes="100vw" className="hero-media object-cover object-[62%_center]" /></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,17,.82),rgba(16,23,17,.40)_65%,rgba(16,23,17,.12))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="hero-copy hero-copy-scroll relative mx-auto w-full max-w-screen-2xl px-6 pb-28 pt-40 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <p className="mb-7 text-xs font-medium uppercase tracking-[.24em] text-white/85">USE Golf · Nya Hovås</p>
          <h1 className="max-w-[950px] text-balance text-[clamp(2rem,10.5vw,2.6rem)] sm:text-[clamp(2.6rem,5.7vw,5.5rem)] font-normal leading-[1.04] tracking-[-.045em]">Göteborgs premiumdestination för indoor golf</h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">Spela på TrackMan, umgås och njut av mat och dryck – i en miljö skapad för golf, företag och sociala kvällar.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/bokning" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-8 bg-[var(--brand-primary)] px-7 text-sm font-medium text-[var(--foreground)] transition-colors">Boka simulator</Link>
            <Link href="/foretag#forfragan" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-8 border border-white/60 px-7 text-sm font-medium transition-colors">Boka företagsevent</Link>
          </div>
        </div>
      </section>

      <VenueHighlights />

      <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div data-reveal className="mb-12 flex max-w-2xl flex-col gap-6">
          <div><h2 className="max-w-xl text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Bra golf.<br />Ännu bättre sällskap.</h2></div>
          <p className="max-w-md text-base leading-relaxed text-[var(--foreground)]/75">En runda med vännerna. En kväll med kollegorna. Här finns plats för både spelet och stunderna mellan slagen.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { image: "/images/invigning/hero.png", title: "Din nästa runda börjar här.", label: "Spela på USE", text: "Sex TrackMan-simulatorer, banor från hela världen och golf året runt. Välkommen oavsett nivå.", href: "/bokning", cta: "Boka simulator" },
            { image: "/images/people/9.png", title: "Samla teamet. Vi ordnar resten.", label: "Företag & event", text: "After work, kundkväll eller hela USE för er själva. Golf, mat och dryck i ett upplägg som passar er.", href: "/foretag", cta: "Utforska företagsevent" },
          ].map(item => <Link key={item.href} href={item.href} data-reveal className="group block">
            <div data-reveal="image" className="relative mb-7 aspect-[4/3] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-['']"><Image src={item.image} alt={item.label} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" /></div>

            <h3 className="text-balance text-2xl font-normal tracking-[-.025em] sm:text-3xl">{item.label}</h3>
            <p className="mb-5 mt-3 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">{item.text}</p>
            <span className="inline-flex min-h-11 items-center gap-8 border-b border-[var(--foreground)]/35 text-sm">{item.cta}</span>
          </Link>)}
        </div>
      </section>

      <section className="bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1fr_auto] md:items-center lg:px-16 lg:py-20">
          <div data-reveal><h2 className="text-balance text-3xl font-normal tracking-[-.035em] md:text-4xl">Bli medlem i USE.</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">Spelar du ofta? Upptäck medlemskapet med rabatt på spel och förtur till event.</p></div>
          <div data-reveal><Link href="/medlemskap" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 border border-white/50 px-7 text-sm transition-colors">Upptäck medlemskapet</Link></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-[.8fr_1.2fr] lg:px-16 lg:py-28">
        <div data-reveal><h2 className="text-4xl font-normal tracking-[-.035em]">Bra att veta.</h2><Link href="/kontakt" className="mt-6 inline-flex min-h-11 items-center gap-6 text-sm underline underline-offset-8">Kontakta oss</Link></div>
        <div data-reveal className="border-t border-[var(--foreground)]/20">{questions.map(item => <details key={item.q} className="group border-b border-[var(--foreground)]/20 py-1"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-base [&::-webkit-details-marker]:hidden">{item.q}<span aria-hidden="true" className="text-xl group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl group-open:block">−</span></summary><div className="max-w-xl pb-6 text-sm leading-relaxed text-[var(--foreground)]/75"><p>{item.a}</p>{item.href && <Link href={item.href} className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">{item.label}</Link>}</div></details>)}</div>
      </section>
    </div>
  );
}
