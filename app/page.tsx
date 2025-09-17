
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FullBleed from "@/components/ui/FullBleed";
import Grid, { Col } from "@/components/ui/Grid";
import Image from "next/image";
import Noise from "@/components/ui/Noise";
import GradualBlur from "@/components/ui/GradualBlur";
import CurvedLoop from "@/components/ui/CurvedLoop";
import Countdown from "@/components/ui/Countdown";
import ScrollVelocity from "@/components/ui/ScrollVelocity";


export default function Home() {
  return (
    <div >

      {/* Hero */}
      <FullBleed>
        <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src="/images/wall.png"
              alt="USE GOLF"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          {/** 
          <Container>
            <div className="relative z-10 px-6">

              <CurvedLoop className="font-horus" marqueeText="GET USED TO IT ✦ SIGN UP FOR THE WAITLIST ✦" speed={2} interactive={true} />

            </div>
          </Container> */}
        </section>
      </FullBleed>
      {/** v

      <Section className="bg-[var(--color-olive-900)]">
        <div className="w-full flex items-center justify-center flex-col">

          <Countdown className="text-brand-primary" accentClassName="uppercase text-8xl " target={new Date(2025, 10, 1)} />
        </div>
      </Section>

      <Section>
        <Grid columnWidth="280px" gutter="1rem">
          {[
            "/images/lobby casual.png",
            "/images/club2.png",
            "/images/baller3.png",
            "/images/club hit.png",
            "/images/club.png",
          ].map((src, idx) => (
            <div key={src} className="relative aspect-[4/3] w-full overflow-hidden ">
              <Image
                src={src}
                alt={`Galleri bild ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 280px"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </Grid>
      </Section>

      <ScrollVelocity

        texts={['USE GOLF INDOOR', 'HINDÅS']}
        velocity={30}
        className="custom-scroll-text"
      />



      <Section>
        <Grid columns={12} gutter="1.25rem">
          <Col span={12}>
            <h2 className="text-3xl mb-4">GÖTEBORG NU KÖR VI</h2>
            <p className="max-w-2xl">Kort om communityt, känslan, varför vi finns. “Vi blandar träning, spel och bra häng.”</p>
            <a href="/om" className="inline-block mt-4 underline">Om USE GOLF</a>
          </Col>
        </Grid>
      </Section>
      */}
    </div>
  );
}
