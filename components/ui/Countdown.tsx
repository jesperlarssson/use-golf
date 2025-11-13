"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import VariableProximity from "@/components/ui/VariableProximity";

type CountdownProps = {
  target: Date | string;
  className?: string;
  accentClassName?: string; // för att styra färg/kontrast externt
  showOnlyDaysAndHours?: boolean; // Visa bara dagar och timmar
};

function useCountdown(target: Date, showOnlyDaysAndHours = false) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const hourMs = 60 * 60 * 1000;
  const dayMs = 24 * hourMs;
  const weekMs = 7 * dayMs;
  const monthMs = 30 * dayMs; // förenklat

  if (showOnlyDaysAndHours) {
    const days = Math.floor(diff / dayMs);
    const remAfterDays = diff - days * dayMs;
    const hours = Math.floor(remAfterDays / hourMs);
    const finished = diff <= 0;
    return { days, hours, finished } as const;
  }

  const months = Math.floor(diff / monthMs);
  const remAfterMonths = diff - months * monthMs;
  const weeks = Math.floor(remAfterMonths / weekMs);
  const remAfterWeeks = remAfterMonths - weeks * weekMs;
  const days = Math.floor(remAfterWeeks / dayMs);

  const finished = diff <= 0;
  return { months, weeks, days, finished } as const;
}

export default function Countdown({ target, className = "", accentClassName = "", showOnlyDaysAndHours = false }: CountdownProps) {
  const targetDate = useMemo(() => (typeof target === "string" ? new Date(target) : target), [target]);
  const countdownData = useCountdown(targetDate, showOnlyDaysAndHours);
  const containerRef = useRef<HTMLDivElement>(null);

  if (countdownData.finished) {
    return (
      <div ref={containerRef} className={`flex flex-col items-center ${className}`} style={{ position: 'relative' }}>
        <VariableProximity
          label={"Vi har öppnat!"}
          className={`text-4xl font-semibold ${accentClassName}`}
          fromFontVariationSettings="'wght' 400, 'opsz' 16"
          toFontVariationSettings="'wght' 900, 'opsz' 40"
          containerRef={containerRef}
          radius={120}
          falloff='linear'
        />
      </div>
    );
  }

  const fmt = (n: number, singular: string, plural: string) => `${n} ${n === 1 ? singular : plural}`;
  
  let label: string;
  if (showOnlyDaysAndHours) {
    const { days, hours } = countdownData;
    label = `${fmt(days, 'dag', 'dagar')} och ${fmt(hours, 'timme', 'timmar')} kvar`;
  } else {
    const { months, weeks, days } = countdownData;
    label = `${fmt(months, 'månad', 'månader')}, ${fmt(weeks, 'vecka', 'veckor')} Och ${fmt(days, 'dag', 'dagar')} kvar`;
  }

  return (
    <div ref={containerRef} className={`flex items-center justify-center ${className}`} style={{ position: 'relative' }}>
      <VariableProximity
        label={label}
        className={`text-4xl sm:text-6xl ${accentClassName}`}
        fromFontVariationSettings="'wght' 400, 'opsz' 16"
        toFontVariationSettings="'wght' 900, 'opsz' 40"
        containerRef={containerRef}
        radius={120}
        falloff='linear'
      />
    </div>
  );
}


