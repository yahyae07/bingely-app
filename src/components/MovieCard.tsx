"use client";

import React from "react";
import { Movie as MovieType } from "@/types/movies";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./MovieCard.module.scss";
import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsInfo } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieProps {
  movie: MovieType;
  isPriority?: boolean;
}

const MovieCard: React.FC<MovieProps> = ({ movie, isPriority = false }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <div className={styles.movie} onClick={handleCardClick}>
      {movie.poster_path && (
        <div className={styles.imageContainer}>
          <Image
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width={0}
            height={0}
            priority={isPriority}
            className={styles.posterImage}
          />
        </div>
      )}
      <div className={styles.movieInfo}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.substring(0, 4)}</p>
        <p>
          <StarRating rating={movie.vote_average} showNumeric={true} />
        </p>
        <div
          className={styles.actionButtons}
          onClick={(e) => e.stopPropagation()}
        >
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
