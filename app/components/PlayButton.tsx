'use client'

import {BsFillPlayFill} from "react-icons/bs";
import {FC} from "react";
import {useRouter} from "next/navigation";

type PlayButtonProps = {
  movieId: string
}

export const PlayButton: FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        text-xs lg:text-lg
        font-semibold
        hover:bg-neutral-300
        transition
        flex
        flex-row
        items-center
        gap-1
      "
    >
      <BsFillPlayFill size={16} className="w-4"/>
      Play
    </button>
  );
};