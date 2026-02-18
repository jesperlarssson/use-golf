import { groq } from 'next-sanity'
import { client } from './client'
import urlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../env'
import { dummyEvents, transformDummyEvent, getDummyEvents, getDummyLandingPageEvents, getDummyEventBySlug } from '@/lib/dummyEvents'

const builder = urlBuilder({ projectId, dataset })

// Använd dummy events om USE_DUMMY_EVENTS är satt till 'true', eller som fallback i development om det inte är explicit satt till 'false'
const USE_DUMMY_EVENTS = 
  process.env.USE_DUMMY_EVENTS === 'true' || 
  (process.env.USE_DUMMY_EVENTS !== 'false' && process.env.NODE_ENV === 'development')

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  author?: string
  publishedAt: string
  excerpt?: string | any[] // Kan vara vanlig text eller rich text (PortableText)
  coverImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  content?: any[]
  categories?: Array<{
    _id: string
    title: string
    slug: {
      current: string
    }
  }>
}

export interface PostDocument {
  _id: string
  title: string
  slug: string
  author?: string
  publishedAt: string
  excerpt?: string | any[] // Kan vara vanlig text eller rich text (PortableText)
  coverImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  coverImageUrl?: string
  content?: any[]
  categories?: Array<{
    _id: string
    title: string
    slug: string
  }>
}

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  author,
  publishedAt,
  excerpt,
  excerpt[] {
    ...,
    _type == "image" => {
      asset,
      alt,
      caption
    }
  },
  coverImage {
    asset,
    alt
  },
  content[] {
    ...,
    _type == "image" => {
      asset,
      alt,
      caption
    }
  },
  categories[]-> {
    _id,
    title,
    "slug": slug.current
  }
`

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "slug": slug.current
}`

export const postsByCategoryQuery = groq`*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
  ${postFields}
}`

export const pagedPostsQuery = groq`*[_type == "post" && (!defined($search) || title match $search || excerpt match $search)] | order(publishedAt desc) [$start...$end] {
  ${postFields}
}`

export const postsCountQuery = groq`count(*[_type == "post" && (!defined($search) || title match $search || excerpt match $search)])`

export const relatedPostsQuery = groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
  ${postFields}
}`

// FAQ queries
export interface FAQ {
  _id: string
  question: string
  answer: string
  action?: {
    label: string
    href: string
  }
  order?: number
}

export interface FAQDocument {
  q: string
  a: string
  action?: {
    label: string
    href: string
  }
}

export const allFAQQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  action {
    label,
    href
  },
  order
}`

export function transformFAQ(faq: FAQ): FAQDocument {
  return {
    q: faq.question,
    a: faq.answer,
    action: faq.action,
  }
}

// Event queries
export interface EventCategory {
  _id: string
  title: string
  slug?: {
    current: string
  } | string
  description?: string
  actionLabel?: string
  link?: string
  order?: number
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
}

export interface Event {
  _id: string
  title: string
  subtitle?: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  excerpt?: string
  content?: any[] // Portable text array
  slug?: {
    current: string
  }
  hasExternalLink?: boolean
  ctaHref?: string
  ctaLabel?: string
  order?: number
  showOnLandingPage?: boolean
  category?: EventCategory | { _ref: string; _type: string } | string // string för bakåtkompatibilitet med dummy-data
  requiresInterestForm?: boolean
  eventType?: 'recurring' | 'single' | 'specific'
  recurringDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  eventDate?: string
  eventEndDate?: string
}

export interface EventCategoryDocument {
  _id: string
  title: string
  slug?: string
  description?: string
  actionLabel?: string
  link?: string
  imageUrl?: string
  imageAlt?: string
  order?: number
}

export interface EventDocument {
  _id: string
  title: string
  subtitle?: string
  imageUrl: string
  imageAlt?: string
  excerpt?: string | any[] // Kan vara vanlig text eller rich text (PortableText)
  content?: any[] // Portable text array
  slug?: string
  hasExternalLink?: boolean
  ctaHref?: string
  ctaLabel?: string
  order?: number
  category?: EventCategoryDocument | string // String för bakåtkompatibilitet med dummy-data
  requiresInterestForm?: boolean
  eventType?: 'recurring' | 'single' | 'specific'
  recurringDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  eventDate?: string
  eventEndDate?: string
}

export const allEventsQuery = groq`*[_type == "event"] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  excerpt,
  content[] {
    ...,
    _type == "image" => {
      asset,
      alt,
      caption
    }
  },
  "slug": slug.current,
  hasExternalLink,
  ctaHref,
  ctaLabel,
  order,
  showOnLandingPage,
  category-> {
    _id,
    title,
    "slug": slug.current
  },
  requiresInterestForm,
  eventType,
  recurringDay,
  eventDate,
  eventEndDate
}`

export const landingPageEventsQuery = groq`*[_type == "event" && showOnLandingPage == true] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  excerpt,
  content[] {
    ...,
    _type == "image" => {
      asset,
      alt,
      caption
    }
  },
  "slug": slug.current,
  hasExternalLink,
  ctaHref,
  ctaLabel,
  order,
  showOnLandingPage,
  category-> {
    _id,
    title,
    "slug": slug.current
  },
  requiresInterestForm,
  eventType,
  recurringDay,
  eventDate,
  eventEndDate
}`

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  excerpt,
  content[] {
    ...,
    _type == "image" => {
      asset,
      alt,
      caption
    }
  },
  "slug": slug.current,
  hasExternalLink,
  ctaHref,
  ctaLabel,
  order,
  showOnLandingPage,
  category-> {
    _id,
    title,
    "slug": slug.current
  },
  requiresInterestForm,
  eventType,
  recurringDay,
  eventDate,
  eventEndDate
}`

export function transformEvent(event: Event): EventDocument {
  const imageUrl = event.image?.asset ? getImageUrl(event.image) : undefined
  
  // Bestäm ctaHref baserat på hasExternalLink, custom intern länk och slug
  const slug = typeof event.slug === 'string' ? event.slug : event.slug?.current;
  let finalCtaHref: string | undefined;
  if (event.hasExternalLink && event.ctaHref) {
    // Externa länkar (t.ex. Sweetspot)
    finalCtaHref = event.ctaHref;
  } else if (event.ctaHref && event.ctaHref.startsWith('/') && !event.ctaHref.toLowerCase().includes('sweetspot')) {
    // Custom intern länk (t.ex. /pensionar)
    finalCtaHref = event.ctaHref;
  } else if (slug) {
    // Standard interna sidor
    finalCtaHref = `/events/${slug}`;
  } else if (event.ctaHref) {
    // Fallback till ctaHref om inget annat finns
    finalCtaHref = event.ctaHref;
  }
  
  // För bakåtkompatibilitet: om content är string, konvertera till excerpt
  const excerpt = typeof event.content === 'string' 
    ? event.content 
    : event.excerpt || '';
  
  // Transformera kategori från referens till objekt eller behåll string för bakåtkompatibilitet
  let category: EventCategoryDocument | string | undefined;
  if (event.category) {
    if (typeof event.category === 'object' && '_id' in event.category && 'title' in event.category) {
      // Det är en expanderad kategori-referens
      const cat = event.category as EventCategory;
      category = {
        _id: cat._id,
        title: cat.title,
        slug: typeof cat.slug === 'string' ? cat.slug : cat.slug?.current,
      };
    } else if (typeof event.category === 'string') {
      // Bakåtkompatibilitet: behåll string om det är en string
      category = event.category;
    }
  }
  
  return {
    _id: event._id,
    title: event.title,
    subtitle: event.subtitle,
    imageUrl: imageUrl || '/images/placeholder.png',
    imageAlt: event.image?.alt,
    excerpt: excerpt,
    content: Array.isArray(event.content) ? event.content : undefined,
    slug: typeof event.slug === 'string' ? event.slug : event.slug?.current,
    hasExternalLink: event.hasExternalLink,
    ctaHref: finalCtaHref,
    ctaLabel: event.ctaLabel || 'Läs mer',
    order: event.order,
    category: category,
    requiresInterestForm: event.requiresInterestForm,
    eventType: event.eventType,
    recurringDay: event.recurringDay,
    eventDate: event.eventDate,
    eventEndDate: event.eventEndDate,
  }
}

export interface LandingPageEventCategory {
  _id: string
  title: string
  slug?: {
    current: string
  } | string
  description?: string
  actionLabel?: string
  link?: string
  order?: number
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
}

export const landingPageEventCategoriesQuery = groq`*[_type == "eventCategory"] | order(order asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  actionLabel,
  link,
  order,
  image {
    asset,
    alt
  }
}`

function normalizeCategorySlug(value?: string): string {
  return (
    value
      ?.trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || ''
  )
}

export function transformEventCategory(category: LandingPageEventCategory): EventCategoryDocument {
  const explicitSlug = typeof category.slug === 'string' ? category.slug : category.slug?.current
  const slug = normalizeCategorySlug(explicitSlug) || normalizeCategorySlug(category.title)
  const fallbackLink = slug ? `/events?category=${encodeURIComponent(slug)}` : '/events'

  return {
    _id: category._id,
    title: category.title,
    slug,
    description: category.description,
    actionLabel: category.actionLabel || 'Se event',
    link: category.link || fallbackLink,
    order: category.order,
    imageUrl: category.image?.asset ? getImageUrl(category.image) : '/images/placeholder.png',
    imageAlt: category.image?.alt || category.title,
  }
}

export async function getLandingPageEventCategories(): Promise<EventCategoryDocument[]> {
  try {
    const categories = await client.fetch<LandingPageEventCategory[]>(landingPageEventCategoriesQuery)
    if (categories && categories.length > 0) {
      return categories.map(transformEventCategory)
    }
    return []
  } catch (error) {
    console.error('Error fetching landing page categories:', error)
    return []
  }
}

// Helper function to get image URL from Sanity
function getImageUrl(image: any): string | undefined {
  if (!image?.asset) return undefined
  return builder.image(image).width(1200).height(630).url()
}

/**
 * Hämta alla events från Sanity eller dummy-data
 * Används i development när Sanity inte är tillgängligt
 * Sätt USE_DUMMY_EVENTS=true i .env.local för att alltid använda dummy-data
 * Sätt USE_DUMMY_EVENTS=false i .env.local för att alltid använda Sanity (även i development)
 */
export async function getAllEvents(): Promise<EventDocument[]> {
  if (USE_DUMMY_EVENTS) {
    // Om USE_DUMMY_EVENTS är satt, använd alltid dummy-data
    console.log('Using dummy events (USE_DUMMY_EVENTS is enabled)');
    return getDummyEvents();
  }
  
  try {
    const events = await client.fetch<Event[]>(allEventsQuery);
    if (events && events.length > 0) {
      return events.map(transformEvent);
    }
    // Om Sanity returnerar tom array, använd dummy-data som fallback
    console.warn('Sanity returned empty events array, using dummy events');
    return getDummyEvents();
  } catch (error) {
    console.error('Error fetching events:', error);
    return getDummyEvents();
  }
}

/**
 * Hämta landing page events från Sanity eller dummy-data
 */
export async function getLandingPageEvents(): Promise<EventDocument[]> {
  if (USE_DUMMY_EVENTS) {
    // Om USE_DUMMY_EVENTS är satt, använd alltid dummy-data
    console.log('Using dummy landing page events (USE_DUMMY_EVENTS is enabled)');
    return getDummyLandingPageEvents();
  }
  
  try {
    const events = await client.fetch<Event[]>(landingPageEventsQuery);
    if (events && events.length > 0) {
      return events.map(transformEvent);
    }
    // Om Sanity returnerar tom array, använd dummy-data som fallback
    console.warn('Sanity returned empty landing page events array, using dummy events');
    return getDummyLandingPageEvents();
  } catch (error) {
    console.error('Error fetching landing page events:', error);
    return getDummyLandingPageEvents();
  }
}

/**
 * Hämta event via slug från Sanity eller dummy-data
 */
export async function getEventBySlug(slug: string): Promise<EventDocument | null> {
  if (USE_DUMMY_EVENTS) {
    // Om USE_DUMMY_EVENTS är satt, använd alltid dummy-data
    console.log(`Using dummy event for slug: ${slug} (USE_DUMMY_EVENTS is enabled)`);
    return getDummyEventBySlug(slug);
  }
  
  try {
    const event = await client.fetch<Event | null>(eventBySlugQuery, { slug });
    if (event) {
      return transformEvent(event);
    }
    // Om Sanity inte hittar eventet, försök med dummy-data
    console.warn(`Event not found in Sanity for slug: ${slug}, trying dummy events`);
    return getDummyEventBySlug(slug);
  } catch (error) {
    console.error('Error fetching event by slug:', error);
    return getDummyEventBySlug(slug);
  }
}

// Helper function to transform post with image URLs
export function transformPost(post: Post): PostDocument {
  const coverImageUrl = post.coverImage ? getImageUrl(post.coverImage) : undefined

  return {
    _id: post._id,
    title: post.title,
    slug: typeof post.slug === 'string' ? post.slug : post.slug.current,
    author: post.author,
    publishedAt: post.publishedAt,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverImageUrl,
    content: post.content,
    categories: post.categories?.map(cat => ({
      _id: cat._id,
      title: cat.title,
      slug: typeof cat.slug === 'string' ? cat.slug : cat.slug.current,
    })),
  }
}

/**
 * Hämta post via slug från Sanity
 */
export async function getPostBySlug(slug: string): Promise<PostDocument | null> {
  try {
    const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
    if (post) {
      return transformPost(post);
    }
    return null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}
