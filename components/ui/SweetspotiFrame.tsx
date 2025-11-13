"use client";
import { useEffect, useState } from "react";

type Responsive<T> = T | { mobile?: T; desktop?: T };

type Props = {
  src?: string;
  baseUrl?: string;
  subPath?: Responsive<string>;
  title?: string;
  className?: string;
  height?: Responsive<number | string>;
  hideNav?: Responsive<boolean>;
};

export default function SweetspotiFrame({
  src,
  baseUrl = "https://book.sweetspot.io/clubs/use-golf/",
  subPath,
  title = "Sweetspot bokning",
  className = "",
  height = 900,
  hideNav = false,
}: Props) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
      setIsDesktop(matches);
    };
    handler(mql);
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, []);

  function resolveResponsive<T>(value: Responsive<T> | undefined): T | undefined {
    if (value === undefined) return undefined;
    if (typeof value === "object" && value !== null && ("mobile" in (value as any) || "desktop" in (value as any))) {
      const obj = value as { mobile?: T; desktop?: T };
      return isDesktop ? (obj.desktop ?? obj.mobile) : (obj.mobile ?? obj.desktop);
    }
    return value as T;
  }

  const currentSubPath = resolveResponsive(subPath);
  const currentHideNav = resolveResponsive(hideNav) ?? false;
  const currentHeight = resolveResponsive(height) ?? 900;

  const offsetTopPx = currentHideNav ? isDesktop ? 70 : 125 : 0;

  const computedSrc = (() => {
    if (src) return src;
    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const normalizedSub = (currentSubPath || "").replace(/^\/+/, "");
    return `${normalizedBase}${normalizedSub}`;
  })();

  const wrapperHeight = typeof currentHeight === "number" ? `${currentHeight}px` : currentHeight;
  const iframeHeightAttr = typeof currentHeight === "number" ? `${currentHeight + offsetTopPx}` : "100%";
  const iframeStyleHeight = typeof currentHeight === "number" ? undefined : `calc(90% + ${offsetTopPx}px)`;

  return (
    <div
      className={`w-full bg-[var(--brand-primary)]/5  overflow-hidden ${className}`}
      style={{ height: wrapperHeight }}
    >
      <iframe
        src={computedSrc}
        title={title}
        width="100%"
        height={iframeHeightAttr}
        loading="lazy"
        style={{ border: 0, transform: hideNav ? `translateY(-${offsetTopPx}px)` : undefined, height: iframeStyleHeight }}
        allow="clipboard-write; fullscreen"
      />
    </div>
  );
}


