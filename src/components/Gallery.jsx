import { useCallback, useMemo, useState } from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'
import Spinner from './Spinner'
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [query, setQuery] = useState('')

  // Keep callback props stable so memoized children can skip unchanged renders.
  const handleSearchChange = useCallback((event) => setQuery(event.target.value), [])

  // Reuse the filtered list until the photos or search text change.
  const filteredPhotos = useMemo(() => {
    const term = query.trim().toLowerCase()
    return photos.filter((photo) => photo.author.toLowerCase().includes(term))
  }, [photos, query])

  if (loading) return <Spinner />
  if (error) {
    return <p role="alert" className="py-12 text-center text-red-700">{error}</p>
  }

  return (
    <>
      <SearchBar query={query} onSearchChange={handleSearchChange} />
      {filteredPhotos.length === 0 ? (
        <p className="py-12 text-center text-stone-600">No photos match your search.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
        </ul>
      )}
    </>
  )
}

export default Gallery
