import {FC} from "react";
import {BsFillPlayFill} from "react-icons/bs";

type MovieCardProps = {
  movie: Record<string, any>,
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return (
    <div className="group col-span bg-zinc-900 relative h-[12vw]">
      <img
        className="
          object-cover
          cursor-pointer
          rounded-md
          shadow-xl
          w-full
          h-[12vw]
          transition
          duration
          delay-300
          group-hover:opacity-90
          sm:group-hover:opacity-0
        "
        src={movie.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
          opacity-0
          absolute
          top-0
          z-10
          invisible
          sm:visible
          w-full
          scale-0
          transition
          duration-200
          delay-300
          group-hover:scale-110
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
        "
      >
        <img
          className="
            object-cover
            cursor-pointer
            rounded-t-md
            shadow-xl
            w-full
            h-[12vw]
          "
          src={movie.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="bg-zinc-800 rounded-b-md w-full p-2 z-10 shadow-md">
          <div className="bg-white w-6 h-6 rounded-full cursor-pointer flex flex-row items-center justify-center">
            <BsFillPlayFill size={30}/>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-4 text-white text-[10px] lg:text-sm">
            {movie.duration}
          </div>
          <div className="mt-4 text-white text-[8px] lg:text-sm">
            {movie.genre}
          </div>
        </div>
      </div>
    </div>
  );
};