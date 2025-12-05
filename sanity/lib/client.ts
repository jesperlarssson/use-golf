import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Stöd för cache-taggar för revalidation
  perspective: 'published',
  stega: false,
})

