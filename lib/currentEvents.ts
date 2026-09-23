import type { EventDocument } from "@/sanity/lib/queries";

/** Public programme: dated events only. Recurring activities move to Alba. */
export function isCurrentPublicEvent(event: EventDocument, now = new Date()): boolean {
  if (event.eventType === "recurring" || !event.eventDate) return false;
  const category = typeof event.category === "string" ? event.category : `${event.category?.slug ?? ""} ${event.category?.title ?? ""}`;
  if (/junior|damer|ladies|pension|senior|liga|league|träna|trana|tränare|kurs/i.test(`${category} ${event.title}`)) return false;
  const end = event.eventEndDate || event.eventDate;
  if (/^\d{4}-\d{2}-\d{2}$/.test(end)) {
    return end >= now.toLocaleDateString("sv-SE", { timeZone: "Europe/Stockholm" });
  }
  const timestamp = Date.parse(end);
  return Number.isFinite(timestamp) && timestamp >= now.getTime();
}
