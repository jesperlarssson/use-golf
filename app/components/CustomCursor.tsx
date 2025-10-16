"use client";

import { useEffect, useRef } from "react";

/**
 * CustomCursor
 * - Visar en liten vit boll som följer musen
 * - När den närmar sig ett element med [data-cursor-target]
 *   blir den större och dras mot elementet (magnetiskt)
 * - När den är över elementet snäpper den till och blir en ring runt elementet
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!hasFinePointer || !isDesktop) return;

    const html = document.documentElement;
    html.classList.add("custom-cursor-enabled");

    const el = cursorRef.current;
    if (!el) return;
    el.style.opacity = "1";

    let raf = 0;
    // Position (center)
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let currentX = targetX;
    let currentY = targetY;

    // Size
    let targetW = 10;
    let targetH = 10;
    let currentW = targetW;
    let currentH = targetH;

    // Style state
    let isRing = false;
    let borderWidth = 0;
    let targetBorderWidth = 0;
    let borderRadiusPx = 6; // lite mindre rundning som utgångsläge

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const distancePointToRect = (x: number, y: number, rect: DOMRect) => {
      const cx = Math.max(rect.left, Math.min(x, rect.right));
      const cy = Math.max(rect.top, Math.min(y, rect.bottom));
      const dx = x - cx;
      const dy = y - cy;
      return Math.hypot(dx, dy);
    };

    const update = () => {
      currentX = lerp(currentX, targetX, 0.19);
      currentY = lerp(currentY, targetY, 0.19);
      currentW = lerp(currentW, targetW, 0.22);
      currentH = lerp(currentH, targetH, 0.22);
      borderWidth = lerp(borderWidth, targetBorderWidth, 0.25);

      const translateX = currentX - currentW / 2;
      const translateY = currentY - currentH / 2;

      el.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0)`;
      el.style.width = `${currentW.toFixed(2)}px`;
      el.style.height = `${currentH.toFixed(2)}px`;
      el.style.borderWidth = `${borderWidth.toFixed(2)}px`;
      el.style.borderRadius = isRing ? `${borderRadiusPx}px` : `9999px`;

      raf = requestAnimationFrame(update);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Hitta närmaste target med tydlig typning
      let nearest: { rect: DOMRect; el: HTMLElement; dist: number } | null = null;
      // Om overlay-meny är öppen, begränsa targets till overlayn
      const overlayEl = document.querySelector<HTMLElement>('[data-overlay-menu]');
      const menuOpen = document.documentElement.getAttribute("data-menu-open") === "true";
      let candidates = menuOpen
        ? Array.from(document.querySelectorAll<HTMLElement>('[data-overlay-menu] [data-cursor-target]'))
        : Array.from(document.querySelectorAll<HTMLElement>('[data-cursor-target]')).filter((el) => !overlayEl || !overlayEl.contains(el));
      for (const t of candidates) {
        const r = t.getBoundingClientRect();
        const d = distancePointToRect(mouseX, mouseY, r);
        if (!nearest || d < nearest.dist) nearest = { rect: r, el: t, dist: d };
      }

      if (nearest !== null) {
        const rect = nearest.rect;
        const targetEl = nearest.el;
        const dist = nearest.dist;
        const paddingAttr = targetEl.getAttribute("data-cursor-padding");
        const padding = paddingAttr ? Math.max(0, Number(paddingAttr)) : 8;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const attractRadius = 140; // närhet där magnetism börjar
        const snapInset = 4; // hur nära innanför rektangeln vi kräver för ring

        const inside =
          mouseX > rect.left + snapInset &&
          mouseX < rect.right - snapInset &&
          mouseY > rect.top + snapInset &&
          mouseY < rect.bottom - snapInset;

        if (inside) {
          // Ring-läge
          isRing = true;
          targetBorderWidth = 2;
          targetW = rect.width + padding * 2;
          targetH = rect.height + padding * 2;
          // Matcha target-elementets rundning men lite mindre rundat
          const cs = window.getComputedStyle(targetEl);
          const tl = parseFloat(cs.borderTopLeftRadius || "0");
          const tr = parseFloat(cs.borderTopRightRadius || "0");
          const bl = parseFloat(cs.borderBottomLeftRadius || "0");
          const br = parseFloat(cs.borderBottomRightRadius || "0");
          const approx = Math.max(tl, tr, bl, br) || 0;
          const reduced = approx * 0.6; // lite mindre rund än target
          borderRadiusPx = Math.max(0, Math.min(reduced, Math.min(targetW, targetH) * 0.25));
          // Snäpp till mitten av target
          targetX = centerX;
          targetY = centerY;
          el.style.backgroundColor = "transparent";
          el.style.borderColor = "#FFFFFF";
        } else if (dist < attractRadius) {
          // Magnet-läge
          isRing = false;
          targetBorderWidth = 0;
          const strength = 1 - dist / attractRadius; // 0..1
          const pull = 24 * strength; // px mot mitten
          const dx = centerX - mouseX;
          const dy = centerY - mouseY;
          const len = Math.hypot(dx, dy) || 1;
          targetX = mouseX + (dx / len) * pull;
          targetY = mouseY + (dy / len) * pull;
          targetW = 18 + 10 * strength;
          targetH = 18 + 10 * strength;
          el.style.backgroundColor = "#FFFFFF";
          el.style.borderColor = "transparent";
        } else {
          // Dot-läge
          isRing = false;
          targetBorderWidth = 0;
          targetX = mouseX;
          targetY = mouseY;
          targetW = 10;
          targetH = 10;
          el.style.backgroundColor = "#FFFFFF";
          el.style.borderColor = "transparent";
        }
      } else {
        // Inga targets nära -> vanlig dot
        isRing = false;
        targetBorderWidth = 0;
        targetX = mouseX;
        targetY = mouseY;
        targetW = 10;
        targetH = 10;
        el.style.backgroundColor = "#FFFFFF";
        el.style.borderColor = "transparent";
      }

      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      // Fade ut vid lämna viewport
      el.style.opacity = "0";
    };

    const onEnter = () => {
      el.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      html.classList.remove("custom-cursor-enabled");
    };
  }, []);

  // Render endast behållaren; stil styrs i runtime
  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="fixed left-0 top-0 z-[3000] pointer-events-none"
      style={{
        width: 10,
        height: 10,
        borderRadius: 9999,
        backgroundColor: "#FFFFFF",
        border: "0px solid #FFFFFF",
        boxShadow: "0 0 0 1px rgba(50,46,44,0.25)",
        opacity: 0,
        willChange: "transform, width, height, border-width, border-radius, background-color, border-color",
        transition: "background-color 120ms ease, border-color 120ms ease, opacity 180ms ease",
      }}
    />
  );
}
