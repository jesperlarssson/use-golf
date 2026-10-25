import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import { pageMetadata } from "@/lib/seo";

const albaEventsUrl = "https://albaplay.com/sv/venue/use-golf-2/events";

export const metadata: Metadata = pageMetadata({
  title: "Händer hos oss",
  description: "Spela Medlemsgolfen – Order of Merit, starta torsdagen med The Breakfast Club eller kom på AfterWork Golf. Se aktuella aktiviteter hos USE Golf i Nya Hovås, Göteborg.",
  path: "/hander-hos-oss",
});

export default function HanderHosOssPage() {
  return <>
    <EditorialHero label="Händer hos oss" title="Varje vecka på USE." description="Samla poäng i Medlemsgolfen, börja torsdagen med golf och frukost eller runda av veckan med AfterWork Golf. Hitta din nästa runda hos oss." image="/images/people/5.png" imageAlt="Gäster som umgås med ett glas vin hos USE Golf">
      <a href={albaEventsUrl} className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Se aktuella event hos Alba</a>
    </EditorialHero>

    <nav aria-label="Aktiviteter på USE Golf" className="mx-auto flex max-w-screen-2xl flex-wrap gap-x-8 gap-y-2 px-6 py-5 sm:px-10 lg:px-16">
      <a href="#afterwork-golf" className="inline-flex min-h-11 items-center text-sm underline decoration-[var(--brand-secondary)] underline-offset-4">AfterWork Golf</a>
      <a href="#medlemsgolf" className="inline-flex min-h-11 items-center text-sm underline decoration-[var(--brand-secondary)] underline-offset-4">Medlemsgolfen</a>
      <a href="#the-breakfast-club" className="inline-flex min-h-11 items-center text-sm underline decoration-[var(--brand-secondary)] underline-offset-4">The Breakfast Club</a>
    </nav>

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
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href={albaEventsUrl} className="cta-sweep inline-flex min-h-14 items-center justify-center bg-[var(--brand-olive-900)] px-7 text-sm text-white transition-colors">Se aktuella event hos Alba</a>
          <Link href="/bokning" className="inline-flex min-h-11 items-center px-3 text-sm underline underline-offset-4">Boka simulator</Link>
        </div>
      </div>
    </section>

    <section id="medlemsgolf" aria-labelledby="medlemsgolf-heading" className="scroll-mt-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
        <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-4 after:border-[var(--brand-secondary)] after:content-['']"><Image src="/images/invigning/DSC06600.jpg" alt="En spelare som slår ut i en TrackMan-simulator hos USE" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
        <div data-reveal>
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-white/75">Ny bana varannan vecka · För medlemmar</p>
          <h2 id="medlemsgolf-heading" className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Medlemsgolfen – Order of Merit.</h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80">Utmana andra medlemmar, upptäck nya banor och samla poäng under säsongen. Medlemsgolfen är vårt seriespel där varje omgång pågår i två veckor – med gott om tid att förbättra ditt resultat och klättra i tabellen.</p>
          <h3 className="mt-10 text-xl font-normal tracking-tight">Så fungerar det</h3>
          <ul className="mt-4 max-w-lg border-t border-white/25 text-sm leading-relaxed text-white/80">
            <li className="border-b border-white/25 py-4"><strong className="font-medium text-white">Ny bana varannan vecka.</strong> Varje omgång pågår i två veckor.</li>
            <li className="border-b border-white/25 py-4"><strong className="font-medium text-white">Obegränsat antal försök.</strong> Spela så många rundor du vill under omgången. Ditt bästa resultat räknas och avgör din placering.</li>
            <li className="border-b border-white/25 py-4"><strong className="font-medium text-white">TrackMan Handicap krävs.</strong> Du behöver ett registrerat TrackMan Handicap för att delta.</li>
            <li className="border-b border-white/25 py-4"><strong className="font-medium text-white">Välj din tee.</strong> Spela från den tee som passar dig och ditt spel.</li>
            <li className="border-b border-white/25 py-4"><strong className="font-medium text-white">Samla poäng.</strong> Din placering i varje omgång ger poäng till säsongens totala Order of Merit.</li>
          </ul>
          <h3 className="mt-10 text-xl font-normal tracking-tight">Nettospel. En hel säsong att spela om.</h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">Poängen från omgångarna läggs ihop under säsongen. Vid säsongens slut koras en vinnare i nettoklassen, utifrån den totala poängställningen.</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">Alla USE Golf-medlemmar är välkomna, oavsett handicap eller spelnivå. Vi hjälper dig gärna att komma igång!</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={albaEventsUrl} className="cta-sweep inline-flex min-h-14 items-center justify-center bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Se aktuella event hos Alba</a>
            <Link href="/medlemskap" className="inline-flex min-h-11 items-center px-3 text-sm underline underline-offset-4">Bli medlem</Link>
          </div>
        </div>
      </div>
    </section>

    <section id="the-breakfast-club" aria-labelledby="breakfast-heading" className="scroll-mt-20 mx-auto grid max-w-screen-2xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
      <div data-reveal>
        <p className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Torsdagar · 07:00–08:00</p>
        <h2 id="breakfast-heading" className="max-w-lg text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">The Breakfast Club.</h2>
        <p className="mt-5 text-lg text-[var(--brand-olive-900)]"><time dateTime="2026-10-29">29 oktober</time> – <time dateTime="2026-12-10">10 december 2026</time></p>
        <div className="mt-7 max-w-lg space-y-5 text-base leading-relaxed text-[var(--foreground)]/75">
          <p>Starta torsdagen med golf, frukost och trevligt sällskap på USE Golf.</p>
          <p>Under sju torsdagar spelar vi en individuell Order of Merit. Samla poäng varje vecka och utmana andra morgonpigga medlemmar om förstaplatsen i den totala rankingen.</p>
          <p>Var med de torsdagar som passar dig – frukosten ingår i priset.</p>
        </div>
        <a href={albaEventsUrl} className="cta-sweep mt-9 inline-flex min-h-14 items-center justify-center bg-[var(--brand-olive-900)] px-7 text-sm text-white transition-colors">Se aktuella event hos Alba</a>
      </div>
      <div data-reveal>
        <h3 className="text-xl font-normal tracking-tight">Så fungerar det</h3>
        <ul className="mt-4 max-w-lg border-t border-[var(--brand-olive-900)]/20 text-sm leading-relaxed text-[var(--foreground)]/75">
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Sju omgångar totalt, en varje torsdag kl. 07:00–08:00.</li>
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Individuellt spel med TrackMan Handicap.</li>
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Order of Merit – samla poäng varje vecka till den totala rankingen.</li>
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Två spelare per simulator.</li>
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Frukost ingår i priset.</li>
          <li className="border-b border-[var(--brand-olive-900)]/20 py-4">Delta i de omgångar som passar dig.</li>
        </ul>
        <h3 className="mt-10 text-xl font-normal tracking-tight">Ditt TrackMan Handicap</h3>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">Du behöver ha minst en registrerad runda i TrackMan för att få ett giltigt TrackMan Handicap och kunna delta.</p>
      </div>
    </section>
  </>;
}
