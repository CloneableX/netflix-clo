'use client'

import useCurrentUser from "@/hooks/useCurrentUser";
import {useRouter} from "next/navigation";

export const Profile = () => {
  const router = useRouter()
  const {user} = useCurrentUser()

  return (
    <div className="flex items-center justify-center mt-10">
      <div
        onClick={() => router.push('/')}
        className="group w-44"
      >
        <div
          className="
                w-44
                h-44
                rounded-md
                flex
                items-center
                justify-center
                border-2
                border-transparent
                group-hover:cursor-pointer
                group-hover:border-white
                overflow-hidden
              "
        >
          <img src="/images/default-blue.png" alt="Profile"/>
        </div>
        <div
          className="
        mt-4
        text-gray-400
        text-2xl
        text-center
        group-hover:text-white
      "
        >
          {user?.name}
        </div>
      </div>
    </div>
  )
}

export default Profile
