import { groq } from 'next-sanity'
import { client } from './client'
import type { PricingData, DayType } from '@/lib/prices'

export interface PricingTimeSlot {
  time: string
  price: number
}

export interface PricingDocument {
  _id: string
  dayType: 'monday-friday' | 'saturday' | 'sunday'
  timeSlots: PricingTimeSlot[]
}

export interface UserPassDocument {
  _id: string
  type: 'small' | 'medium' | 'large'
  name: string
  price: number
  playValue: number
  bonusPercent: number
}

export interface VenueBookingDocument {
  _id: string
  mondayTuesdayPrice: number
  wednesdayThursdayPrice: number
  fridaySaturdaySundayPrice: number
  extraHourPrice: number
}

export interface ClosureDocument {
  _id: string
  title: string
  startDate: string
  endDate: string
  description?: string
}

export const allPricingQuery = groq`*[_type == "pricing"] {
  _id,
  dayType,
  timeSlots[] {
    time,
    price
  }
}`

export const allUserPassesQuery = groq`*[_type == "userPass"] | order(price asc) {
  _id,
  type,
  name,
  price,
  playValue,
  bonusPercent
}`

export const venueBookingQuery = groq`*[_type == "venueBooking"][0] {
  _id,
  mondayTuesdayPrice,
  wednesdayThursdayPrice,
  fridaySaturdaySundayPrice,
  extraHourPrice
}`

export const allClosuresQuery = groq`*[_type == "closure"] | order(startDate asc) {
  _id,
  title,
  startDate,
  endDate,
  description
}`

export async function getPricingData(): Promise<PricingData | null> {
  try {
    const pricing = await client.fetch<PricingDocument[]>(allPricingQuery)
    const pricingMap: Partial<PricingData> = {}
    
    pricing.forEach((doc) => {
      if (doc.dayType === 'monday-friday' || doc.dayType === 'saturday' || doc.dayType === 'sunday') {
        pricingMap[doc.dayType] = doc.timeSlots
      }
    })
    
    // Kontrollera att alla DayTypes finns
    if (!pricingMap['monday-friday'] || !pricingMap['saturday'] || !pricingMap['sunday']) {
      console.warn('Not all pricing day types found in Sanity, returning null')
      return null
    }
    
    return pricingMap as PricingData
  } catch (error) {
    console.error('Error fetching pricing data:', error)
    return null
  }
}

export async function getUserPasses(): Promise<Record<'small' | 'medium' | 'large', UserPassDocument> | null> {
  try {
    const passes = await client.fetch<UserPassDocument[]>(allUserPassesQuery)
    
    // Transformera till Record<UserPassType, UserPass> format
    const small = passes.find(p => p.type === 'small')
    const medium = passes.find(p => p.type === 'medium')
    const large = passes.find(p => p.type === 'large')
    
    // Kontrollera att alla typer finns
    if (!small || !medium || !large) {
      console.warn('Not all user pass types found in Sanity, returning null')
      return null
    }
    
    return {
      small,
      medium,
      large,
    }
  } catch (error) {
    console.error('Error fetching user passes:', error)
    return null
  }
}

export async function getVenueBookingPricing() {
  try {
    const pricing = await client.fetch<VenueBookingDocument | null>(venueBookingQuery)
    return pricing
  } catch (error) {
    console.error('Error fetching venue booking pricing:', error)
    return null
  }
}

export async function getClosures(): Promise<ClosureDocument[]> {
  try {
    const closures = await client.fetch<ClosureDocument[]>(allClosuresQuery)
    return closures
  } catch (error) {
    console.error('Error fetching closures:', error)
    return []
  }
}

