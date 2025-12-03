import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConditionalNoise from "./components/ConditionalNoise";
import NoticeBar from "./components/NoticeBar";
import GradualBlur from "@/components/ui/GradualBlur";
import LenisProvider from "./components/LenisProvider";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  axes: ["opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const logoPath = "/logo-og.png";
const logoUrl = new URL(logoPath, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "USE GOLF",
    template: "%s | USE GOLF",
  },
  description: "USE Golf – inomhusgolf i Göteborg. TrackMan-simulatorer, ligor, företagsevent och träning. Get used to it.",
  openGraph: {
    title: "USE GOLF",
    description: "Inomhusgolf i Göteborg – TrackMan, ligor, event och träning.",
    url: "/",
    siteName: "USE GOLF",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: logoUrl,
        width: 939,
        height: 1032,
        alt: "USE GOLF logotyp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USE GOLF",
    description: "Inomhusgolf i Göteborg – TrackMan, ligor, event och träning.",
    images: [logoUrl],
  },
  icons: {
    icon: "/logo-og.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "USE GOLF",
  url: "https://usegolf.se",
  logo: logoUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`antialiased overflow-x-hidden ${robotoFlex.variable}`}>
        <LenisProvider>
          <ConditionalNoise />
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
