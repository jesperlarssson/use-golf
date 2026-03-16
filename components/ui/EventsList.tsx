"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { EventDocument, EventCategoryDocument } from "@/sanity/lib/queries";
import EventCard from "./EventCard";
import FadeIn from "./FadeIn";

interface EventsListProps {
  events: EventDocument[];
}

function normalizeCategoryValue(value?: string | null): string {
  return value?.trim().toLowerCase() || "";
}

function slugifyCategoryTitle(value?: string): string {
  return normalizeCategoryValue(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCategoryValue(category: EventCategoryDocument): string {
  return (
    normalizeCategoryValue(category.slug) ||
    slugifyCategoryTitle(category.title) ||
    normalizeCategoryValue(category._id)
  );
}

function EventsList({ events }: EventsListProps) {
  const searchParams = useSearchParams();
  const requestedCategory = normalizeCategoryValue(searchParams.get("category"));
  const hasRequestedCategory = requestedCategory
    ? events.some((event) => {
        if (typeof event.category === "object" && event.category !== null && "_id" in event.category) {
          const categoryObject = event.category as EventCategoryDocument;
          return getCategoryValue(categoryObject) === requestedCategory;
        }
        if (typeof event.category === "string") {
          return normalizeCategoryValue(event.category) === requestedCategory;
        }
        return false;
      })
    : false;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    hasRequestedCategory ? requestedCategory : "all"
  );

  // Extrahera unika kategorier från events
  const categories = useMemo(() => {
    const categoryMap = new Map<string, { value: string; label: string }>();
    categoryMap.set("all", { value: "all", label: "Alla" });
    
    events.forEach((event) => {
      if (typeof event.category === 'object' && event.category !== null && 'title' in event.category) {
        // Det är ett kategori-objekt från Sanity
        const cat = event.category as EventCategoryDocument;
        const categoryValue = getCategoryValue(cat);
        if (categoryValue && !categoryMap.has(categoryValue)) {
          categoryMap.set(categoryValue, { value: categoryValue, label: cat.title });
        }
      } else if (typeof event.category === 'string') {
        // Bakåtkompatibilitet: det är en string
        const fallbackLabels: Record<string, string> = {
          tavlingar: "Tävlingar",
          kurser: "Kurser & Träning",
          ligor: "Ligor",
          erbjudanden: "Erbjudanden",
        };
        const fallbackValue = normalizeCategoryValue(event.category);
        if (fallbackValue && !categoryMap.has(fallbackValue)) {
          categoryMap.set(fallbackValue, {
            value: fallbackValue,
            label: fallbackLabels[fallbackValue] || event.category,
          });
        }
      }
    });
    
    return Array.from(categoryMap.values()).sort((a, b) => {
      // "Alla" ska alltid vara först
      if (a.value === "all") return -1;
      if (b.value === "all") return 1;
      return a.label.localeCompare(b.label);
    });
  }, [events]);

  useEffect(() => {
    if (!requestedCategory) {
      setSelectedCategory("all");
      return;
    }

    const hasRequestedCategory = categories.some((category) => category.value === requestedCategory);
    setSelectedCategory(hasRequestedCategory ? requestedCategory : "all");
  }, [requestedCategory, categories]);

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Filtrera på kategori
    if (selectedCategory !== "all") {
      filtered = filtered.filter((event) => {
        if (typeof event.category === 'object' && event.category !== null && '_id' in event.category) {
          // Det är ett kategori-objekt från Sanity
          const categoryObject = event.category as EventCategoryDocument;
          const categoryValue = getCategoryValue(categoryObject);
          return categoryValue === selectedCategory;
        } else if (typeof event.category === 'string') {
          // Bakåtkompatibilitet: det är en string
          return normalizeCategoryValue(event.category) === selectedCategory;
        }
        return false;
      });
    }

    // Sortera kronologiskt
    filtered.sort((a, b) => {
      // Återkommande events först (sorterade efter dag)
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

      // Enskilda events sorterade efter datum
      if (a.eventDate && b.eventDate) {
        return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
      }
      if (a.eventDate) return -1;
      if (b.eventDate) return 1;

      // Annars sortera efter order eller titel
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [events, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Kategori-filter */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 text-sm uppercase tracking-wider font-semibold border-2 transition ${
                selectedCategory === category.value
                  ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)] border-[var(--brand-secondary)]"
                  : "bg-[var(--brand-primary)] text-[var(--brand-olive-900)] border-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredEvents.map((event, index) => (
            <FadeIn key={`${event._id || event.title}-${event.subtitle || ''}`} delay={index * 0.05}>
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--brand-olive-700)]">
            Inga events hittades. Prova att ändra kategori.
          </p>
        </div>
      )}
    </div>
  );
}

export default EventsList;
