"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Banner from "@/components/ui/Banner";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

// Primär navigation (mitten på desktop)
const primaryNav: NavItem[] = [
  { href: "/bokning", label: "Boka simulator" },
  { href: "/boka-traning", label: "Boka Träning" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "/events", label: "Event & Community" },
  { href: "/foretagsevent", label: "Företagspaket" },
  { href: "/om", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

// Sekundär navigation (under hamburgaren / mobilmeny)
const secondaryNav: NavItem[] = [
  { href: "/custom-fitting", label: "Custom Fitting" },
  { href: "/medlemsvillkor", label: "Medlemsvillkor" },

];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  if (pathname === "/pre-access") {
    return null;
  }

  // Ruta -> Header-variant (färg) + Banner-konfiguration
  const getHeaderVariant = (_path: string) => {
    // Temporärt: samma färg som landningen överallt
    return "";
  };

  const getBannerConfig = (path: string):
    | {
        title: string;
        imageSrc: string;
        marqueeText?: string;
        subTitle?: string;

        actionButton?: { label: string; href: string; external?: boolean };
        fullScreen?: boolean;
        heroText?: string;
        videoSrc?: string;
        videoPoster?: string;
      }
    | null => {
    if (path === "/") return null; // Ingen banner på landningssidan
    if (path.startsWith("/bokning")) {
      return {
        title: "Boka simulator",
        imageSrc: "/images/render2.PNG",
        marqueeText: "Boka din tid idag — Träna smartare"
      };
    }
    if (path.startsWith("/boka-traning")) {
      return {
        title: "Boka träning",
        imageSrc: "/images/render2.PNG",
        marqueeText: "Boka din tid idag — Träna smartare",
        subTitle: "Kommer snart"
      };
    }
    if (path.startsWith("/medlemskap")) {
      return {
        title: "Medlemskap",
        imageSrc: "/images/lobby casual.png",
        marqueeText: "Flexibla medlemskap — För alla nivåer",
        subTitle: "mer golf. mer fördelar"
      };
    }
    if (path.startsWith("/events")) {
      return {
        title: "Event & Community",
        imageSrc: "/images/baller2-front.png",
        marqueeText: "Håll dig uppdaterad — Häng med på nästa event"
      };
    }
    if (path.startsWith("/foretagsevent")) {
      return {
        title: "Företagspaket",
        imageSrc: "/images/baller2-back.png",
        marqueeText: "Skräddarsydda upplevelser — För team och kunder",
        subTitle: "Kickoff, kundevent eller teamdag – vi fixar helheten",
        actionButton: { label: "Skicka förfrågan", href: "/foretagsevent#forfragan" }
      };
    }
    if (path.startsWith("/om")) {
      return {
        title: "Om USE GOLF",
        imageSrc: "/images/render1.png",
        marqueeText: "Möt teamet bakom USE GOLF"
      };
    }
    if (path.startsWith("/kontakt")) {
      return {
        title: "Kontakt",
        imageSrc: "/images/club.png",
        marqueeText: "Hör av dig — Vi hjälper gärna till"
      };
    }
    if (path.startsWith("/sa-funkar-det")) {
      return {
        title: "Så funkar det",
        imageSrc: "/images/baller3.png",
        marqueeText: "Kom igång på minuter — Enkelt och smidigt"
      };
    }
    if (path.startsWith("/anlaggning")) {
      return {
        title: "Anläggning",
        imageSrc: "/images/lobby casual.png",
        marqueeText: "Modern miljö — Skapad för fokus och flow"
      };
    }
    if (path.startsWith("/shop")) {
      return {
        title: "Shop",
        imageSrc: "/images/ball.png",
        marqueeText: "Noga utvalda produkter — För din utveckling"
      };
    }
    if (path.startsWith("/priser-presentkort")) {
      return {
        title: "Priser & Presentkort",
        imageSrc: "/images/baller2-back.png",
        marqueeText: "Ge golfglädje — Presentkort till vänner och familj"
      };
    }
    if (path.startsWith("/friskvard")) {
      return {
        title: "Friskvårdsbidrag",
        imageSrc: "/images/baller2.png",
        marqueeText: "Använd friskvårdsbidraget hos oss"
      };
    }
    if (path.startsWith("/traning")) {
      return {
        title: "Träning",
        imageSrc: "/images/club hit.png",
        marqueeText: "Träna smartare — Förbättra ditt spel"
      };
    }
    if (path.startsWith("/custom-fitting")) {
      return {
        title: "Custom Fitting",
        imageSrc: "/images/club hit.png",
        marqueeText: "Personlig utprovning — Anpassa utrustningen efter dig",
        subTitle: "Kommer snart"
      };
    }
    if (path.startsWith("/medlemsvillkor")) {
      return {
        title: "Medlemsvillkor",
        imageSrc: "/images/ball.png",
        marqueeText: "GET USED TO IT"
      };
    }
    if (path.startsWith("/bli-medlem")) {
      return {
        title: "Bli medlem",
        imageSrc: "/images/baller2.png",
        marqueeText: "Portalen öppnar snart!"
      };
    }
    // Fallback för övriga sidor
    return {
      title: "USE GOLF",
      imageSrc: "/images/wall.png",
      marqueeText: undefined
    };
  };

  const headerVariantClass = getHeaderVariant(pathname);
  const bannerConfig = getBannerConfig(pathname);

  // Liten scroll-detektor för att tona in bakgrund på header
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkBase = "transition-colors hover:opacity-80 uppercase text-sm tracking-wider text-[var(--brand-secondary)] font-semibold";
  const activeBase = "underline underline-offset-4";

  const renderItem = (item: NavItem, onClick?: () => void) => {
    const className = `${linkBase} ${isActive(item.href) ? activeBase : ""}`;
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer "
          className={className}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.href} href={item.href} onClick={onClick} className={className} aria-current={isActive(item.href) ? "page" : undefined}>
        {item.label}
      </Link>
    );
  };

  // Enkla headerlänkar (utan sketch), med enradig ellips
  const renderHeaderItem = (item: NavItem, onClick?: () => void) => {
    const className = `${linkBase} ${isActive(item.href) ? activeBase : ""} whitespace-nowrap truncate max-w-[18ch]`;
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer "
          className={className}
          onClick={onClick}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.href} href={item.href} onClick={onClick} className={className} aria-current={isActive(item.href) ? "page" : undefined}>
        {item.label}
      </Link>
    );
  };

  // Variant med "slarvig" ram för knappliknande länkar
  const renderSketchItem = (item: NavItem, onClick?: () => void, variantClass?: string) => {
    const className = `${linkBase} sketch-button ${variantClass ?? "sketch-v1"}`;
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer "
          className={className}
          onClick={onClick}
          data-cursor-target
          data-cursor-padding="8"
        >
          <span className="sketch-sides">{item.label}</span>
        </a>
      );
    }
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClick}
        className={className}
        aria-current={isActive(item.href) ? "page" : undefined}
        data-cursor-target
        data-cursor-padding="8"
      >
        <span className="sketch-sides py-2 px-1">{item.label}</span>
      </Link>
    );
  };

  // Dela upp primärmenyn i vänsterlänkar (Boka, Medlemskap) och resten
  const leftNav = primaryNav.filter(
    (item) => item.href === "/bokning"  || item.href === "/medlemskap" || item.href === "/events"
  );
  const restNav = primaryNav.filter(
    (item) => !leftNav.some((l) => l.href === item.href)
  );

  // Toggle global flag on <html> när overlaymenyn är öppen
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (menuOpen) {
      html.setAttribute("data-menu-open", "true");
    } else {
      html.removeAttribute("data-menu-open");
    }
    return () => {
      html.removeAttribute("data-menu-open");
    };
  }, [menuOpen]);

  // Länkrenderare för overlay (större typografi)
  const renderOverlayItem = (item: NavItem, onClick?: () => void) => {
    const overlayClass = `transition-opacity hover:opacity-80 uppercase tracking-widest text-[var(--brand-secondary)] ${isActive(item.href) ? "underline underline-offset-8" : ""
      }`;
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer "
          className={overlayClass}
          onClick={onClick}
          data-cursor-target
          data-cursor-padding="10"
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.href} href={item.href} onClick={onClick} className={overlayClass} aria-current={isActive(item.href) ? "page" : undefined} data-cursor-target data-cursor-padding="10">
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full  ${headerVariantClass} transition-colors duration-300 text-[var(--brand-secondary)] ${
          scrolled
            ? "bg-[var(--brand-primary)]/90 backdrop-blur border-b border-[var(--brand-secondary)]/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 relative">
          <div className="h-18 grid grid-cols-3 items-center">
            

   
            <Link href="/" className=" flex flex-col ">
              <span className={`whitespace-nowrap text-2xl font-horus leading-none transition-colors duration-300 ${scrolled ? "text-[var(--foreground)]" : "text-[var(--brand-primary)]"}`}>USE GOLF</span>

            </Link>

           
            <div className="justify-self-end">
             
            </div>

            {/* Höger: hamburger */}
            <div className="justify-self-end flex items-center gap-6">
              <nav className="hidden md:block" aria-label="Snabblänkar">
                <ul className="flex items-center gap-6">
                  {leftNav.map((item) => (
                    <li key={item.href}>{renderHeaderItem(item)}</li>
                  ))}
                </ul>
              </nav>
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] text-[var(--brand-secondary)]"
                aria-label="Öppna meny"
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((v) => !v);
                }}
                data-cursor-target
                data-cursor-padding="6"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--brand-secondary)]">
                  <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
                  <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                  <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* (Flyttad) Desktop overlay renderas som syskon till header nedan */}
        </div>
      </header>

      {/* Slide-in meny från höger (mobil + desktop) */}
      <div
        className={`fixed inset-0 z-[60] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        data-overlay-menu
      >
        {/* Klickyta utanför panel (ingen dimma) */}
        <div
          className="absolute inset-0 bg-transparent"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel (slidear från höger) */}
        <div
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-full max-w-xl border-l-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] text-[var(--brand-secondary)] shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="relative h-full flex flex-col px-8 py-10">
            {/* Stängknapp */}
            <button
              className="absolute top-6 right-6 inline-flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              aria-label="Stäng meny"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <nav aria-label="Meny (desktop-slidein)" className="mt-8 text-2xl md:text-3xl font-medium">
              <ul className="space-y-6">
                {[...leftNav, ...restNav].map((item) => (
                  <li key={item.href}>{renderOverlayItem(item, () => setMenuOpen(false))}</li>
                ))}
              </ul>
              
              <hr className="my-8 border-[var(--brand-secondary)]/30" />
              <ul className="space-y-4 text-lg md:text-xl opacity-90">
                {secondaryNav.map((item) => (
                  <li key={item.href}>{renderOverlayItem(item, () => setMenuOpen(false))}</li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Banner under header, ej på landningssidan. Remount per route för enkel in-animation */}
      {bannerConfig ? (
        <div key={pathname} className="banner-enter">
          <Banner
            title={bannerConfig.title}
            imageSrc={bannerConfig.imageSrc}
            marqueeText={bannerConfig.marqueeText}
            subTitle={bannerConfig.subTitle}
            actionButton={bannerConfig.actionButton}
            fullScreen={bannerConfig.fullScreen}
            heroText={bannerConfig.heroText}
            videoSrc={bannerConfig.videoSrc}
            videoPoster={bannerConfig.videoPoster}
          >
            {pathname === "/" ? (
              <div className="mt-10">
                {/* NavCards ovanpå bannern på startsidan */}
                {/* Importen av NavCards är i komponenten själv om vi vill undvika korsimport här. */}
              </div>
            ) : null}
          </Banner>
        </div>
      ) : null}
    </>
  );
}


