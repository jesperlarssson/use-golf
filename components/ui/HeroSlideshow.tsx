"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  interval?: number; // ms between slides, default 5000
  gradient?: string;
}

export default function HeroSlideshow({
  images,
  interval = 5000,
  gradient = "bg-gradient-to-b from-black/55 via-black/30 to-black/70",
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent((c) => (c + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [current, images.length, interval]);

  // Clear prev after fade transition completes
  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [fading]);

  return (
    <div className="absolute inset-0">
      {/* Previous image — fades out */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out opacity-0"
        >
          <Image
            src={images[prev].src}
            alt={images[prev].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* Current image — fades in */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className={`absolute inset-0 ${gradient}`} />

      {/* Dot indicators — höger kant, vertikalt centrerade */}
      {images.length > 1 && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPrev(current);
                setFading(true);
                setCurrent(i);
              }}
              aria-label={`Bild ${i + 1}`}
              className="w-1.5 rounded-full transition-all duration-500"
              style={{
                background: i === current
                  ? "var(--brand-primary)"
                  : "rgba(245,242,231,0.35)",
                height: i === current ? "28px" : "8px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
