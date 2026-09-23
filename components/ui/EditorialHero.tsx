import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

export default function EditorialHero({ label, title, description, image, imageAlt, children }: Props) {
  return (
    <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[var(--brand-olive-900)] text-[var(--brand-primary)] sm:min-h-[640px]">
      <div className="hero-parallax absolute inset-0"><Image src={image} alt={imageAlt} fill priority sizes="100vw" className="hero-media object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="hero-copy hero-copy-scroll relative mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20">
        <p className="mb-6 text-xs uppercase tracking-[.2em] text-white/80">{label}</p>
        <h1 className="max-w-3xl text-balance text-5xl font-normal leading-[1.06] tracking-[-.04em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/85 sm:text-lg">{description}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
