"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smooth: true,
      smoothTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onScroll = (e: WheelEvent) => {
      // noop; lenis tar över
    };
    window.addEventListener("wheel", onScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", onScroll);
      cancelAnimationFrame(rafId);
      // @ts-expect-error lenis har destroy i runtime
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
