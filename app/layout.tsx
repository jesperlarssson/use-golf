import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConditionalNoise from "./components/ConditionalNoise";
import NoticeBar from "./components/NoticeBar";
import GradualBlur from "@/components/ui/GradualBlur";
import LenisProvider from "./components/LenisProvider";
import ScrollReveal from "./components/ScrollReveal";
import { Roboto_Flex } from "next/font/google";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  axes: ["opsz"],
});

const logoUrl = new URL("/logo-og.png", siteUrl).toString();
const description = "USE Golf i Nya Hovås, Göteborg. Sex TrackMan-simulatorer, bar, mat och dryck – boka en runda, företagsevent eller bli medlem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "USE Golf – Indoor golf i Göteborg",
    template: "%s | USE GOLF",
  },
  description,
  openGraph: {
    siteName,
    locale: "sv_SE",
    type: "website",
    description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    description,
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

// Lokal verksamhet med adress och öppettider, så att Google kan visa USE i kartan och lokala sök.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${siteUrl}/#business`,
  name: "USE Golf",
  url: siteUrl,
  logo: logoUrl,
  image: new URL(defaultOgImage.url, siteUrl).toString(),
  description,
  telephone: "+46767174034",
  email: "hello@usegolf.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krogabäcksvägen 2, plan 3",
    postalCode: "436 53",
    addressLocality: "Hovås",
    addressRegion: "Västra Götalands län",
    addressCountry: "SE",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  }],
  sameAs: ["https://www.instagram.com/use__golf/"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        {/* Döljer data-reveal-element före första målningen, bara när JS och rörelse är tillåtet. */}
        <script dangerouslySetInnerHTML={{ __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("reveal-ready")` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`antialiased overflow-x-hidden ${robotoFlex.variable}`}>
        <LenisProvider>
          <ScrollReveal />
          <ConditionalNoise />
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
