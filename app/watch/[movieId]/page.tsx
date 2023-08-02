'use client'

import useMovie from "@/hooks/useMovie";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useRouter} from "next/navigation";

type WatchMoviePageProps = {
  params: { movieId: string }
}

const WatchMoviePage = ({params: {movieId}}: WatchMoviePageProps) => {
  const router = useRouter()
  const {movie} = useMovie(movieId)

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full z-10 p-4 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft onClick={() => router.push('/')} size={30} className="text-white cursor-pointer hover:opacity-80 transition"/>
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="w-full h-full"
        src={movie?.videoUrl}/>
    </div>
  )
}

export default WatchMoviePage
