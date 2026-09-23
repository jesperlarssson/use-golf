"use client";

import { useEffect } from "react";

// Tonar in element märkta med data-reveal när de når viewporten.
// Element som kommer in samtidigt staggas i dokumentordning.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).map(entry => entry.target as HTMLElement);
      visible.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      visible.forEach((element, index) => {
        const delay = Math.min(index, 4) * 80;
        element.style.setProperty("--reveal-delay", `${delay}ms`);
        element.classList.add("is-revealed");
        observer.unobserve(element);
        // Släpp reveal-transitionerna så att hover-effekter får sin egen tajming igen.
        window.setTimeout(() => element.classList.add("reveal-done"), delay + 2000);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    const scan = () => document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)").forEach(element => observer.observe(element));
    scan();

    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
