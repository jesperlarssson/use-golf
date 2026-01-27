import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import InterestForm from "@/components/ui/InterestForm";
import PortableText from "@/components/ui/PortableText";
import SectionHeader from "@/components/ui/SectionHeader";
import { getEventBySlug, EventDocument } from "@/sanity/lib/queries";

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

// Dag-namn för visning
const dayNames: Record<string, string> = {
  monday: 'Måndag',
  tuesday: 'Tisdag',
  wednesday: 'Onsdag',
  thursday: 'Torsdag',
  friday: 'Fredag',
  saturday: 'Lördag',
  sunday: 'Söndag',
};

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateString;
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Använder helper-funktion från queries.ts som automatiskt hanterar dummy-data
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const hasContent = event.content && Array.isArray(event.content) && event.content.length > 0;
  
  // Kolla om eventet har Sweetspot-länk
  const hasSweetspotLink = event.ctaHref && event.ctaHref.toLowerCase().includes('sweetspot');

  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src={event.imageUrl || '/images/placeholder.png'}
          alt={event.imageAlt || event.title}
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20 mx-auto flex-1 flex flex-col">
            {/* Tillbaka-knapp - till vänster */}
            <div className="mb-auto pt-4">
              <a
                href="/events"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Tillbaka till alla events</span>
              </a>
            </div>
            
            {/* Centrerat innehåll */}
            <div className="max-w-5xl w-full mx-auto space-y-6 flex-1 flex flex-col justify-center items-start">
              <FadeIn>
                {event.category && (
                  <div className="inline-block mb-4">
                    <span 
                      className="inline-block px-4 py-2 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm border-2 border-white/30 rounded-none text-white"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      }}
                    >
                      {event.category === 'tavlingar' ? 'Tävlingar' :
                       event.category === 'kurser' ? 'Kurser & Träning' :
                       event.category === 'ligor' ? 'Ligor' :
                       'Erbjudanden'}
                    </span>
                  </div>
                )}
                <Heading as={1} className="text-4xl md:text-5xl lg:text-6xl text-white">
                  {event.title}
                </Heading>
                {event.subtitle && (
                  <Lead className="text-xl md:text-2xl text-white/90">
                    {event.subtitle}
                  </Lead>
                )}
              </FadeIn>

              {/* Event info */}
              <FadeIn delay={0.1}>
                <div className="space-y-3 pt-4">
                  {event.eventType === 'recurring' && event.recurringDay && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <Text className="text-lg text-white/90">
                        <strong>Återkommande:</strong> Varje {dayNames[event.recurringDay]?.toLowerCase() || event.recurringDay}
                      </Text>
                    </div>
                  )}
                  {event.eventType === 'single' && event.eventDate && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <Text className="text-lg text-white/90">
                        <strong>Datum:</strong> {formatDate(event.eventDate)}
                        {event.eventEndDate && ` - ${formatDate(event.eventEndDate)}`}
                      </Text>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* CTA-knappar */}
              <FadeIn delay={0.2}>
                <div className="pt-6 flex flex-wrap gap-4">
                  {/* Anmäl intresse knapp */}
                  <a
                    href="#interest-form"
                    className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                  >
                    Anmäl intresse
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  
                  {/* Boka nu knapp om Sweetspot-länk finns */}
                  {hasSweetspotLink && event.ctaHref && (
                    <a
                      href={event.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:bg-white/10 transition"
                    >
                      Boka nu
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-18">
        <Page variant="subpage">


          {/* Rich Content */}
          {hasContent && event.content && Array.isArray(event.content) && (
            <Section className="py-20 -mt-10 sm:-mt-18 ">
              <FadeIn>
                <div className="max-w-5xl w-full mx-auto prose prose-lg">
                  <PortableText content={event.content} />
                </div>
              </FadeIn>
            </Section>
          )}

          {/* Intresseanmälan eller CTA */}
          <Section id="interest-form" className="py-20 scroll-mt-20 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
            <div className="max-w-5xl mx-auto space-y-8">
              
              {/* Intresseformulär visas alltid */}
              <FadeIn delay={event.hasExternalLink && event.ctaHref ? 0.1 : 0}>
                <div>
                  <SectionHeader
         
                    heading="Intresseanmälan"
                    variant="small"
                    description="Fyll i formuläret nedan så hör vi av oss med mer information och hjälper dig med bokning."
                    align="left"
                    maxWidth="full"
                  />
                  <InterestForm
                    eventTitle={event.title}
                    eventDate={event.eventDate}
                    eventId={event._id || event.slug}
                  />
                </div>
              </FadeIn>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event hittades inte | USE Golf",
      description: "Eventet kunde inte hittas.",
    };
  }

  // Extrahera text från excerpt (kan vara string eller rich text)
  let excerptText = '';
  if (event.excerpt) {
    if (typeof event.excerpt === 'string') {
      excerptText = event.excerpt.replace(/\*\*/g, ''); // Ta bort markdown-formatering
    } else if (Array.isArray(event.excerpt)) {
      excerptText = (event.excerpt as any[])
        .map((block: any) => 
          block.children?.map((child: any) => child.text || '').join('') || ''
        )
        .join(' ');
    }
  }

  const description = excerptText || event.subtitle || `Läs mer om ${event.title} hos USE Golf.`;
  const title = event.subtitle 
    ? `${event.title} - ${event.subtitle} | USE Golf`
    : `${event.title} | USE Golf`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: event.imageUrl ? [
        {
          url: event.imageUrl,
          width: 1200,
          height: 630,
          alt: event.imageAlt || event.title,
        }
      ] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: event.imageUrl ? [event.imageUrl] : [],
    },
  };
}

export const revalidate = 60;
