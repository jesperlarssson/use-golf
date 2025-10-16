import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-access",
  description: "USE Golf – nyetablering i Hovås. Få early access och nyheter först.",
};

export default function PreAccessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


