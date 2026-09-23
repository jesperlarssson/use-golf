import type { Metadata } from "next";

// Canonical-domänen. Preview-deployer pekar också hit så att bara produktionen indexeras.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usegolf.se";
export const siteName = "USE GOLF";
export const defaultOgImage = { url: "/og-image.jpg", width: 1200, height: 630, alt: "TrackMan-simulatorer och lounge hos USE Golf i Nya Hovås" };

type PageSeo = {
  title: string;
  description: string;
  path: string;
  // Startsidan sätter hela titeln själv i stället för "%s | USE GOLF".
  absoluteTitle?: boolean;
};

// Samlar title, description, canonical och delningsdata så att varje sida får egna OG-taggar.
export function pageMetadata({ title, description, path, absoluteTitle = false }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName, locale: "sv_SE", type: "website", images: [defaultOgImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [defaultOgImage.url] },
  };
}
