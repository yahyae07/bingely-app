import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "@/constants/constants";
import { Movie } from "@/types/movies";
import styles from "./Movies.module.scss";

async function Movies() {
  const moviePagesToFetch = 1;
  const uniqueMovies = new Map<number, Movie>();

  for (let i = 1; i <= moviePagesToFetch; i++) {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies from page ${i}`);
    }

    const data = await response.json();

    data.results.forEach((movie: Movie) => {
      if (!uniqueMovies.has(movie.id)) {
        uniqueMovies.set(movie.id, movie);
      }
    });
  }

  const movies = Array.from(uniqueMovies.values());

  return (
    <div className={styles.movies}>
      <h1>Movies Collection ({movies.length} movies)</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Released: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          {movie.poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "200px", height: "300px" }}
            />
          )}
          <br />
        </div>
      ))}
    </div>
  );
}

export default Movies;
