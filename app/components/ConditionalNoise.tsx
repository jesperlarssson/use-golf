"use client";
import { usePathname } from "next/navigation";

export default function ConditionalNoise() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio") || pathname.startsWith("/assistant") || pathname.startsWith("/pre-access")) return null;
  return <div aria-hidden="true" className="site-grain" />;
}
