import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {Navbar} from "@/app/components/Navbar";
import {Billboard} from "@/app/components/Billboard";
import {TrendMovies} from "@/app/components/TrendMovies";
import {FavoriteMovies} from "@/app/components/FavoriteMovies";
import {MovieInfoModal} from "@/app/components/MovieInfoModal";

const Home = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth', RedirectType.replace)
  }

  return (
    <>
      <MovieInfoModal />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <TrendMovies />
        <FavoriteMovies />
      </div>
    </>
  )
}

export default Home
