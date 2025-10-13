import { ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
};

export function Heading({ as = 1, children, className = "" }: HeadingProps) {
  const Tag = ("h" + as) as unknown as ElementType;
  const base = "tracking-tight";
  const size =
    as === 1
      ? "text-3xl sm:text-5xl md:text-6xl font-horus"
      : as === 2
      ? "text-xl sm:text-2xl md:text-3xl font-semibold"
      : as === 3
      ? "text-xl sm:text-2xl md:text-3xl font-semibold"
      : "text-lg sm:text-xl md:text-2xl font-semibold";

  return <Tag className={`${base} ${size} ${className}`}>{children}</Tag>;
}

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Text({ children, className = "" }: TextProps) {
  return <p className={`text-base leading-relaxed ${className}`}>{children}</p>;
}

type LeadProps = {
  children: ReactNode;
  className?: string;
};

export function Lead({ children, className = "" }: LeadProps) {
  return <p className={`text-lg  md:text-xl ${className}`}>{children}</p>;
}

export default { Heading, Text, Lead };


