export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Öppettider & kontakt</h1>
      <p className="mb-2">Öppet just nu: Vecka/datumintervall + tider</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold mb-2">Kontakt</h2>
          <p>Adress</p>
          <p>Karta</p>
          <p>E-post</p>
          <p>Telefon</p>
          <p className="text-sm opacity-70 mt-4">Bemannat/obemannat: Kodlås-info</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Social</h2>
          <p>Ikoner</p>
        </div>
      </div>
    </div>
  );
}


