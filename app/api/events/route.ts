import { NextResponse } from 'next/server';
import { getAllEvents } from '@/sanity/lib/queries';

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export const revalidate = 60;
