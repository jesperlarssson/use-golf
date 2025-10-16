

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



export default function Home() {
  const programItems = [
    {
      title: "Seniorgolf",
      subtitle: "Vardagar",
      imageSrc: "/images/club.png",
      content: (
        <Text>
          Måndag–torsdag kl <strong>09–12</strong> och <strong>12–15</strong>. Pris <strong>250 kr/person</strong> när man bokar en simulator för 4 personer – först till kvarn.
          Vi kör en Order of Merit som leder till slutspel i slutet av säsongen.
        </Text>
      ),
      ctaHref: "/bokning",
      ctaLabel: "Boka",
    },
    {
      title: "Onsdagsgolfen ",
      subtitle: "Ligaspelet",
      imageSrc: "/images/club-sticker.png",
      content: (
        <Text>
          Planerad start senast i januari. Spelas onsdagar (em/kväll) – lag eller individuellt, 1 gång i veckan över säsongen. Mer info kommer.
        </Text>
      ),
      ctaHref: "/bokning",
      ctaLabel: "Boka",
    },
    {
      title: "Juniorligan",
      subtitle: "Höst/Vinter",
      imageSrc: "/images/club2.png",
      content: (
        <Text>
          Tisdagar <strong>15–17</strong> följande datum: <strong>11, 18, 25 nov</strong> och <strong>2, 9, 16 dec</strong>. 3 spelare/simulator, 9 hål + fri lek efteråt.
          Kostnad <strong>1 500 kr</strong> för perioden. Medlemskap Junior krävs.
        </Text>
      ),
      ctaHref: "mailto:hello@usegolf.se?subject=USE%20Golf%20Juniorligan%20H%C3%B6st%2FVinter&body=Hej%21%20Jag%20vill%20anm%C3%A4la%20mig%20till%20Juniorligan%20%28H%C3%B6st%2FVinter%29.%0ANamn%3A%20%0A%C3%85lder%3A%20",
      ctaLabel: "Boka",
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
      ctaHref: "mailto:hello@usegolf.se?subject=USE%20Golf%20Juniorligan%20V%C3%A5ren&body=Hej%21%20Jag%20vill%20anm%C3%A4la%20mig%20till%20Juniorligan%20%28V%C3%A5ren%29.%0ANamn%3A%20%0A%C3%85lder%3A%20",
      ctaLabel: "Boka",
    },
  ];
  return (
    <Page variant="landing">
      <div className="relative">
        <LandingHero
          title="USE GOLF"
          heroText="Get used to it"
          videoSrc="/use_hero.mp4"
          videoPoster="/images/wall.png"
          imageSrc="/images/wall.png"
        />

        <div className=" w-full bg-[var(--brand-olive-700)] text-[var(--brand-primary)] border-y-2 border-[var(--brand-secondary)]">
          <ScrollVelocity
            texts={["Vi öppnar snart i hovås - Get used to it"]}
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
                <h2 className=" font-semibold uppercase text-3xl text-[var(--brand-secondary)] ">BOKNINGEN ÖPPNAR SNART</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Lead className="text-[var(--brand-olive-900)]">Våra simulatorer är snart redo att bokas!</Lead>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Text className="  mt-2 max-w-xl">Bygget är fullt igång och våra första simulatorer är på plats. Snart kommer du kunna boka dem direkt på hemsidan.</Text>
              </FadeIn>
              {/** disabled boka knapp */}
              <div className="mt-4">
                <a href="/bokning" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Bokning</a>
              </div>
            </div>
          </Col>
          {/* Desktop: två kolumner */}
          <Col span={6} className="sm:py-8 hidden sm:block">
            <div className="space-y-4">
              <FadeIn>
                <h2 className=" font-semibold uppercase text-3xl text-[var(--brand-secondary)] ">BOKNINGEN ÖPPNAR SNART</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Lead className="text-[var(--brand-olive-900)]">Våra simulatorer är snart redo att bokas!</Lead>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Text className="  mt-2 max-w-xl">Bygget är fullt igång och våra första simulatorer är på plats. Snart kommer du kunna boka dem direkt på hemsidan.</Text>
              </FadeIn>
              {/** disabled boka knapp */}
              <div className="mt-4">
                <a href="/bokning" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-5 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition" data-cursor-target data-cursor-padding="10">Bokning</a>
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
                  <Image src="/images/club.png" alt="Senior" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl text-[var(--brand-primary)]">Senior</h3>
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
                  <Image src="/images/club2.png" alt="Junior" fill className="object-cover blur-sm scale-105 brightness-90" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-horus text-3xl text-[var(--brand-primary)]">Junior</h3>
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

        {/* Program & ligor i medlemskaps-stil (bild + overlay + text) */}
        <Section className="pt-10 -mt-10">
          <div className="space-y-2">
            <Heading as={2}>Program & ligor</Heading>
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

        {/* Lördagsscramble – bakgrundsbild med text och CTA */}
        <Section className="pt-8 -mt-10">
          <FadeIn>
            <div className="relative border-2 border-[var(--brand-secondary)]/60 rounded-none overflow-hidden min-h-72 px-8">
              <Image src="/images/render1.PNG" alt="Lördagsscramble" fill priority className="object-cover object-center" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10">
                <div className="py-14 sm:py-20 max-w-3xl">
                  <h3 className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)] mb-4">Lördagsscramble</h3>
                  <p className="text-[var(--brand-primary)]/95">
                    Spelas <strong>en gång i månaden</strong>. Tre grupper: Morgon <strong>09–12</strong>, Lunch <strong>13–16</strong>, Kväll <strong>17–20</strong>. Pris <strong>500 kr/person</strong>. Fint prisbord utlovas!
                  </p>
                  <div className="mt-6">
                    <a href="/bokning" className="sketch-button sketch-v1 text-[var(--brand-primary)]" data-cursor-target data-cursor-padding="8">
                      <span className="sketch-sides py-2 px-3 uppercase tracking-widest">Boka</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

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
