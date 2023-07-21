'use client'

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const {data, error, isLoading, mutate} = useSWR('/api/current', fetcher)
  return {
    user: data,
    error,
    isLoading,
    mutate
  }
}

export default useCurrentUser
