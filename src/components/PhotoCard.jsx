import { memo } from 'react'

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <li className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        width="400"
        height="300"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-sm font-medium">{photo.author}</p>
        <button
          type="button"
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          aria-pressed={isFavourite}
          onClick={() => onToggleFavourite(photo.id)}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-stone-500 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
        >
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isFavourite ? 'h-6 w-6 text-red-600' : 'h-6 w-6'}
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default memo(PhotoCard)
