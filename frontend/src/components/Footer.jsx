import React from "react";
import LogoW from "../assets/Logo_white.png";
import footerLogo from "../assets/footer_logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <nav className="text-white bg-black w-full flex items-center justify-between px-8 py-1 backdrop-blur z-100">
      <div className="w-[40%]">
        <img src={LogoW} className="h-16" alt="Logo" />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-32 items-center">
          <div className="flex">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 justify-center items-center">
                <p>Visit us:</p>
                <div className="flex gap-2 pt-1 items-center">
                  <FaSquareFacebook className="text-[20px]" />
                  <a className="text-[12px]" href="">
                    https://www.facebook.com/beanbitecafe/
                  </a>
                </div>
              </div>
              <div className="flex gap-2 pl-26 items-center">
                <RiInstagramFill className="text-[21px]" />
                <a className="text-[12px]" href="">
                  https://www.instagram.com/beannbite.cafe/
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center">
              <p className="text-[14px]">DOWNLOAD OUR APP</p>
            </div>
            <div className="flex gap-4">
              <button className="cursor-pointer text-[11px] h-22 rounded-lg tracking-widest">
                <img src={footerLogo} className="h-13 rounded-lg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
