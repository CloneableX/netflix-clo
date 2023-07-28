'use client'

import useMovies from "@/hooks/useMovies";
import {MovieCard} from "@/app/components/MovieCard";

export const MovieList = () => {
  const {movies = []} = useMovies()

  return (
    <div className="px-4 md:px-12 mt-4">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Trending Now</p>
      <div className="grid grid-cols-4 gap-2">
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};