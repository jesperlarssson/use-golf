const highlights = [
  { title: "6 TrackMan-simulatorer", description: "Världens banor. Året runt.", path: "M5 20V4m0 0c5-4 9 4 14 0v9c-5 4-9-4-14 0M2 20h6" },
  { title: "Fullständig bar", description: "Något gott mellan rundorna.", path: "M5 3h14l-7 9-7-9Zm7 9v9m-4 0h8" },
  { title: "Mat & dryck", description: "Stanna gärna en stund till.", path: "M4 3v6m3-6v6m3-6v6M4 9c0 4 6 4 6 0M7 12v9M20 3c-5 3-5 9 0 9m0-9v18" },
  { title: "Fri parkering", description: "Två timmar i Nya Hovås.", path: "M8 20V4h5a5 5 0 0 1 0 10H8" },
];

export default function VenueHighlights() {
  return <section aria-label="Hos USE Golf" className="border-b border-black/15 bg-[#ebe8dc]">
    <ul className="mx-auto grid max-w-screen-2xl grid-cols-2 px-6 py-3 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-8">{highlights.map((item, index) => <li key={item.title} className={`flex flex-col gap-4 py-6 ${index % 2 === 0 ? "pr-4" : "border-l border-black/15 pl-5"} ${index > 1 ? "border-t border-black/15 lg:border-t-0" : ""} lg:flex-row lg:items-start lg:gap-5 lg:py-3 lg:pr-6 lg:pl-6 lg:first:pl-0 lg:[&:not(:first-child)]:border-l`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-[var(--brand-olive-900)]"><path d={item.path} /></svg>
      <div><p className="text-sm font-medium leading-relaxed">{item.title}</p><p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/65">{item.description}</p></div>
    </li>)}</ul>
  </section>;
}
