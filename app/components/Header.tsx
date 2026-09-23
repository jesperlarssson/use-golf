"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const navigation = [
  { href: "/bokning", label: "Spela" },
  { href: "/foretag", label: "Företag & event" },
  { href: "/hander-hos-oss", label: "Händer hos oss" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "/om", label: "Om USE" },
];

export default function Header() {
  const visibleNavigation = navigation;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const hidden = pathname.startsWith("/studio") || pathname === "/pre-access" || pathname.startsWith("/bli-medlem");
  // Vercels ISR-regenerering renderar startsidan som "/index" på servern; behandla båda som start
  // så att serverns HTML matchar klienten (React rättar inte klassnamn vid hydrering).
  const isHome = pathname === "/" || pathname === "/index";
  const light = isHome && !scrolled;
  const bookingVisible = showBooking && pathname !== "/bokning";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Visa den flytande boka-knappen först när heroens egna knappar har passerat.
      setShowBooking(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Läs av igen när webbläsaren återställt sidan (load, bfcache, flikbyte), annars kan headern fastna som solid.
    window.addEventListener("load", onScroll);
    window.addEventListener("pageshow", onScroll);
    document.addEventListener("visibilitychange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onScroll);
      window.removeEventListener("pageshow", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
    };
  }, []);

  // Re-sync scroll state on route changes to handle Lenis/browser scroll restoration races
  useEffect(() => {
    // rAF ensures we read after potential Lenis immediate scrollTo(0) has applied
    const rafId = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 24);
    });
    // Fallback timeout as defense-in-depth for cases where rAF isn't sufficient
    const timeoutId = setTimeout(() => {
      setScrolled(window.scrollY > 24);
    }, 60);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previous;
      dialog.current?.close();
      toggle.current?.focus();
    };
  }, [menuOpen]);

  // Låt stängningsanimationen spela klart innan dialogen stängs.
  const closeMenu = () => {
    if (menuClosing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setMenuOpen(false);
    setMenuClosing(true);
    window.setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 400);
  };
  const stagger = (index: number) => ({ "--i": index } as CSSProperties);

  if (hidden) return null;

  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${light ? "border-white/20 bg-black/10 text-[var(--brand-primary)]" : "border-black/10 bg-[var(--brand-primary)] text-[var(--foreground)]"}`}>
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-10 lg:px-16">
        <Link href="/" aria-label="USE Golf – startsida" className="font-logo shrink-0 text-xl sm:text-2xl">USE GOLF</Link>
        <nav aria-label="Huvudmeny" className="ml-auto hidden lg:block"><ul className="flex items-center gap-7">{visibleNavigation.map(item => <li key={item.href}><Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`inline-flex min-h-11 items-center text-sm transition-opacity hover:opacity-65 ${pathname === item.href ? "underline underline-offset-8" : ""}`}>{item.label}</Link></li>)}</ul></nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/bokning" className={`cta-sweep inline-flex min-h-11 shrink-0 items-center justify-center gap-6 whitespace-nowrap px-4 sm:px-5 text-sm font-medium transition-colors ${light ? "bg-[var(--brand-primary)] text-[var(--foreground)]" : "bg-[var(--brand-olive-900)] text-white"}`}>Boka nu</Link>
          <button ref={toggle} type="button" onClick={() => setMenuOpen(true)} aria-label="Öppna meny" aria-expanded={menuOpen} aria-controls="mobile-menu" className="flex size-11 items-center justify-center lg:hidden"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.5" /></svg></button>
        </div>
      </div>
    </header>
    <dialog ref={dialog} id="mobile-menu" aria-label="Huvudmeny" onCancel={e => { e.preventDefault(); closeMenu(); }} onClose={() => setMenuOpen(false)} className={`mobile-menu fixed inset-0 m-0 h-[100dvh] max-h-none w-full max-w-none bg-[var(--brand-primary)] p-6 text-[var(--foreground)] backdrop:bg-black/40 ${menuClosing ? "is-closing" : ""}`} onClick={e => { if (e.target === e.currentTarget) closeMenu(); }}>
      <div className="menu-item flex items-center justify-between" style={stagger(0)}><span className="font-logo text-2xl">USE GOLF</span><button autoFocus type="button" className="min-h-11 px-3 text-sm" onClick={closeMenu} aria-label="Stäng meny">Stäng ✕</button></div>
      <nav aria-label="Mobilmeny" className="mt-12"><ul>{visibleNavigation.map((item, index) => <li key={item.href} className="menu-item border-b border-black/15" style={stagger(index + 1)}><Link href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined} className="block py-5 text-3xl tracking-tight">{item.label}</Link></li>)}</ul><Link href="/bokning" onClick={closeMenu} style={stagger(visibleNavigation.length + 1)} className="menu-item cta-sweep mt-8 flex min-h-14 items-center justify-center bg-[var(--brand-olive-900)] px-6 text-white">Boka nu</Link><Link href="/kontakt" onClick={closeMenu} style={stagger(visibleNavigation.length + 2)} className="menu-item mt-6 inline-flex min-h-11 items-center underline underline-offset-4">Kontakt & hitta hit</Link></nav>
    </dialog>
    <div className={`mobile-booking pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden ${bookingVisible ? "is-shown" : ""}`}><Link href="/bokning" tabIndex={bookingVisible ? undefined : -1} aria-hidden={!bookingVisible} className="mobile-booking-button cta-sweep pointer-events-auto flex min-h-13 items-center justify-center gap-8 bg-[var(--brand-olive-900)]/95 text-sm font-medium text-white">Boka nu</Link></div>
  </>;
}
