export type DayType = "monday-thursday" | "friday-saturday" | "sunday";

export type TimeSlot = {
  time: string;
  price: number;
};

export type PricingData = {
  [key in DayType]: TimeSlot[];
};

export const pricingData: PricingData = {
  "monday-thursday": [
    { time: "07:00–10:00", price: 330 },
    { time: "10:00–16:00", price: 425 },
    { time: "16:00–19:00", price: 495 },
    { time: "19:00–22:00", price: 450 },
    { time: "22:00–23:00", price: 300 },
  ],
  "friday-saturday": [
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

export const dayLabels: Record<DayType, string> = {
  "monday-thursday": "Måndag–Torsdag",
  "friday-saturday": "Fredag–Lördag",
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
      return "monday-thursday";
    case "friday":
    case "saturday":
      return "friday-saturday";
    case "sunday":
      return "sunday";
  }
}

export function getPriceForTimeSlot(day: DayType, timeSlot: string): number {
  const dayPricing = pricingData[day];
  const slot = dayPricing.find((s) => s.time === timeSlot);
  return slot?.price || 0;
}

// Konvertera tid (HH:MM) till minuter från midnatt
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// Hitta vilken tidsperiod en given tid faller inom
function findTimeSlotForTime(day: DayType, time: string): TimeSlot | null {
  const dayPricing = pricingData[day];
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
export function calculateHourlyPrices(day: DayType, startTime: string, hours: number): number[] {
  const prices: number[] = [];
  const [startHour] = startTime.split(":").map(Number);

  for (let i = 0; i < hours; i++) {
    const currentHour = startHour + i;
    // Kontrollera starten av timmen (t.ex. 19:00 för timmen 19:00-20:00)
    const currentTime = `${currentHour.toString().padStart(2, "0")}:00`;
    const slot = findTimeSlotForTime(day, currentTime);
    prices.push(slot?.price || 0);
  }

  return prices;
}

// Generera tillgängliga starttider baserat på dagen
export function getAvailableStartTimes(day: DayType): string[] {
  const times: string[] = [];
  const dayPricing = pricingData[day];

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

export const userPasses: Record<UserPassType, UserPass> = {
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
export function getRecommendedUserPass(totalPrice: number): UserPassRecommendation | null {
  let recommendedPass: UserPass | null = null;
  
  // Bestäm vilket pass som passar baserat på prisintervall
  // Om priset >= Medium pass spelvärde (11 500 kr), rekommendera Large pass (mer lönsamt med 20% bonus)
  if (totalPrice >= userPasses.medium.playValue) {
    recommendedPass = userPasses.large;
  } 
  // Om priset >= Small pass spelvärde (5 500 kr) men < Medium pass spelvärde, rekommendera Medium pass (mer lönsamt med 15% bonus)
  else if (totalPrice >= userPasses.small.playValue) {
    recommendedPass = userPasses.medium;
  }
  // Om priset >= Small pass pris (5 000 kr) men < Small pass spelvärde, rekommendera Small pass
  else if (totalPrice >= userPasses.small.price) {
    recommendedPass = userPasses.small;
  }
  
  if (!recommendedPass) {
    return null;
  }
  
  return calculatePassSavings(totalPrice, recommendedPass);
}

// Boka hela lokalen - baspriser för hela lokalen (minst 2h)
export const bokaLokalenBasPriser: Record<DayType, number> = {
  "monday-thursday": 16000, // Måndag–Tisdag: 16 000 kr, Onsdag–Torsdag: 20 000 kr
  "friday-saturday": 24000, // Fredag–Söndag: 24 000 kr
  "sunday": 24000, // Fredag–Söndag: 24 000 kr
};

// Boka hela lokalen - tilläggspriser
export const bokaLokalenPriser = {
  extraTimme: 3600, // Pris per extra timme (utöver baspriset för 2 timmar)
};

// Hämta baspris för hela lokalen baserat på veckodag
export function getBokaLokalenBasPris(weekday: Weekday): number {
  // Måndag–Tisdag: 16 000 kr
  if (weekday === "monday" || weekday === "tuesday") {
    return 16000;
  }
  // Onsdag–Torsdag: 20 000 kr
  if (weekday === "wednesday" || weekday === "thursday") {
    return 20000;
  }
  // Fredag–Söndag: 24 000 kr
  return 24000;
}

