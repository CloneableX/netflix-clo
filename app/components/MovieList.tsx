import {MovieCard} from "@/app/components/MovieCard";
import {FC} from "react";
import {isEmpty} from "lodash";

type MovieListProps = {
  title: string,
  movies: any[]
}

export const MovieList: FC<MovieListProps> = ({title, movies}) => {
  if (isEmpty(movies)) {
    return null
  }

  return (
    <div className="px-4 md:px-12 mt-4">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard key={movie.id} movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};