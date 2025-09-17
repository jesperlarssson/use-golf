export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Medlemskap</h1>
      <p className="mb-4">Spela mer för mindre – rabatter & förmåner.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { level: "Senior", price: "{{pris}} kr/år" },
          { level: "Junior", price: "{{pris}} kr/år" },
        ].map((m) => (
          <div key={m.level} className="border rounded p-4">
            <h2 className="text-xl font-semibold">{m.level}</h2>
            <p className="opacity-70">{m.price}</p>
          </div>
        ))}
      </div>
      <ul className="mt-6 list-disc list-inside">
        <li>xx% rabatt på timpris</li>
        <li>Förtur</li>
        <li>Medlemskvällar</li>
        <li>Tävlingsserie</li>
        <li>Shop-rabatt x%</li>
      </ul>
      <div className="mt-6">
        <a href="#" className="rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-5 py-2">Köp medlemskap</a>
      </div>
      <p className="text-sm opacity-70 mt-4">Villkor: Giltighet 12 mån, personligt, ej överlåtbart.</p>
    </div>
  );
}


