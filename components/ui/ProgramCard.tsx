import { ReactNode } from "react";

type ProgramCardProps = {
  title: string;
  children: ReactNode; // rich text content
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ProgramCard({ title, children, ctaHref, ctaLabel = "Boka" }: ProgramCardProps) {
  return (
    <div className="border-2 border-[var(--brand-secondary)]/30 p-6 bg-[var(--brand-primary)] hover:border-[var(--brand-secondary)]/60 transition-colors">
      <h4 className="font-horus text-4xl uppercase tracking-tight mb-2">{title}</h4>
      <div className="max-w-xl">
        {children}
      </div>
      {ctaHref ? (
        <div className="mt-6 text-right">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
          >
            {ctaLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}


