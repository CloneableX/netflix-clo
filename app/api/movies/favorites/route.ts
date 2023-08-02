import {NextRequest, NextResponse} from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import {without} from "lodash";

export const GET = async () => {
  const {currentUser} = await serverAuth()
  const movies = await prismadb.movie.findMany({
    where: {
      id: {in: currentUser.favoriteIds}
    }
  })

  return NextResponse.json(movies)
}

export const POST = async (req: NextRequest) => {
  const {currentUser} = await serverAuth()

  const {movieId} = await req.json()
  const movie = await prismadb.movie.findUnique({
    where: {id: movieId}
  })

  if (!movie) {
    throw new Error('Invalid movie')
  }

  const updatedUser = await prismadb.user.update({
    where: {id: currentUser.id},
    data: {
      favoriteIds: {
        push: movieId
      }
    }
  })

  return NextResponse.json(updatedUser)
}

export const DELETE = async (req: NextRequest) => {
  const {currentUser} = await serverAuth()

  const {movieId} = await req.json()
  const movie = await prismadb.movie.findUnique({
    where: {id: movieId}
  })

  if (!movie) {
    throw new Error('Invalid movie')
  }

  const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
  const updatedUser = await prismadb.user.update({
    where: {id: currentUser.id},
    data: {
      favoriteIds: updatedFavoriteIds
    }
  })

  return NextResponse.json(updatedUser)
}
