import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./Movie.module.scss";

interface MovieProps {
  movie: MovieType;
}

const MovieDetails: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className={styles.movie}>
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
  );
};

export default MovieDetails;
