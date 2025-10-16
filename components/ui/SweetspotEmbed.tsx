"use client";

type Props = {
  src?: string;
  title?: string;
  className?: string;
  height?: number | string;
};

// Enkel wrapper för Sweetspot-iframe med responsiv höjd
export default function SweetspotEmbed({
  src = process.env.NEXT_PUBLIC_SWEETSPOT_EMBED_URL || "https://sweetspot.example.com/embed",
  title = "Sweetspot bokning",
  className = "",
  height = 640,
}: Props) {
  return (
    <div className={`w-full bg-[var(--brand-primary)]/5 rounded-md ${className}`}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={typeof height === "number" ? `${height}` : height}
        loading="lazy"
        style={{ border: 0 }}
        allow="clipboard-write; fullscreen"
      />
    </div>
  );
}


