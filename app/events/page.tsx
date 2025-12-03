import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Banner from "@/components/ui/Banner";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allEventsQuery, transformEvent, Event, EventDocument } from "@/sanity/lib/queries";

type EventItem = {
  title: string;
  date?: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel?: string;
};

const eventItems: EventItem[] = [
  {
    title: "Företagsevent – \"All in Night\"",
    date: "När som helst – 2 timmar",
    bullets: [
      "Hyr hela lokalen (6 simulatorer).",
      "2 timmar spel/test.",
      "Grundpris: 6 simulatorer × 500 kr/h × 2 h = 6 000 kr.",
    ],
    ctaHref: "/bokning",
    ctaLabel: "BOKA NU",
  },
  {
    title: "Ligaspelet – \"USE Indoor League\"",
    date: "Varannan vecka, nov–mars",
    bullets: [
      "Matcher i lagformat.",
      "Spelas på alla simulatorer parallellt.",
      "Sponsorprofilering & priser.",
      "Bygger community & återkommande bokningar.",
    ],
    ctaHref: "/bokning",
    ctaLabel: "BOKA NU",
  },
  {
    title: "Seriespel – \"USE Indoor Series\"",
    bullets: [
      "Lag eller individuellt.",
      "Seriesystem med divisioner.",
      "Tabell online, upp/nedflyttning.",
      "Förbokade kvällar. Finalevent i april.",
      "Partner kan \"äga\" en division. Mer tävlingsmoment & prestige än ligan.",
    ],
    ctaHref: "/bokning",
    ctaLabel: "BOKA NU",
  },
];

// Helper function för att formatera text med **fet text**
function formatContent(text: string) {
  const parts: React.ReactNode[] = []
  const boldRegex = /\*\*([^*]+)\*\*/g
  const matches = Array.from(text.matchAll(boldRegex))
  
  if (matches.length === 0) {
    return <Text>{text}</Text>
  }
  
  let lastIndex = 0
  let keyCounter = 0
  
  matches.forEach((match) => {
    if (match.index !== undefined) {
      // Lägg till text före match
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index)
        if (beforeText) {
          parts.push(<span key={`text-${keyCounter++}`}>{beforeText}</span>)
        }
      }
      // Lägg till fet text
      parts.push(<strong key={`bold-${keyCounter++}`}>{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }
  })
  
  // Lägg till resten av texten
  if (lastIndex < text.length) {
    parts.push(<span key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</span>)
  }
  
  return <Text>{parts}</Text>
}

async function getEvents(): Promise<EventDocument[]> {
  try {
    const events = await client.fetch<Event[]>(allEventsQuery)
    return events.map(transformEvent)
  } catch (error) {
    console.error('Error fetching events:', error)
    // Fallback till hårdkodad data om Sanity misslyckas
    return []
  }
}

export default async function EventsPage() {
  const sanityEvents = await getEvents()
  
  // Fallback events om Sanity är tom
  const defaultEvents: EventDocument[] = [
    {
      title: "Veckoscramble",
      subtitle: "2-mannascramble",
      imageUrl: "/images/club.png",
      imageAlt: "Veckoscramble",
      content: "Ny bana **varje vecka**. Spelas **mån–sön**, valfri tid. Kostnad **200 kr/lag** + simulatorhyra.",
      ctaHref: "/events/veckoscramble",
      ctaLabel: "Läs mer",
    },
    {
      title: "Event",
      subtitle: "Boka hela lokalen",
      imageUrl: "/images/render2.PNG",
      imageAlt: "Boka hela lokalen",
      content: "Hyr hela lokalen (6 simulatorer) med kompisgänget, för kickoff, kundkväll eller teambuilding. Anpassade upplägg med tävlingar, mat och dryck – kontakta oss för offert.",
      ctaHref: "/events/boka-lokalen",
      ctaLabel: "Läs mer",
    },
    {
      title: "Ladies Tour Tuesdays",
      subtitle: "Damliga",
      imageUrl: "/images/invigning/DSC06673.jpg",
      imageAlt: "Ladies Tour Tuesdays",
      content: "Tisdagar **13.00–15.00** (2 h) med **250 kr** per person. Ett Ladies only-upplägg som mixar veckovisa format och olika banor, betalning sker på plats. Speldagar: **9 & 16 december, 13, 20 & 27 januari, 3, 17 & 24 februari samt 3, 10, 17, 24 & 31 mars** (avslutning med bubbel).",
      ctaHref: "https://book.sweetspot.io/clubs/use-golf/",
      ctaLabel: "Anmäl dig",
    },
    {
      title: "Onsdagsgolfen",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06600.jpg",
      imageAlt: "Onsdagsgolfen",
      content: "Varje onsdag spelar vi en social tävling för max 24 medlemmar. Två starttider – **13.00–15.00** eller **17.00–19.00** – och fyra omväxlande format gör det både lekfullt och tävlingsinriktat. Kostnad **250 kr** och anmälan sker via Sweetspot.",
      ctaHref: "https://book.sweetspot.io/clubs/use-golf/passes/3d4941fe-3d67-4e7b-9fd2-c9a4aee12b1c",
      ctaLabel: "Anmäl dig",
    },
    {
      title: "Juniorligan",
      subtitle: "Hösten",
      imageUrl: "/images/club2.png",
      imageAlt: "Juniorligan Hösten",
      content: "Start **18 november**. 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad **1 250 kr** per person. Medlemskap **Junior User** krävs.",
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
    },
    {
      title: "Juniorligan",
      subtitle: "Våren",
      imageUrl: "/images/club2-sticker.png",
      imageAlt: "Juniorligan Våren",
      content: "Tisdagar **15–17** följande datum: **20, 27 jan**, **3, 17, 24 feb**, **3, 10, 17, 24 mars** (avslutning). 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad **2 500 kr**. Medlemskap Junior krävs.",
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
    },
  ]
  
  const programItems = sanityEvents.length > 0 ? sanityEvents : defaultEvents
  
  return (
    <FullBleed>
      <div className="border-y-2 border-[var(--brand-secondary)]/40">
        <Page variant="subpage">
          {/* Intro – harmoniserad med Medlemskap */}
          <Section className="pt-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 max-w-3xl">
                <Heading as={2}>Event & Community</Heading>
                <Text className="text-[var(--brand-olive-900)] text-lg">Vi samlar golfare – nybörjare till single – för tävlingar, ligor och sociala kvällar. Spela, häng, utvecklas.</Text>
                <Text>
                  USE Golf är mer än simulatorer. Här blandas seriös golf med en avslappnad stämning. Det kan vara en tävling, en företagskväll eller bara en kväll med polarna.
                </Text>
              </div>
              <div>
                <div className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] p-6 border-2 border-[var(--brand-secondary)]/80 rounded-none">
                  <p className="font-semibold">Vi erbjuder:</p>
                  <ul className="mt-2 space-y-2">
                    <li><strong>TrackMan Tournaments & Challenges</strong> – mäta dig mot andra och vinn grymma priser.</li>
                    <li><strong>Företagsevent & kickoffs</strong> – golf + mat + dryck i en social miljö.</li>
                    <li><strong>Sociala kvällar</strong> – after work med golf, musik och gemenskap.</li>
                    <li><strong>Clinics och workshops</strong> – utveckla ditt spel med hjälp av experter.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Program & ligor i medlemskaps-stil (bild + overlay + text) */}
          <Section className="-mt-18">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programItems.map((item) => (
                  <div key={`${item.title}-${item.subtitle || ''}`} className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                    <div className="relative h-56 border-b-2 border-[var(--brand-secondary)]">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.imageAlt || item.title} 
                        fill 
                        className="object-cover blur-xs scale-105 brightness-90" 
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="text-sm sm:text-base">
                        {formatContent(item.content)}
                      </div>
                      {item.ctaHref ? (
                        <div>
                          <a href={item.ctaHref} className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                            {item.ctaLabel ?? "Boka"}
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Event & Community",
  description: "Tävlingar, ligor och sociala kvällar hos USE Golf i Göteborg.",
};
