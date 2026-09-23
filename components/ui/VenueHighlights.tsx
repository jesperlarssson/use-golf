import Image from "next/image";

const highlights = [
  { title: "6 TrackMan-simulatorer", description: "Världens banor. Året runt.", illustration: "golf" },
  { title: "Fullständig bar", description: "Något gott mellan rundorna.", illustration: "bar" },
  { title: "Mat & dryck", description: "Stanna gärna en stund till.", illustration: "food" },
  { title: "Fri parkering", description: "Två timmar i Nya Hovås.", illustration: "parking" },
];

export default function VenueHighlights() {
  return (
    <section aria-label="Hos USE Golf" className="bg-[#293329] text-[var(--brand-primary)]">
      <ul className="mx-auto grid max-w-screen-2xl grid-cols-1 px-6 sm:grid-cols-2 py-5 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-10">
        {highlights.map((item, index) => (
          <li key={item.title} className={`flex items-center gap-3 py-7 text-left ${index > 0 ? "border-t border-white/20" : ""} ${index % 2 === 0 ? "sm:pr-4" : "sm:border-l sm:border-white/20 sm:pl-4"} ${index === 1 ? "sm:border-t-0" : ""} lg:border-t-0 lg:px-6 lg:first:pl-0 lg:py-2 lg:[&:not(:first-child)]:border-l`}>
            <Image src={`/images/highlights/${item.illustration}-angular.png`} alt="" width={64} height={64} sizes="(min-width: 1024px) 56px, (min-width: 640px) 48px, 40px" className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
            <div>
              <p className="text-balance text-sm font-medium leading-relaxed sm:text-base">{item.title}</p>
              <p className="mt-2 text-pretty text-xs leading-relaxed text-[var(--brand-primary)]/75 sm:text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
