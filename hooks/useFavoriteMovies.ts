'use client'

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavoriteMovies = () => {
  const {data, error, isLoading, mutate} = useSWR('/api/movies/favorites', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    movies: data,
    error,
    isLoading,
    mutate,
  }
}

export default useFavoriteMovies
