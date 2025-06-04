import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import StarRating from "./StarRating";
import FavoriteButton from "./FavoriteButton";

interface MovieProps {
  movie: MovieType;
}

const formatRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

const MovieDetails: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className={styles.movieSection}>
      {movie.backdrop_path && (
        <>
          <div className={styles.backdropContainer}>
            <Image
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              fill={true}
              priority={true}
              alt={movie.title}
            />
          </div>
          <div className={styles.movieDetails}>
            <h1>{movie.title}</h1>
            <div className={styles.runtimeAndGenres}>
              <div>{formatRuntime(movie.runtime)}</div>
              {movie.genres && movie.genres.length > 0 && (
                <>
                  <div className={styles.separator}>•</div>
                  <div>
                    {movie.genres.map((genre) => genre.name).join(" • ")}
                  </div>
                </>
              )}
            </div>
            <p className={styles.releaseDate}>Released: {movie.release_date}</p>
            <p className={styles.rating}>
              <StarRating rating={movie.vote_average} showNumeric={true} />
            </p>
            <p className={styles.overview}>{movie.overview}</p>
            {movie.credits.cast.length > 0 && (
              <p className={styles.cast}>
                Stars:{" "}
                {movie.credits.cast
                  .slice(0, 4)
                  .map((member) => member.name)
                  .join(", ")}
              </p>
            )}
            <div className={styles.favoriteButtonWrapper}>
              <FavoriteButton movie={movie} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
