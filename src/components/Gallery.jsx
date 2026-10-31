import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'
import {
  favouritesReducer,
  loadFavourites,
  FAVOURITES_STORAGE_KEY,
} from '../reducers/favouritesReducer'
import Spinner from './Spinner'
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [query, setQuery] = useState('')
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites)

  useEffect(() => {
    try {
      localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(favourites))
    } catch {
      return
    }
  }, [favourites])

  // Keep callback props stable so memoized children can skip unchanged renders.
  const handleSearchChange = useCallback((event) => setQuery(event.target.value), [])
  const handleToggleFavourite = useCallback(
    (id) => dispatch({ type: 'TOGGLE_FAVOURITE', id }),
    [],
  )

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
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default Gallery
