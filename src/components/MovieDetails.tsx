import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";

interface MovieProps {
  movie: MovieType;
}

const MovieDetails: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className={styles.movieDetails}>
      {/* <h3>{movie.title}</h3>
      <p>Released: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p> */}
      {movie.backdrop_path && (
        <div className={styles.backdropContainer}>
          <Image
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            fill={true}
            priority={true}
            alt={movie.title}
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
