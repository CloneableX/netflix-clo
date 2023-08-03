'use client'

import useBillboard from "@/hooks/useBillboard";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {useRouter} from "next/navigation";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import {PlayButton} from "@/app/components/PlayButton";

export const Billboard = () => {
  const router = useRouter()
  const {movie} = useBillboard()

  const {openModal} = useInfoModalStore()

  return (
    <div className="relative h-[56.25vw]">
      <video
        loop
        muted
        poster={movie?.thumbnailUrl}
        autoPlay
        src={movie?.videoUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
      ></video>
      <div className="w-full absolute top-[30%] md:top-[40%] px-4 md:px-16">
        <p className="text-white text-xl md:text-5xl lg:6xl w-[50%] font-bold drop-shadow-xl">{movie?.title}</p>
        <p className="text-white text-[8px] md:text-lg w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">{movie?.description}</p>
        <div className="mt-3 md:mt-4 flex flex-row gap-2">
          <PlayButton movieId={movie?.id} />
          <button
            onClick={() => openModal(movie?.id)}
            className="
              text-white
              bg-white
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              text-xs lg:text-lg
              font-semibold
              hover:bg-opacity-20
              transition
              flex
              flex-row
              items-center
              gap-1
            "
          >
            <AiOutlineInfoCircle size={16} className="w-4" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
