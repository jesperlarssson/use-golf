# Sanity Webhook Setup för Revalidation

Denna guide förklarar hur du konfigurerar Sanity webhook för att automatiskt revalidera Next.js-sidor när innehåll uppdateras i Sanity.

## Problem

När du gör ändringar i Sanity syns de direkt på localhost:3000 men inte på den live-sidan som är deployad på Vercel. Detta beror på att:
1. Sanity CDN cachar data (`useCdn: true`)
2. Next.js ISR (Incremental Static Regeneration) cachar sidor på produktion

## Lösning

Vi har implementerat en webhook-endpoint (`/api/revalidate`) som Sanity kan anropa när innehåll ändras. Detta triggar omedelbar revalidation av relevanta sidor.

## Steg för att konfigurera webhooken i Sanity

1. **Gå till Sanity Project Settings**
   - Logga in på [sanity.io](https://sanity.io)
   - Välj ditt projekt (USE Golf)
   - Gå till "API" → "Webhooks"

2. **Skapa ny webhook**
   - Klicka på "Create webhook"
   - **URL**: `https://din-domän.vercel.app/api/revalidate?secret=DIN_SECRET_TOKEN`
   - **Dataset**: `production` (eller det dataset du använder)
   - **Trigger on**: Välj "Create", "Update" och "Delete"
   - **Filter**: Lämna tomt (eller lägg till specifik filter om du vill)
   - **HTTP method**: `POST`
   - **API version**: `v2021-03-25` eller senare
   - **Include drafts**: Nej (om du inte vill revalidera för drafts)

3. **Sätt miljövariabel i Vercel**
   - Gå till ditt Vercel-projekt
   - Gå till "Settings" → "Environment Variables"
   - Lägg till: `SANITY_REVALIDATE_SECRET` med ett säkert slumpmässigt värde (t.ex. generera med `openssl rand -base64 32`)
   - Använd samma värde i webhook-URL:en ovan

4. **Testa webhooken**
   - Gör en ändring i Sanity (t.ex. uppdatera en post eller event)
   - Kontrollera att ändringen syns på din live-sida inom några sekunder
   - Du kan också testa webhooken manuellt genom att göra en POST-request till `/api/revalidate?secret=DIN_SECRET_TOKEN` med body:
     ```json
     {
       "_type": "post",
       "slug": "test-post"
     }
     ```

## Vilka sidor revalideras?

Webhooken revaliderar automatiskt relevanta sidor baserat på dokumenttyp:

- **post**: `/journal`, `/journal/[slug]`, `/`
- **event**: `/events`, `/events/*`, `/`
- **pricing**: `/events/staende-tid`, `/medlemsvillkor`, `/bokning`, `/medlemskap`
- **userPass**: `/medlemsvillkor`, `/medlemskap`, `/`
- **venueBooking**: `/events/boka-lokalen`
- **closure**: `/events/staende-tid`, `/bokning`
- **faq**: `/`

## Fallback revalidation

Om webhooken inte fungerar eller missas, kommer sidorna automatiskt att revalideras var 60:e sekund (`revalidate = 60`). Detta säkerställer att ändringar syns även utan webhook, även om det kan ta upp till 60 sekunder.

## Felsökning

Om ändringar inte syns:

1. **Kontrollera att webhooken är aktiverad** i Sanity
2. **Verifiera secret token** matchar i både Sanity webhook URL och Vercel environment variable
3. **Kontrollera Vercel logs** för att se om webhook-anropen kommer fram
4. **Testa webhooken manuellt** med curl eller Postman
5. **Kontrollera att dokumenttypen** i webhook body matchar en av de hanterade typerna

## Ytterligare optimering

Om du vill ha ännu snabbare uppdateringar kan du:
- Sänka `revalidate`-värdet på sidorna (t.ex. till 30 sekunder)
- Använda `useCdn: false` i development (men behåll `true` i produktion för bättre prestanda)
- Implementera mer specifika cache-taggar för bättre kontroll
