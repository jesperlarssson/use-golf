"use client";

import { useState, useMemo } from "react";
import type { ClosureDocument } from "@/sanity/lib/pricingQueries";

type DatePickerProps = {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
  closures?: ClosureDocument[];
};

const MONTHS = [
  "Januari", "Februari", "Mars", "April", "Maj", "Juni",
  "Juli", "Augusti", "September", "Oktober", "November", "December"
];

const WEEKDAYS = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];

export default function DatePicker({ selectedDate, onDateSelect, minDate, closures = [] }: DatePickerProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Måndag = 0

  const days = useMemo(() => {
    const daysArray: (number | null)[] = [];
    
    // Fyll med tomma rutor för dagar före månaden börjar
    for (let i = 0; i < startingDayOfWeek; i++) {
      daysArray.push(null);
    }
    
    // Fyll med alla dagar i månaden
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }
    
    return daysArray;
  }, [startingDayOfWeek, daysInMonth]);

  const isDateClosed = (day: number): { isClosed: boolean; closureTitle?: string } => {
    const date = new Date(currentYear, currentMonth, day);
    date.setHours(0, 0, 0, 0);
    
    for (const closure of closures) {
      const closureStart = new Date(closure.startDate);
      closureStart.setHours(0, 0, 0, 0);
      const closureEnd = new Date(closure.endDate);
      closureEnd.setHours(23, 59, 59, 999);
      
      if (date >= closureStart && date <= closureEnd) {
        return { isClosed: true, closureTitle: closure.title };
      }
    }
    
    return { isClosed: false };
  };

  const isDateDisabled = (day: number): boolean => {
    const date = new Date(currentYear, currentMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return true;
    if (minDate && date < minDate) return true;
    
    // Stängda datum är också disabled
    const { isClosed } = isDateClosed(day);
    if (isClosed) return true;
    
    return false;
  };

  const isDateSelected = (day: number): boolean => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const handleDayClick = (day: number) => {
    if (isDateDisabled(day)) return;
    const date = new Date(currentYear, currentMonth, day);
    onDateSelect(date);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-4">
      {/* Header med månad och år */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-[var(--brand-secondary)]/20 transition"
          aria-label="Föregående månad"
        >
          ←
        </button>
        <h3 className="text-lg font-semibold text-[var(--brand-secondary)] uppercase tracking-wide">
          {MONTHS[currentMonth]} {currentYear}
        </h3>
        <button
          type="button"
          onClick={goToNextMonth}
          className="p-2 hover:bg-[var(--brand-secondary)]/20 transition"
          aria-label="Nästa månad"
        >
          →
        </button>
      </div>

      {/* Veckodagar */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-xs font-semibold text-[var(--brand-olive-900)] opacity-60 text-center py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Kalendergrid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const disabled = isDateDisabled(day);
          const selected = isDateSelected(day);
          const { isClosed, closureTitle } = isDateClosed(day);
          const isToday = (() => {
            const today = new Date();
            return (
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
            );
          })();

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDayClick(day)}
              disabled={disabled}
              title={isClosed ? `Stängt: ${closureTitle}` : undefined}
              className={`
                aspect-square border-2 transition relative
                ${selected
                  ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)] border-[var(--brand-secondary)]"
                  : isClosed
                  ? "bg-red-50 border-red-300 text-red-700"
                  : "border-transparent hover:border-[var(--brand-secondary)]/40"
                }
                ${disabled
                  ? "opacity-60 cursor-not-allowed"
                  : "cursor-pointer hover:bg-[var(--brand-secondary)]/10"
                }
                ${isToday && !selected && !isClosed
                  ? "border-[var(--brand-secondary)]/60"
                  : ""
                }
              `}
            >
              <span className={`text-sm font-medium ${isClosed ? "line-through" : ""}`}>{day}</span>
              {isClosed && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

