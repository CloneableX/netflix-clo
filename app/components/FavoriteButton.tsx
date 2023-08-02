'use client'

import {AiOutlineCheck, AiOutlinePlus} from "react-icons/ai";
import {FC, useCallback, useMemo} from "react";
import axios from "axios";
import useFavoriteMovies from "@/hooks/useFavoriteMovies";
import useCurrentUser from "@/hooks/useCurrentUser";

type FavoriteButtonProps = {
  movieId: string
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({movieId}) => {
  const {user, mutate} = useCurrentUser()
  const {mutate: mutateFavorites} = useFavoriteMovies()

  const isFavorite = useMemo(() => {
    const movieIds = user.favoriteIds || []
    return movieIds.includes(movieId)
  }, [movieId, user])

  const toggleFavorite = useCallback(async () => {
    let response
    if (isFavorite) {
      response = await axios.delete('api/movies/favorites', {data: {movieId}})
    } else {
      response = await axios.post('/api/movies/favorites', {movieId})
    }

    const updatedFavoriteIds = response?.data?.favoriteIds
    await mutate({
      ...user,
      favoriteIds: updatedFavoriteIds
    })
    await mutateFavorites()
  }, [movieId, user, mutate, mutateFavorites, isFavorite])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div onClick={toggleFavorite} className="group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center cursor-pointer hover:border-neutral-300">
      <Icon className="text-white w-4 lg:w-8 group-hover/item:text-neutral-300"/>
    </div>
  );
};