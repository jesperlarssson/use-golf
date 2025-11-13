import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bli medlem",
  description: "Bli medlem i USE Golf – få rabatt på bokningar, förtur till event och speltid vid registrering.",
};

export default function BliMedlemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

