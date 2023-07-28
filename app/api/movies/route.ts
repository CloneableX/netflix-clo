import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import {NextResponse} from "next/server";

export const GET = async () => {
  await serverAuth()

  const movies = await prismadb.movie.findMany();

  return NextResponse.json(movies)
}
