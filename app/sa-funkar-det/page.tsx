export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Så funkar det</h1>
      <p className="mb-4">Spela simulatorgolf i tre steg.</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Boka i app/webb. Välj bay, datum, tid. Max 4 spelare/bay.</li>
        <li>Kod skickas via SMS/e-post innan passet.</li>
        <li>Starta TrackMan, välj bana/spelläge.</li>
      </ol>
      <div className="mt-8 space-y-2">
        <p>Regler & tider: Skovård, mat/dryck, städning av plats, åldersgräns.</p>
        <p>Avbokning: Gratis fram till xx timmar före; därefter debitering x%.</p>
        <p>FAQ: Utrustning? Hyra klubbor? Handicap?</p>
      </div>
    </div>
  );
}


