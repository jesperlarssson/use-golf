import type { Metadata } from "next";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQ from "@/components/ui/FAQ";
import type { FAQItem } from "@/components/ui/FAQ";
import { getUserPasses } from "@/sanity/lib/pricingQueries";
import { defaultUserPasses, type UserPassType } from "@/lib/prices";
import JournalCard from "@/components/ui/JournalCard";
import PortableText from "@/components/ui/PortableText";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, transformPost, PostDocument, Post, allFAQQuery, transformFAQ, type FAQ as SanityFAQ, type FAQDocument, getLandingPageEvents, EventDocument } from "@/sanity/lib/queries";

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
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index)
        if (beforeText) {
          parts.push(<span key={`text-${keyCounter++}`}>{beforeText}</span>)
        }
      }
      parts.push(<strong key={`bold-${keyCounter++}`}>{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }
  })

  if (lastIndex < text.length) {
    parts.push(<span key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</span>)
  }

  return <Text>{parts}</Text>
}

async function getLatestPosts(limit: number = 3): Promise<PostDocument[]> {
  try {
    const posts = await client.fetch<Post[]>(allPostsQuery);
    return posts.slice(0, limit).map(transformPost);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

async function getFAQ(): Promise<FAQDocument[]> {
  try {
    const faqs = await client.fetch<SanityFAQ[]>(allFAQQuery);
    return faqs.map(transformFAQ);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    return [];
  }
}

// Använder helper-funktion från queries.ts som automatiskt hanterar dummy-data

export default async function Landing2DemoPage() {
  const latestPosts = await getLatestPosts(3);
  const faqItems = await getFAQ();
  const landingPageEvents = await getLandingPageEvents();
  
  // Hämta User Passes från Sanity, fallback till default om det misslyckas
  const sanityPasses = await getUserPasses();
  const userPasses = sanityPasses || defaultUserPasses;

  // Använd posts från Sanity
  const postsToUse = latestPosts;

  // Fallback FAQ-data
  const defaultFAQ: FAQDocument[] = [
    {
      q: "Vad är USE Golf?",
      a: "USE Golf är Göteborgs nya destination för inomhusgolf – en mötesplats där du kan spela, träna och umgås året runt. Vi erbjuder **premium-simulatorer från TrackMan**, ett café med enklare mat och dryck samt events och ligor för både privatpersoner och företag.",
    },
    {
      q: "Var ligger ni?",
      a: "Du hittar oss på **Krogabäcksvägen 2, 436 53 Hovås**. Parkering finns precis utanför i P-huset.",
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
      q: "Behöver jag vara medlem för att spela?",
      a: "Nej, **alla är välkomna**! Men som medlem får du förmåner som rabatt på spel, events och partnererbjudanden.",
      action: {
        label: "Läs mer om medlemskap",
        href: "/medlemskap",
      },
    },
  ];

  const faqData = faqItems.length > 0 ? faqItems : defaultFAQ;

  // Fallback events
  const defaultEvents: EventDocument[] = [
    {
      _id: "default-1",
      title: "Onsdagsgolfen",
      subtitle: "",
      imageUrl: "/images/invigning/DSC06600.jpg",
      imageAlt: "Onsdagsgolfen",
      excerpt: "Varje onsdag spelar vi en social tävling för max 24 medlemmar. Två starttider – **13.00–15.00** eller **17.00–19.00** – och fyra omväxlande format gör det både lekfullt och tävlingsinriktat.",
      ctaHref: "https://book.sweetspot.io/clubs/use-golf/passes/3d4941fe-3d67-4e7b-9fd2-c9a4aee12b1c",
      ctaLabel: "Anmäl dig",
      hasExternalLink: true,
      category: "ligor",
    },
    {
      _id: "default-2",
      title: "Juniorligan",
      subtitle: "Hösten",
      imageUrl: "/images/invigning/DSC06511.jpg",
      imageAlt: "Juniorligan Hösten",
      excerpt: "Start **18 november**. 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad **1 250 kr** per person. Medlemskap **Junior User** krävs.",
      ctaHref: "/events/juniorligan",
      ctaLabel: "Läs mer",
      category: "ligor",
    },
  ];

  const programItems = landingPageEvents.length > 0 ? landingPageEvents : defaultEvents;

  // Formatera datum för visning
  function dateFormatter(publishedAt: string): string {
    try {
      const date = new Date(publishedAt);
      return date.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  }

  return (
    <Page variant="landing">
      <div className="relative">
        {/* Hero Section - Modernare och mer dramatisk */}
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/invigning/hero.png"
              alt="USE Golf"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-20">
                {/* Left Column - Text */}
                <div className="col-span-12 lg:col-span-7 space-y-8">
                  <FadeIn>
                    <div className="inline-block mb-4">
                      <span className="text-[var(--brand-accent-amber)]  text-xl md:text-2xl uppercase tracking-widest">
                        Göteborg
                      </span>
                    </div>
                    <h1 className="font-horus text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none text-[var(--brand-primary)] mb-6">
                      USE

                      GOLF
                    </h1>
                    <Lead className="text-lg md:text-xl lg:text-2xl text-[var(--brand-primary)]/90 max-w-2xl leading-relaxed">
                      Europas största TrackMan-simulatorer i Hovås. Spela, träna och umgås året runt - Get used to it
                    </Lead>
                  </FadeIn>



                  <FadeIn delay={0.2}>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href="https://book.sweetspot.io/clubs/use-golf/"
                        className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 text-base font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition transform hover:scale-105"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Boka tid
                      </a>
                      <a
                        href="/medlemskap"
                        className="inline-flex items-center justify-center border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] px-6 py-3 text-base font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-primary)]/10 transition"
                        data-cursor-target
                        data-cursor-padding="10"
                      >
                        Bli medlem
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Column - Aktuellt hos oss */}
                {postsToUse.length > 0 && (
                  <div className="col-span-12 lg:col-span-5 hidden lg:block">
                    <FadeIn delay={0.3}>
                      <Link href={`/journal/${postsToUse[0].slug}`} className="group block h-full">
                        <div className="relative aspect-square border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)]/10 backdrop-blur-sm overflow-hidden hover:border-[var(--brand-accent-amber)] transition-colors">
                          {postsToUse[0].coverImageUrl ? (
                            <>
                              <Image
                                src={postsToUse[0].coverImageUrl}
                                alt={postsToUse[0].coverImage?.alt || postsToUse[0].title}
                                fill
                                className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                                sizes="(max-width: 1024px) 0vw, 40vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
                            </>
                          ) : (
                            <div className="absolute inset-0 bg-[var(--brand-olive-900)]/20" />
                          )}
                          <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                            <div>
                              <div className="text-[var(--brand-accent-amber)] font-horus text-xl uppercase tracking-widest mb-4">
                                USE JOURNAL - {dateFormatter(postsToUse[0].publishedAt)}
                              </div>
                              <h3 className="uppercase font-semibold tracking-wide text-3xl md:text-4xl text-[var(--brand-primary)] mb-3 line-clamp-2 group-hover:text-[var(--brand-accent-amber)] transition-colors">
                                {postsToUse[0].title}
                              </h3>
                              {postsToUse[0].excerpt && (
                                <p className="text-[var(--brand-primary)]/80 text-sm md:text-base line-clamp-3">
                                  {Array.isArray(postsToUse[0].excerpt) 
                                    ? postsToUse[0].excerpt
                                        .map((block: any) => 
                                          block.children?.map((child: any) => child.text || '').join('') || ''
                                        )
                                        .join(' ')
                                    : typeof postsToUse[0].excerpt === 'string'
                                      ? postsToUse[0].excerpt
                                      : ''}
                                </p>
                              )}
                            </div>
                            <div className="pt-4 border-t border-[var(--brand-secondary)]/30">
                              <div className="text-[var(--brand-primary)]/70 text-xs uppercase tracking-widest flex items-center gap-2">
                                Läs mer
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-[var(--brand-primary)]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Value Proposition Section - Tydligare och mer visuell */}
        <Section className="py-20 bg-[var(--brand-primary)]">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 lg:col-span-6">
              <FadeIn>
                <div className="relative h-[400px] md:h-[500px] border-4 border-[var(--brand-secondary)] overflow-hidden">
                  <Image
                    src="/images/invigning/DSC06426.jpg"
                    alt="TrackMan Simulator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-olive-900)]/80 to-transparent" />
                 
                </div>
              </FadeIn>
            </div>

            <div className="col-span-12 lg:col-span-6 flex items-center">
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <span className="text-[var(--brand-secondary)] font-horus text-xl uppercase tracking-widest mb-4 block">
                      Varför USE Golf?
                    </span>
                    <Heading as={2} className="text-4xl md:text-5xl mb-6">
                      Spela året runt
                    </Heading>
                  </div>
                  <Text className="text-lg leading-relaxed max-w-xl">
                    Vi erbjuder premium-simulatorer från TrackMan, ett café med enklare mat och dryck samt events och ligor för både privatpersoner och företag.
                  </Text>
                
                  <div className="pt-4">
                    <a
                      href="/bokning"
                      className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-8 py-4 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    >
                      Läs mer om bokning
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* CTA Section - Boka tid - Mer visuell och tydlig */}
        <Section className="py-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <span className="text-[var(--brand-accent-amber)] font-horus text-xl uppercase tracking-widest mb-4 block">
                  Kom igång idag
                </span>
                <Heading as={2} className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[var(--brand-primary)]">
                  Boka din tid
                </Heading>
                <Text className="text-xl md:text-2xl text-[var(--brand-primary)]/90 max-w-2xl mb-8">
                  Våra simulatorer är redo att bokas! Boka direkt via Sweetspot eller läs mer om stående tider och event.
                </Text>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://book.sweetspot.io/clubs/use-golf/"
                    className="inline-flex items-center justify-center bg-[var(--brand-accent-amber)] text-[var(--brand-olive-900)] px-8 py-4 text-lg font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition transform hover:scale-105"
                  >
                    Boka nu
                  </a>
                  <a
                    href="/bokning"
                    className="inline-flex items-center justify-center border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] px-8 py-4 text-lg font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-primary)]/10 transition"
                  >
                    Läs mer
                  </a>
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <FadeIn delay={0.1}>
                <div className="relative h-[300px] md:h-[400px] border-4 border-[var(--brand-secondary)] overflow-hidden">
                  <Image
                    src="/images/invigning/DSC06519.jpg"
                    alt="Boka tid"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[var(--brand-accent-amber)]/20" />
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Event & Community - Tydligare grid och layout */}
        <Section className="py-20 bg-[var(--brand-primary)]">
          <div className="space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <FadeIn>
                  <span className="text-[var(--brand-secondary)] font-horus text-xl uppercase tracking-widest mb-4 block">
                    Community
                  </span>
                  <Heading as={2} className="text-4xl md:text-5xl mb-4">
                    Event & ligor
                  </Heading>
                  <Text className="text-lg max-w-2xl">
                    Återkommande aktiviteter och ligor för alla nivåer – häng med!
                  </Text>
                </FadeIn>
              </div>
              <FadeIn delay={0.1}>
                <Link
                  href="/events"
                  className="hidden md:inline-flex items-center gap-2 text-[var(--brand-olive-900)] hover:text-[var(--brand-secondary)] transition uppercase tracking-wider text-sm"
                >
                  Visa alla
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </FadeIn>
            </div>

            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {programItems.map((item, index) => (
                <FadeIn
                  key={`${item.title}-${item.subtitle}`}
                  delay={index * 0.1}
                  className={`col-span-12 md:col-span-6 ${index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}`}
                >
                  <div className="overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col h-full">
                    <div className={`relative ${index === 0 ? 'h-64 md:h-80' : 'h-48 md:h-64'} border-b-4 border-[var(--brand-secondary)]`}>
                      <Image
                        src={item.imageUrl || '/images/placeholder.png'}
                        alt={item.imageAlt || item.title}
                        fill
                        loading={index < 2 ? "eager" : "lazy"}
                        className="object-cover"
                        sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-horus text-3xl md:text-4xl text-[var(--brand-primary)] mb-1">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-[var(--brand-primary)]/80 uppercase tracking-wider text-sm">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="text-base md:text-lg flex-1">
                        {item.excerpt ? (
                          Array.isArray(item.excerpt) ? (
                            <PortableText content={item.excerpt} />
                          ) : typeof item.excerpt === 'string' ? (
                            formatContent(item.excerpt)
                          ) : null
                        ) : item.content && Array.isArray(item.content) ? (
                          <PortableText content={item.content} />
                        ) : typeof item.content === 'string' ? (
                          formatContent(item.content)
                        ) : null}
                      </div>
                      {item.ctaHref ? (
                        <div className="pt-4">
                          <a
                            href={item.ctaHref}
                            className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                          >
                            {item.ctaLabel ?? "Läs mer"}
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

        {/* Medlemskap - Modernare layout */}
        <Section className="py-20 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
          <div className="space-y-12">
            <FadeIn>
              <SectionHeader
                label="Medlemskap"
                heading="Spela mer, betala mindre"
                description="Välj ett medlemskap och bli en del av vårt community. Förtur till event, rabatter och mer."
                align="center"
              />
            </FadeIn>

            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {/* Senior */}
              <FadeIn delay={0.1} className="col-span-12 md:col-span-6">
                <div className="overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full min-h-[300px] border-b-4 md:border-b-0 md:border-r-4 border-[var(--brand-secondary)]">
                      <Image
                        src="/images/invigning/adam-hampus.png"
                        alt="User"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-horus text-5xl md:text-6xl text-[var(--brand-primary)]">Use:r</h3>
                      </div>
                    </div>
                    <div className="p-8 space-y-4 flex flex-col justify-center">
                      <div>
                        <p className="text-2xl font-semibold uppercase tracking-wider text-[var(--brand-olive-900)] mb-2">
                          från 600 kr/år
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            rabatt på bokningar
                          </span>
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            förtur till event
                          </span>
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            1h speltid ingår
                          </span>
                        </div>
                      </div>
                      <a
                        href="/medlemskap"
                        className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                      >
                        Läs mer
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Junior */}
              <FadeIn delay={0.2} className="col-span-12 md:col-span-6">
                <div className="overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)]">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full min-h-[300px] border-b-4 md:border-b-0 md:border-r-4 border-[var(--brand-secondary)]">
                      <Image
                        src="/images/invigning/junior.png"
                        alt="Junior User"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-horus text-5xl md:text-6xl text-[var(--brand-primary)]">Junior Use:r</h3>
                      </div>
                    </div>
                    <div className="p-8 space-y-4 flex flex-col justify-center">
                      <div>
                        <p className="text-2xl font-semibold uppercase tracking-wider text-[var(--brand-olive-900)] mb-2">
                          400 kr/år
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            rabatt på bokningar
                          </span>
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            förtur till event
                          </span>
                          <span className="border-2 border-[var(--brand-secondary)] px-3 py-1 text-xs uppercase tracking-wider">
                            1h ingår
                          </span>
                        </div>
                      </div>
                      <a
                        href="/medlemskap"
                        className="inline-flex items-center justify-center bg-[var(--brand-olive-900)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                      >
                        Läs mer
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* User Passes */}
        <Section className="py-20 bg-gradient-to-b from-[var(--brand-olive-700)]/10 to-[var(--brand-primary)]">
          <div className="space-y-12">
            <FadeIn>
              <SectionHeader
                label="User Passes"
                heading="Spela ofta under säsongen"
                description="Välj nivå efter hur mycket du tror du kommer spela. Du kan ta med gäster utan extra kostnad och allt gäller i 12 månader från inköp."
                align="center"
              />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {(["small", "medium", "large"] as UserPassType[]).map((passType, index) => {
                const pass = userPasses[passType];
                const passLinks: Record<UserPassType, string> = {
                  small: "https://book.sweetspot.io/clubs/use-golf/passes/33812e8a-fb1b-4d9f-af85-a2405a918fd5",
                  medium: "https://book.sweetspot.io/clubs/use-golf/passes/35aa568d-f3f7-4b43-8b98-f2f05712dc22",
                  large: "https://book.sweetspot.io/clubs/use-golf/passes/8f6ead57-a89a-4f59-b434-a004a1397f81",
                };
                
                return (
                  <FadeIn key={passType} delay={index * 0.1}>
                    <div className="overflow-hidden border-4 border-[var(--brand-secondary)] bg-[var(--brand-primary)] flex flex-col">
                      <div className="p-8 space-y-6 flex-1 flex flex-col">
                        <div className="space-y-4">
                          <h3 className="font-horus text-3xl md:text-4xl">{pass.name}</h3>
                          <hr className="border-[var(--brand-secondary)]/40" />
                          <div className="text-5xl font-semibold text-[var(--brand-olive-900)]">
                            {pass.price.toLocaleString("sv-SE")}&nbsp;kr
                          </div>
                          <div className="text-sm text-[var(--brand-olive-700)]">
                            Spelvärde {pass.playValue.toLocaleString("sv-SE")}&nbsp;kr{" "}
                            <span className="opacity-80">({pass.bonusPercent}% bonus)</span>
                          </div>
                        </div>
                        <div className="mt-auto space-y-4">
                          <a
                            href={passLinks[passType]}
                            className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                            data-cursor-target
                            data-cursor-padding="10"
                          >
                            Ladda pass
                          </a>
                          <div className="text-center">
                            <a href="/medlemsvillkor" className="underline text-sm text-[var(--brand-olive-700)] hover:text-[var(--brand-olive-900)] transition">
                              Medlemskapsvillkor
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Journal Section */}
        {postsToUse.length > 0 && (
          <Section className="py-20 bg-[var(--color-brand-secondary)]">
            <div className="space-y-8">
              <div className="flex items-end justify-between">
                <div>
                  <FadeIn>
                    <span className="text-[var(--brand-primary)] font-horus text-xl uppercase tracking-widest mb-4 block">
                      Journal
                    </span>
                    <Heading as={2} className="text-4xl md:text-5xl mb-4 text-[var(--brand-primary)]">
                      USE Journal
                    </Heading>
                    <Text className="text-lg max-w-2xl">
                      Läs våra senaste artiklar om golf, träning och events.
                    </Text>
                  </FadeIn>
                </div>
                <FadeIn delay={0.1}>
                  <Link
                    href="/journal"
                    className="hidden md:inline-flex items-center gap-2 text-[var(--brand-olive-900)] hover:text-[var(--brand-secondary)] transition uppercase tracking-wider text-sm"
                  >
                    Visa alla
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </FadeIn>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {postsToUse.slice(0, 3).map((post, index) => (
                  <FadeIn key={post._id} delay={index * 0.1}>
                    <JournalCard post={post} headingLevel="h3" height="h-84" />
                  </FadeIn>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* FAQ Section - Modernare layout */}
        <Section className="py-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <div className="text-center">
                <span className="text-[var(--brand-accent-amber)] font-horus text-xl uppercase tracking-widest mb-4 block">
                  Frågor & Svar
                </span>
                <Heading as={2} className="text-4xl md:text-5xl mb-6 text-[var(--brand-primary)]">
                  Vanliga frågor
                </Heading>
                <Text className="text-lg md:text-xl text-[var(--brand-primary)]/90">
                  Här hittar du svar på de vanligaste frågorna om USE Golf.
                </Text>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQ items={faqData} />
            </FadeIn>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="py-20 bg-[var(--brand-primary)]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeIn>
              <Heading as={2} className="text-4xl md:text-5xl ">
                Redo att komma igång?
              </Heading>
              <Text className="text-xl md:text-xl text-[var(--brand-olive-700)] mt-2 max-w-2xl mx-auto">
                Boka din tid idag eller läs mer om våra erbjudanden.
              </Text>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <a
                  href="https://book.sweetspot.io/clubs/use-golf/"
                  className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-10 py-5 text-lg font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition transform hover:scale-105"
                >
                  Boka tid
                </a>
                <a
                  href="/events"
                  className="inline-flex items-center justify-center border-2 border-[var(--brand-secondary)] text-[var(--brand-olive-900)] px-10 py-5 text-lg font-semibold uppercase tracking-wider rounded-none hover:bg-[var(--brand-secondary)]/10 transition"
                >
                  Se events
                </a>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>
    </Page>
  );
}

export const metadata: Metadata = {
  title: "USE Golf – Inomhusgolf i Göteborg",
  description: "USE Golf – TrackMan-simulatorer, ligor, event och träning i Hovås.",
  openGraph: {
    title: "USE GOLF – Inomhusgolf i Göteborg",
    description: "TrackMan-simulatorer, ligor, event och träning i Hovås.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 60;
