'use client'

import {BsBell, BsSearch} from "react-icons/bs";
import {MobileMenu} from "@/app/components/MobileMenu";
import {AccountMenu} from "@/app/components/AccountMenu";
import {useEffect, useState} from "react";

export const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 66) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`
        w-full
        fixed
        z-40
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
      `}
    >
      <img src="/images/logo.png" alt="Logo" className="h-4 lg:h-7"/>
      <div className="lg:flex flex-row items-center gap-7 ml-8 cursor-pointer text-white hidden">
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">Home</div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">Series</div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">Film</div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">News & Popular</div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">My List</div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">Brose By Languages</div>
      </div>
      <MobileMenu/>
      <div className="flex flex-row items-center gap-7 text-white ml-auto cursor-pointer">
        <div className="text-gray-200 hover:text-gray-300 transition">
          <BsSearch/>
        </div>
        <div className="text-gray-200 hover:text-gray-300 transition">
          <BsBell/>
        </div>
        <AccountMenu/>
      </div>
    </div>
  );
};