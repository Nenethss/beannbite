import React from "react";
import LogoW from "../assets/Logo_white.png";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-[#0e0e0e]/80 w-full flex items-center justify-between px-8 py-1 backdrop-blur z-100">
      <div className="w-[60%]">
        <img src={LogoW} className="h-16" alt="Logo" />
      </div>
      <div className="flex w-full justify-between">
        <ul className="flex gap-10 font-medium items-center ">
          <li>
            <a
              href="#Home"
              className="text-[13px] cursor-pointer text-white hover:text-[#ffe6a7] hover:underline"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#BestSelling"
              className="text-[13px] cursor-pointer text-[white] hover:text-[#ffe6a7] hover:underline"
            >
              MENU
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-[13px] cursor-pointer text-white hover:text-[#ffe6a7] hover:underline"
            >
              ABOUT
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <div className="relative w-52">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-[11px] pl-3 pr-3 py-1 rounded-full border border-none outline-none bg-white focus:outline-none"
            />
            <IoIosSearch className="text-md  cursor-pointer absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex gap-4">
            <button className="cursor-pointer hover:text-white bg-white hover:bg-[#432818] text-[11px] px-2 py-1 w-22 rounded-[18px] tracking-widest">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
