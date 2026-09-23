"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (typeof (lenis as any).destroy === "function") (lenis as any).destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scrolla till toppen vid sidnavigering
  useEffect(() => {
    if (window.location.hash) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      // Säkerställ att komponenter med native scroll-lyssnare (t.ex. Header) uppdaterar sitt tillstånd
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("scroll"));
      });
    } else {
      window.scrollTo(0, 0);
      // Matcha beteendet även utan Lenis
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("scroll"));
      });
    }
  }, [pathname]);

  return <>{children}</>;
}
