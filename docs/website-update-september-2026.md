# Webbuppdatering – september 2026

## Genomfört

- Ny startsida med kundens huvudbudskap, två huvudhandlingar, faktarad och lugnare typografi.
- Befintlig färgpalett och logotyp behållna. Stora, skarpa bilder ersätter bildspel och kraftiga ramar.
- Huvudmeny: Spela, Företag & event, Medlemskap, Aktuellt, Om USE samt Boka nu. Bokningsknapp även fast längst ner på mobil.
- Företagssida: After Work, Företagsevent, Hyr hela USE. Kort formulär med företag, kontaktperson, antal personer, datum, telefon och mejl. Antal personer valideras på servern och inkluderas i förfrågan.
- Official Partner-erbjudandet borttaget från företagssidan, formuläret och villkorssidans marknadsföring.
- Passrutorna borttagna från startsidan och medlemskapssidan. Villkor för redan köpta spelpotter finns kvar.
- Utgånget CustomClubs-erbjudande till 1 maj 2026 borttaget.
- Aktuellt visar endast datumstyrda, ej passerade event. Återkommande aktiviteter och junior-, dam-, pensionärs-, liga- och träningsinnehåll tas bort från publicerade eventlistor. Gamla separata aktivitetssidor leder till Aktuellt. CMS-innehållet är inte raderat.
- Tomma eller misslyckade CMS-svar återpublicerar inte gamla demo-/WhatsApp-event. Demo-data används endast om den uttryckliga utvecklingsflaggan är på och filtreras då också.
- Startsidan har fyra redaktionellt uppdaterade frågor. Gamla CMS-frågor om bokningssystem, pass och avbokning används inte där.
- Instagram-sektion med befintliga fotografier och länkar till @use__golf. Detta är en kuraterad bildsektion, inte ett liveflöde från Instagram.

## Alba – avvaktar underlag enligt beställaren

Ingen Alba-integration eller fiktiv bokning har byggts. Befintlig fungerande simulatorbokning och medlemsbokning behålls tills en verifierad ersättare finns. Startsidan och huvudmenyn länkar till /bokning på den egna webbplatsen.

Behövs inför övergång:

- USE:s korrekta Alba-klubb-ID/URL och integrationsanvisningar: iframe, SDK eller API.
- Separata flöden för simulator, medlemskap, träning, kurser och aktiviteter.
- Bekräftade regler för avbokning, betalning, inloggning och befintliga pass/medlemskap.
- Testa hela kedjan på mobil och desktop, inklusive betalning och återgång till usegolf.se.
- Byt kvarvarande Sweetspot-destinationer i /bokning, /medlemskap, /bli-medlem och /bokning/sweetspot samt iframe-komponenterna.
- Inventera CMS-länkar i event, artiklar och FAQ; schemafälten kan innehålla gamla externa länkar även om de inte syns på startsidan.
- Rensa oanvända äldre komponenter (LandingHero, UserPassesSection, SweetspotEmbed) när migreringen är godkänd.
- Separat pågående AI-assistent/API-arbete använder Sweetspot. Det har lämnats orört och behöver en egen migreringsbedömning.

## Innehåll kvar att få

- Ny huvudbild från Axel. Nu används /public/hero/1.png.
- Om ett automatiskt Instagram-flöde önskas: vald integration och kontobehörighet. Inga konton eller tredjepartsskript har kopplats in.
- CMS-redaktören behöver ge nya event korrekta start-/slutdatum. Datum som bara står i fri brödtext kan inte filtreras tillförlitligt.
- Nyhetsartiklar i Journal behålls som daterat redaktionellt arkiv; de marknadsförs inte som kommande event på startsidan.
- 24-timmars svarslöfte används inte utan bekräftelse; CTA är ”Planera ert event”.

## Verifiering

- Desktop: startsida, företagssida och Aktuellt granskade i lokal webbläsare.
- Mobil: meny, Escape/fokusåtergång, fast bokningsknapp och länken från startsidan till formulärets ankare kontrollerade.
- Tomt formulär blockerades av webbläsarens obligatoriska fält. Alla sex fält har kopplade etiketter.
- 10 kontroller av eventfilter godkända: framtida, passerade, pågående, felaktiga och saknade datum, återkommande och junioraktivitet, inklusive midnatt i svensk tidszon.
- API-funktionen testad isolerat med simulerad e-posttransport: sex ogiltiga anrop avvisades, giltigt anrop innehöll antal personer och HTML-escapade fält. Inga mejl skickade; riktig Brevo-leverans ej verifierad.
- `git diff --check` godkänd.
- `npx tsc --noEmit` visar tre befintliga fel i pågående, tidigare ändrade AI-assistentfiler: app/assistant/page.tsx (två) och studio/schemaTypes/assistantManifesto.ts (ett). Inga fel rapporterades i filerna för denna webbuppdatering. Full produktionsbuild är därmed inte verifierad.
