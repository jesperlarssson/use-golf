import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boka simulator",
  description: "Boka simulator hos USE Golf. TrackMan, ligor, event och träning.",
};

export default function SweetspotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

