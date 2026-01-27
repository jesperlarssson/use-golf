import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// I development, inkludera drafts. I production, visa bara publicerade dokument.
const isDevelopment = process.env.NODE_ENV === 'development';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isDevelopment, // Använd inte CDN i development för att se drafts direkt
  perspective: isDevelopment ? 'drafts' : 'published', // Inkludera drafts i development
  // Token krävs för att läsa drafts i development
  token: isDevelopment ? process.env.SANITY_API_READ_TOKEN : undefined,
})

