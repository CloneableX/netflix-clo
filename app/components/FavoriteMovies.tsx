'use client'

import useFavoriteMovies from "@/hooks/useFavoriteMovies";
import {MovieList} from "@/app/components/MovieList";

export const FavoriteMovies = () => {
  const {movies = []} = useFavoriteMovies()

  return (
    <MovieList title='My List' movies={movies} />
  );
};