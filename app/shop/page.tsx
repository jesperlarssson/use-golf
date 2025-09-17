export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-horus text-4xl mb-6">Shop</h1>
      <p className="mb-4">Merch & lifestyle</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded p-4">
            <div className="aspect-square bg-black/5 rounded mb-3" />
            <p>Produkt {i + 1}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 border rounded">
        <p className="font-semibold">Limited – släpps {'{{datum}}'}</p>
        <a href="#" className="mt-2 inline-block rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-4 py-2">Handla nu</a>
      </div>
    </div>
  );
}


