import { cache } from 'react';
import { client } from '@/sanity/lib/client';

// Confirmed annual prices; used until a published Sanity setting exists.
const confirmedPrices = { userAnnualPrice: 300, juniorAnnualPrice: 200 };

type MembershipPricing = { userAnnualPrice: number | null; juniorAnnualPrice: number | null };
const validPrice = (value: unknown): number | null => typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : null;

export const getMembershipPricing = cache(async (): Promise<MembershipPricing> => {
  try {
    const data = await client.fetch<MembershipPricing | null>(
      '*[_type == "membershipPricing"] | order(_updatedAt desc)[0]{userAnnualPrice, juniorAnnualPrice}',
      {}, { perspective: 'published', next: { revalidate: 60 } },
    );
    return { userAnnualPrice: validPrice(data?.userAnnualPrice) ?? confirmedPrices.userAnnualPrice, juniorAnnualPrice: validPrice(data?.juniorAnnualPrice) ?? confirmedPrices.juniorAnnualPrice };
  } catch {
    return confirmedPrices;
  }
});

export function formatAnnualPrice(price: number | null) {
  return price === null ? 'Se aktuellt pris i Alba' : `${price.toLocaleString('sv-SE')} kr`;
}
