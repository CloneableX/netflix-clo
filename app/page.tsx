import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {Navbar} from "@/app/components/Navbar";
import {Billboard} from "@/app/components/Billboard";

const Home = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth', RedirectType.replace)
  }

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}

export default Home
