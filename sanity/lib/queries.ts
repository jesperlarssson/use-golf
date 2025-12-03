import { groq } from 'next-sanity'
import { client } from './client'
import urlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../env'

const builder = urlBuilder({ projectId, dataset })

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  author?: string
  publishedAt: string
  excerpt?: string
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
  excerpt?: string
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
  content: string
  ctaHref: string
  ctaLabel: string
  order?: number
  showOnLandingPage?: boolean
}

export interface EventDocument {
  title: string
  subtitle?: string
  imageUrl: string
  imageAlt?: string
  content: string
  ctaHref: string
  ctaLabel: string
}

export const allEventsQuery = groq`*[_type == "event"] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  content,
  ctaHref,
  ctaLabel,
  order,
  showOnLandingPage
}`

export const landingPageEventsQuery = groq`*[_type == "event" && showOnLandingPage == true] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  content,
  ctaHref,
  ctaLabel,
  order,
  showOnLandingPage
}`

export function transformEvent(event: Event): EventDocument {
  const imageUrl = event.image?.asset ? getImageUrl(event.image) : undefined
  
  return {
    title: event.title,
    subtitle: event.subtitle,
    imageUrl: imageUrl || '/images/placeholder.png',
    imageAlt: event.image?.alt,
    content: event.content,
    ctaHref: event.ctaHref,
    ctaLabel: event.ctaLabel,
  }
}

// Helper function to get image URL from Sanity
function getImageUrl(image: any): string | undefined {
  if (!image?.asset) return undefined
  return builder.image(image).width(1200).height(630).url()
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

