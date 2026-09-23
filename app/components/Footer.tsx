"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const instagram = "https://www.instagram.com/use__golf/";
const photos = [
  { src: "/images/people/9.png", alt: "Vänner som umgås hos USE" },
  { src: "/images/lokalen/1.png", alt: "Lounge och golf hos USE" },
  { src: "/images/swing/2.png", alt: "Golfspel i TrackMan-simulator" },
  { src: "/hero/1.png", alt: "En inblick i USE Golf i Nya Hovås" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <footer className="pb-24 lg:pb-0">
    <section aria-labelledby="instagram-heading" className="border-t border-black/15 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h2 id="instagram-heading" className="text-balance text-3xl font-normal tracking-[-.035em] sm:text-4xl">Följ livet på USE.</h2></div><a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-6 text-sm underline underline-offset-8">Följ @use__golf på Instagram <span aria-hidden="true">↗</span></a></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{photos.map(photo => <a key={photo.src} href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${photo.alt} – besök USE på Instagram`} className="group relative aspect-square overflow-hidden outline outline-1 -outline-offset-1 outline-black/10"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" /><span aria-hidden="true" className="absolute right-3 bottom-3 flex size-8 items-center justify-center bg-black/40 text-white">↗</span></a>)}</div>
      </div>
    </section>
    <div className="bg-[#293329] text-[var(--brand-primary)]">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-16">
        <div><Link href="/" className="font-logo text-4xl">USE GOLF</Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">Golf, människor och goda kvällar.<br />Året runt i Nya Hovås.</p></div>
        <div><h3 className="mb-5 text-xs uppercase tracking-[.18em] text-white/60">Hitta hit</h3><a href="https://www.google.com/maps/search/?api=1&query=USE+Golf+Krogab%C3%A4cksv%C3%A4gen+2+Hov%C3%A5s" target="_blank" rel="noopener noreferrer" aria-label="Visa USE Golf på Google Maps (öppnas i ny flik)" className="inline-flex min-h-11 flex-col justify-center text-sm leading-relaxed underline underline-offset-4">Krogabäcksvägen 2, plan 3<br />436 53 Hovås</a><p className="mt-3 max-w-xs text-xs leading-relaxed text-white/75">Två timmars fri parkering. Aktivera parkeringen i EasyPark när du kommer.</p><Link href="/oppettider-kontakt" className="mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Öppettider & kontakt</Link></div>
        <div><h3 className="mb-5 text-xs uppercase tracking-[.18em] text-white/60">Säg hej</h3><a href="mailto:hello@usegolf.se" className="flex min-h-11 items-center text-sm hover:underline">hello@usegolf.se</a><a href="tel:+46767174034" className="flex min-h-11 items-center text-sm hover:underline">076-717 40 34</a><a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm hover:underline">Instagram ↗</a></div>
      </div>
      <div className="mx-auto flex max-w-screen-2xl flex-wrap justify-between gap-4 border-t border-white/15 px-6 py-6 text-xs text-white/65 sm:px-10 lg:px-16"><p>© {new Date().getFullYear()} USE Golf</p><Link href="/medlemsvillkor" className="underline underline-offset-4">Medlemsvillkor</Link></div>
    </div>
  </footer>;
}
