"use client";

import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieCard.module.scss";
import StarRating from "./StarRating";
import { FaCheck, FaPlus } from "react-icons/fa";
import useMoviesStore from "@/app/stores/useMoviesStore";
import Link from "next/link";
import { BsInfo } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useMoviesStore();
  const isMovieFavorite = isFavorite(movie.id);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const buttonText = isHydrated && isMovieFavorite ? "Added" : "My List";
  const ButtonIcon = isHydrated && isMovieFavorite ? FaCheck : FaPlus;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    toggleFavorite(movie);
  };

  return (
    <div className={styles.movie}>
      {movie.poster_path && (
        <div className={styles.imageContainer}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className={styles.posterImage}
          />
        </div>
      )}
      <div className={styles.movieInfo}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date.substring(0, 4)}</p>
        <p>
          <StarRating rating={movie.vote_average} showNumeric={true} />
        </p>
        <div className={styles.actionButtons}>
          <Link href={`/movie/${movie.id}`} className={styles.detailsButton}>
            <BsInfo className={styles.infoIcon} /> More Info
          </Link>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
