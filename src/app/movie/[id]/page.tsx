import React from "react";
import { API_KEY, BASE_URL } from "@/constants/constants";
import MovieDetails from "@/components/MovieDetails";
import Navbar from "@/components/Navbar";
import sharedStyles from "@/styles/shared.module.scss";

type MovieDetailsPageParams = Promise<{ id: string }>;

const MovieDetailsPage = async (props: { params: MovieDetailsPageParams }) => {
  const { id } = await props.params;

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error(`Failed to fetch movie details for ID: ${id}`);
    }

    const movieData = await response.json();

    return (
      <div className={sharedStyles.page}>
        <Navbar />
        <MovieDetails movie={movieData} />
      </div>
    );
  } catch (error) {
    console.error(`Unexpected error fetching movie ${id}:`, error);
  }
};

export default MovieDetailsPage;
