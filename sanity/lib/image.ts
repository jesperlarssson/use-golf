import { client } from './client'

export function urlForImage(source: any): string | undefined {
  if (!source?.asset?._ref) return undefined
  
  // Simple URL construction - you might want to use @sanity/image-url for better handling
  const ref = source.asset._ref
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/images/ym4hkgfs/production/${id}.${extension}`
}

