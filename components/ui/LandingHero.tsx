"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type LandingHeroProps = {
  title: string;
  heroText?: string;
  videoSrc?: string;
  videoPoster?: string;
  imageSrc?: string;
  overlay?: boolean;
  children?: ReactNode;
};

export default function LandingHero({
  title,
  heroText,
  videoSrc,
  videoPoster,
  imageSrc,
  overlay = true,
  children,
}: LandingHeroProps) {
  return (
    <section className="relative w-full min-h-[95vh] overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={videoPoster || imageSrc}
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      ) : null}

      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10" />
      ) : null}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className=" tracking-wide text-[var(--brand-primary)]  text-4xl sm:text-5xl md:text-6xl">
              <span className="font-horus uppercase">
                {title}
              </span>

            </h1>
            <p className="font-thin opacity-65 text-2xl text-[var(--brand-primary)]">
              - Get used to it
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 w-full">
              <Link href="/bokning/sweetspot" className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition text-sm w-full sm:w-auto text-center">

                Boka nu

              </Link>

              <Link href="/bli-medlem" className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition text-sm w-full sm:w-auto text-center">

                Bli medlem

              </Link>
            </div>
            {children ? <div className="mt-2 w-full">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}


