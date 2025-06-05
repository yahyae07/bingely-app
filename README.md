# Bingely - Movie Discovery App

Bingely is a modern web application that allows users to browse, search, and save their favorite movies. Built with **Next.js** and **TypeScript**, it integrates with **The Movie Database (TMDB) API** to provide an extensive collection of movie information.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [App Architecture](#app-architecture)
  - [Rendering Strategy](#rendering-strategy)
  - [Navigation & Data Flow](#navigation--data-flow)
- [Additional Features](#additional-features)
  - [Animations](#animations)
  - [Lazy Loading](#lazy-loading)
- [Design Decisions & Challenges](#design-decisions--challenges)
  - [Design Decisions](#design-decisions)
  - [Challenges & Solutions](#challenges--solutions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Movie Browse: Discover popular movies from TMDB
<img width="1470" alt="HomePage1" src="https://github.com/user-attachments/assets/ac81f24f-527d-484f-b57e-7c830ef70a08" />
<img width="1470" alt="HomePage2" src="https://github.com/user-attachments/assets/b23a76b7-9074-4015-8b38-41d99305f4f1" />


- Search: Find movies by title or keywords
<img width="1470" alt="Search1" src="https://github.com/user-attachments/assets/b6a09a2e-0b47-4925-9050-653f0ccc8661" />
<img width="1470" alt="Search2" src="https://github.com/user-attachments/assets/c52bb596-26fe-47dd-a8a8-7fdf08b58bf6" />


- Movie Details: View complete information about any movie  
<img width="1470" alt="MovieDetails1" src="https://github.com/user-attachments/assets/930c5cc7-6b48-4822-9215-3d8ca1be69d2" />
<img width="1470" alt="MovieDetails2" src="https://github.com/user-attachments/assets/8f9b54e1-4079-420b-ac15-8e1f975c0d6f" />


- Favorites: Save movies to a personal watchlist
<img width="1470" alt="Favorites" src="https://github.com/user-attachments/assets/93bd2f1e-853d-4277-a04a-a6919e0ffb20" />


- Responsive Design: Optimized for all screen sizes
<img width="500" alt="Responsiveness" src="https://github.com/user-attachments/assets/bb901420-698a-45d8-98e4-8e6941bf3184" />


- Error handling: User-friendly messages
<img width="1470" alt="NoMoviesFavorites" src="https://github.com/user-attachments/assets/3f5feada-c0dc-4c24-a937-140e16749859" />


## Technologies Used
- **Frontend Framework**: Next.js 15.3.3 with React 19.0.0
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: Zustand
- **Data Source**: TMDB API
- **Icons**: React Icons

## App Architecture
### Rendering Strategy
  **Server Components (for fast initial load):**
  - Home page: Fetches and renders popular movies
  - Movie Details page: Fetches complete data including credits using append_to_response=credits
  - Movies.tsx: Handles data fetching and renders MovieCard list
  - MovieDetails.tsx: Renders detailed movie info
  
  **Client Components (for interactivity and state):**
  - Search page: Manages query input and live updates
  - Favorites page: Hydrates favorites from localStorage
  - Navbar.tsx: Uses usePathname to highlight active route
  - MovieCard.tsx: Handles user interactions and navigation
  - FavoriteButton.tsx: Toggles favorites using Zustand
  - Search.tsx: Provides real-time search field
  - StarRating.tsx: Displays rating stars

### Navigation & Data Flow
- The Navbar is rendered on all pages for seamless navigation
- Home Page fetches and displays popular movies from TMDB
- Search Page filters and displays movie results using user input
- Favorites Page retrieves persisted movies from Zustand (localStorage)
- #### Project Flow Diagram:
![bingelyflowdiagram drawio](https://github.com/user-attachments/assets/da39bcac-c05b-4783-86b7-a33d180ce42f)

## Additional Features
### Animations
- Hover Effects: Movie cards scale and reveal overlays
- Buttons: Scale and animate on hover
- Loading Spinner: Smooth transition during data fetch
- Gradients: Fade-in on interactive elements

### Lazy Loading
- Next.js Image handles automatic image lazy loading
- High-Priority Images: First 10 movies load with high priority, remaining content loads progressively

## Design Decisions & Challenges

### Design Decisions
- Next.js App Router for hybrid rendering (SSR + CSR)
- SCSS Modules for scoped styling and shared global styles
- Zustand with persist middleware for localStorage sync

### Challenges & Solutions
- **Hydration Mismatch**
  - *Challenge*: Server doesn’t see localStorage, causing mismatched state during rendering
  - *Solution*: Hydrate Zustand store on client mount

- **Image Optimization**  
  - *Challenge*: Standard `<img>` tags slowed performance  
  - *Solution*: Used Next.js `Image`

- **Single API Call for Extended Data**
  - *Challenge*: Needed movie credits with details
  - *Solution*: Used append_to_response=credits

- **Responsive Layout Breakage**  
  - *Challenge*: Search layout misaligned on small screens
  - *Solution*: Media queries with flexible design

- **State Persistence**  
  - *Challenge*: Favorites reset on reload
  - *Solution*: Zustand persist middleware

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer  
- `bun` package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yahyae07/bingely-app.git
cd bingely-app
```

2. Install dependencies
```bash
bun install
```

3. Create a .env.local file
```bash
API_KEY=your_tmdb_api_key
```

4. Run the development server
```bash
bun run dev
```

5. Visit http://localhost:3000 in your browser.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Data provided by The Movie Database (TMDB)
- Styling inspired by Netflix
- Icons provided by React Icons
- Development supported in part by Claude 3.7 Sonnet Thinking

