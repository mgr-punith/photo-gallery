import { useEffect, useState } from 'react'

const PHOTOS_URL = 'https://picsum.photos/v2/list?limit=30'

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPhotos() {
      try {
        const response = await fetch(PHOTOS_URL, { signal: controller.signal })
        // Fetch does not reject HTTP errors, so check the status before reading data.
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        setPhotos(data)
        setLoading(false)
      } catch (error) {
        // Cleanup cancels the request; an abort must not change loading or error state.
        if (error.name === 'AbortError') return
        console.error(error)
        setError('Could not load photos. Please try again later.')
        setLoading(false)
      }
    }

    loadPhotos()
    return () => controller.abort()
  }, [])

  return { photos, loading, error }
}
