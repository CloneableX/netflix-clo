import {AiOutlineClose} from "react-icons/ai";
import {FavoriteButton} from "@/app/components/FavoriteButton";
import {FC, useCallback, useEffect, useState} from "react";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovie from "@/hooks/useMovie";
import {PlayButton} from "@/app/components/PlayButton";

type InfoModalProps = {
  visible?: boolean,
  onClose: () => any
}

export const InfoModal: FC<InfoModalProps> = ({visible = false, onClose}) => {
  const [isVisible, setIsVisible] = useState(visible)
  const {movieId = '' , closeModal} = useInfoModalStore()

  const {movie} = useMovie(movieId)

  useEffect(() => {
    setIsVisible(visible)
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      closeModal()
    }, 300)
  }, [closeModal]);

  if (!visible) {
    return null
  }

  return (
    <div
      className={`z-50 fixed bg-black bg-opacity-80 overflow-x-hidden overflow-y-auto inset-0 flex flex-row justify-center items-center ${visible ? 'visible' : 'invisible'}`}>
      <div className="w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div className={`${isVisible ? 'scale-100' : 'scale-0'} transition duration-300 flex-auto bg-zinc-900 drop-shadow-md`}>
          <div className="h-96 relative">
            <video
              autoPlay
              muted
              loop
              poster={movie?.thumbnailUrl}
              src={movie?.videoUrl}
              className="w-full brightness-[60%] object-cover h-full"
            />
            <div
              onClick={handleClose}
              className="h-10 w-10 absolute top-3 right-3 cursor-pointer bg-black bg-opacity-70 rounded-full flex justify-center items-center">
              <AiOutlineClose className="text-white"/>
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                {movie?.title}
              </p>
              <div className="flex items-center gap-4">
                <PlayButton movieId={movie?.id} />
                <FavoriteButton movieId={movie?.id}/>
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <div className="flex items-center gap-8 mb-8">
              <p className="text-green-400 font-semibold text-lg">New</p>
              <p className="text-white text-lg">{movie?.duration}</p>
              <p className="text-white text-lg">{movie?.genre}</p>
            </div>
            <p className="text-white text-lg">{movie?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};