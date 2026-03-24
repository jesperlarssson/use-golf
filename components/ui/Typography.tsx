import { ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Heading({ as = 1, children, className = "", style }: HeadingProps) {
  const Tag = ("h" + as) as unknown as ElementType;
  const base = "tracking-tight";
  // Ta bort hårdkodad färg från size så att den kan överridas via className eller style
  // Mobil: mitt emellan första (mindre) och andra (större) steget; sm/md oförändrade
  const size =
    as === 1
      ? "text-[2.0625rem] sm:text-5xl md:text-6xl font-horus"
      : as === 2
      ? "text-[1.375rem] sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide"
      : as === 3
      ? "text-[1.1875rem] md:text-xl uppercase tracking-wide"
      : "text-[1.1875rem] sm:text-xl md:text-2xl font-semibold";
  
  // Standardfärg om ingen färg anges i className eller style
  // Kontrollera om className redan innehåller en text-färg klass
  const hasColorClass = className.match(/text-\[|text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)/);
  const defaultColor = !hasColorClass && !style?.color && (as === 2 || as === 3) 
    ? "text-[var(--brand-secondary)]" 
    : "";

  return (
    <Tag 
      className={`${base} ${size} ${defaultColor} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

type TextProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Text({ children, className = "", style }: TextProps) {
  return <p className={`text-base leading-relaxed ${className}`} style={style}>{children}</p>;
}

type LeadProps = {
  children: ReactNode;
  className?: string;
};

export function Lead({ children, className = "" }: LeadProps) {
  return <p className={`text-lg  md:text-xl ${className}`}>{children}</p>;
}

export default { Heading, Text, Lead };


