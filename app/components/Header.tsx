"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const leftNavLinks = [
  { href: "/sa-funkar-det", label: "Så funkar det" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "/anlaggning", label: "Anläggning" },
];

const rightNavLinks = [
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
];

const infoLinks = [
  { href: "/oppettider-kontakt", label: "Öppettider & kontakt" },
  { href: "/priser-presentkort", label: "Priser & presentkort" },
  { href: "/friskvard", label: "Friskvårdsbidrag" },
  { href: "/om", label: "Om USE GOLF" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/pre-access") {
    return null;
  }

  return (
    <header className="fixed top-0 z-50 text-[var(--brand-primary)] w-screen py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 grid grid-cols-3 items-center">

          {/* Left nav (desktop)
          <nav className="hidden md:flex items-center gap-6 justify-start">
            {leftNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav> */}

          {/* Center logo */}
          <Link href="/" className="justify-self-center text-3xl flex flex-col items-center">
            <span className="text-3xl font-horus text-center">USE GOLF</span>
            <span className="text-sm tracking-wider">INDOOR</span>
          </Link>
          {/**  
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex items-center gap-6">
              {rightNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  className="hover:underline"
                  onClick={() => setInfoOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={infoOpen}
                >
                  Info ▾
                </button>
                {infoOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-md border border-[var(--brand-secondary)]/30 bg-[var(--brand-primary)] shadow-lg">
                    <div className="py-2">
                      {infoLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 hover:bg-[var(--brand-secondary)]/10"
                          onClick={() => setInfoOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a
                href="https://booking.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] hover:opacity-90"
              >
                Boka tid
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border rounded"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Öppna meny"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>
          </div> */}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--brand-secondary)]/30">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <details className="group">
              <summary className="cursor-pointer list-none">Info</summary>
              <div className="mt-2 flex flex-col gap-2 pl-2">
                {infoLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
            <a
              href="https://booking.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)]"
            >
              Boka tid
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


