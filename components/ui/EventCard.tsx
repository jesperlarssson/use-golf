"use client";

import Image from "next/image";
import Link from "next/link";
import { EventDocument } from "@/sanity/lib/queries";
import InterestForm from "./InterestForm";
import PortableText from "./PortableText";
import { useState } from "react";

interface EventCardProps {
  event: EventDocument;
  variant?: "default" | "featured";
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

// Fallback kategori-färger och labels för bakåtkompatibilitet
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

export default function EventCard({ event, variant = "default", className = "" }: EventCardProps) {
  const [showInterestForm, setShowInterestForm] = useState(false);
  
  // Hantera kategori som objekt eller string (bakåtkompatibilitet)
  let categoryInfo: { label: string; color: string; bgColor: string };
  if (typeof event.category === 'object' && event.category !== null && 'title' in event.category) {
    // Det är ett kategori-objekt från Sanity
    const categorySlug = event.category.title.toLowerCase().replace(/\s+/g, '-');
    // Använd fallback-färger baserat på kategori-titel eller standard
    categoryInfo = categoryConfig[categorySlug] || {
      label: event.category.title,
      color: "var(--brand-secondary)",
      bgColor: "var(--brand-secondary)/10",
    };
  } else if (typeof event.category === 'string') {
    // Bakåtkompatibilitet: det är en string
    categoryInfo = categoryConfig[event.category] || categoryConfig.erbjudanden;
  } else {
    // Fallback
    categoryInfo = categoryConfig.erbjudanden;
  }

  const handleCtaClick = (e: React.MouseEvent) => {
    if (event.requiresInterestForm) {
      e.preventDefault();
      setShowInterestForm(true);
    }
  };

  const imageHeight = variant === "featured" ? "h-64 md:h-80" : "h-56";

  // Kolla om eventet har rich text content
  const hasRichContent = event.content && Array.isArray(event.content) && event.content.length > 0;
  
  // Kolla om eventet har Sweetspot-länk (specifikt kolla efter "sweetspot" i URL:en)
  const hasSweetspotLink = event.ctaHref && event.ctaHref.toLowerCase().includes('sweetspot');

  // Länk till detaljsida: använd ctaHref om det är en intern sida (t.ex. /pensionar), annars /events/slug
  const detailHref =
    event.ctaHref &&
    !hasSweetspotLink &&
    event.ctaHref.startsWith('/')
      ? event.ctaHref
      : event.slug
        ? `/events/${event.slug}`
        : undefined;

  return (
    <div className={`overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col h-full ${className}`}>
      {/* Bild */}
      <div className={`relative ${imageHeight} border-b-2 border-[var(--brand-secondary)]`}>
        <Image
          src={event.imageUrl || '/images/placeholder.png'}
          alt={event.imageAlt || event.title}
          fill
          className="object-cover blur-xs scale-105 brightness-90"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Kategori-badge med glass-effekt - ovanpå bilden */}
        {event.category && (
          <div className="absolute top-4 left-4 z-10">
            <span 
              className="inline-block px-4 py-2 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm border-2 border-white/30 rounded-none text-white"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
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

      {/* Innehåll */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="text-sm sm:text-base flex-1">
          {event.excerpt ? (
            typeof event.excerpt === 'string' ? (
              formatContent(event.excerpt)
            ) : Array.isArray(event.excerpt) ? (
              <PortableText content={event.excerpt} />
            ) : null
          ) : event.content && Array.isArray(event.content) ? (
            <PortableText content={event.content} />
          ) : null}
        </div>

        {/* CTA eller Intresseanmälan */}
        {showInterestForm && event.requiresInterestForm ? (
          <div className="pt-4 border-t border-[var(--brand-secondary)]/20">
            <button
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
          <div className="mt-auto pt-4">
            {/* Om både Sweetspot-länk och rich content finns, visa båda knapparna bredvid varandra */}
            {hasSweetspotLink && hasRichContent && event.ctaHref && detailHref ? (
              <div className="flex flex-wrap gap-2">
                {/* Primär knapp: Boka nu */}
                <a
                  href={event.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                  data-cursor-target
                  data-cursor-padding="10"
                >
                  Boka nu
                </a>
                {/* Sekundär knapp: Läs mer */}
                <Link
                  href={detailHref}
                  className="inline-flex flex-1 items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition"
                  data-cursor-target
                  data-cursor-padding="10"
                >
                  Läs mer
                </Link>
              </div>
            ) : (
              <>
                {/* Sweetspot-länk: Visa "Boka nu" knapp */}
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

                {/* Rich text content: Visa "Läs mer" knapp till detaljsidan */}
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
              </>
            )}

            {/* Fallback för requiresInterestForm */}
            {event.requiresInterestForm && !hasRichContent && !hasSweetspotLink && (
              detailHref ? (
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
                  onClick={handleCtaClick}
                  className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                >
                  {event.ctaLabel || "Intresseanmälan"}
                </button>
              )
            )}

            {/* Fallback för event utan rich content eller Sweetspot-länk */}
            {!hasRichContent && !hasSweetspotLink && !event.requiresInterestForm && detailHref && (
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
        )}
      </div>
    </div>
  );
}
