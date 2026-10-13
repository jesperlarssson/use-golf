import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/ui/InquiryForm";
import BokaLokalenCalculator from "@/components/ui/BokaLokalenCalculator";
import { getClosures } from "@/sanity/lib/pricingQueries";
import { pageMetadata } from "@/lib/seo";
import {
  businessPartner,
  corporateNight,
  formatCorporatePrice,
} from "@/lib/corporateOffers";

export const metadata: Metadata = pageMetadata({
  title: "Företag & event",
  description:
    "Corporate Golf Night för 19 900 kr exkl. moms: tre timmar, hela USE Golf, eventvärd och låneklubbor. Upptäck även Business Partner i Nya Hovås, Göteborg.",
  path: "/foretag",
});

export const revalidate = 60;

const timeline = [
  ["18.00", "Välkomstdrink & lagindelning"],
  ["18.15", "Warm-up"],
  ["18.30", "Corporate Golf Challenge"],
  ["20.15", "Final & Nearest the pin"],
  ["20.30", "Mat, bar & prisutdelning"],
  ["21.00", "Eventet avslutas – eller stanna kvar i baren"],
];
const faqs = [
  [
    "Behöver alla kunna spela golf?",
    "Nej. Golf för alla nivåer är en del av upplägget. Eventvärden hjälper er att komma igång och ni spelar tillsammans, oavsett tidigare golfvana.",
  ],
  [
    "Behöver vi ta med egna klubbor?",
    "Nej, låneklubbor ingår alltid vid företagsevent. Den som vill får gärna ta med sina egna.",
  ],
  [
    "Ingår mat och dryck?",
    "Mat och dryck tillkommer utöver paketpriset. Markera era önskemål i kalkylatorn så tar vi med dem i offerten. Det gäller även välkomstdrinken i exempelprogrammet.",
  ],
  [
    "Hur många kan vi vara?",
    "Ni får hela USE Golf med sex TrackMan-simulatorer. Ange hur många ni planerar att bli så hjälper vi er med ett upplägg som fungerar för både spel och mingel.",
  ],
  [
    "Vad händer när vi skickar en förfrågan?",
    "Vi återkommer om önskat datum, upplägg och eventuella tillval. Förfrågan är inte bindande. Boknings- och avbokningsvillkor får ni i samband med ert bokningsförslag.",
  ],
  [
    "Hur fungerar Business Partner?",
    "I paketet ingår en Corporate Golf Night, 40 timmars golf, prioriterad företagsbokning och partnerexponering. Kontakta oss för upplägg, giltighetstid och bokningsvillkor för era golftimmar.",
  ],
];
const sectionClass =
  "mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24";
const headingClass =
  "text-balance text-3xl font-normal leading-[1.12] tracking-[-.035em] sm:text-4xl lg:text-5xl";

export default async function ForetagPage() {
  const closures = await getClosures();
  return (
    <>
      <section className="relative isolate flex min-h-[570px] items-end overflow-hidden bg-[var(--brand-olive-900)] text-[var(--brand-primary)] sm:min-h-[620px]">
        <div className="hero-parallax absolute inset-0">
          <Image
            src="/images/foretag/event-mingel.webp"
            alt="Deltagare som umgås mellan golfrundorna under ett event på USE Golf"
            fill
            priority
            sizes="100vw"
            className="hero-media object-cover object-[62%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
        <div className="hero-copy hero-copy-scroll relative mx-auto w-full max-w-screen-2xl px-6 pb-12 pt-36 sm:px-10 lg:px-16 lg:pb-16">
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-white/85">
            Företag & event i Nya Hovås
          </p>
          <h1 className="max-w-3xl text-balance text-5xl font-normal leading-[1.06] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            En bättre kväll
            <br />
            med kollegorna.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
            Samla kollegor eller kunder för golf, tävling och umgänge. Vi ordnar
            upplägget, alla kan vara med.
          </p>
          <a
            href="#foretagspaket"
            className="cta-sweep mt-7 inline-flex min-h-12 items-center justify-center border border-white/70 px-6 text-sm text-white"
          >
            Se våra företagspaket
          </a>
        </div>
      </section>
      <div className="border-b border-black/15">
        <ul className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-7 text-sm sm:px-10 md:grid-cols-4 lg:px-16 lg:py-9 lg:text-base">
          {[
            "6 TrackMan-simulatorer",
            "Full bar",
            "Låneklubbor ingår",
            "Golf för alla nivåer",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="text-[var(--brand-olive-900)]"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <section
        id="foretagspaket"
        aria-labelledby="paket-heading"
        className={`${sectionClass} scroll-mt-24`}
      >
        <h2 id="paket-heading" className={headingClass}>
          En kväll tillsammans.
          <br />
          Eller början på fler.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">
          Välj en färdig företagskväll eller ett partnerskap med plats för fler
          möten, aktiviteter och golf.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {[
            {
              ...corporateNight,
              id: "corporate-golf-night",
              description:
                "En företagskväll utöver det vanliga. Tre timmar med kollegor eller kunder, hela lokalen och ett färdigt upplägg.",
              href: "#priskalkyl",
              cta: "Planera er kväll",
              primary: true,
            },
            {
              ...businessPartner,
              id: "partnerpaket",
              description:
                "Mer golf. Fler möten. Starkare relationer. En plats för kundmöten, aktiviteter och teambuilding.",
              href: "#business-partner",
              cta: "Anmäl intresse för partnerskap",
              primary: false,
            },
          ].map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              className={`flex scroll-mt-28 flex-col border p-6 sm:p-8 lg:p-10 ${offer.primary ? "border-[var(--brand-olive-900)] bg-[var(--brand-olive-900)]/5" : "border-black/20"}`}
            >
              <h3 className="text-3xl font-normal tracking-[-.03em] lg:text-4xl">
                {offer.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--foreground)]/80">
                {offer.description}
              </p>
              <p className="mt-7 text-4xl tracking-tight lg:text-5xl">
                {formatCorporatePrice(offer.price)}
                <span className="mt-2 block text-sm tracking-normal">
                  exkl. moms
                </span>
              </p>
              <p className="mt-3 text-sm text-[var(--foreground)]/80">
                Mat och dryck tillkommer.
              </p>
              <ul className="mb-8 mt-7 space-y-3 border-t border-black/15 pt-6 text-sm leading-relaxed">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="text-[var(--brand-olive-900)]"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={offer.href}
                className={`cta-sweep mt-auto inline-flex min-h-14 items-center justify-center px-4 text-center text-sm ${offer.primary ? "bg-[var(--brand-olive-900)] text-white" : "border border-[var(--brand-olive-900)]"}`}
              >
                {offer.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="kvallen-heading"
        className="border-t border-black/15"
      >
        <div className={`${sectionClass} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <h2 id="kvallen-heading" className={headingClass}>
              Så ser en Corporate Golf Night ut.
            </h2>
            <p className="mt-5 text-sm text-[var(--foreground)]/75">
              Exempel på upplägg, kl. 18.00–21.00.
            </p>
            <ol className="mt-9 space-y-0">
              {timeline.map(([time, activity], index) => (
                <li
                  key={time}
                  className="grid grid-cols-[4rem_1fr] gap-4 sm:grid-cols-[5rem_1fr]"
                >
                  <time
                    dateTime={time.replace(".", ":")}
                    className="pt-1 text-base tabular-nums"
                  >
                    {time}
                  </time>
                  <div
                    className={`relative border-l border-[var(--brand-olive-900)]/30 pb-7 pl-6 ${index === timeline.length - 1 ? "border-transparent pb-0" : ""}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[4px] top-2 size-[7px] rounded-full bg-[var(--brand-olive-900)]"
                    />
                    <p className="pt-1 text-base leading-relaxed">{activity}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-[var(--foreground)]/75">
              Mat och dryck, inklusive välkomstdrink, bokas separat och
              tillkommer utöver paketpriset.
            </p>
          </div>
          <figure className="lg:pt-1">
            <div className="relative aspect-[4/5] max-h-[680px] overflow-hidden">
              <Image
                src="/images/foretag/event-vard.webp"
                alt="Gemensam genomgång vid en simulator under ett tidigare event på USE Golf"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_65%]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--foreground)]/75">
              Från en tidigare eventkväll hos oss.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="priskalkyl"
        aria-labelledby="priskalkyl-heading"
        className="scroll-mt-24 border-t border-black/15"
      >
        <div className={sectionClass}>
          <div className="mb-9 max-w-2xl">
            <h2 id="priskalkyl-heading" className={headingClass}>
              Planera er företagskväll.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">
              Utgå från Corporate Golf Night. Välj datum, antal deltagare och
              tillval, se paketpriset per person och skicka en förfrågan.
            </p>
          </div>
          <BokaLokalenCalculator closures={closures} />
        </div>
      </section>

      <section aria-labelledby="bar-heading" className={sectionClass}>
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/foretag/event-bar.webp"
              alt="USE Lager och snacks uppdukade inför ett event"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="bar-heading" className={headingClass}>
              Lika mycket umgänge som golf.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--foreground)]/80">
              En paus mellan slagen. Något gott att äta. Tid att prata med
              kollegan eller kunden. Med lounge och full bar finns plats för
              hela kvällen.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--foreground)]/75">
              Lägg till mat och dryck i er förfrågan så tar vi fram ett förslag
              för ert sällskap.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="fragor-heading"
        className="border-t border-black/15"
      >
        <div
          className={`${sectionClass} grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16`}
        >
          <h2 id="fragor-heading" className={headingClass}>
            Bra att veta.
          </h2>
          <div>
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="border-b border-black/15 first:border-t"
              >
                <summary className="cursor-pointer py-5 pr-3 text-base leading-relaxed">
                  {question}
                </summary>
                <p className="max-w-xl pb-6 text-sm leading-relaxed text-[var(--foreground)]/80">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="forfragan"
        className="scroll-mt-24 border-t border-black/15 bg-[#ebe8dc]"
      >
        <div
          className={`${sectionClass} grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16`}
        >
          <div>
            <h2 className={headingClass}>
              Vi planerar
              <br />
              nästa steg tillsammans.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--foreground)]/80">
              Nyfiken på Business Partner eller vill ni prata om ett eget
              eventupplägg? Berätta vad ni har i åtanke.
            </p>
            <p className="mt-8 text-sm">
              Vill du hellre prata med oss?
              <br />
              <a
                href="tel:+46767174034"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                076-717 40 34
              </a>
              <br />
              <a
                href="mailto:hello@usegolf.se"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                hello@usegolf.se
              </a>
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
