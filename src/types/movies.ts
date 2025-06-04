import { Credits } from "./credits";

export interface Movie {
  id: number;
  adult: boolean;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  rating: number;
  backdrop_path: string;
  runtime: number;
  genres: { id: number; name: string }[];
  credits: Credits;
  }