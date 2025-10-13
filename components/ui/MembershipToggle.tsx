"use client";
import { useState } from "react";
import Link from "next/link";

type Tab = "privat" | "foretag";

export default function MembershipToggle() {
  const [tab, setTab] = useState<Tab>("privat");

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="max-w-xl mx-auto border-2 border-[var(--brand-secondary)] rounded-none overflow-hidden grid grid-cols-2 text-center">
        <button
          className={`${
            tab === "privat" ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)]" : "bg-transparent text-[var(--brand-olive-900)]"
          } py-3 font-semibold uppercase tracking-wider transition-colors`}
          onClick={() => setTab("privat")}
          data-cursor-target
          data-cursor-padding="8"
        >
          Privat
        </button>
        <button
          className={`${
            tab === "foretag" ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)]" : "bg-transparent text-[var(--brand-olive-900)]"
          } py-3 font-semibold uppercase tracking-wider border-l-2 border-[var(--brand-secondary)] transition-colors`}
          onClick={() => setTab("foretag")}
          data-cursor-target
          data-cursor-padding="8"
        >
          Företag
        </button>
      </div>

    </div>
  );
}

function Card({ title, price, children }: { title: string; price?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-none border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-5">
      <h3 className="font-horus text-2xl mb-1">{title}</h3>
      {price ? <p className="text-lg font-semibold mb-3">{price}</p> : null}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center mt-4 px-4 py-2 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none"
      data-cursor-target
      data-cursor-padding="10"
    >
      {children}
    </Link>
  );
}




