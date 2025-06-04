import { API_KEY, BASE_URL } from "@/constants/constants";
import { Movie as MovieType } from "@/types/movies";
import styles from "./Movies.module.scss";
import MovieCard from "./MovieCard";

async function Movies() {
  const moviePagesToFetch = 2;
  const uniqueMovies = new Map<number, MovieType>();

  for (let i = 1; i <= moviePagesToFetch; i++) {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies from page ${i}`);
    }

    const data = await response.json();

    data.results.forEach((movie: MovieType) => {
      if (!uniqueMovies.has(movie.id)) {
        uniqueMovies.set(movie.id, movie);
      }
    });
  }

  const movies = Array.from(uniqueMovies.values());

  return (
    <>
      {movies.length > 0 ? (
        <div className={styles.movies}>
          {movies.map((movie) =>
            movie.poster_path !== null && movie.backdrop_path !== null ? (
              <MovieCard key={movie.id} movie={movie} />
            ) : null
          )}
        </div>
      ) : (
        <p className={styles.centeredMessage}>
          No movies available. Please try again later.
        </p>
      )}
    </>
  );
}

export default Movies;
