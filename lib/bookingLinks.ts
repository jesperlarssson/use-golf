/** Public navigation only; this does not migrate the separate booking API/assistant. */
export const albaLinks = {
  simulator: "https://albaplay.com/sv/venue/use-golf-2",
  // Keep this evergreen: the supplied ?date=2026-09-21 must not be pinned in navigation.
  events: "https://albaplay.com/sv/venue/use-golf-2/events",
  membership: "https://albaplay.com/sv/venue/use-golf-2/offers/membership",
} as const;

export function getBookingLinks(provider: "sweetspot" | "alba") {
  if (provider === "alba") return albaLinks;
  return {
    simulator: "https://book.sweetspot.io/clubs/use-golf/2129/tee-sheet",
    events: "/events",
    membership: "https://book.sweetspot.io/clubs/use-golf/memberships",
  };
}

// Deliberately opt-in. Set before build and redeploy only when the switch is approved.
export const albaEnabled = process.env.NEXT_PUBLIC_BOOKING_PROVIDER === "alba";
export const bookingLinks = getBookingLinks(albaEnabled ? "alba" : "sweetspot");
