"use client";

import { useMemo } from "react";
import type { EventDocument } from "@/sanity/lib/queries";
import EventCard from "./EventCard";
import FadeIn from "./FadeIn";

interface EventsListProps {
  events: EventDocument[];
}

function EventsList({ events }: EventsListProps) {
  const sortedEvents = useMemo(() => {
    const filtered = [...events];

    filtered.sort((a, b) => {
      if (a.eventType === "recurring" && b.eventType === "recurring") {
        const dayOrder: Record<string, number> = {
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6,
          sunday: 7,
        };
        const aDay = dayOrder[a.recurringDay || ""] || 99;
        const bDay = dayOrder[b.recurringDay || ""] || 99;
        return aDay - bDay;
      }
      if (a.eventType === "recurring") return -1;
      if (b.eventType === "recurring") return 1;

      if (a.eventDate && b.eventDate) {
        return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
      }
      if (a.eventDate) return -1;
      if (b.eventDate) return 1;

      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [events]);

  return (
    <div className="space-y-8">
      {sortedEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedEvents.map((event, index) => (
            <FadeIn key={`${event._id || event.title}-${event.subtitle || ""}`} delay={index * 0.05}>
              <EventCard event={event} variant="landing" />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--brand-olive-700)]">Inga events att visa just nu.</p>
        </div>
      )}
    </div>
  );
}

export default EventsList;
