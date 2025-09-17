export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Events</h1>
      <p className="mb-4">Abonnera för företag, kompisgäng & festligheter</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Uppläggsexempel: 3 h spel + värd, tävling (närmast hål/longest drive), prisutdelning</li>
        <li>Kapacitet: Upp till 30 personer, 24 kan spela samtidigt</li>
        <li>Mat & dryck: Catering/egen meny, alkoholtillstånd</li>
      </ul>
      <a href="#" className="mt-6 inline-block rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-5 py-2">Skicka förfrågan</a>
    </div>
  );
}


