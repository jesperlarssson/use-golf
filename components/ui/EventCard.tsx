"use client";

import Image from "next/image";
import Link from "next/link";
import { EventDocument } from "@/sanity/lib/queries";
import InterestForm from "./InterestForm";
import PortableText from "./PortableText";
import EventDetailModal from "./EventDetailModal";
import { useState } from "react";

interface EventCardProps {
  event: EventDocument;
  variant?: "default" | "featured" | "landing";
  className?: string;
}

// Helper function för att formatera text med **fet text**
function formatContent(text: string) {
  const parts: React.ReactNode[] = [];
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const matches = Array.from(text.matchAll(boldRegex));

  if (matches.length === 0) {
    return <span>{text}</span>;
  }

  let lastIndex = 0;
  let keyCounter = 0;

  matches.forEach((match) => {
    if (match.index !== undefined) {
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        if (beforeText) {
          parts.push(<span key={`text-${keyCounter++}`}>{beforeText}</span>);
        }
      }
      parts.push(<strong key={`bold-${keyCounter++}`}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }
  });

  if (lastIndex < text.length) {
    parts.push(<span key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</span>);
  }

  return <>{parts}</>;
}

const categoryConfig: Record<string, { label: string; color: string; bgColor: string }> = {
  tavlingar: {
    label: "Tävlingar",
    color: "var(--brand-accent-amber)",
    bgColor: "var(--brand-accent-amber)/10",
  },
  kurser: {
    label: "Kurser & Träning",
    color: "var(--brand-accent-blue)",
    bgColor: "var(--brand-accent-blue)/10",
  },
  ligor: {
    label: "Ligor",
    color: "var(--brand-olive-900)",
    bgColor: "var(--brand-olive-900)/10",
  },
  erbjudanden: {
    label: "Erbjudanden",
    color: "var(--brand-secondary)",
    bgColor: "var(--brand-secondary)/10",
  },
};

type CtaProps = {
  event: EventDocument;
  showInterestForm: boolean;
  setShowInterestForm: (v: boolean) => void;
  hasRichContent: boolean;
  hasSweetspotLink: boolean;
  hasExternalHttpCta: boolean;
  detailHref?: string;
  onInterestClick: (e: React.MouseEvent) => void;
};

function EventCardCtaBlock({
  event,
  showInterestForm,
  setShowInterestForm,
  hasRichContent,
  hasSweetspotLink,
  hasExternalHttpCta,
  detailHref,
  onInterestClick,
}: CtaProps) {
  if (showInterestForm && event.requiresInterestForm) {
    return (
      <div className="pt-4 border-t border-[var(--brand-secondary)]/20">
        <button
          type="button"
          onClick={() => setShowInterestForm(false)}
          className="text-xs uppercase tracking-wider text-[var(--brand-olive-700)] hover:text-[var(--brand-olive-900)] mb-4"
        >
          ← Tillbaka
        </button>
        <InterestForm
          eventTitle={event.title}
          eventDate={event.eventDate}
          eventId={event._id || event.slug}
        />
      </div>
    );
  }

  return (
    <div className="mt-auto pt-4">
      {hasSweetspotLink && hasRichContent && event.ctaHref && detailHref ? (
        <div className="flex flex-wrap gap-2">
          <a
            href={event.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 min-w-[8rem] items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
            data-cursor-target
            data-cursor-padding="10"
          >
            Boka nu
          </a>
          <Link
            href={detailHref}
            className="inline-flex flex-1 min-w-[8rem] items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition"
            data-cursor-target
            data-cursor-padding="10"
          >
            Läs mer
          </Link>
        </div>
      ) : (
        <>
          {hasSweetspotLink && event.ctaHref && (
            <a
              href={event.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
              data-cursor-target
              data-cursor-padding="10"
            >
              Boka nu
            </a>
          )}

          {hasRichContent && detailHref && !hasSweetspotLink && (
            <Link
              href={detailHref}
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
              data-cursor-target
              data-cursor-padding="10"
            >
              Läs mer
            </Link>
          )}

          {hasExternalHttpCta && event.ctaHref && (
            <a
              href={event.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
              data-cursor-target
              data-cursor-padding="10"
            >
              {event.ctaLabel || "Öppna länk"}
            </a>
          )}
        </>
      )}

      {event.requiresInterestForm && !hasRichContent && !hasSweetspotLink && (
        <>
          {detailHref ? (
            <Link
              href={detailHref}
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
              data-cursor-target
              data-cursor-padding="10"
            >
              {event.ctaLabel || "Läs mer"}
            </Link>
          ) : (
            <button
              type="button"
              onClick={onInterestClick}
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
            >
              {event.ctaLabel || "Intresseanmälan"}
            </button>
          )}
        </>
      )}

      {!hasRichContent &&
        !hasSweetspotLink &&
        !event.requiresInterestForm &&
        !hasExternalHttpCta &&
        detailHref && (
          <Link
            href={detailHref}
            className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
            data-cursor-target
            data-cursor-padding="10"
          >
            {event.ctaLabel || "Läs mer"}
          </Link>
        )}
    </div>
  );
}

export default function EventCard({ event, variant = "default", className = "" }: EventCardProps) {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  let categoryInfo: { label: string; color: string; bgColor: string };
  if (typeof event.category === "object" && event.category !== null && "title" in event.category) {
    const categorySlug = event.category.title.toLowerCase().replace(/\s+/g, "-");
    categoryInfo = categoryConfig[categorySlug] || {
      label: event.category.title,
      color: "var(--brand-secondary)",
      bgColor: "var(--brand-secondary)/10",
    };
  } else if (typeof event.category === "string") {
    categoryInfo = categoryConfig[event.category] || categoryConfig.erbjudanden;
  } else {
    categoryInfo = categoryConfig.erbjudanden;
  }

  const handleCtaClick = (e: React.MouseEvent) => {
    if (event.requiresInterestForm) {
      e.preventDefault();
      setShowInterestForm(true);
    }
  };

  const imageHeight = variant === "featured" ? "h-64 md:h-80" : "h-56";

  const hasRichContent = event.content && Array.isArray(event.content) && event.content.length > 0;
  const hasSweetspotLink = event.ctaHref && event.ctaHref.toLowerCase().includes("sweetspot");
  const hasExternalHttpCta =
    Boolean(event.ctaHref && /^https?:\/\//i.test(event.ctaHref)) && !hasSweetspotLink;

  const detailHref =
    event.ctaHref && !hasSweetspotLink && event.ctaHref.startsWith("/")
      ? event.ctaHref
      : event.slug
        ? `/events/${event.slug}`
        : undefined;

  const ctaProps: CtaProps = {
    event,
    showInterestForm,
    setShowInterestForm,
    hasRichContent: Boolean(hasRichContent),
    hasSweetspotLink: Boolean(hasSweetspotLink),
    hasExternalHttpCta,
    detailHref,
    onInterestClick: handleCtaClick,
  };

  const excerptString =
    typeof event.excerpt === "string"
      ? event.excerpt
      : Array.isArray(event.excerpt)
        ? ""
        : "";
  const landingExcerptPreview = excerptString.split(/\n\n/)[0] || excerptString;

  if (variant === "landing") {
    return (
      <>
        <EventDetailModal event={event} open={detailModalOpen} onClose={() => setDetailModalOpen(false)} />
        <div
          className={`group relative overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] aspect-[5/6] hover:border-[var(--brand-accent-amber)] transition-colors ${className}`}
        >
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <Image
            src={event.imageUrl || "/images/placeholder.png"}
            alt=""
            fill
            className="object-cover brightness-[0.78]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage: "linear-gradient(to top, black 0%, black 7%, transparent 28%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, black 7%, transparent 28%)",
            }}
            aria-hidden
          >
            <Image
              src={event.imageUrl || "/images/placeholder.png"}
              alt=""
              fill
              className="object-cover blur-md scale-[1.06] brightness-[0.78]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.42)_40%,rgba(0,0,0,0.12)_58%,transparent_72%)]"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 sm:p-6 min-h-[48%]">
          <h3 className="font-horus text-2xl md:text-3xl text-[var(--brand-primary)] leading-tight">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="text-xs sm:text-sm text-[var(--brand-primary)]/85 uppercase tracking-wider mt-1.5">
              {event.subtitle}
            </p>
          )}
          <div className="text-xs sm:text-sm text-[var(--brand-primary)]/90 mt-3 line-clamp-4 whitespace-pre-line">
            {excerptString ? (
              formatContent(landingExcerptPreview)
            ) : hasRichContent && event.content ? (
              <span className="opacity-90">Klicka på Läs mer för all information.</span>
            ) : (
              <span className="opacity-90">Klicka på Läs mer för mer information.</span>
            )}
          </div>
          <div className="mt-4 pointer-events-auto">
            <button
              type="button"
              onClick={() => setDetailModalOpen(true)}
              className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2.5 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
              data-cursor-target
              data-cursor-padding="10"
            >
              Läs mer
            </button>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={`overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col h-full ${className}`}
    >
      <div className={`relative ${imageHeight} border-b-2 border-[var(--brand-secondary)]`}>
        <Image
          src={event.imageUrl || "/images/placeholder.png"}
          alt={event.imageAlt || event.title}
          fill
          className="object-cover blur-xs scale-105 brightness-90"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/20" />

        {event.category && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-block px-4 py-2 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm border-2 border-white/30 rounded-none text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              {categoryInfo.label}
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)] px-4 text-center">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider mt-2">
              {event.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="text-sm sm:text-base flex-1 whitespace-pre-line">
          {event.excerpt ? (
            typeof event.excerpt === "string" ? (
              formatContent(event.excerpt)
            ) : Array.isArray(event.excerpt) ? (
              <PortableText content={event.excerpt} />
            ) : null
          ) : event.content && Array.isArray(event.content) ? (
            <PortableText content={event.content} />
          ) : null}
        </div>

        {showInterestForm && event.requiresInterestForm ? (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/20">
            <button
              type="button"
              onClick={() => setShowInterestForm(false)}
              className="text-xs uppercase tracking-wider text-[var(--brand-olive-700)] hover:text-[var(--brand-olive-900)] mb-4"
            >
              ← Tillbaka
            </button>
            <InterestForm
              eventTitle={event.title}
              eventDate={event.eventDate}
              eventId={event._id || event.slug}
            />
          </div>
        ) : (
          <EventCardCtaBlock {...ctaProps} />
        )}
      </div>
    </div>
  );
}
