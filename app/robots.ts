import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Interna verktyg, API och sidor som inte är en del av den publika sajten.
      disallow: ["/api/", "/studio", "/assistant", "/style-demo", "/pre-access"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
