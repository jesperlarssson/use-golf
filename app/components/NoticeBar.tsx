"use client";

import { useState } from "react";

export default function NoticeBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-[var(--brand-secondary)] text-[var(--brand-primary)] text-sm">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
        <span>Öppet alla dagar 07:00–23:00</span>
        <button className="opacity-80 hover:opacity-100" onClick={() => setVisible(false)}>
          Stäng
        </button>
      </div>
    </div>
  );
}


