import { Event, EventDocument, EventCategory, EventCategoryDocument } from "@/sanity/lib/queries";

/**
 * Dummy events för development/testing
 * Matchar exakt Sanity Event-schemat och kan transformeras med transformEvent()
 */

export const dummyEvents: Event[] = [
  {
    _id: "dummy-event-1",
    title: "2-manna scramble",
    subtitle: "Veckoscramble",
    image: {
      asset: {
        _ref: "dummy-ref-1",
        _type: "reference",
      },
      alt: "2-manna scramble",
    },
    excerpt: "Lågtrösklig scrambletävling med attraktiva priser från sponsorer. **Ingen anmälningsavgift** – du betalar endast för bokad simulatorspelstid. Rekommenderad speltid **2 timmar**. Fritt antal försök att kvala in.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Vårt mål är att alltid ha en pågående scrambletävling med attraktiva priser från sponsorer. Upplägget är enkelt och lågtröskligt.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Varför 2-manna scramble?",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Scramble är perfekt för alla nivåer och ger en rolig och social spelupplevelse. Du och din partner väljer bästa slaget varje gång, vilket gör att även nybörjare kan vara med och tävla.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Ingen anmälningsavgift – du betalar endast för bokad simulatorspelstid",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Rekommenderad speltid: 2 timmar",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block6",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span6",
            text: "Fritt antal försök att kvala in",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "dummy-2-manna-scramble",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 1,
    showOnLandingPage: true,
    category: "tavlingar",
    requiresInterestForm: false,
    eventType: "recurring",
    recurringDay: "monday",
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-2",
    title: "Onsdagsgolfen",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-2",
        _type: "reference",
      },
      alt: "Onsdagsgolfen",
    },
    excerpt: "Varje onsdag spelar vi en social tävling för max 24 medlemmar. Två starttider – **13.00–15.00** eller **17.00–19.00** – och fyra omväxlande format gör det både lekfullt och tävlingsinriktat.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Onsdagsgolfen är vår veckotävling där medlemmar möts för att spela och tävla. Vi varierar formatet varje vecka för att hålla det spännande.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Format",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Stableford",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "2-manna scramble",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Bästa boll",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block6",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span6",
            text: "Lagtävling",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "onsdagsgolfen",
    },
    hasExternalLink: true,
    ctaHref: "https://book.sweetspot.io/clubs/use-golf/passes/3d4941fe-3d67-4e7b-9fd2-c9a4aee12b1c",
    ctaLabel: "Anmäl dig",
    order: 2,
    showOnLandingPage: true,
    category: "ligor",
    requiresInterestForm: false,
    eventType: "recurring",
    recurringDay: "wednesday",
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-3",
    title: "Juniorligan",
    subtitle: "Hösten",
    image: {
      asset: {
        _ref: "dummy-ref-3",
        _type: "reference",
      },
      alt: "Juniorligan Hösten",
    },
    excerpt: "Start **18 november**. 3 spelare/simulator, 9 hål + fri lek efteråt. Kostnad **1 250 kr** per person. Medlemskap **Junior User** krävs.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Juniorligan är för alla unga golfare som vill utveckla sitt spel och träffa andra i samma ålder. Vi spelar 9 hål och sedan är det fri lek.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Praktisk information",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Kostnad: 1 250 kr per person",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Medlemskap: Junior User krävs",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "dummy-juniorligan-host",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 3,
    showOnLandingPage: true,
    category: "ligor",
    requiresInterestForm: false,
    eventType: "single",
    recurringDay: undefined,
    eventDate: "2024-11-18T15:00:00Z",
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-4",
    title: "Pensionärsgolf",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-4",
        _type: "reference",
      },
      alt: "Pensionärsgolf",
    },
    excerpt: "Spela dagtid med **medlemsförmån** mellan kl. **09.00–15.00**. Möjlighet till stående tider, flexibelt upplägg och kaffe på plats.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Vi vill lyfta pensionärsgolf som ett eget och tydligt erbjudande. Med rabatterat timpris dagtid mellan kl. 09.00–15.00 blir det extra förmånligt för pensionärer att spela hos oss.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Vad vi erbjuder",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Möjlighet till stående tider – säkra din veckotid",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Flexibelt upplägg för mindre och större sällskap",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Kaffe finns att köpa på plats och blir en naturlig del av den sociala upplevelsen",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "dummy-pensionarsgolf",
    },
    hasExternalLink: false,
    ctaHref: "/pensionar",
    ctaLabel: "Läs mer",
    order: 4,
    showOnLandingPage: false,
    category: "erbjudanden",
    requiresInterestForm: true,
    eventType: "recurring",
    recurringDay: undefined,
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-5",
    title: "Tränare & Kurser",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-5",
        _type: "reference",
      },
      alt: "Tränare & Kurser",
    },
    excerpt: "Golfträning på alla nivåer med erfarna tränare. **Privata lektioner**, **gruppträning** och möjlighet till långsiktig utvecklingsplan.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Vi erbjuder golfträning på alla nivåer, från nybörjare till erfarna golfare som vill utveckla sitt spel ytterligare. Träningen sker i moderna simulatorer och anpassas efter varje spelares mål och nivå.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Träningsformer",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Privata lektioner – individuell träning anpassad efter dina behov",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Gruppträning – träna tillsammans med andra",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Träning för nybörjare – lägg en solid grund",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "dummy-tranare-kurser",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 5,
    showOnLandingPage: false,
    category: "kurser",
    requiresInterestForm: true,
    eventType: "recurring",
    recurringDay: undefined,
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-6",
    title: "Damer",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-6",
        _type: "reference",
      },
      alt: "Damer",
    },
    excerpt: "Nybörjarkurser för damer och damliga. Steget in i golfen ska vara **enkelt, tryggt och roligt**. Inga förkunskaper krävs.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Vi vill göra golfen mer tillgänglig och välkomnande för kvinnor – oavsett om du är helt ny inom golfen eller redan spelar och söker mer gemenskap.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Nybörjarkurser för damer",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Vi erbjuder nybörjarkurser där steget in i golfen ska vara enkelt, tryggt och roligt. Inga förkunskaper krävs – vi börjar från början.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Inga förkunskaper krävs – vi börjar från början",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Låneklubbor finns på plats – du behöver inte köpa utrustning direkt",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "dummy-damer",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 6,
    showOnLandingPage: false,
    category: "erbjudanden",
    requiresInterestForm: true,
    eventType: "recurring",
    recurringDay: undefined,
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-7",
    title: "Friday Scratch Scramble",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-7",
        _type: "reference",
      },
      alt: "Friday Scratch Scramble",
    },
    excerpt: "Varje fredag kör vi en scratch scramble – perfekt för att avsluta veckan med en rolig tävling bland vänner. **Ingen anmälningsavgift** – du betalar bara din simulatortid.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Friday Scratch Scramble är vår fredagstävling där alla är välkomna. Bilda lag, spela scratch scramble och tävla om veckans priser i en avslappnad stämning.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Så funkar det",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Ingen anmälningsavgift – du betalar bara simulatortid",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Bilda lag om 2 personer och spela scratch scramble",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Priser från våra sponsorer varje vecka",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "friday-scratch-scramble",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 7,
    showOnLandingPage: true,
    category: "tavlingar",
    requiresInterestForm: false,
    eventType: "recurring",
    recurringDay: "friday",
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-8",
    title: "Ladies Tuesday",
    subtitle: "",
    image: {
      asset: {
        _ref: "dummy-ref-8",
        _type: "reference",
      },
      alt: "Ladies Tuesday",
    },
    excerpt: "Tisdagar tillägnade damgolf – oavsett om du är nybörjare eller van spelare. **Träning, tävling och gemenskap** i en trygg och inspirerande miljö.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Ladies Tuesday är vår veckliga golfkväll för damer. Här blandas träning, tävling och social gemenskap i en välkomnande miljö. Perfekt för dig som vill utvecklas och träffa andra golfintresserade kvinnor.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Vad ingår",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Träning med instruktör för alla nivåer",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Social tävling i avslappnad stämning",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Inga förkunskaper krävs – alla är välkomna",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "ladies-tuesday",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 8,
    showOnLandingPage: false,
    category: "erbjudanden",
    requiresInterestForm: true,
    eventType: "recurring",
    recurringDay: "tuesday",
    eventDate: undefined,
    eventEndDate: undefined,
  },
  {
    _id: "dummy-event-9",
    title: "Simulator Scramble",
    subtitle: "Oktober – Mars",
    image: {
      asset: {
        _ref: "dummy-ref-9",
        _type: "reference",
      },
      alt: "Simulator Scramble",
    },
    excerpt: "Säsongens scrambletävling som pågår **oktober till mars**. Boka simulator, spela tävlingen direkt och jämför ditt resultat med andra lag under hela säsongen.",
    content: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Simulator Scramble är vår säsongsbaserade tävling som körs oktober till mars. Du bokar en simulator och spelar tävlingen direkt – enkelt och flexibelt. Resultaten samlas under hela säsongen och vinnarna koras i mars.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Så funkar det",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Boka en simulator och spela tävlingen direkt",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span4",
            text: "Fritt antal försök under säsongen (oktober–mars)",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "block5",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "span5",
            text: "Leaderboard uppdateras löpande – vinnare koras i mars",
            marks: ["strong"],
          },
        ],
        markDefs: [],
      },
    ],
    slug: {
      current: "simulator-scramble",
    },
    hasExternalLink: false,
    ctaHref: undefined,
    ctaLabel: "Läs mer",
    order: 9,
    showOnLandingPage: true,
    category: "tavlingar",
    requiresInterestForm: false,
    eventType: "single",
    recurringDay: undefined,
    eventDate: "2025-10-01T00:00:00Z",
    eventEndDate: "2026-03-31T00:00:00Z",
  },
];

/**
 * Mappar bild-referenser till faktiska bilder
 * I development kan vi använda lokala bilder
 */
const imageMap: Record<string, string> = {
  "dummy-ref-1": "/images/invigning/DSC06519.jpg",
  "dummy-ref-2": "/images/invigning/DSC06600.jpg",
  "dummy-ref-3": "/images/invigning/DSC06511.jpg",
  "dummy-ref-4": "/images/invigning/DSC06519.jpg",
  "dummy-ref-5": "/images/invigning/DSC06519.jpg",
  "dummy-ref-6": "/images/invigning/DSC06673.jpg",
  "dummy-ref-7": "/images/invigning/DSC06527.jpg",
  "dummy-ref-8": "/images/invigning/DSC06673.jpg",
  "dummy-ref-9": "/images/invigning/DSC06519.jpg",
};

/**
 * Transformera dummy events till EventDocument-format
 * Simulerar transformEvent() men använder lokala bilder
 */
export function transformDummyEvent(event: Event): EventDocument {
  const imageRef = event.image?.asset?._ref || "";
  const imageUrl = imageMap[imageRef] || "/images/placeholder.png";
  
  // Bestäm ctaHref baserat på hasExternalLink, custom intern länk och slug
  let finalCtaHref: string | undefined;
  if (event.hasExternalLink && event.ctaHref) {
    finalCtaHref = event.ctaHref;
  } else if (event.ctaHref && event.ctaHref.startsWith('/') && !event.ctaHref.toLowerCase().includes('sweetspot')) {
    finalCtaHref = event.ctaHref;
  } else if (event.slug?.current) {
    finalCtaHref = `/events/${event.slug.current}`;
  } else if (event.ctaHref) {
    finalCtaHref = event.ctaHref;
  }
  
  // Transformera kategori från referens till objekt eller behåll string för bakåtkompatibilitet
  let category: string | EventCategoryDocument | undefined;
  if (event.category) {
    if (typeof event.category === 'object' && '_id' in event.category && 'title' in event.category) {
      // Det är en expanderad kategori-referens från Sanity
      const cat = event.category as EventCategory;
      category = {
        _id: cat._id,
        title: cat.title,
      };
    } else if (typeof event.category === 'string') {
      // Bakåtkompatibilitet: behåll string om det är en string (dummy-data)
      category = event.category;
    }
    // Om det är en referens-objekt ({ _ref, _type }), ignorera det eftersom vi inte kan expandera det här
  }
  
  return {
    _id: event._id,
    title: event.title,
    subtitle: event.subtitle,
    imageUrl: imageUrl,
    imageAlt: event.image?.alt,
    excerpt: event.excerpt || "",
    content: Array.isArray(event.content) ? event.content : undefined,
    slug: event.slug?.current,
    hasExternalLink: event.hasExternalLink,
    ctaHref: finalCtaHref,
    ctaLabel: event.ctaLabel || "Läs mer",
    category: category,
    requiresInterestForm: event.requiresInterestForm,
    eventType: event.eventType,
    recurringDay: event.recurringDay,
    eventDate: event.eventDate,
    eventEndDate: event.eventEndDate,
  };
}

/**
 * Hämta alla dummy events (transformerade)
 */
export function getDummyEvents(): EventDocument[] {
  return dummyEvents.map(transformDummyEvent);
}

/**
 * Hämta dummy events för landing page (showOnLandingPage === true)
 */
export function getDummyLandingPageEvents(): EventDocument[] {
  return dummyEvents
    .filter((event) => event.showOnLandingPage)
    .map(transformDummyEvent);
}

/**
 * Hämta dummy event via slug
 */
export function getDummyEventBySlug(slug: string): EventDocument | null {
  const event = dummyEvents.find((e) => e.slug?.current === slug);
  return event ? transformDummyEvent(event) : null;
}
