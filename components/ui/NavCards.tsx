"use client";
import Link from "next/link";
import Image from "next/image";

type NavCard = {
  href: string;
  title: string;
  description: string;
  image?: string;
};

type NavCardsProps = {
  items: NavCard[];
  className?: string;
};

export default function NavCards({ items, className }: NavCardsProps) {
  return (
    <div className={"mx-auto w-full max-w-screen-2xl px-4 sm:px-6 " + (className ?? "")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const variant = index % 3 === 0 ? "sketch-v1" : index % 3 === 1 ? "sketch-v2" : "sketch-v3";
          return (
          <Link
            key={item.href}
            href={item.href}
            className={`group navcard-3d relative block h-full sketch-button ${variant} bg-[var(--brand-primary)] text-left rounded-none text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)] hover:text-[var(--brand-primary)] transition overflow-hidden`}
            data-cursor-target
            data-cursor-padding="10"
          >
            <div className="sketch-sides flex flex-col justify-between">
              {/* Ikon placeholder */}

              <div className="p-4">
                <h3 className="font-semibold tracking-widest text-xl mb-2 uppercase group-hover:text-[var(--brand-primary)]">{item.title}</h3>
                <p className="text-sm opacity-80 lg:h-10 group-hover:text-[var(--brand-primary)]">{item.description}</p>
              </div>
            </div>
          </Link>
        );})}
      </div>
    </div>
  );
}


