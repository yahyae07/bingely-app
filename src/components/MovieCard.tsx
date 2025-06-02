import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieCard.module.scss";
import StarRating from "./StarRating";

interface MovieProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <h3>{movie.title}</h3>
      <p>
        Rating: <StarRating rating={movie.vote_average} showNumeric={true} />
      </p>
      {movie.poster_path && (
        <div className={styles.imageContainer}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className={styles.posterImage}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
