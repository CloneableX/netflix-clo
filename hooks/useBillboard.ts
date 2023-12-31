'use client'

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
  const {data, error, isLoading, mutate} = useSWR('/api/movies/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    movie: data,
    error,
    isLoading,
    mutate
  }
}

export default useBillboard
