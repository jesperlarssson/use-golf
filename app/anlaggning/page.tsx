export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Anläggning</h1>
      <ul className="space-y-2">
        <li>Yta & kapacitet: ~500–600 kvm, 6–8 bays, lounge 30+ platser</li>
        <li>Utrustning: TrackMan, puttinggreen, hyra klubbor</li>
        <li>Konferens: Rum "{{namn}}", x platser, skärm, Wi-Fi</li>
        <li>Mat & dryck: Serveringstillstånd, lättare rätter/snacks</li>
        <li>Parkering & tillgänglighet: Gratis p-platser, ramp/hiss vid behov</li>
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] bg-black/5 rounded" />
        ))}
      </div>
    </div>
  );
}


