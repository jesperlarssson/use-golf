

import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import LandingHero from "@/components/ui/LandingHero";
import NavCards from "@/components/ui/NavCards";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import FadeIn from "@/components/ui/FadeIn";
import Grid, { Col } from "@/components/ui/Grid";
import Logo from "@/components/ui/Logo";
import FAQ, { FAQItem } from "@/components/ui/FAQ";
import UserPassesSection from "@/components/ui/UserPassesSection";
import SweetspotAlert from "@/components/SweetspotAlert";



export default function Home() {
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
          3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad <strong>2 500 kr</strong>. Medlemskap <strong>Junior User</strong> krävs.
        </Text>
      ),
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
    },
  ];
  return (
    <Page variant="landing">
      <div className="relative">
        <LandingHero
          title="USE GOLF"
          heroText="Get used to it"
          videoSrc="/use_hero.mp4"
          videoPoster="/images/placeholder.png"
          imageSrc="/images/placeholder.png"
        />

        <div className=" w-full bg-[var(--brand-olive-700)] text-[var(--brand-primary)] border-y-2 border-[var(--brand-secondary)]">
          <ScrollVelocity
            texts={["Get used to it"]}
            velocity={30}
            className="px-6 py-3 uppercase tracking-widest text-[var(--brand-primary)]"
            numCopies={8}
            parallaxClassName=""
            scrollerClassName=""
          />
        </div>


        <Grid gutter="0" className="p-6 sm:p-10  h-[490px] items-stretch mt-2">
          {/* Mobil: vänster innehåll i fullbredd */}
          <Col span={12} className="sm:hidden">
            <div className="space-y-4">
              <FadeIn>
                <h2 className=" font-semibold uppercase text-3xl text-[var(--brand-secondary)] ">BOKA TID </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Lead className="text-[var(--brand-olive-900)]">Våra simulatorer är redo att bokas!</Lead>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Text className="  mt-2 max-w-xl">Äntligen står europas största TrackMan simulatorer redo att bokas i Hovås! Boka din tid idag, läs mer om stående tider eller boka hela lokalen för event.</Text>
              </FadeIn>
    
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka tid</a>
                <a href="/events/staende-tid" className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition" data-cursor-target data-cursor-padding="10">Läs mer</a>
              </div>
            </div>
          </Col>
          {/* Desktop: två kolumner */}
          <Col span={6} className="sm:py-8 hidden sm:block">
            <div className="space-y-4">
              <FadeIn>
                <h2 className=" font-semibold uppercase text-3xl text-[var(--brand-secondary)] ">BOKA TID</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Lead className="text-[var(--brand-olive-900)]">Våra simulatorer är redo att bokas!</Lead>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Text className="  mt-2 max-w-xl">Äntligen står europas största TrackMan simulatorer redo att bokas i Hovås! Boka din tid idag, läs mer om stående tider eller boka hela lokalen för event.</Text>
              </FadeIn>
              {/** disabled boka knapp */}
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://book.sweetspot.io/clubs/use-golf/" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Boka tid</a>
                <a href="/bokning" className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-secondary)] font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition" data-cursor-target data-cursor-padding="10">Läs mer</a>
              </div>
            </div>
          </Col>
          <Col span={6} className="p-0 h-full hidden sm:block">
            <div className="relative h-full w-full overflow-hidden border border-[var(--brand-secondary)]">
              <Image src="/images/render2.PNG" alt="Boka" fill className="object-cover blur-xs scale-105 brightness-90" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Logo className="w-20 h-20 text-[var(--brand-primary)] animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          </Col>
        </Grid>




        <Section className="">
          <FadeIn>
            <Heading as={2} >Medlemskap</Heading>
            <Text className="mt-2 mb-10 max-w-xl">Välj ett medlemskap – spela mer, betala mindre, och bli en del av vårt community.</Text>
          </FadeIn>
          <div className="grid grid-cols-1  gap-6 ">
            {/* Senior (condensed) */}
            <FadeIn>
              <div className="rounded-none flex flex-col sm:flex-row overflow-hidden border-1 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                <div className="relative h-44 sm:h-64 w-full sm:w-1/2 border-b-2 border-[var(--brand-secondary)] overflow-hidden">
                  <Image src="/images/club.png" alt="User" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Use:r</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3 sm:pl-10">
                  <p className="text-lg font-semibold uppercase tracking-wider">från 600 kr/år</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider">
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">rabatt på bokningar</span>
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">förtur till event</span>
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">1h speltid ingår</span>
                  </div>
                  <div>
                    <a href="/medlemskap" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Läs mer</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Junior (condensed) */}
            <FadeIn delay={0.05}>
              <div className="rounded-none flex flex-col sm:flex-row overflow-hidden border-1 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                  <div className="relative h-44 sm:h-64 w-full sm:w-1/2 border-b-2 border-[var(--brand-secondary)] overflow-hidden">
                  <Image src="/images/club2.png" alt="Junior User" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">Junior Use:r</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3 sm:pl-10">
                  <p className="text-lg font-semibold uppercase tracking-wider">400 kr/år</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider">
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">rabatt på bokningar</span>
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">förtur till event</span>
                    <span className="border border-[var(--brand-secondary)] px-2 py-1">1h ingår</span>
                  </div>
                  <div>
                    <a href="/medlemskap" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Läs mer</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/** Userpasses */}
        <UserPassesSection />

        {/* Program & ligor i medlemskaps-stil (bild + overlay + text) */}
        <Section className="pt-10 -mt-10">
          <div className="space-y-2">
            <Heading as={2}>Event & ligor</Heading>
            <Text className="pb-2 max-w-xl">Återkommande aktiviteter och ligor för alla nivåer – häng med!</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {programItems.map((item) => (
                <FadeIn key={`${item.title}-${item.subtitle}`}>
                  <div className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] h-full min-h-[360px] flex flex-col">
                    <div className="relative h-44 border-b-2 border-[var(--brand-secondary)]">
                      <Image src={item.imageSrc} alt={item.title} fill className="object-cover blur-sm scale-105 brightness-90" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)]">{item.title}</h3>
                        <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="text-sm sm:text-base">
                        {item.content}
                      </div>
                      {item.ctaHref ? (
                        <div className="mt-auto">
                          <a href={item.ctaHref} className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">
                            {item.ctaLabel ?? "Boka"}
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* Veckoscramble – bakgrundsbild med text och CTA
        <Section className="pt-8 -mt-10">
          <FadeIn>
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
          </FadeIn>
        </Section> */}

        {/* NavCards överlappar upp på hero 
        <div className=" relative z-20 py-20">
          <NavCards
            items={[
              { href: "/bokning", title: "Boka simulator", description: "Boka din tid idag" },
              { href: "/medlemskap", title: "Medlemskap", description: "Junior och seniormedlemskap" },
              { href: "/events", title: "Event & Community", description: "Träningar & ligaspel" },
              
            ]}
          />
        </div>*/}

        {/* FAQ Section */}
        <Section className="pt-10 -mt-10">
          <FadeIn>
            <Heading as={2}>Vanliga frågor</Heading>
            <Text className="mt-2 mb-6 max-w-xl">Här hittar du svar på de vanligaste frågorna om USE Golf.</Text>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ
              items={[
                {
                  q: "Vad är USE Golf?",
                  a: "USE Golf är Göteborgs nya destination för inomhusgolf – en mötesplats där du kan spela, träna och umgås året runt. Vi erbjuder **premium-simulatorer från TrackMan**, ett café med enklare mat och dryck samt events och ligor för både privatpersoner och företag.",
                },
                {
                  q: "Var ligger ni?",
                  a: "Du hittar oss på **Krogabäcksvägen 2, 436 53 Hovås**. Parkering finns precis utanför i P-huset.",
                },
                {
                  q: "Hur fungerar parkeringen?",
                  a: "Det finns **gratis parkering i 2 timmar** i P-huset utanför.\nKom ihåg att aktivera parkeringen via appen **EasyPark** när du anländer.",
                },
                {
                  q: "Hur bokar jag en simulator?",
                  a: "Bokning sker via vår partner **Sweetspot**. Du hittar länken direkt på vår hemsida under [Boka Simulator](/bokning). Där väljer du tid, bana och antal spelare.",
                  action: {
                    label: "Till bokning",
                    href: "/bokning",
                  },
                },
                {
                  q: "Kan jag boka en stående tid varje vecka?",
                  a: "Ja – vi erbjuder **fasta veckotider**. Kontakta oss på [hello@usegolf.se](mailto:hello@usegolf.se) så hjälper vi dig att hitta en tid som passar.",
                  action: {
                    label: "Läs mer om stående tider",
                    href: "/events/staende-tid",
                  },
                },
                {
                  q: "Hur många kan spela samtidigt?",
                  a: "Upp till **4 spelare per simulator** rekommenderas för bästa upplevelse.",
                },
                {
                  q: "Hur lång tid tar en runda?",
                  a: "En **18-hålsrunda för 2 spelare** tar ungefär **2 timmar**. Du kan boka både **55- och 110-minuterspass** beroende på hur mycket du vill spela.",
                },
                {
                  q: "Behöver jag ett TrackMan-konto?",
                  a: "Ja – för att spara resultat och statistik behöver du ett **gratis TrackMan-konto**.\n\n1. Ladda ner TrackMan Golf-appen i App Store eller Google Play\n2. Skapa ett konto innan ditt besök\n3. När du kommer till oss loggar du in genom att scanna QR-koden på TV-skärmen eller i dukens högra hörn med appens skanner",
                },
                {
                  q: "Hur skapar jag ett TrackMan-konto?",
                  a: "Det tar bara någon minut!\n\n**1. Ladda ner appen**\nSök efter TrackMan Golf (orange ikon med TrackMan-loggan) i App Store eller Google Play.\n\n**2. Skapa konto**\nÖppna appen och välj \"Create Account\". Fyll i namn, e-postadress och lösenord.\n\n**3. Verifiera kontot**\nGå till din e-post och bekräfta registreringen via länken från TrackMan.\n\n**4. Logga in hos oss**\nNär du står vid simulatorn – öppna TrackMan-appen och välj \"Scan to log in\". Scanna QR-koden på TV-skärmen i ditt bås eller på dukens högra hörn.\n\n💡 **Tips:** Har du redan ett TrackMan-konto? Använd samma inloggning – all din data sparas automatiskt oavsett var du spelar.",
                },
                {
                  q: "Vad ska jag ta med?",
                  a: "• **Egna klubbor** (om du inte hyr, se nedan)\n• **Golfskor** går bra att använda\n• Använd **inte** egna bollar eller träpeggar\n\nVi har **Titleist Pro V1-bollar** och särskilda peggar som ska användas i våra simulatorer.",
                },
                {
                  q: "Finns hyrklubbor att låna?",
                  a: "Ja, vi erbjuder **hyrklubbor**. Boka dem gärna i förväg via [hello@usegolf.se](mailto:hello@usegolf.se).",
                },
                {
                  q: "Erbjuder ni dryck och lättare mat?",
                  a: "Ja! I vårt **café** hittar du kaffe, drycker, mackor och enklare tilltugg under hela dagen.",
                },
                {
                  q: "Behöver jag vara medlem för att spela?",
                  a: "Nej, **alla är välkomna**! Men som medlem får du förmåner som rabatt på spel, events och partnererbjudanden.",
                  action: {
                    label: "Läs mer om medlemskap",
                    href: "/medlemskap",
                  },
                },
                {
                  q: "Vilka medlemskap finns?",
                  a: "Vi erbjuder olika **User Pass-nivåer** samt **Junior Pass**. Du hittar aktuella priser och villkor på vår hemsida under [Medlemskap](/medlemskap).",
                  action: {
                    label: "Se medlemskap",
                    href: "/medlemskap",
                  },
                },
                {
                  q: "Kan företag boka egna event?",
                  a: "Absolut! Vi arrangerar **företagsevent, turneringar, after work-spel** och kundaktiviteter. Kontakta oss på [hello@usegolf.se](mailto:hello@usegolf.se) för offert.",
                  action: {
                    label: "Läs mer om event",
                    href: "/events/boka-lokalen",
                  },
                },
                {
                  q: "Kan jag köpa presentkort?",
                  a: "Ja, **presentkort** finns att köpa på plats eller digitalt – perfekt för golfälskaren!",
                  action: {
                    label: "Läs mer om priser & presentkort",
                    href: "/priser-presentkort",
                  },
                },
                {
                  q: "Finns personal på plats?",
                  a: "Ja, våra **grymma medarbetare** finns alltid på plats för att hjälpa dig i gång, svara på frågor och skapa den bästa upplevelsen.",
                },
                {
                  q: "Kan jag ta med barn?",
                  a: "Ja – **barn är välkomna** tillsammans med vuxen. Vi har även **Junior League** och ungdomsaktiviteter.",
                },
                {
                  q: "Vad händer om jag behöver avboka?",
                  a: "Avbokning sker via **Sweetspot senast 3 timmar** före spelstart. Senare avbokning debiteras **fullt pris**.",
                },
              ]}
            />
          </FadeIn>
        </Section>
      </div>

    </Page>
  );
}

export const metadata: Metadata = {
  title: "Inomhusgolf i Göteborg",
  description: "USE Golf – TrackMan-simulatorer, ligor, event och träning i Hovås.",
  openGraph: {
    title: "USE GOLF – Inomhusgolf i Göteborg",
    description: "TrackMan-simulatorer, ligor, event och träning i Hovås.",
    url: "/",
    type: "website",
  },
};
