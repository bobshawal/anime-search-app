# Anime Search App 🎌

A responsive React + TypeScript application that allows users to search for anime titles and view detailed information using the Jikan API.

---

## 🛠️ Tech Stack

- React 18 (Hooks only)
- TypeScript
- Redux Toolkit
- React Router DOM
- Axios
- Jikan API (no auth required)
- CSS Modules

---

## 📦 Setup Instructions

```bash
npm install
npm run dev
```

- App runs on port 4000
- No environment variables required
- Uses npm only (no yarn/pnpm)

## 📄 Features

### 🔍 Search Page
- Instant search with 250ms debounce
- Cancels in-flight API requests while typing
- Server-side pagination
- Responsive grid layout
- Skeleton loader while fetching
- Empty state messaging

### 📘 Detail Page
- Anime title, image, synopsis, episodes, and score
- Back navigation to search page
- Skeleton loader while fetching
- Error handling for failed requests

### 🧠 Bonus Implementation
- Skeleton loaders for both search and detail views
- Empty state messaging when no results found
- Responsive layout for mobile and desktop
- Styled pagination with hover and disabled states
- Clean UI with hover effects and spacing
- Modular folder structure for scalability