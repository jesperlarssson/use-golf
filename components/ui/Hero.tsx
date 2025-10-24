"use client";

import Image from "next/image";
import Link from "next/link";
import FullBleed from "./FullBleed";
import NavCards from "./NavCards";
import { Heading, Lead } from "./Typography";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaPrimaryHref?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryExternal?: boolean;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
};

export default function Hero({
  title = "USE GOLF",
  subtitle = "Get used to it",
  ctaPrimaryHref = "/bokning",
  ctaPrimaryLabel = "Boka Simulator",
  ctaPrimaryExternal = false,
  ctaSecondaryHref = "/medlemskap",
  ctaSecondaryLabel = "Bli Medlem",
}: HeroProps) {
  return (
    <FullBleed>
      <section className="relative min-h-[30svh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.png"
            alt="USE GOLF"
            fill
            priority
            className="object-cover object-center opacity-95 filter brightness-80"
          />
        </div>

        <div className="relative z-30 max-w-screen-2xl px-4 sm:px-6">


          {/** 
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xl">
            {ctaPrimaryExternal ? (
              <a
                href={ctaPrimaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-6 py-3 text-[var(--brand-primary)] font-medium hover:opacity-90 transition"
                data-cursor-target
                data-cursor-padding="10"
              >
                {ctaPrimaryLabel}
              </a>
            ) : (
              <Link
                href={ctaPrimaryHref}
                className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-6 py-3 text-[var(--brand-primary)] font-medium hover:opacity-90 transition"
                data-cursor-target
                data-cursor-padding="10"
              >
                {ctaPrimaryLabel}
              </Link>
            )}

            {ctaSecondaryHref && ctaSecondaryLabel ? (
              <Link
                href={ctaSecondaryHref}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-medium hover:bg-[var(--brand-secondary)] hover:text-[var(--brand-primary)] transition rounded-none"
                data-cursor-target
                data-cursor-padding="10"
              >
                {ctaSecondaryLabel}
              </Link>
            ) : null}
          </div> */}

          {/* Korten renderas separat nedanför */}
        </div>

        {/* NavCards under hero-innehållet, lite längre ner och fullbredd max-w-screen-xl */}
        <div className="hidden md:block absolute inset-x-0 bottom-10 z-50 translate-y-10 pb-10 ">
          <NavCards
            items={[
              { href: "/bokning", title: "Boka Simulator", description: "Välj tid och bana – kom igång direkt.", image: "/images/club-hit-sticker.png" },
              { href: "/medlemskap", title: "Medlemskap", description: "Mer golf. Mer fördelar. Upptäck nivåerna.", image: "/images/baller2-sticker.png" },
              { href: "/events", title: "Event", description: "Häng med på nästa event och träffa communityt.", image: "/images/club2-sticker.png" },
              { href: "/partner", title: "Företagsevent", description: "Kickoff eller kundevent? Vi skräddarsyr upplevelsen.", image: "/images/club-sticker.png" },
            ]}
          />
        </div>
      </section>
    </FullBleed>
  );
}


