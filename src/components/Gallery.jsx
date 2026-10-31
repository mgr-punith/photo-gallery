import { useFetchPhotos } from '../hooks/useFetchPhotos'
import Spinner from './Spinner'
import PhotoCard from './PhotoCard'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) return <Spinner />
  if (error) {
    return <p role="alert" className="py-12 text-center text-red-700">{error}</p>
  }

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
    </ul>
  )
}

export default Gallery
