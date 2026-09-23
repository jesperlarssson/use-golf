import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Publika sidor som ska indexeras. Uppdatera listan när nya sidor lanseras.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/bokning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/foretag", priority: 0.9, changeFrequency: "monthly" },
  { path: "/hander-hos-oss", priority: 0.8, changeFrequency: "weekly" },
  { path: "/medlemskap", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "yearly" },
  { path: "/om", priority: 0.6, changeFrequency: "yearly" },
  { path: "/bokning/staende-tid", priority: 0.6, changeFrequency: "monthly" },
  { path: "/presentkort", priority: 0.5, changeFrequency: "yearly" },
  { path: "/customclubs", priority: 0.5, changeFrequency: "yearly" },
  { path: "/medlemsvillkor", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency,
    priority,
  }));
}
