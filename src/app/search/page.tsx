"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import { API_KEY, BASE_URL } from "@/constants/constants";
import MovieCard from "@/components/MovieCard";
import { Movie as MovieType } from "@/types/movies";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setLoading(false);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
            query
          )}&page=1&include_adult=false`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error searching:", error);
        setError("Failed to load search results");
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.searchHeader}>
        <h2>Search Results for: "{query}"</h2>
      </div>

      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
        </div>
      ) : error ? (
        <p className={styles.centeredMessage}>{error}</p>
      ) : movies.length > 0 ? (
        <div className={styles.movies}>
          {movies.map((movie) =>
            movie.poster_path !== null && movie.backdrop_path !== null ? (
              <MovieCard key={movie.id} movie={movie} />
            ) : null
          )}
        </div>
      ) : (
        <p className={styles.centeredMessage}>No results found for "{query}"</p>
      )}
    </div>
  );
}
