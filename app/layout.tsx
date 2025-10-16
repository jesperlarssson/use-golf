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
  title: "USE GOLF",
  description: "",
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
