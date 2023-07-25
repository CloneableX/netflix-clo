'use client'

import {BsChevronDown} from "react-icons/bs";
import {useState} from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import {signOut} from "next-auth/react";

export const AccountMenu = () => {
  const [visible, setVisible] = useState(false);
  const {user} = useCurrentUser()

  return (
    <div onClick={() => setVisible(!visible)} className="flex flex-row gap-2 items-center">
      <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden transition">
        <img src="/images/default-blue.png" alt=""/>
      </div>
      <BsChevronDown className={`text-white transition ${visible ? 'rotate-180' : 'rotate-0'}`}/>
      <div className={`absolute top-16 right-0 bg-black w-56 py-5 border-2 border-gray-800 ${visible || 'hidden'}`}>
        <div className="flex flex-col gap-3">
          <div className="px-3 flex flex-row gap-3 items-center w-full group/item">
            <img className="w-8 rounded-md" src="/images/default-blue.png" alt=""/>
            <p className="text-sm group-hover/item:underline">{user?.name}</p>
          </div>
          <hr className="bg-gray-600 border-0 h-px my-4"/>
          <div onClick={() => signOut()} className="text-center text-sm hover:underline">
            Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};