import { NextResponse } from 'next/server';

// Your Google Place ID for Dubai Home Cleaning Services
const PLACE_ID = 'ChIJh2cWBcH6wBsR1pbDHAkz-O8';
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=en&reviews_sort=newest&key=${API_KEY}`;

    // Cache for 1 hour to avoid excessive API calls
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return NextResponse.json({ error: data.status }, { status: 400 });
    }

    return NextResponse.json({
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (e) {
    console.error('Google Reviews fetch failed:', e);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
