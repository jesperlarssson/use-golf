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

type EventDocument = {
  _id: string;
  title: string;
  slug?: string;
  ctaHref?: string;
  hasExternalLink?: boolean;
};

// Primär navigation (mitten på desktop)
const primaryNav: NavItem[] = [
  { href: "/bokning", label: "Boka simulator" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "/events", label: "Event & Community" },
  { href: "/partner", label: "Partner" },
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
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [eventsMenuExpanded, setEventsMenuExpanded] = useState(false);
  const pathname = usePathname();

  const hideHeader = pathname === "/pre-access" || pathname.startsWith("https://book.sweetspot.io/clubs/use-golf/") || pathname.startsWith("/bli-medlem") || pathname?.startsWith("/studio");

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
    if (path.startsWith("https://book.sweetspot.io/clubs/use-golf/")) {
      return null;
    }
    if (path.startsWith("/blogg")) {
      return null; // Ingen banner på USE Journal-sidor
    }
    if (path.startsWith("/journal")) {
      return null; // Ingen banner i Header för journal-sidor, vi har egen banner
    }
    if (path === "/bokning") {
      return {
        title: "Bokning",
        imageSrc: "/images/render2.PNG",
        marqueeText: "Boka din tid idag — Välj hur du vill spela"
      };
    }
    if (path.startsWith("/medlemskap")) {
      return {
        title: "Medlemskap",
        imageSrc: "/images/wall.png",
        marqueeText: "Flexibla medlemskap — För alla nivåer",
        subTitle: "mer golf. mer fördelar"
      };
    }
    if (path.startsWith("/bokning/boka-lokalen")) {
      return {
        title: "USE GOLF TAKEOVER",
        imageSrc: "/images/club hit.png",
        marqueeText: "Ha hela lokalen för er själva"
      };
    }
    if (path.startsWith("/bokning/staende-tid")) {
      return {
        title: "stående tider",
        imageSrc: "/images/club hit.png",
        marqueeText: "GETTING USED TO IT"
      };
    }
    if (path.startsWith("/events/juniorligan")) {
      return {
        title: "Juniorligan",
        imageSrc: "/images/invigning/DSC06511.jpg",
        marqueeText: "Ligan för unga golfare",
      };
    }
    if (path.startsWith("/events")) {
      return null; // Banner hanteras nu på events-sidan direkt
    }
    if (path.startsWith("/partner")) {
      return {
        title: "Partner",
        imageSrc: "/images/baller2-back.png",
        marqueeText: "Fast närvaro på anläggningen — Synas, spela och nätverka",
        subTitle: "",
        actionButton: { label: "Skicka förfrågan", href: "/partner#forfragan" }
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
    if (path.startsWith("/presentkort")) {
      return {
        title: "Presentkort",
        imageSrc: "/images/baller2-back.png",
        marqueeText: "Ge golfglädje — Presentkort till vänner och familj"
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
      return null;
    }
    // Ingen banner för övriga sidor
    return null;
  };

  const headerVariantClass = getHeaderVariant(pathname);
  const bannerConfig = hideHeader ? null : getBannerConfig(pathname);

  // Hämta events från API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Liten scroll-detektor för att tona in bakgrund på header
  useEffect(() => {
    if (hideHeader) {
      setScrolled(false);
      return;
    }
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideHeader]);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const headerTextColor = scrolled ? "text-[var(--brand-secondary)]" : "text-[var(--brand-primary)]";
  const linkBase = `transition-colors hover:opacity-80 uppercase text-sm tracking-wider font-semibold ${headerTextColor}`;
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
    // Specialhantering för Events med dropdown
    if (item.href === "/events" && events.length > 0) {
      return (
        <li
          key={item.href}
          className="relative"
          onMouseEnter={() => setEventsDropdownOpen(true)}
          onMouseLeave={() => setEventsDropdownOpen(false)}
        >
          <Link
            href={item.href}
            className={`${linkBase} ${isActive(item.href) ? activeBase : ""} whitespace-nowrap truncate max-w-[18ch]`}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
          {/* Dropdown meny */}
          {eventsDropdownOpen && (
            <div className="absolute top-full left-0 pt-2 w-64 z-[60]">
              {/* Osynlig bridge för att förhindra gap */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-transparent" />
              {/* Dropdown innehåll */}
              <div className="bg-[var(--brand-primary)] border-2 border-[var(--brand-secondary)]/20 shadow-lg">
                <div className="py-2">
                {events.map((event) => {
                  const eventHref = event.hasExternalLink && event.ctaHref
                    ? event.ctaHref
                    : event.slug
                    ? `/events/${event.slug}`
                    : "/events";
                  const isExternal = event.hasExternalLink && event.ctaHref?.startsWith("http");
                  
                  if (isExternal) {
                    return (
                      <a
                        key={event._id}
                        href={eventHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm uppercase tracking-wider hover:bg-[var(--brand-secondary)]/10 transition-colors text-[var(--brand-secondary)]"
                      >
                        {event.title}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={event._id}
                      href={eventHref}
                      className="block px-4 py-2 text-sm uppercase tracking-wider hover:bg-[var(--brand-secondary)]/10 transition-colors text-[var(--brand-secondary)]"
                      onClick={() => {
                        setEventsDropdownOpen(false);
                        onClick?.();
                      }}
                    >
                      {event.title}
                    </Link>
                  );
                })}
                </div>
              </div>
            </div>
          )}
        </li>
      );
    }

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
    if (hideHeader) {
      html.removeAttribute("data-menu-open");
      return;
    }
    if (menuOpen) {
      html.setAttribute("data-menu-open", "true");
    } else {
      html.removeAttribute("data-menu-open");
      // Stäng även events-expanderbar meny när huvudmenyn stängs
      setEventsMenuExpanded(false);
    }
    return () => {
      html.removeAttribute("data-menu-open");
    };
  }, [menuOpen, hideHeader]);

  // Länkrenderare för overlay (större typografi)
  const renderOverlayItem = (item: NavItem, onClick?: () => void) => {
    // Specialhantering för Events med expanderbar meny
    if (item.href === "/events" && events.length > 0) {
      return (
        <li key={item.href} className="space-y-2">
          <button
            onClick={() => setEventsMenuExpanded(!eventsMenuExpanded)}
            className={`w-full flex items-center justify-between transition-opacity hover:opacity-80 uppercase tracking-widest text-[var(--brand-secondary)] ${isActive(item.href) ? "underline underline-offset-8" : ""}`}
            data-cursor-target
            data-cursor-padding="10"
          >
            <Link href={item.href} className="flex-1 text-left" onClick={onClick}>
              {item.label}
            </Link>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform ${eventsMenuExpanded ? "rotate-180" : ""}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {eventsMenuExpanded && (
            <ul className="ml-4 space-y-2 mt-2">
              {events.map((event) => {
                const eventHref = event.hasExternalLink && event.ctaHref
                  ? event.ctaHref
                  : event.slug
                  ? `/events/${event.slug}`
                  : "/events";
                const isExternal = event.hasExternalLink && event.ctaHref?.startsWith("http");
                
                if (isExternal) {
                  return (
                    <li key={event._id}>
                      <a
                        href={eventHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg md:text-xl opacity-90 transition-opacity hover:opacity-80 uppercase tracking-widest text-[var(--brand-secondary)]"
                        onClick={onClick}
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        {event.title}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={event._id}>
                    <Link
                      href={eventHref}
                      className="block text-lg md:text-xl opacity-90 transition-opacity hover:opacity-80 uppercase tracking-widest text-[var(--brand-secondary)]"
                      onClick={onClick}
                      data-cursor-target
                      data-cursor-padding="10"
                    >
                      {event.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    }

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

  if (hideHeader) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full ${headerVariantClass} transition-colors duration-300 ${headerTextColor} ${
          scrolled
            ? "bg-[var(--brand-primary)]  border-b border-[var(--brand-secondary)]/20"
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
                  {leftNav.map((item) => {
                    const rendered = renderHeaderItem(item);
                    // Om det är Events med dropdown, returnera direkt (redan wrapped i li)
                    if (item.href === "/events" && events.length > 0) {
                      return rendered;
                    }
                    return <li key={item.href}>{rendered}</li>;
                  })}
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
                {[...leftNav, ...restNav].map((item) => {
                  const rendered = renderOverlayItem(item, () => setMenuOpen(false));
                  // Om det är Events med expanderbar meny, returnera direkt (redan wrapped i li)
                  if (item.href === "/events" && events.length > 0) {
                    return rendered;
                  }
                  return <li key={item.href}>{rendered}</li>;
                })}
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

      {/* Banner under header, ej på landningssidan. Remount per route för enkel in-animation 
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
             
              </div>
            ) : null}
          </Banner>
        </div>
      ) : null}*/}
    </>
  );
}


