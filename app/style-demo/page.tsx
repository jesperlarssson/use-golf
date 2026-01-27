import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function StyleDemoPage() {
  return (
    <FullBleed>
      <div className="border-y-2 border-[var(--brand-secondary)]">
        <Page variant="subpage">
          {/* Hero Section - Experimentell typografi */}
          <Section className="pt-16 pb-20">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 md:col-span-8">
                <FadeIn>
                  <h1 className="font-horus text-6xl md:text-8xl lg:text-9xl leading-none mb-6 text-[var(--brand-olive-900)]">
                    STYLE
                    <br />
                    <span className="text-[var(--brand-secondary)]">DEMO</span>
                  </h1>
                  <Lead className="text-xl md:text-2xl text-[var(--brand-olive-700)] max-w-2xl">
                    En experimentell visning av designens potential – tydligare grid, mer färg och lekfull typografi.
                  </Lead>
                </FadeIn>
              </div>
              <div className="col-span-12 md:col-span-4 flex items-end">
                <FadeIn delay={0.1}>
                  <div className="w-full aspect-square border-4 border-[var(--brand-secondary)] bg-[var(--brand-accent-amber)]/10 p-6 flex items-center justify-center">
                    <span className="font-horus text-4xl text-[var(--brand-secondary)] rotate-[-5deg]">2026</span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Color Showcase - Brand färger */}
          <Section className="-mt-10 sm:-mt-18">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12">
                <FadeIn>
                  <Heading as={2} className="mb-8">Brand Palette</Heading>
                </FadeIn>
              </div>
              
              {/* Primary & Secondary */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <FadeIn delay={0.05}>
                  <div className="h-48 md:h-64 border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 flex flex-col justify-between">
                    <div>
                      <p className="font-horus text-2xl mb-2">Primary</p>
                      <p className="text-sm uppercase tracking-wider text-[var(--brand-olive-700)]">#F5F2E7</p>
                    </div>
                    <p className="text-xs text-[var(--brand-olive-700)]">Base background</p>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <FadeIn delay={0.1}>
                  <div className="h-48 md:h-64 border-4 border-[var(--brand-secondary)] bg-[var(--brand-secondary)] p-6 flex flex-col justify-between">
                    <div>
                      <p className="font-horus text-2xl mb-2 text-[var(--brand-primary)]">Secondary</p>
                      <p className="text-sm uppercase tracking-wider text-[var(--brand-primary)]/80">#A58E75</p>
                    </div>
                    <p className="text-xs text-[var(--brand-primary)]/80">Accent & borders</p>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <FadeIn delay={0.15}>
                  <div className="h-48 md:h-64 border-4 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)] p-6 flex flex-col justify-between">
                    <div>
                      <p className="font-horus text-2xl mb-2 text-[var(--brand-primary)]">Olive 900</p>
                      <p className="text-sm uppercase tracking-wider text-[var(--brand-primary)]/80">#4F5A46</p>
                    </div>
                    <p className="text-xs text-[var(--brand-primary)]/80">Headings & text</p>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <FadeIn delay={0.2}>
                  <div className="h-48 md:h-64 border-4 border-[var(--brand-secondary)] bg-[var(--brand-olive-700)] p-6 flex flex-col justify-between">
                    <div>
                      <p className="font-horus text-2xl mb-2 text-[var(--brand-primary)]">Olive 700</p>
                      <p className="text-sm uppercase tracking-wider text-[var(--brand-primary)]/80">#6D7566</p>
                    </div>
                    <p className="text-xs text-[var(--brand-primary)]/80">Secondary text</p>
                  </div>
                </FadeIn>
              </div>

              {/* Accent Colors */}
              <div className="col-span-12 md:col-span-4">
                <FadeIn delay={0.25}>
                  <div className="h-32 border-4 border-[var(--brand-secondary)] bg-[var(--brand-accent-amber)] p-6 flex items-center justify-between">
                    <div>
                      <p className="font-horus text-xl mb-1 text-[var(--brand-olive-900)]">Amber</p>
                      <p className="text-xs uppercase tracking-wider text-[var(--brand-olive-900)]">#FFA726</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-olive-900)]"></div>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 md:col-span-4">
                <FadeIn delay={0.3}>
                  <div className="h-32 border-4 border-[var(--brand-secondary)] bg-[var(--brand-accent-orange)] p-6 flex items-center justify-between">
                    <div>
                      <p className="font-horus text-xl mb-1 text-[var(--brand-primary)]">Orange</p>
                      <p className="text-xs uppercase tracking-wider text-[var(--brand-primary)]/90">#D35400</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)]"></div>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 md:col-span-4">
                <FadeIn delay={0.35}>
                  <div className="h-32 border-4 border-[var(--brand-secondary)] bg-[var(--brand-accent-blue)] p-6 flex items-center justify-between">
                    <div>
                      <p className="font-horus text-xl mb-1 text-[var(--brand-primary)]">Blue</p>
                      <p className="text-xs uppercase tracking-wider text-[var(--brand-primary)]/90">#365880</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)]"></div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Typography Showcase */}
          <Section className="pt-10 -mt-10 sm:-mt-18">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 lg:col-span-6">
                <FadeIn>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-8 md:p-12 space-y-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--brand-olive-700)] mb-4">Display Typography</p>
                      <h1 className="font-horus text-7xl md:text-8xl leading-none text-[var(--brand-olive-900)] mb-4">
                        HORUS
                      </h1>
                      <p className="text-sm text-[var(--brand-olive-700)]">
                        Display font för rubriker och accenttext. Stor, fet och uttrycksfull.
                      </p>
                    </div>
                    
                    <div className="pt-8 border-t-2 border-[var(--brand-secondary)]/30">
                      <p className="text-xs uppercase tracking-widest text-[var(--brand-olive-700)] mb-4">Body Typography</p>
                      <p className="text-lg md:text-xl leading-relaxed text-[var(--brand-olive-900)] mb-2">
                        Aktiv Grotesk för brödtext och längre texter. Läsbar, modern och professionell.
                      </p>
                      <p className="text-base text-[var(--brand-olive-700)]">
                        Perfekt för längre texter där läsbarhet är viktigast. Ger en balanserad känsla tillsammans med Horus.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <FadeIn delay={0.1}>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)] p-8 md:p-12 space-y-6 text-[var(--brand-primary)]">
                    <div>
                      <h2 className="font-horus text-5xl md:text-6xl leading-tight mb-4">
                        Typography
                        <br />
                        <span className="text-[var(--brand-accent-amber)]">Scale</span>
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-horus text-4xl mb-1">Heading 1</p>
                        <p className="text-xs opacity-70">font-horus text-4xl</p>
                      </div>
                      <div>
                        <p className="font-horus text-3xl mb-1">Heading 2</p>
                        <p className="text-xs opacity-70">font-horus text-3xl</p>
                      </div>
                      <div>
                        <p className="font-horus text-2xl mb-1">Heading 3</p>
                        <p className="text-xs opacity-70">font-horus text-2xl</p>
                      </div>
                      <div>
                        <p className="text-xl mb-1">Body Large</p>
                        <p className="text-xs opacity-70">text-xl</p>
                      </div>
                      <div>
                        <p className="text-base mb-1">Body Regular</p>
                        <p className="text-xs opacity-70">text-base</p>
                      </div>
                      <div>
                        <p className="text-sm mb-1">Body Small</p>
                        <p className="text-xs opacity-70">text-sm</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          {/* Grid Showcase */}
          <Section className="pt-10 -mt-10 sm:-mt-18">
            <div className="space-y-6">
              <FadeIn>
                <Heading as={2}>Grid System</Heading>
                <Text className="max-w-2xl">
                  Ett tydligt 12-kolumns grid-system som ger flexibilitet och struktur. Perfekt för komplexa layouter.
                </Text>
              </FadeIn>

              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {/* Full width */}
                <div className="col-span-12">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 text-center">
                    <p className="font-horus text-xl text-[var(--brand-olive-900)]">12 kolumner (Full width)</p>
                  </div>
                </div>

                {/* 6 columns */}
                <div className="col-span-12 md:col-span-6">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-accent-amber)]/10 p-6 text-center">
                    <p className="font-horus text-lg text-[var(--brand-olive-900)]">6 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-accent-blue)]/10 p-6 text-center">
                    <p className="font-horus text-lg text-[var(--brand-olive-900)]">6 kolumner</p>
                  </div>
                </div>

                {/* 4 columns */}
                <div className="col-span-12 md:col-span-4">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-4 text-center">
                    <p className="text-sm text-[var(--brand-olive-900)]">4 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-4 text-center">
                    <p className="text-sm text-[var(--brand-olive-900)]">4 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-4 text-center">
                    <p className="text-sm text-[var(--brand-olive-900)]">4 kolumner</p>
                  </div>
                </div>

                {/* 3 columns */}
                <div className="col-span-12 md:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-700)]/10 p-4 text-center">
                    <p className="text-xs text-[var(--brand-olive-900)]">3 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-700)]/10 p-4 text-center">
                    <p className="text-xs text-[var(--brand-olive-900)]">3 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-700)]/10 p-4 text-center">
                    <p className="text-xs text-[var(--brand-olive-900)]">3 kolumner</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-700)]/10 p-4 text-center">
                    <p className="text-xs text-[var(--brand-olive-900)]">3 kolumner</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Card Variations */}
          <Section className="pt-10 -mt-10 sm:-mt-18">
            <div className="space-y-6">
              <FadeIn>
                <Heading as={2}>Card Variations</Heading>
                <Text className="max-w-2xl">
                  Olika kort-stilar som visar designens flexibilitet och potential.
                </Text>
              </FadeIn>

              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {/* Standard card */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FadeIn delay={0.05}>
                    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 h-full flex flex-col">
                      <h3 className="font-horus text-2xl mb-3 text-[var(--brand-olive-900)]">Standard Card</h3>
                      <Text className="mb-4 flex-1">
                        Klassisk kort-stil med border och padding. Enkel och effektiv.
                      </Text>
                      <a href="#" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-5 py-2 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Action
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Colored card */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FadeIn delay={0.1}>
                    <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-accent-amber)]/20 p-6 h-full flex flex-col">
                      <h3 className="font-horus text-2xl mb-3 text-[var(--brand-olive-900)]">Colored Card</h3>
                      <Text className="mb-4 flex-1">
                        Accentfärger kan användas för att skapa visuell hierarki och intresse.
                      </Text>
                      <a href="#" className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-5 py-2 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Action
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Dark card */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FadeIn delay={0.15}>
                    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)] p-6 h-full flex flex-col text-[var(--brand-primary)]">
                      <h3 className="font-horus text-2xl mb-3">Dark Card</h3>
                      <Text className="mb-4 flex-1 opacity-90">
                        Mörk bakgrund skapar kontrast och fokus. Perfekt för viktiga sektioner.
                      </Text>
                      <a href="#" className="inline-flex items-center justify-center bg-[var(--brand-accent-amber)] text-[var(--brand-olive-900)] px-5 py-2 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Action
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Image card */}
                <div className="col-span-12 md:col-span-6">
                  <FadeIn delay={0.2}>
                    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 border-b-2 border-[var(--brand-secondary)]">
                        <Image
                          src="/images/invigning/DSC06519.jpg"
                          alt="Demo"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-horus text-2xl mb-3 text-[var(--brand-olive-900)]">Image Card</h3>
                        <Text className="mb-4 flex-1">
                          Bilder kan integreras sömlöst i kort-designen för visuellt intresse.
                        </Text>
                        <a href="#" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-5 py-2 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                          Action
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Full width card */}
                <div className="col-span-12 md:col-span-6">
                  <FadeIn delay={0.25}>
                    <div className="border-4 border-[var(--brand-secondary)] bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent-blue)]/10 p-8 h-full flex flex-col">
                      <h3 className="font-horus text-4xl mb-4 text-[var(--brand-olive-900)]">Full Width</h3>
                      <Text className="mb-6 text-lg flex-1">
                        Gradient-bakgrunder och större typografi kan skapa dramatiska effekter.
                      </Text>
                      <div className="flex gap-4">
                        <a href="#" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                          Primary
                        </a>
                        <a href="#" className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] text-[var(--brand-olive-900)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition">
                          Secondary
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </Section>

          {/* Button Variations */}
          <Section className="pt-10 -mt-10 sm:-mt-18">
            <div className="space-y-6">
              <FadeIn>
                <Heading as={2}>Button Styles</Heading>
                <Text className="max-w-2xl">
                  Olika knapp-stilar som visar designens flexibilitet.
                </Text>
              </FadeIn>

              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-olive-700)] mb-4">Primary</p>
                    <a href="#" className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                      Button
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-olive-700)] mb-4">Secondary</p>
                    <a href="#" className="inline-flex w-full items-center justify-center border-2 border-[var(--brand-secondary)] text-[var(--brand-olive-900)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition">
                      Button
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)] p-6 space-y-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-primary)]/70 mb-4">Dark</p>
                    <a href="#" className="inline-flex w-full items-center justify-center bg-[var(--brand-accent-amber)] text-[var(--brand-olive-900)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                      Button
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-olive-700)] mb-4">Sketch</p>
                    <a href="#" className="sketch-button sketch-v1 inline-flex w-full items-center justify-center text-[var(--brand-secondary)] px-6 py-3 font-semibold uppercase tracking-wider">
                      <span className="sketch-sides">Button</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section className="pt-10 -mt-10 sm:-mt-18 pb-20">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 lg:col-span-8">
                <FadeIn>
                  <div className="border-4 border-[var(--brand-secondary)] bg-[var(--brand-olive-900)] p-8 md:p-12 text-[var(--brand-primary)]">
                    <h2 className="font-horus text-5xl md:text-6xl mb-6 leading-tight">
                      Redo att
                      <br />
                      <span className="text-[var(--brand-accent-amber)]">komma igång?</span>
                    </h2>
                    <Text className="text-lg mb-8 opacity-90 max-w-xl">
                      Detta är en demo-sida som visar designens potential. Alla komponenter kan anpassas och kombineras för att skapa unika upplevelser.
                    </Text>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/" className="inline-flex items-center justify-center bg-[var(--brand-accent-amber)] text-[var(--brand-olive-900)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                        Tillbaka till startsidan
                      </Link>
                      <Link href="/events" className="inline-flex items-center justify-center border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-primary)]/10 transition">
                        Se events
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <FadeIn delay={0.1}>
                  <div className="relative h-full min-h-[300px] border-4 border-[var(--brand-secondary)] overflow-hidden">
                    <Image
                      src="/images/invigning/DSC06426.jpg"
                      alt="USE Golf"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-olive-900)]/80 to-transparent flex items-end p-6">
                      <p className="font-horus text-3xl text-[var(--brand-primary)]">USE GOLF</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

        </Page>
      </div>
    </FullBleed>
  );
}

export const metadata: Metadata = {
  title: "Style Demo",
  description: "En experimentell visning av designens potential – tydligare grid, mer färg och lekfull typografi.",
};
