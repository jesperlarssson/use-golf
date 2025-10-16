import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoticeBar from "./components/NoticeBar";
import GradualBlur from "@/components/ui/GradualBlur";
import Noise from "@/components/ui/Noise";
import LenisProvider from "./components/LenisProvider";
import { Roboto_Flex } from "next/font/google";
import CustomCursor from "@/app/components/CustomCursor";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usegolf.se"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "USE GOLF",
    description: "Inomhusgolf i Göteborg – TrackMan, ligor, event och träning.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden ${robotoFlex.variable}`}>
        <LenisProvider>
          <Noise
            patternSize={50}
            patternScaleX={0.5}
            patternScaleY={0.5}
            patternRefreshInterval={10}
            patternAlpha={15}
          />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />

        </LenisProvider>
      </body>
    </html>
  );
}
