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
  const sidePaddingClass = variant === "landing" ? "px-0" : "px-4 sm:px-6"; // landing: full bleed
  const maxWidthClass = variant === "landing" ? "max-w-none" : "max-w-screen-2xl"; // landing: ingen max-bredd

  return (
    <div className={`${topOffsetClass} ${sidePaddingClass}`}>
      <div className={`mx-auto w-full min-h-screen ${maxWidthClass} ${className}`}>{children}</div>
    </div>
  );
}


