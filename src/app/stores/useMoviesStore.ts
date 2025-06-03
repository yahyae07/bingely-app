import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie as MovieType } from "@/types/movies";

interface MoviesStore {
  favoriteMovies: MovieType[];
  toggleFavorite: (movie: MovieType) => void;
  isFavorite: (movieId: number) => boolean;
}

const useMoviesStore = create<MoviesStore>()(
  persist(
    (set, get) => ({
      favoriteMovies: [],
      
      toggleFavorite: (movie) => set((state) => {
        const isFavorite = state.favoriteMovies.some(m => m.id === movie.id);
        const favoriteMovies = isFavorite
          ? state.favoriteMovies.filter(m => m.id !== movie.id)
          : [...state.favoriteMovies, movie];
        return { favoriteMovies };
      }),
      
      isFavorite: (movieId) => get().favoriteMovies.some(movie => movie.id === movieId),
    }),
    {
      name: 'movies-storage',
      partialize: (state) => ({ 
        favoriteMovies: state.favoriteMovies,
      }),
    }
  )
);

export default useMoviesStore;