"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import type { EventDocument } from "@/sanity/lib/queries";
import InterestForm from "./InterestForm";
import PortableText from "./PortableText";

const dayNames: Record<string, string> = {
  monday: "Måndag",
  tuesday: "Tisdag",
  wednesday: "Onsdag",
  thursday: "Torsdag",
  friday: "Fredag",
  saturday: "Lördag",
  sunday: "Söndag",
};

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
}

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

type EventDetailModalProps = {
  event: EventDocument;
  open: boolean;
  onClose: () => void;
};

export default function EventDetailModal({ event, open, onClose }: EventDetailModalProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyLeft = body.style.left;
    const prevBodyRight = body.style.right;
    const prevBodyWidth = body.style.width;
    const prevBodyPaddingRight = body.style.paddingRight;

    const scrollbarW = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarW > 0) {
      body.style.paddingRight = `${scrollbarW}px`;
    }
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.left = prevBodyLeft;
      body.style.right = prevBodyRight;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!open) return null;

  const hasRichContent = Boolean(event.content && Array.isArray(event.content) && event.content.length > 0);
  const hasSweetspotLink = event.ctaHref && event.ctaHref.toLowerCase().includes("sweetspot");
  const hasExternalHttpCta =
    Boolean(event.ctaHref && /^https?:\/\//i.test(event.ctaHref)) && !hasSweetspotLink;

  const detailHref =
    event.ctaHref && !hasSweetspotLink && event.ctaHref.startsWith("/")
      ? event.ctaHref
      : event.slug
        ? `/events/${event.slug}`
        : undefined;

  const hasExcerpt =
    event.excerpt &&
    (typeof event.excerpt === "string"
      ? event.excerpt.trim().length > 0
      : Array.isArray(event.excerpt) && event.excerpt.length > 0);

  const showActionRow =
    Boolean(hasSweetspotLink && event.ctaHref) ||
    Boolean(hasExternalHttpCta && event.ctaHref) ||
    Boolean(detailHref);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4">
      <button
        type="button"
        aria-label="Stäng"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        className="relative flex h-[min(92vh,900px)] max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] shadow-2xl md:flex-row md:items-stretch"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center border-2 border-[var(--brand-secondary)]/80 bg-[var(--brand-primary)] text-[var(--brand-olive-900)] shadow-sm transition hover:bg-[var(--brand-olive-700)]/10 md:right-3 md:top-3"
          aria-label="Stäng"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Stående bild vänster (överst på mobil) */}
        <div className="relative h-[34vh] min-h-[200px] max-h-[320px] w-full shrink-0 border-b-2 border-[var(--brand-secondary)]/40 md:h-full md:max-h-none md:min-h-0 md:w-[min(34%,300px)] md:min-w-[220px] md:max-w-[320px] md:border-b-0 md:border-r-2">
          <Image
            src={event.imageUrl || "/images/placeholder.png"}
            alt={event.imageAlt || event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/15"
            aria-hidden
          />
        </div>

        <div
          className="scrollbar-none flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-y-contain px-5 py-6 pr-14 sm:px-7 sm:py-8 sm:pr-16"
          data-lenis-prevent
          data-lenis-prevent-touch
        >
          <h2
            id="event-modal-title"
            className="font-horus text-2xl sm:text-3xl text-[var(--brand-olive-900)] leading-tight"
          >
            {event.title}
          </h2>
          {event.subtitle && (
            <p className="mt-2 text-sm uppercase tracking-wider text-[var(--brand-olive-700)]">{event.subtitle}</p>
          )}

          <div className="mt-5 space-y-3 text-sm text-[var(--brand-olive-800)]">
            {event.eventType === "recurring" && event.recurringDay && (
              <p>
                <span className="font-semibold text-[var(--brand-olive-900)]">Återkommande:</span>{" "}
                Varje {dayNames[event.recurringDay]?.toLowerCase() || event.recurringDay}
              </p>
            )}
            {event.eventType === "single" && event.eventDate && (
              <p>
                <span className="font-semibold text-[var(--brand-olive-900)]">Datum:</span>{" "}
                {formatDate(event.eventDate)}
                {event.eventEndDate && ` – ${formatDate(event.eventEndDate)}`}
              </p>
            )}
          </div>

          {hasExcerpt && (
            <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--brand-olive-900)] whitespace-pre-line">
              {typeof event.excerpt === "string" ? (
                formatContent(event.excerpt)
              ) : Array.isArray(event.excerpt) ? (
                <PortableText content={event.excerpt} />
              ) : null}
            </div>
          )}

          {hasRichContent && event.content && (
            <div className="mt-6 max-w-none prose prose-sm sm:prose-base prose-headings:font-horus prose-p:text-[var(--brand-olive-900)] prose-headings:text-[var(--brand-olive-900)]">
              <PortableText content={event.content} />
            </div>
          )}

          {!hasExcerpt && !hasRichContent && (
            <p className="mt-6 text-sm text-[var(--brand-olive-700)] italic">
              {event.requiresInterestForm
                ? "Fyll i intresseanmälan nedan så hör vi av oss."
                : showActionRow
                  ? "Mer information finns via knapparna nedan eller på eventsidan."
                  : "Mer information kommer snart."}
            </p>
          )}

          {showActionRow && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--brand-secondary)]/25 pt-6">
              {hasSweetspotLink && event.ctaHref && (
                <a
                  href={event.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 min-w-[10rem] items-center justify-center bg-[var(--brand-secondary)] px-5 py-2.5 text-[var(--brand-primary)] font-semibold uppercase tracking-wider transition hover:opacity-90"
                >
                  Boka nu
                </a>
              )}

              {hasExternalHttpCta && event.ctaHref && (
                <a
                  href={event.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 min-w-[10rem] items-center justify-center bg-[var(--brand-secondary)] px-5 py-2.5 text-[var(--brand-primary)] font-semibold uppercase tracking-wider transition hover:opacity-90"
                >
                  {event.ctaLabel || "Öppna länk"}
                </a>
              )}

              {detailHref && (
                <Link
                  href={detailHref}
                  onClick={onClose}
                  className="inline-flex min-h-[44px] flex-1 min-w-[10rem] items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2.5 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider transition hover:bg-[var(--brand-secondary)]/10"
                >
                  Öppna sida
                </Link>
              )}
            </div>
          )}

          {event.requiresInterestForm && (
            <div id="event-modal-interest" className="mt-10 border-t-2 border-[var(--brand-secondary)]/30 pt-8">
              <h3 className="font-horus text-xl text-[var(--brand-olive-900)]">Intresseanmälan</h3>
              <p className="mt-2 text-sm text-[var(--brand-olive-700)]">
                Fyll i formuläret så hör vi av oss med mer information.
              </p>
              <div className="mt-6">
                <InterestForm
                  eventTitle={event.title}
                  eventDate={event.eventDate}
                  eventId={event._id || event.slug}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
