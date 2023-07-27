import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import {NextResponse} from "next/server";

export const GET = async () => {
  await serverAuth();

  const moviesCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * moviesCount);
  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex
  });

  return NextResponse.json(randomMovies[0])
}
