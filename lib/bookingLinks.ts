/** Public navigation only; this does not migrate the separate booking API/assistant. */
export const albaLinks = {
  simulator: "https://albaplay.com/sv/venue/use-golf-2",
  // Keep this evergreen: the supplied ?date=2026-09-21 must not be pinned in navigation.
  events: "https://albaplay.com/sv/venue/use-golf-2/events",
  membership: "https://albaplay.com/sv/venue/use-golf-2/offers/membership",
} as const;

// Alba is now the active public booking provider.
export const albaEnabled = true;
export const bookingLinks = albaLinks;
