import { albaEnabled, bookingLinks } from "@/lib/bookingLinks";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getAllEvents } from "@/sanity/lib/queries";
import EventsList from "@/components/ui/EventsList";

export const metadata: Metadata = { title: "Aktuellt", description: "Kommande event och nyheter från USE Golf i Nya Hovås." };
export const revalidate = 60;

export default async function EventsPage() {
  const events = albaEnabled ? [] : await getAllEvents();
  return <>
    <section className="relative isolate flex min-h-[500px] items-end bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
      <Image src="/images/people/1.png" alt="Golf och gemenskap hos USE" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/25" />
      <div className="relative mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-36 sm:px-10 lg:px-16"><p className="mb-6 text-xs uppercase tracking-[.2em]">Aktuellt på USE</p><h1 className="text-balance text-5xl font-normal tracking-[-.04em] md:text-7xl">Något att se fram emot.</h1><p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">Här hittar du våra kommande event. Följ oss gärna på Instagram för fler ögonblick och nyheter från USE.</p></div>
    </section>
    <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="mb-10 text-3xl font-normal tracking-tight">På gång hos oss</h2>
      {albaEnabled ? <div className="border-y border-black/15 py-10"><p className="max-w-lg text-lg leading-relaxed">Upptäck kommande event och aktiviteter hos USE. Se aktuella datum och anmäl dig via Alba.</p><a href={bookingLinks.events} className="mt-6 inline-flex min-h-14 items-center gap-8 bg-[var(--brand-olive-900)] px-7 text-sm text-white">Se event & anmäl dig <span aria-hidden="true">↗</span></a></div> : events.length ? <Suspense fallback={<p>Laddar event…</p>}><EventsList events={events} /></Suspense> : <div className="border-y border-black/15 py-10"><p className="max-w-lg text-lg leading-relaxed">Nya datum är på väg. Håll utkik här eller följ oss på Instagram när nästa event släpps.</p><a href="https://www.instagram.com/use__golf/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-8 text-sm underline underline-offset-8">Följ @use__golf <span aria-hidden="true">↗</span></a></div>}
      <div className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-normal tracking-tight">En kväll för ert sällskap?</h2><p className="mt-3 text-sm text-[var(--foreground)]/75">Vi hjälper er att planera ett eget företagsevent.</p></div><Link href="/foretag" className="inline-flex min-h-14 items-center justify-center gap-8 bg-[var(--brand-olive-900)] px-7 text-sm text-white">Planera ert event <span aria-hidden="true">↗</span></Link></div>
      <Link href="/journal" className="mt-12 inline-flex min-h-11 items-center gap-8 text-sm underline underline-offset-8">Läs USE Journal <span aria-hidden="true">↗</span></Link>
    </section>
  </>;
}
