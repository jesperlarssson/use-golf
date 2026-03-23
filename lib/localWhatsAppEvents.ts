import type { EventDocument } from "@/sanity/lib/queries";

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/L9pxBcSaTpB3BH4mdSb7v8";

/**
 * Återkommande event som bokas via WhatsApp (inte modellerat i Sanity).
 * Slås ihop med Sanity-listan i mergeEventsWithLocal – dubbletter på titel ersätts av dessa.
 */
export const LOCAL_WHATSAPP_EVENTS: EventDocument[] = [
  {
    _id: "local-friday-scratch-scramble",
    title: "Friday Scratch Scramble",
    subtitle: "Varje fredag 20:00–23:00",
    imageUrl: "/images/people/7.png",
    imageAlt: "Friday Scratch Scramble",
    excerpt: `Riktigt bra golf, goa människor och en fredagskväll vi lovar att du kommer uppskatta.

Vi spelar ofta 4-manna scramble (6 lag) med fokus på tävling, häng och en bra avslutning på veckan. Möjlighet att köpa dryck och tilltugg finns.

**Tid:** Varje fredag 20:00–23:00
**Pris:** 300 kr per person
**Plats:** USE Golf, Hovås
**Pris till vinnarlaget**

**Anmälan** via WhatsApp-community.`,
    ctaHref: WHATSAPP_COMMUNITY,
    ctaLabel: "Anmäl via WhatsApp",
    category: "tavlingar",
    hasExternalLink: true,
    eventType: "recurring",
    recurringDay: "friday",
    order: 12,
  },
  {
    _id: "local-ladies-tuesday",
    title: "Ladies Tuesday",
    subtitle: "Varje tisdag 17:00–19:00",
    imageUrl: "/images/swing/1.png",
    imageAlt: "Ladies Tuesday",
    excerpt: `Kom som du är – vi fixar resten. En avslappnad kväll med golf, skratt och skönt häng.

Vi spelar 2-manna scramble i lottade lag, vilket gör det enkelt och socialt oavsett nivå. Vi bjuder på något lätt att äta, dryck finns att köpa.

**Tid:** Varje tisdag 17:00–19:00
**Pris:** 350 kr per person
**Plats:** USE Golf, Hovås
**Pris till vinnarlaget**

**Anmälan** via WhatsApp-community.`,
    ctaHref: WHATSAPP_COMMUNITY,
    ctaLabel: "Anmäl via WhatsApp",
    category: "erbjudanden",
    hasExternalLink: true,
    eventType: "recurring",
    recurringDay: "tuesday",
    order: 13,
  },
];
