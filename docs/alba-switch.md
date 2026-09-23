# Alba aktiverat i webbplatsens kod

Simulator, event och medlemskap använder nu Alba direkt via `lib/bookingLinks.ts`.
Ingen miljövariabel behövs. Både USE:R och Jr USE:R går till medlemsöversikten.
Gamla boknings- och medlemsadresser omdirigerar till Alba.

Detta är en lokal kodändring. Ingen publicering har gjorts i detta steg.
Bokning och betalning hos Alba är inte verifierade. Inbäddning kräver fortfarande integrationsanvisningar från Alba.
Det separata, lokala AI-assistent/API-arbetet är inte migrerat.

Aktuellt döljs i navigationen och /events leder till startsidan tills USE Journal har en publicerad artikel med slug och passerat publiceringsdatum. Även vid hämtningsfel hålls sidan dold. Kontroll sker med 60 sekunders cache.
