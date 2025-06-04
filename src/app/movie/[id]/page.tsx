import React from "react";
import { API_KEY, BASE_URL } from "@/constants/constants";
import MovieDetails from "@/components/MovieDetails";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

type MovieDetailsPageParams = Promise<{ id: string }>;

const MovieDetailsPage = async (props: { params: MovieDetailsPageParams }) => {
  const { id } = await props.params;

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      notFound();
    }

    const movieData = await response.json();

    return (
      <div className={styles.page}>
        <Navbar />
        <MovieDetails movie={movieData} />
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default MovieDetailsPage;
