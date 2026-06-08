const PLACE_DETAILS_FIELDS = [
  'displayName',
  'googleMapsUri',
  'rating',
  'userRatingCount',
  'reviews',
].join(',')

function normalizeReview(review) {
  const author = review.authorAttribution?.displayName || 'Cliente Google'
  const text = review.text?.text || review.originalText?.text || ''

  return {
    author,
    rating: review.rating || null,
    relativeTime: review.relativePublishTimeDescription || '',
    text,
  }
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return response.status(500).json({ error: 'Google Places configuration is missing.' })
  }

  const searchParams = new URLSearchParams({
    languageCode: 'pt-BR',
    regionCode: 'BR',
  })
  const url = `https://places.googleapis.com/v1/places/${placeId}?${searchParams.toString()}`

  try {
    const googleResponse = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': PLACE_DETAILS_FIELDS,
      },
    })

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text()
      return response.status(googleResponse.status).json({
        error: 'Google Places request failed.',
        detail: errorText,
      })
    }

    const place = await googleResponse.json()
    const reviews = (place.reviews || [])
      .map(normalizeReview)
      .filter((review) => review.text.length > 0)

    response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate=1209600')

    return response.status(200).json({
      placeName: place.displayName?.text || 'La Galette Buffet',
      googleMapsUri: place.googleMapsUri || '',
      rating: place.rating || null,
      userRatingCount: place.userRatingCount || null,
      reviews,
    })
  } catch (error) {
    return response.status(500).json({
      error: 'Unable to load Google reviews.',
      detail: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
