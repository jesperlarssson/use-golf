"use client";

import { useState } from "react";

export default function SweetspotAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-xs rounded-none border border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-4 py-3 text-[var(--brand-secondary)] shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
      <div className="flex items-start gap-3">
        <div className="text-sm leading-tight">
          <p className="font-semibold uppercase tracking-wide text-[var(--brand-secondary)]">
            Störningar i bokningen
          </p>
          <p className="mt-1 text-xs tracking-wider">
            Just nu är det störningar hos Sweetspots tidsbokning. Detta borde vara åtgärdat inom kort.
          </p>
        </div>
        <button
          type="button"
          aria-label="Stäng meddelande"
          onClick={() => setVisible(false)}
          className="text-[var(--brand-secondary)] hover:text-white transition"
        >
          <span aria-hidden="true" className="text-lg font-bold">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}

