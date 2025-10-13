import * as React from "react";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type SocialButtonsProps = {
  links?: Partial<Record<"instagram" | "facebook" | "tiktok" | "youtube" | "linkedin", string>>;
  className?: string;
  size?: number; // button size in px
};

const IconInstagram = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 16.8 2.8 2.8 0 0 0 12 9.2zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
);

const IconFacebook = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3H13.5V8.5c0-.9.2-1.5 1.5-1.5h1.8V4.3c-.3 0-1.4-.1-2.6-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.7v8h3.8z"/>
  </svg>
);

const IconTikTok = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M14.5 3c.6 2.4 2.2 4.3 4.6 4.9v3.1c-1.7-.1-3.3-.7-4.6-1.7v6.7c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.6c-.3-.1-.6-.1-1-.1-1.4 0-2.5 1.1-2.5 2.4S7.1 19 8.5 19s2.5-1.1 2.5-2.4V3h3.5z"/>
  </svg>
);

const IconYouTube = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M23 12s0-3.4-.4-5c-.2-.8-.8-1.4-1.6-1.6C19.3 5 12 5 12 5s-7.3 0-9 .4c-.8.2-1.4.8-1.6 1.6C1 8.6 1 12 1 12s0 3.4.4 5c.2.8.8 1.4 1.6 1.6 1.7.4 9 .4 9 .4s7.3 0 9-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z"/>
  </svg>
);

const IconLinkedIn = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1C12.9 8.9 14.9 8 17.2 8 22 8 24 10.9 24 15.6V24h-4v-7.4c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.5h-4V8z"/>
  </svg>
);

export default function SocialButtons({ links, className, size = 40 }: SocialButtonsProps) {
  const candidates: Array<[keyof NonNullable<SocialButtonsProps["links"]>, (props: { className?: string }) => React.ReactElement]> = [
    ["instagram", IconInstagram],
    ["facebook", IconFacebook],
    ["tiktok", IconTikTok],
    ["youtube", IconYouTube],
    ["linkedin", IconLinkedIn],
  ];

  const resolved: SocialLink[] = candidates
    .filter(([key]) => links?.[key])
    .map(([key, Icon]) => ({
      href: String(links?.[key]),
      label: key.charAt(0).toUpperCase() + key.slice(1),
      icon: <Icon className="w-5 h-5" />,
    }));

  return (
    <div className={"flex gap-3 " + (className ?? "")}
      aria-label="Social media links">
      {resolved.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)]/60 hover:bg-[var(--brand-primary)]/90 transition-colors"
          style={{ width: size, height: size }}
          aria-label={item.label}
        >
          <span className="text-[var(--brand-secondary)] group-hover:opacity-80">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}


