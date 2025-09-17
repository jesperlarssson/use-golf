export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Priser & presentkort</h1>
      <ul className="space-y-2">
        <li>Timpris bay: mån–tors {{pris}} kr/h | fre–sön {{pris}} kr/h</li>
        <li>Medlemspris: {{xx}}% rabatt</li>
        <li>Hyra klubbor: {{pris}} kr/pass</li>
        <li>Presentkort: Köp i receptionen/online</li>
      </ul>
    </div>
  );
}


