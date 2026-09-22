# Förberett Alba-byte – 22 september 2026

Status: förberett, INTE aktiverat eller publicerat. Ingen automatisk tidsstyrning.

## Centrala länkar

`lib/bookingLinks.ts` är källa för simulatorbokning, event och medlemskap.
Standard är Sweetspot. `NEXT_PUBLIC_BOOKING_PROVIDER=alba` före build aktiverar Alba. Gör en ny build/deploy; variabeln används också i klientkod. Sätt aldrig detta i produktion innan kunden godkänt bytet.

- Simulator: https://albaplay.com/sv/venue/use-golf-2
- Event: https://albaplay.com/sv/venue/use-golf-2/events
- Medlemskap: https://albaplay.com/sv/venue/use-golf-2/offers/membership

Eventlänkens `?date=2026-09-21` har utelämnats för att inte låsa besökaren till ett passerat datum. Bekräfta det datumfria flödet i Alba före aktivering.

## Vad växeln gör

- Byter destination på boknings- och medlemsknapparna, inklusive äldre LandingHero-komponenten.
- Ersätter webbplatsens lokala eventlista med en tydlig väg till Albas event.
- Gamla /bli-medlem och /bokning/sweetspot leder till rätt Alba-destination i stället för att bädda in det tidigare systemet.
- Meny och startsida leder fortsatt till webbplatsens egna /bokning, /events och /medlemskap.

## Måste klarläggas före lansering

Både USE:R och Jr USE:R levererades som samma `https://albaplay.com/sv/venue/use-golf-2/checkout/p`. Separata produkter kan inte identifieras från dessa adresser. De är därför inte inkopplade. Medlemsknappen går till den generella medlemslistan när Alba aktiveras. Be om fullständiga produktlänkar.

Alba-länkarna gick inte att verifiera med webbläsningsverktygets hämtning. Funktion, tillgängliga produkter, priser och betalning måste testas i Alba. Inga bokningar eller köp har utförts.

Vanliga länkar ger inte automatiskt bokning inbäddad på usegolf.se. Invändiga flöden kräver Albas integrationsanvisningar och kontroll av iframe-/inloggnings-/betalningsstöd. Ingen iframe har gissats fram.

Tränare/kurser saknar länkar och är fortsatt avvaktande. Webbens medlemspris och förmåner behöver jämföras med Alba. Kontrollera även avboknings- och passvillkor samt gamla länkar i CMS-artiklar, eventdetaljer och oanvända komponenter.

Separat AI-assistent och Sweetspot-API är INTE migrerade av länkväljaren.

## Aktivering

1. Få kundens uttryckliga klartecken för publicering.
2. Testa simulator, datumfria event och medlemslista i en förhandsmiljö med variabeln `alba`.
3. Slutför ovanstående innehålls- och länkinventering. Bekräfta produktlänkar och integrationskrav.
4. Kör typkontroll och produktionsbuild. Tre tidigare kända fel i AI-assistent/CMS måste hanteras innan en godkänd build kan utlovas.
5. Aktivera samma variabel i produktion, bygg och publicera. Kontrollera mobil, desktop och gamla bokmärken.
6. Vid behov återställ variabeln till `sweetspot` och gör en ny build/deploy.
