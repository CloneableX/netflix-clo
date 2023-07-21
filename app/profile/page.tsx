import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import Profile from "@/app/profile/components/Profile";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth', RedirectType.replace)
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h2>
        <Profile />
      </div>
    </div>
  )
}

export default ProfilePage
