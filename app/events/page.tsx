import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text } from "@/components/ui/Typography";
import Banner from "@/components/ui/Banner";
import Image from "next/image";

type EventItem = {
  title: string;
  date?: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel?: string;
};

const eventItems: EventItem[] = [
  {
    title: "Företagsevent – “All in Night”",
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
    title: "Ligaspelet – “USE Indoor League”",
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
    title: "Seriespel – “USE Indoor Series”",
    bullets: [
      "Lag eller individuellt.",
      "Seriesystem med divisioner.",
      "Tabell online, upp/nedflyttning.",
      "Förbokade kvällar. Finalevent i april.",
      "Partner kan “äga” en division. Mer tävlingsmoment & prestige än ligan.",
    ],
    ctaHref: "/bokning",
    ctaLabel: "BOKA NU",
  },
];

export default function EventsPage() {
  const programItems = [
    {
      title: "Veckoscramble",
      subtitle: "2-mannascramble",
      imageSrc: "/images/club.png",
      content: (
        <Text>
          Ny bana <strong>varje vecka</strong>. Spelas <strong>mån–sön</strong>, valfri tid. Kostnad <strong>200 kr/lag</strong> + simulatorhyra.
        </Text>
      ),
      ctaHref: "/events/veckoscramble",
      ctaLabel: "Läs mer",
    },
    {
      title: "Event",
      subtitle: "Boka hela lokalen",
      imageSrc: "/images/render2.PNG",
      content: (
        <Text>
          Hyr hela lokalen (6 simulatorer) med kompisgänget, för kickoff, kundkväll eller teambuilding. Anpassade upplägg med tävlingar, mat och dryck – kontakta oss för offert.
        </Text>
      ),
      ctaHref: "/events/boka-lokalen",
      ctaLabel: "Läs mer",
    },
    // Onsdagsgolfen pausad tills vidare
    {
      title: "Juniorligan",
      subtitle: "Hösten",
      imageSrc: "/images/club2.png",
      content: (
        <Text>
          Start <strong>18 november</strong>. 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad <strong>1 250 kr</strong> per person. Medlemskap <strong>Junior User</strong> krävs.
        </Text>
      ),
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
    },
    {
      title: "Juniorligan",
      subtitle: "Våren",
      imageSrc: "/images/club2-sticker.png",
      content: (
        <Text>
          Tisdagar <strong>15–17</strong> följande datum: <strong>20, 27 jan</strong>, <strong>3, 17, 24 feb</strong>, <strong>3, 10, 17, 24 mars</strong> (avslutning).
          3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad <strong>2 500 kr</strong>. Medlemskap Junior krävs.
        </Text>
      ),
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
    },
  ]; 
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
                {/** 
                <Heading as={3}>Program & ligor</Heading> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programItems.map((item) => (
                    <div key={`${item.title}-${item.subtitle}`} className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                      <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                        <Image src={item.imageSrc} alt={item.title} fill className="object-cover blur-sm scale-105 brightness-90" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">{item.title}</h3>
                          <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="text-sm sm:text-base">
                          {item.content}
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

          {/* Veckoscramble – bakgrundsbild med text och CTA 
          <Section className="pt-8 -mt-18">
            <div className="relative border-2 border-[var(--brand-secondary)]/60 rounded-none overflow-hidden min-h-72 px-8">
              <Image src="/images/render2.PNG" alt="Veckoscramble" fill priority className="object-cover object-center blur-sm scale-105 brightness-90" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10">
                  <div className="py-14 sm:py-20 max-w-3xl">
                    <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)] ">Veckoscramble</h3>
                    <p className="text-md text-[var(--brand-primary)]/80 uppercase tracking-wider mb-4">2-mannascramble</p>
                    <p className="text-[var(--brand-primary)]/95">
                      Ny bana <strong>varje vecka</strong>. Spelas <strong>mån–sön</strong>, valfri tid. Kostnad <strong>200 kr/lag</strong> + simulatorhyra.
                    </p>
                    <div className="mt-6">
                      <a href="/events/veckoscramble" className="sketch-button sketch-v1 text-[var(--brand-primary)]" data-cursor-target data-cursor-padding="8">
                        <span className="sketch-sides py-2 px-3 uppercase tracking-widest">Läs mer</span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </Section>*/}

          {/* Seniorgolf – detaljerad sektion flyttad till egen sida */}
 
          {/* Eventkalender 
          <Section>
            <Container>
              <Heading as={2} className="text-center">Eventkalender</Heading>
              <div className="mt-10 space-y-8">
                {eventItems.map((ev) => (
                  <div key={ev.title} className="grid grid-cols-1 md:grid-cols-[2fr_3fr_auto] gap-6 items-center ug-card p-4 rounded-none transition-colors">
 
                    <div className="bg-[var(--brand-secondary)] h-40 md:h-36 border-2 border-[var(--brand-secondary)]/60 rounded-none" />
         
                    <div className="max-w-xl">
                      <p className="font-semibold uppercase tracking-wider">{ev.title}</p>
                      {ev.date ? <p className="opacity-80 text-sm mt-1">{ev.date}</p> : null}
                      <ul className="list-disc pl-5 mt-3 space-y-1">
                        {ev.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
      
                    <div className="justify-self-start md:justify-self-end w-full md:w-auto">
                      <a
                        href={ev.ctaHref}
                        className="inline-flex w-full md:w-auto items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none"
                      >
                        {ev.ctaLabel ?? "BOKA NU"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </Container>
          </Section>*/}
        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Event & Community",
  description: "Tävlingar, ligor och sociala kvällar hos USE Golf i Göteborg.",
};


