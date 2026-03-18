import { ReactNode } from "react";
import { Heading, Text } from "./Typography";

interface SectionHeaderProps {
  label?: string;
  heading: string | ReactNode;
  description?: string | ReactNode;
  align?: "center" | "left";
  labelColor?: string;
  headingColor?: string;
  textColor?: string;
  headingSize?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "small";
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

export default function SectionHeader({
  label,
  heading,
  description,
  align = "center",
  labelColor = "var(--brand-secondary)",
  headingColor,
  textColor,
  headingSize = 2,
  variant = "default",
  className = "",
  maxWidth = "3xl",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    full: "max-w-full",
  };

  // Bestäm heading-storlek baserat på variant
  const getHeadingClasses = () => {
    if (variant === "small") {
      if (headingSize === 2) {
        return "text-2xl md:text-3xl lg:text-4xl";
      }
      // För andra headingSize, använd mindre storlekar
      return "";
    }
    // Default variant
    if (headingSize === 2) {
      return "text-4xl md:text-5xl";
    }
    return "";
  };

  const getLabelClasses = () => {
    if (variant === "small") {
      return "font-label text-sm md:text-base uppercase tracking-widest mb-3 block";
    }
    return "font-label text-xl uppercase tracking-widest mb-4 block";
  };

  const getDescriptionClasses = () => {
    if (variant === "small") {
      return "text-base md:text-lg -mt-4";
    }
    return "text-lg md:text-xl";
  };

  return (
    <div className={`${alignClasses} ${maxWidthClasses[maxWidth]} ${className}`}>
      {label && (
        <span
          className={getLabelClasses()}
          style={{ color: labelColor }}
        >
          {label}
        </span>
      )}
      <Heading
        as={headingSize}
        className={`mb-6 ${getHeadingClasses()}`}
        style={headingColor ? { color: headingColor } : undefined}
      >
        {heading}
      </Heading>
      {description && (
        <Text
          className={getDescriptionClasses()}
          style={textColor ? { 
            color: textColor.includes('/') ? textColor.split('/')[0] : textColor,
            opacity: textColor.includes('/') ? parseInt(textColor.split('/')[1]) / 100 : undefined
          } : undefined}
        >
          {description}
        </Text>
      )}
    </div>
  );
}
