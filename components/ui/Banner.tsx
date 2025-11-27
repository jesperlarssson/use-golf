"use client";
import Image from "next/image";
import Link from "next/link";
import { ScrollVelocity } from "./ScrollVelocity";

type BannerProps = {
  title: string;
  imageSrc: string;
  marqueeText?: string;
  subTitle?: string;
  actionButton?: {
    label: string;
    href: string;
    external?: boolean;
  };
  fullScreen?: boolean;
  heroText?: string;
  videoSrc?: string;
  videoPoster?: string;
  children?: React.ReactNode;
};

export default function Banner({ title, imageSrc, marqueeText, subTitle, actionButton, fullScreen = false, heroText, videoSrc, videoPoster, children }: BannerProps) {
  return (
    <div className={`relative w-full ${fullScreen ? "min-h-screen" : "min-h-[40svh] sm:min-h-[50svh]"} overflow-hidden`}>
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
      ) : (
        <Image src={imageSrc} alt={title} fill priority className="object-cover object-center filter blur-sm brightness-90 scale-110" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10" />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h1 className={`font-semibold  tracking-wide text-[var(--brand-primary)] uppercase ${fullScreen ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl md:text-5xl"}`}>
              {title}
            </h1>
            {heroText ? (
              <p className={`text-[var(--brand-primary)]/95 font-medium ${fullScreen ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl"} max-w-3xl leading-snug`}>
                {heroText}
              </p>
            ) : null}
            {subTitle ? (
              <p className={`text-[var(--brand-primary)]/90 max-w-2xl ${fullScreen ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
                {subTitle}
              </p>
            ) : null}
            {actionButton ? (
              actionButton.external ? (
                <a
                  href={actionButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sketch-button sketch-v1 uppercase tracking-widest text-[var(--brand-primary)] mt-2 ${fullScreen ? "scale-110" : ""}`}
                  data-cursor-target
                  data-cursor-padding="8"
                >
                  <span className="sketch-sides py-2 px-3">{actionButton.label}</span>
                </a>
              ) : (
                <Link
                  href={actionButton.href}
                  className={`sketch-button sketch-v1 uppercase tracking-widest text-[var(--brand-primary)] mt-2 ${fullScreen ? "scale-110" : ""}`}
                  data-cursor-target
                  data-cursor-padding="8"
                >
                  <span className="sketch-sides py-2 px-3">{actionButton.label}</span>
                </Link>
              )
            ) : null}
            {children ? (
              <div className="mt-8 w-full">{children}</div>
            ) : null}
          </div>
        </div>
      </div>
      {marqueeText ? (
        <div className="absolute bottom-0 left-0 w-full bg-[var(--brand-olive-700)] text-[var(--brand-primary)] border-y-2 border-[var(--brand-secondary)]">
          <ScrollVelocity
            texts={[marqueeText]}
            velocity={30}
            className="px-6 py-3 uppercase tracking-widest text-[var(--brand-primary)]"
            numCopies={8}
            parallaxClassName=""
            scrollerClassName=""
          />
        </div>
      ) : null}
    </div>
  );
}


