import { useFetchPhotos } from '../hooks/useFetchPhotos'
import Spinner from './Spinner'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) return <Spinner />
  if (error) {
    return <p role="alert" className="py-12 text-center text-red-700">{error}</p>
  }

  return (
    <ul>
      {photos.map((photo) => <li key={photo.id}>{photo.author}</li>)}
    </ul>
  )
}

export default Gallery
