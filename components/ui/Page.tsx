import { ReactNode } from "react";

type PageVariant = "landing" | "subpage";

type Props = {
  variant?: PageVariant;
  className?: string;
  children: ReactNode;
};

// En konsekvent sida som tar höjd för headern och sätter maxbredd + padding
export default function Page({ variant = "subpage", className = "", children }: Props) {
  const topOffsetClass = variant === "landing" ? "pt-0" : "pt-0";
  const sidePaddingClass = "px-0"; // all horisontell padding hanteras av Container/Section
  const maxWidthClass = "max-w-none"; // bredd hanteras av Container/Section

  return (
    <div className={`${topOffsetClass} ${sidePaddingClass}`}>
      <div className={`mx-auto w-full min-h-screen ${maxWidthClass} ${className}`}>{children}</div>
    </div>
  );
}


