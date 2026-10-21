// Approved package content from the 2026/2027 corporate flyer.
// Extra hours, food and drinks are quoted separately until prices are confirmed.
export const corporateNight = {
  name: "Corporate Golf Night",
  price: 19900,
  hours: 3,
  includes: [
    "Hela USE Golf med 6 TrackMan-simulatorer",
    "Tre timmar med golf, tävling och umgänge",
    "Eventvärd och färdigt tävlingsupplägg",
    "Leaderboard, final och prisutdelning",
    "Låneklubbor ingår alltid",
  ],
} as const;

export const businessPartner = {
  name: "Business Partner",
  price: 55000,
  includes: [
    "En Corporate Golf Night ingår",
    "40 timmars golf",
    "Prioriterad företagsbokning",
    "Partnerexponering på hemsidan, i lokalen och på simulatorerna",
    "Låneklubbor ingår",
  ],
} as const;

export function formatCorporatePrice(value: number) {
  return `${new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(value)} kr`;
}

export type CorporateEventDetails = {
  date: string;
  start: string;
  hours: number;
  guests: number;
  extras: string[];
};

export function corporateEventSummary(details: CorporateEventDetails) {
  const extraHours = details.hours - corporateNight.hours;
  return [
    `${corporateNight.name}: ${formatCorporatePrice(corporateNight.price)} exkl. moms`,
    `Önskad tid: ${details.hours} timmar (${corporateNight.hours} timmar ingår)`,
    "Hela lokalen, 6 simulatorer, eventvärd, tävlingsupplägg, leaderboard, final och prisutdelning.",
    "Låneklubbor ingår alltid.",
    extraHours > 0
      ? `Extra tid: ${extraHours} ${extraHours === 1 ? "timme" : "timmar"}, pris enligt offert.`
      : "",
    `Tillval: ${details.extras.length ? details.extras.join(", ") + ", pris enligt offert." : "Inga valda."}`,
    "Mat och dryck tillkommer. Önskat datum och tid bekräftas av USE Golf.",
  ]
    .filter(Boolean)
    .join("\n");
}
