import { bookingLinks } from "@/lib/bookingLinks";
import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";

export const metadata: Metadata = {
  title: "Boka simulator",
  description: "Boka din nästa runda hos USE Golf i Nya Hovås. Sex TrackMan-simulatorer, golf året runt och plats för ditt sällskap.",
};

// Destinationen styrs centralt så förhandsvisning och lansering använder samma flöde.
const bookingUrl = bookingLinks.simulator;

export default function BookingPage() {
  return <>
    <EditorialHero label="Spela på USE" title="Din nästa runda börjar här." description="Boka en TrackMan-simulator och samla ditt sällskap. Spela en runda, slipa på svingen eller upptäck golf för första gången." image="/images/lokalen/2.png" imageAlt="TrackMan-simulatorer hos USE Golf">
      <div className="flex flex-col gap-3"><a href={bookingUrl} className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Se lediga tider</a><p className="text-xs text-white/80">Bokning sker hos Alba.</p></div>
      <Link href="/foretag" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-8 sm:self-start border border-white/60 px-7 text-sm transition-colors">Boka företagsevent</Link>
    </EditorialHero>


    <section className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-[.8fr_1.2fr] lg:px-16 lg:py-28">
      <div><h2 className="max-w-md text-balance text-4xl font-normal leading-[1.1] tracking-[-.035em] md:text-5xl">Enkelt att komma i gång.</h2><p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--foreground)]/75">Du behöver inte vara medlem. Välj en tid som passar, så ses vi i Nya Hovås.</p></div>
      <ol className="border-t border-black/20">{[
        { title: "Hitta er tid", text: "Se lediga tider och aktuella priser i bokningen. Välj dag, tid och antal simulatorer." },
        { title: "Ta med ditt sällskap", text: "Vi rekommenderar upp till fyra spelare per simulator. Kontakta oss i förväg om ni behöver hyra klubbor." },
        { title: "Spela och stanna en stund", text: "Logga in på TrackMan, välj bana och slå ut. Mat, dryck och bar finns för stunderna mellan rundorna." },
      ].map(item => <li key={item.title} className="border-b border-black/20 py-7"><div><h3 className="text-2xl font-normal tracking-tight">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">{item.text}</p></div></li>)}</ol>
    </section>

    <section className="bg-[#ebe8dc]"><div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 lg:py-20">
      <div><h2 className="mb-7 text-3xl font-normal tracking-tight">Bra att ha koll på.</h2><ul className="space-y-4 text-sm leading-relaxed text-[var(--foreground)]/80"><li className="border-b border-black/15 pb-4">Använd rena skor. Golfskor går bra.</li><li className="border-b border-black/15 pb-4">Använd rena, omärkta bollar. Bollar märkta med penna får inte användas.</li><li className="border-b border-black/15 pb-4">Vi har peggar i alla simulatorer. Lämna träpeggarna hemma.</li><li>Visa hänsyn till spelarna runt omkring dig.</li></ul></div>
      <div><h2 className="mb-7 text-3xl font-normal tracking-tight">Redo med TrackMan.</h2><p className="max-w-lg text-sm leading-relaxed text-[var(--foreground)]/80">Med ett gratis TrackMan-konto kan du spara resultat och följa ditt spel. Gör gärna detta innan du kommer:</p><ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--foreground)]/80"><li>Ladda ner TrackMan Golf-appen.</li><li>Skapa ett konto och bekräfta din mejladress.</li><li>Välj ”Scan to log in” i appen och skanna QR-koden vid simulatorn.</li></ol><p className="mt-6 text-sm leading-relaxed text-[var(--foreground)]/75">Har du redan ett konto? Använd samma inloggning.</p></div>
    </div></section>

    <section className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-7 px-6 py-16 sm:px-10 md:flex-row md:items-center lg:px-16 lg:py-20"><div><h2 className="text-3xl font-normal tracking-tight">Spela på en stående tid.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">Vill ni spela regelbundet? Utforska stående tider för dig och ditt sällskap.</p></div><Link href="/bokning/staende-tid" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-8 border border-black/30 px-7 text-sm transition-colors">Se stående tider</Link></section>
  </>;
}
