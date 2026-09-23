import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import EditorialHero from "@/components/ui/EditorialHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Hitta till USE Golf i Nya Hovås. Kontaktuppgifter, öppettider och hjälp inför ditt besök.",
};

export default function KontaktPage() {
  return <>
    <EditorialHero label="Kontakt & hitta hit" title="Vi ses på USE." description="En fråga inför rundan eller en idé för nästa kväll med kollegorna? Hör av dig, så hjälper vi dig vidare." image="/images/lokalen/4.png" imageAlt="Välkommen in till USE Golf i Nya Hovås">
      <a href="#meddelande" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-10 bg-[var(--brand-primary)] px-7 text-sm text-[var(--foreground)] transition-colors">Skriv till oss</a>
    </EditorialHero>

    <section aria-label="Kontaktuppgifter" className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-3 lg:px-16 lg:py-20">
      <div data-reveal><h2 className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Säg hej</h2><a href="mailto:hello@usegolf.se" className="flex min-h-11 items-center text-xl tracking-tight hover:underline">hello@usegolf.se</a><a href="tel:+46767174034" className="flex min-h-11 items-center text-xl tracking-tight hover:underline">076-717 40 34</a></div>
      <div data-reveal><h2 className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Hitta hit</h2><p className="text-xl leading-relaxed tracking-tight">Krogabäcksvägen 2, plan 3<br />436 53 Hovås</p><p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--foreground)]/75">Ta hissen till plan 3 i parkeringshuset. Vi delar entré med Jumpy.</p></div>
      <div id="oppettider" data-reveal className="scroll-mt-28"><h2 className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Öppettider</h2><p className="text-xl leading-relaxed tracking-tight">Alla dagar<br /><span className="tabular-nums">09:00–22:00</span></p><p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--foreground)]/75">Två timmars fri parkering i parkeringshuset. Aktivera parkeringen i EasyPark när du kommer.</p></div>
    </section>

    <section id="meddelande" className="scroll-mt-24 border-t border-black/10 bg-[#ebe8dc]">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:px-16 lg:py-28">
        <div data-reveal><h2 className="text-balance text-4xl font-normal tracking-[-.035em] md:text-5xl">Vad funderar du på?</h2><p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--foreground)]/75">Lämna ett meddelande så återkommer vi så snart vi kan.</p><Link href="/foretag#forfragan" className="mt-8 inline-flex min-h-11 items-center gap-6 text-sm underline underline-offset-8">Planerar ni ett företagsevent?</Link></div>
        <ContactForm />
      </div>
    </section>
  </>;
}
