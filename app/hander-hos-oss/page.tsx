import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Händer hos oss",
  description: "AfterWork Golf varje fredag och Medlemsgolf med ny bana varje vecka. Se vad som händer hos USE Golf i Nya Hovås, Göteborg.",
  path: "/hander-hos-oss",
});

export default function HanderHosOssPage() {
  return <>
    <EditorialHero label="Händer hos oss" title="Varje vecka på USE." description="Fredagsgolf med pizza och något gott i glaset, och en ny bana att tävla på för våra medlemmar. Här är det som händer hos oss just nu." image="/images/people/5.png" imageAlt="Gäster som umgås med ett glas vin hos USE Golf">
      <a href="#afterwork-golf" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">AfterWork Golf</a>
      <a href="#medlemsgolf" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 border border-white/60 px-7 text-sm transition-colors">Medlemsgolf</a>
    </EditorialHero>

    <section id="afterwork-golf" aria-labelledby="afterwork-heading" className="scroll-mt-20 mx-auto grid max-w-screen-2xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
      <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-[''] md:order-2"><Image src="/images/people/1.png" alt="Ett sällskap som spelar och umgås vid en simulator hos USE" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
      <div data-reveal>
        <p className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Varje fredag</p>
        <h2 id="afterwork-heading" className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">AfterWork Golf.</h2>
        <div className="mt-7 max-w-lg space-y-5 text-base leading-relaxed text-[var(--foreground)]/75">
          <p>Varje fredag är det AW Golf på USE Golf – en perfekt start på helgen med golf, mat och något gott i glaset.</p>
          <p>Boka din simulator precis som vanligt och välj själv hur länge du vill spela. Delta i vår AW Scramble och tävla på veckans bana, eller spela en egen runda och bara umgås med vänner eller kollegor. Ni bestämmer själva upplägget.</p>
          <p>Vi serverar flera olika napolitanska pizzor som passar perfekt till en kall öl eller ett glas vin – njut av fredagskänslan tillsammans och låt veckan avslutas på bästa sätt.</p>
          <p>Oavsett om ni kommer för att tävla, spela lite golf eller bara umgås – AW Golf på USE Golf är ett enkelt och roligt sätt att avsluta veckan.</p>
        </div>
        <Link href="/bokning" className="cta-sweep mt-9 inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-olive-900)] px-7 text-sm text-white transition-colors">Boka simulator</Link>
      </div>
    </section>

    <section id="medlemsgolf" aria-labelledby="medlemsgolf-heading" className="scroll-mt-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
        <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-['']"><Image src="/images/invigning/DSC06600.jpg" alt="En spelare som slår ut på veckans bana i en TrackMan-simulator hos USE" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
        <div data-reveal>
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-white/75">Måndag–torsdag · För medlemmar</p>
          <h2 id="medlemsgolf-heading" className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Medlemsgolf – ny bana varje vecka.</h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80">Varje vecka väljer vi ut en ny bana som alla USE Golf-medlemmar kan tävla på. Medlemsgolfen spelas måndag–torsdag och är öppen för alla våra medlemmar.</p>
          <h3 className="mt-10 text-xl font-normal tracking-tight">Så fungerar det</h3>
          <ul className="mt-4 max-w-lg border-t border-white/25 text-sm leading-relaxed text-white/80">
            <li className="border-b border-white/25 py-4">När du kommer till USE Golf hittar du veckans tävling på våra skärmar. För att delta är det viktigt att du loggar in på ditt TrackMan-konto och använder ditt TrackMan Handicap.</li>
            <li className="border-b border-white/25 py-4">Det finns en tee för herrar och en för damer, men alla tävlar tillsammans i samma tävling.</li>
            <li className="border-b border-white/25 py-4">Varje vecka utser vi en vinnare som får ett pris. Veckans vinnare kontaktas via e-post efter avslutad tävling.</li>
          </ul>
          <h3 className="mt-10 text-xl font-normal tracking-tight">Behöver du hjälp?</h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">Vi finns alltid på plats och hjälper gärna till om du har frågor eller behöver hjälp med att komma igång. Välkommen in och utmana dig själv på veckans bana!</p>
          <Link href="/medlemskap" className="cta-sweep mt-9 inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Bli medlem</Link>
        </div>
      </div>
    </section>
  </>;
}
