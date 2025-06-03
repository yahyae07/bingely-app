import React from "react";
import { API_KEY, BASE_URL } from "@/constants/constants";
import MovieDetails from "@/components/MovieDetails";
import Navbar from "@/components/Navbar";
import styles from "../../page.module.css";

type MoviePageParams = Promise<{ id: string }>;

const MoviePage = async (props: { params: MoviePageParams }) => {
  const { id } = await props.params;

  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    console.error(`Failed to fetch movie with ID ${id}`);
  }

  const movie = await response.json();

  return (
    <div className={styles.page}>
      <Navbar />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
