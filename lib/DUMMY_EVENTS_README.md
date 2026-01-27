# Dummy Events för Development

Denna fil innehåller dummy events som matchar exakt Sanity Event-schemat. Används för development och testing när Sanity inte är tillgängligt.

## Användning

### Automatisk fallback
Dummy events används automatiskt i development (`NODE_ENV=development`) om Sanity-förfrågningar misslyckas.

### Tvinga dummy events
Sätt följande i `.env.local` för att alltid använda dummy-data:

```env
USE_DUMMY_EVENTS=true
```

### Använd helper-funktioner

```typescript
import { getAllEvents, getLandingPageEvents, getEventBySlug } from '@/sanity/lib/queries';

// Hämta alla events
const events = await getAllEvents();

// Hämta events för landing page
const landingEvents = await getLandingPageEvents();

// Hämta specifikt event via slug
const event = await getEventBySlug('veckoscramble');
```

### Direkt användning av dummy events

```typescript
import { getDummyEvents, getDummyLandingPageEvents, getDummyEventBySlug } from '@/lib/dummyEvents';

// Hämta alla dummy events (redan transformerade)
const events = getDummyEvents();

// Hämta landing page dummy events
const landingEvents = getDummyLandingPageEvents();

// Hämta specifikt dummy event
const event = getDummyEventBySlug('veckoscramble');
```

## Struktur

Dummy events matchar exakt `Event`-interface från Sanity och innehåller:

- ✅ Alla fält från Sanity-schemat
- ✅ Rich text content (portable text array)
- ✅ Event-typer (återkommande/enskilt)
- ✅ Datum och dagar
- ✅ Kategorier
- ✅ Intresseanmälan-flaggor
- ✅ Externa länkar vs interna sidor
- ✅ Slugs för dynamiska sidor

## Events inkluderade

1. **2-manna scramble** - Återkommande tävling (måndagar)
2. **Onsdagsgolfen** - Återkommande liga (onsdagar, extern länk)
3. **Juniorligan** - Enskilt event med datum
4. **Pensionärsgolf** - Återkommande erbjudande med intresseanmälan
5. **Tränare & Kurser** - Återkommande kurs med intresseanmälan
6. **Damer** - Återkommande erbjudande med intresseanmälan

## Transformation

Dummy events transformeras automatiskt till `EventDocument`-format med:
- Lokala bilder (mappade från Sanity-referenser)
- Korrekt slug-hantering
- CTA-länkar baserat på hasExternalLink
- Alla fält korrekt mappade

## Uppdatering

När Sanity-schemat uppdateras, uppdatera även dummy events för att matcha:
1. Lägg till nya fält i `Event`-interface
2. Lägg till fält i dummy events
3. Uppdatera `transformDummyEvent()` om nödvändigt
