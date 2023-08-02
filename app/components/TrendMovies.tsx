'use client'

import {MovieList} from "@/app/components/MovieList";
import useMovies from "@/hooks/useMovies";

export const TrendMovies = () => {
  const {movies = []} = useMovies()

  return (
    <MovieList title="Trending Now" movies={movies}/>
  );
};