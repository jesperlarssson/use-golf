import type { EventDocument } from "@/sanity/lib/queries";
import { LOCAL_WHATSAPP_EVENTS } from "@/lib/localWhatsAppEvents";

const LOCAL_TITLES = new Set(
  LOCAL_WHATSAPP_EVENTS.map((e) => e.title.toLowerCase().trim())
);

/**
 * Tar bort event från Sanity/dummy som har samma titel som våra lokala WhatsApp-event,
 * och lägger till LOCAL_WHATSAPP_EVENTS sist (sorteras om order finns).
 */
export function mergeEventsWithLocal(events: EventDocument[]): EventDocument[] {
  const withoutDuplicates = events.filter(
    (e) => !LOCAL_TITLES.has(e.title.toLowerCase().trim())
  );
  const merged = [...withoutDuplicates, ...LOCAL_WHATSAPP_EVENTS];
  return merged.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}
