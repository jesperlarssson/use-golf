import { cache } from "react";
import { client } from "@/sanity/lib/client";

export const hasPublishedJournal = cache(async (): Promise<boolean> => {
  try {
    return await client.fetch<boolean>(
      'count(*[_type == "post" && defined(slug.current) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())]) > 0',
      {},
      { perspective: "published", next: { revalidate: 60 } },
    );
  } catch {
    return false;
  }
});
