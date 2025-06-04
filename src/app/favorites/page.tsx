"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import useMoviesStore from "../stores/useMoviesStore";
import Navbar from "@/components/Navbar";
import sharedStyles from "@/styles/shared.module.scss";

export default function Favorites() {
  const { favoriteMovies } = useMoviesStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className={sharedStyles.page}>
      <Navbar />
      {!isHydrated ? (
        <div className={sharedStyles.loadingContainer}>
          <div className={sharedStyles.spinner}></div>
        </div>
      ) : favoriteMovies.length > 0 ? (
        <div className={sharedStyles.movies}>
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className={sharedStyles.centeredMessage}>
          You haven't added any movies to your favorites yet.
        </p>
      )}
    </div>
  );
}
