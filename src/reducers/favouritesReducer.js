export const FAVOURITES_STORAGE_KEY = 'photo-gallery-favourites'  //easy way it is no env mention needed

export function loadFavourites() {
  // Read saved ids when the reducer initializes, instead of on every render.
  try {
    const savedFavourites = JSON.parse(localStorage.getItem(FAVOURITES_STORAGE_KEY))
    if (Array.isArray(savedFavourites) && savedFavourites.every((id) => typeof id === 'string')) {
      return savedFavourites
    }
    return []
  } catch {
    return []
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      // Return a new array so the previous state stays unchanged.
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id)
      }
      return [...state, action.id]
    default:
      return state
  }
}
