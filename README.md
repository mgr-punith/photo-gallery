# Photo Gallery

A small photo gallery that fetches 30 photos from Picsum, displays them in a responsive grid, and filters them by author as you type. Heart buttons toggle favourites, which are saved in localStorage and restored after a refresh.

Built with React, Vite, and Tailwind CSS v4. ESLint checks the JavaScript and JSX.

## Run locally

Use Node.js 24 LTS and npm. An internet connection is needed to load photos.

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run lint
npm run build
npm run preview
```

## Files

| File | What it does |
| --- | --- |
| `src/main.jsx` | Mounts the app with React StrictMode. |
| `src/App.jsx` | Shows the page heading and gallery. |
| `src/components/Gallery.jsx` | Connects fetching, search, favourites, and persistence. |
| `src/components/SearchBar.jsx` | Renders the labelled search input. |
| `src/components/PhotoCard.jsx` | Shows a photo, its author, and a favourite button. |
| `src/components/Spinner.jsx` | Shows the accessible loading spinner. |
| `src/hooks/useFetchPhotos.js` | Fetches photos and manages loading, errors, and cleanup. |
| `src/reducers/favouritesReducer.js` | Toggles favourite IDs and reads saved favourites. |
| `src/index.css` | Imports Tailwind CSS. |
| `vite.config.js` | Enables the React and Tailwind plugins. |
| `eslint.config.js` | Configures the JavaScript and React lint rules. |
