"use client";

import React from "react";
import styles from "./page.module.scss";
import MovieCard from "@/components/MovieCard";
import useMoviesStore from "../stores/useMoviesStore";
import Navbar from "@/components/Navbar";

export default function Favorites() {
  const { favoriteMovies } = useMoviesStore();

  return (
    <div className={styles.page}>
      <Navbar />
      {favoriteMovies.length > 0 ? (
        <div className={styles.movies}>
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className={styles.centeredMessage}>
          You haven't added any movies to your favorites yet.
        </p>
      )}
    </div>
  );
}
