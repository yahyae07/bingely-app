import { API_KEY, BASE_URL } from "@/constants/constants";
import { Movie as MovieType } from "@/types/movies";
import sharedStyles from "@/styles/shared.module.scss";
import MovieCard from "./MovieCard";

async function Movies() {
  const moviePagesToFetch = 2;
  const uniqueMovies = new Map<number, MovieType>();

  try {
    for (let i = 1; i <= moviePagesToFetch; i++) {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`,
          { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movies from page ${i}`);
        }

        const data = await response.json();

        data.results.forEach((movie: MovieType) => {
          if (!uniqueMovies.has(movie.id) && movie.adult === false) {
            uniqueMovies.set(movie.id, movie);
          }
        });
      } catch (pageError) {
        console.error(`Error fetching page ${i}:`, pageError);
      }
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  const movies = Array.from(uniqueMovies.values());

  return (
    <>
      {movies.length > 0 ? (
        <div className={sharedStyles.movies}>
          {movies.map((movie, index) =>
            movie.poster_path !== null && movie.backdrop_path !== null ? (
              <MovieCard key={movie.id} movie={movie} isPriority={index < 10} />
            ) : null
          )}
        </div>
      ) : (
        <p className={sharedStyles.centeredMessage}>
          No movies available. Please try again later.
        </p>
      )}
    </>
  );
}

export default Movies;
