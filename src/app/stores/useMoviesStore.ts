import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie as MovieType } from "@/types/movies";

interface MoviesStore {
  favoriteMovies: MovieType[];
  movieDetails: Record<number, MovieType>; 
  toggleFavorite: (movie: MovieType) => void;
  isFavorite: (movieId: number) => boolean;
  storeMovieDetails: (movie: MovieType) => void;
  getMovieDetails: (movieId: number) => MovieType | undefined;
}

const useMoviesStore = create<MoviesStore>()(
  persist(
    (set, get) => ({
      favoriteMovies: [],
      movieDetails: {},
      
      toggleFavorite: (movie) => set((state) => {
        const isFavorite = state.favoriteMovies.some(m => m.id === movie.id);
        const favoriteMovies = isFavorite
          ? state.favoriteMovies.filter(m => m.id !== movie.id)
          : [...state.favoriteMovies, movie];
        return { favoriteMovies };
      }),
      
      isFavorite: (movieId) => get().favoriteMovies.some(movie => movie.id === movieId),
      
      storeMovieDetails: (movie) => set((state) => ({
        movieDetails: {
          ...state.movieDetails,
          [movie.id]: movie
        }
      })),
      
      getMovieDetails: (movieId) => get().movieDetails[movieId],
    }),
    {
      name: 'movies-storage',
      partialize: (state) => ({ 
        favoriteMovies: state.favoriteMovies,
        movieDetails: state.movieDetails
      }),
    }
  )
);

export default useMoviesStore;