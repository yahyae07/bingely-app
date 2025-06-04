"use client";

import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { FaCheck, FaPlus } from "react-icons/fa";
import useMoviesStore from "@/app/stores/useMoviesStore";
import styles from "./FavoriteButton.module.scss";

interface FavoriteButtonProps {
  movie: MovieType;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useMoviesStore();
  const isMovieFavorite = isFavorite(movie.id);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const buttonText = isHydrated && isMovieFavorite ? "Added" : "My List";
  const ButtonIcon = isHydrated && isMovieFavorite ? FaCheck : FaPlus;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <button
      className={`${styles.favoriteButton} ${
        isHydrated && isMovieFavorite ? styles.active : ""
      }`}
      onClick={handleFavoriteToggle}
    >
      <ButtonIcon />
      {buttonText}
    </button>
  );
};

export default FavoriteButton;
