import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import StarRating from "./StarRating";

interface MovieProps {
  movie: MovieType;
}

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
            <p className={styles.releaseDate}>Released: {movie.release_date}</p>
            <p className={styles.rating}>
              <StarRating rating={movie.vote_average} showNumeric={true} />
            </p>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
