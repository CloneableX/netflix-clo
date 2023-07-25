'use client'

import {BsChevronDown} from "react-icons/bs";
import {useState} from "react";

export const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div onClick={() => setVisible(!visible)}
         className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
      <p className="text-white text-sm">Browse</p>
      <BsChevronDown className={`text-white transition ${visible ? 'rotate-180' : 'rotate-0'}`}/>
      <div
        className={`text-white absolute top-8 left-0 bg-black w-56 py-5 border-2 border-gray-800 ${!visible && 'hidden'}`}>
        <div className="flex flex-col gap-4">
          <div className="px-3 text-center hover:underline">Home</div>
          <div className="px-3 text-center hover:underline">Series</div>
          <div className="px-3 text-center hover:underline">Films</div>
          <div className="px-3 text-center hover:underline">News & Popular</div>
          <div className="px-3 text-center hover:underline">My List</div>
          <div className="px-3 text-center hover:underline">Brose by Languages</div>
        </div>
      </div>
    </div>
  );
};