import { memo } from 'react'

function SearchBar({ query, onSearchChange }) {
  return (
    <div className="mb-8">
      <label htmlFor="author-search" className="sr-only">Search by author</label>
      <input
        id="author-search"
        type="text"
        value={query}
        onChange={onSearchChange}
        placeholder="Search by author…"
        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-base placeholder:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700 sm:max-w-md"
      />
    </div>
  )
}

export default memo(SearchBar)
