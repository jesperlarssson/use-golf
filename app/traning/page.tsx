export default function Page() {
  const trainers = [
    { name: "{" + "{" + "Tränare 1" + "}" + "}" , bio: "PGA-pro, fokus sving/approach/putt" },
    { name: "{" + "{" + "Tränare 2" + "}" + "}" , bio: "Custom fitting & dataanalys" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Träning</h1>
      <p className="mb-4">Coaching, kurser & custom fitting</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {trainers.map((t) => (
          <div key={t.name} className="border rounded p-4">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="opacity-70">{t.bio}</p>
            <p className="mt-2 text-sm">Privatlektion xx min – pris kr | Paket 5x | Gruppkurs</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="rounded border border-[var(--brand-secondary)] px-4 py-2">Boka lektion</a>
              <a href="#" className="rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-4 py-2">Kontakta</a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm opacity-70">Metodik/verktyg: TrackMan-data, videoanalys, övningsprogram</p>
    </div>
  );
}


