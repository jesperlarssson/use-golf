import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mat & dryck",
  description: "Se menyn hos USE Golf i Nya Hovås: napolitanska pizzor, öl, cider, vin och drinkar. Här hittar du alla priser.",
  path: "/mat-och-dryck",
});

type MenuItem = { name: string; price: number; serving?: string };

const pizzas: MenuItem[] = [
  { name: "Margherita", price: 120 },
  { name: "Prosciutto", price: 130 },
  { name: "Diablo", price: 135 },
  { name: "Pepperoni", price: 135 },
];

const bar: { title: string; items: MenuItem[] }[] = [
  { title: "Öl & cider", items: [
    { name: "Fatöl", serving: "40 cl", price: 85 },
    { name: "Lättöl", serving: "33 cl", price: 55 },
    { name: "Eriksberg", serving: "50 cl", price: 90 },
    { name: "Briska", serving: "33 cl", price: 75 },
  ] },
  { title: "Vin på glas", items: [
    { name: "Husets röda", price: 95 },
    { name: "Husets vita", price: 95 },
  ] },
  { title: "Vin på flaska", items: [
    { name: "Bubbel", price: 395 },
    { name: "Husets röda", price: 395 },
    { name: "Husets vita", price: 395 },
  ] },
  { title: "Drinkar", items: [
    { name: "Gin & Tonic", price: 115 },
    { name: "Vodka Red Bull", price: 115 },
  ] },
];

function PriceList({ items }: { items: MenuItem[] }) {
  return (
    <dl className="mt-4">
      {items.map(({ name, serving, price }) => (
        <div key={name} className="flex items-baseline justify-between gap-4 border-b border-current/20 py-3">
          <dt>{name}{serving && <span className="ml-2 whitespace-nowrap text-sm opacity-75">{serving}</span>}</dt>
          <dd className="shrink-0 tabular-nums">{price} kr</dd>
        </div>
      ))}
    </dl>
  );
}

export default function MatOchDryckPage() {
  return (
    <>
      <section aria-labelledby="menu-heading" className="mx-auto grid max-w-screen-2xl gap-y-8 px-6 pb-16 pt-32 sm:px-10 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-24 lg:px-16 lg:pb-24 lg:pt-40">
        <header className="md:self-end">
          <p className="mb-4 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">Menyn på USE Golf</p>
          <h1 id="menu-heading" className="text-balance text-5xl leading-[1.06] tracking-[-.04em] lg:text-7xl">Mat & dryck.</h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[var(--foreground)]/80 sm:text-lg">Ta en napolitansk pizza efter rundan eller slå dig ner i baren medan kompisarna spelar klart.</p>
          <a href="#baren" className="mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Se dryckesmenyn</a>
        </header>
        <div className="relative aspect-[4/3] overflow-hidden md:col-start-2 md:row-span-2 md:row-start-1 md:aspect-[4/5]">
          <Image src="/images/mat-och-dryck/pizza.webp" alt="Napolitansk pizza på en träbricka med ett glas öl på bordet hos USE Golf" fill priority sizes="(min-width: 1536px) 660px, (min-width: 768px) 45vw, 100vw" className="object-cover object-[center_65%]" />
        </div>
        <div className="md:self-start">
          <h2 className="text-3xl tracking-tight md:text-4xl">Pizzor</h2>
          <PriceList items={pizzas} />
        </div>
      </section>
      <section id="baren" aria-labelledby="bar-heading" className="scroll-mt-20 bg-[var(--brand-olive-900)] text-[var(--brand-primary)]">
        <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <h2 id="bar-heading" className="text-4xl tracking-tight md:text-5xl">Baren</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-24">
            {bar.map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-2xl tracking-tight">{title}</h3>
                <PriceList items={items} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
