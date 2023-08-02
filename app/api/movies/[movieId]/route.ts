import {NextRequest, NextResponse} from "next/server";
import prismadb from "@/lib/prismadb";

export const GET = async (req: NextRequest, context: any) => {
  const movieId = context.params?.movieId

  if (!movieId) {
    throw new Error('Missing Id')
  }

  const movie = await prismadb.movie.findUnique({
    where: {id: movieId}
  })

  return NextResponse.json(movie)
}
