/**
 * PRISER FRÅN SANITY
 * 
 * För att hämta priser från Sanity, använd:
 * - getPricingData() från '@/sanity/lib/pricingQueries' för simulatorpriser
 * - getUserPasses() från '@/sanity/lib/pricingQueries' för User Passes
 * - getVenueBookingPricing() från '@/sanity/lib/pricingQueries' för Boka Lokalen-priser
 * 
 * Funktionerna i denna fil accepterar nu valfria parametrar för att använda Sanity-data.
 * Om inga parametrar skickas, används fallback-värdena nedan.
 */

export type DayType = "monday-friday" | "saturday" | "sunday";

export type TimeSlot = {
  time: string;
  price: number;
};

export type PricingData = {
  [key in DayType]: TimeSlot[];
};

// Fallback priser om Sanity-data inte finns
export const defaultPricingData: PricingData = {
  "monday-friday": [
    { time: "07:00–10:00", price: 330 },
    { time: "10:00–16:00", price: 425 },
    { time: "16:00–19:00", price: 495 },
    { time: "19:00–22:00", price: 450 },
    { time: "22:00–23:00", price: 300 },
  ],
  "saturday": [
    { time: "07:00–09:00", price: 425 },
    { time: "09:00–16:00", price: 495 },
    { time: "16:00–22:00", price: 450 },
    { time: "22:00–23:00", price: 300 },
  ],
  "sunday": [
    { time: "07:00–10:00", price: 425 },
    { time: "10:00–16:00", price: 495 },
    { time: "16:00–22:00", price: 450 },
    { time: "22:00–23:00", price: 300 },
  ],
};

// Export för bakåtkompatibilitet - använd getPricingData() från '@/sanity/lib/pricingQueries' istället
// Denna används nu endast som fallback i funktioner. Sidor hämtar direkt från Sanity.
export const pricingData = defaultPricingData;

export const dayLabels: Record<DayType, string> = {
  "monday-friday": "Måndag–Fredag",
  "saturday": "Lördag",
  "sunday": "Söndag",
};

export type Weekday = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export const weekdayLabels: Record<Weekday, string> = {
  "monday": "Måndag",
  "tuesday": "Tisdag",
  "wednesday": "Onsdag",
  "thursday": "Torsdag",
  "friday": "Fredag",
  "saturday": "Lördag",
  "sunday": "Söndag",
};

// Mappa veckodag till DayType (prisspann)
export function getDayTypeFromWeekday(weekday: Weekday): DayType {
  switch (weekday) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "monday-friday";
    case "saturday":
      return "saturday";
    case "sunday":
      return "sunday";
  }
}

export function getPriceForTimeSlot(day: DayType, timeSlot: string, pricing?: PricingData): number {
  const dayPricing = (pricing || pricingData)[day];
  const slot = dayPricing.find((s) => s.time === timeSlot);
  return slot?.price || 0;
}

// Konvertera tid (HH:MM) till minuter från midnatt
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// Hitta vilken tidsperiod en given tid faller inom
function findTimeSlotForTime(day: DayType, time: string, pricing?: PricingData): TimeSlot | null {
  const dayPricing = (pricing || pricingData)[day];
  const timeMinutes = timeToMinutes(time);

  for (const slot of dayPricing) {
    const [start, end] = slot.time.split("–");
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);

    if (timeMinutes >= startMinutes && timeMinutes < endMinutes) {
      return slot;
    }
  }

  return null;
}

// Beräkna priset för varje timme baserat på starttid och antal timmar
// Varje timme kontrolleras mot vilken tidsperiod den faller inom
export function calculateHourlyPrices(day: DayType, startTime: string, hours: number, pricing?: PricingData): number[] {
  const prices: number[] = [];
  const [startHour] = startTime.split(":").map(Number);

  for (let i = 0; i < hours; i++) {
    const currentHour = startHour + i;
    // Kontrollera starten av timmen (t.ex. 19:00 för timmen 19:00-20:00)
    const currentTime = `${currentHour.toString().padStart(2, "0")}:00`;
    const slot = findTimeSlotForTime(day, currentTime, pricing);
    prices.push(slot?.price || 0);
  }

  return prices;
}

// Generera tillgängliga starttider baserat på dagen
export function getAvailableStartTimes(day: DayType, pricing?: PricingData): string[] {
  const times: string[] = [];
  const dayPricing = (pricing || pricingData)[day];

  for (const slot of dayPricing) {
    const [start, end] = slot.time.split("–");
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);

    // Lägg till varje hel timme i intervallet
    for (let minutes = startMinutes; minutes < endMinutes; minutes += 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const timeString = `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
      if (!times.includes(timeString)) {
        times.push(timeString);
      }
    }
  }

  return times.sort();
}

// User Passes data
export type UserPassType = "small" | "medium" | "large";

export type UserPass = {
  type: UserPassType;
  name: string;
  price: number;
  playValue: number;
  bonusPercent: number;
};

// Fallback User Passes om Sanity-data inte finns
export const defaultUserPasses: Record<UserPassType, UserPass> = {
  small: {
    type: "small",
    name: "Small",
    price: 5000,
    playValue: 5500,
    bonusPercent: 10,
  },
  medium: {
    type: "medium",
    name: "Medium",
    price: 10000,
    playValue: 11500,
    bonusPercent: 15,
  },
  large: {
    type: "large",
    name: "Large",
    price: 15000,
    playValue: 18000,
    bonusPercent: 20,
  },
};

// Export för bakåtkompatibilitet - använd getUserPasses() istället
export const userPasses = defaultUserPasses;

// Rekommendationsresultat med beräkningar
export type UserPassRecommendation = {
  pass: UserPass;
  loadAmount: number; // Belopp att ladda (avrundat)
  savings: number; // Besparing i kr
};

// Beräkna besparing för ett specifikt pass
export function calculatePassSavings(totalPrice: number, pass: UserPass): UserPassRecommendation | null {
  // Om priset är lägre än passets minimipris, kan man fortfarande använda passet
  // men man måste ladda minst minimipriset
  const bonusMultiplier = 1 + (pass.bonusPercent / 100);
  let loadAmount = Math.ceil(totalPrice / bonusMultiplier); // Avrunda uppåt
  
  // Se till att loadAmount inte är mindre än passets minimipris
  loadAmount = Math.max(loadAmount, pass.price);
  
  // Beräkna besparing (skillnaden mellan originalpris och vad man faktiskt behöver ladda)
  const savings = totalPrice - loadAmount;
  
  return {
    pass,
    loadAmount,
    savings,
  };
}

// Hämta rekommenderad User Pass baserat på pris
export function getRecommendedUserPass(totalPrice: number, passes?: Record<UserPassType, UserPass>): UserPassRecommendation | null {
  const userPassesToUse = passes || userPasses;
  let recommendedPass: UserPass | null = null;
  
  // Bestäm vilket pass som passar baserat på prisintervall
  // Om priset >= Medium pass spelvärde (11 500 kr), rekommendera Large pass (mer lönsamt med 20% bonus)
  if (totalPrice >= userPassesToUse.medium.playValue) {
    recommendedPass = userPassesToUse.large;
  } 
  // Om priset >= Small pass spelvärde (5 500 kr) men < Medium pass spelvärde, rekommendera Medium pass (mer lönsamt med 15% bonus)
  else if (totalPrice >= userPassesToUse.small.playValue) {
    recommendedPass = userPassesToUse.medium;
  }
  // Om priset >= Small pass pris (5 000 kr) men < Small pass spelvärde, rekommendera Small pass
  else if (totalPrice >= userPassesToUse.small.price) {
    recommendedPass = userPassesToUse.small;
  }
  
  if (!recommendedPass) {
    return null;
  }
  
  return calculatePassSavings(totalPrice, recommendedPass);
}

// Boka hela lokalen - baspriser för hela lokalen (minst 2h)
// Fallback värden om Sanity-data inte finns
export const defaultBokaLokalenBasPriser: Record<DayType, number> = {
  "monday-friday": 18000, // Måndag–Fredag: 18 000 kr (genomsnitt)
  "saturday": 24000, // Lördag: 24 000 kr
  "sunday": 24000, // Söndag: 24 000 kr
};

// Boka hela lokalen - tilläggspriser
export const defaultBokaLokalenPriser = {
  extraTimme: 3600, // Pris per extra timme (utöver baspriset för 2 timmar)
};

// Export för bakåtkompatibilitet - använd getVenueBookingPricing() istället
export const bokaLokalenBasPriser = defaultBokaLokalenBasPriser;
export const bokaLokalenPriser = defaultBokaLokalenPriser;

// Hämta baspris för hela lokalen baserat på veckodag
export function getBokaLokalenBasPris(weekday: Weekday, venuePricing?: { mondayTuesdayPrice: number; wednesdayThursdayPrice: number; fridaySaturdaySundayPrice: number }): number {
  // Måndag–Tisdag
  if (weekday === "monday" || weekday === "tuesday") {
    return venuePricing?.mondayTuesdayPrice || 16000;
  }
  // Onsdag–Torsdag
  if (weekday === "wednesday" || weekday === "thursday") {
    return venuePricing?.wednesdayThursdayPrice || 20000;
  }
  // Fredag–Söndag
  return venuePricing?.fridaySaturdaySundayPrice || 24000;
}

