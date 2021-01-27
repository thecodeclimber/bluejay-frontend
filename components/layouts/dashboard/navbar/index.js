import React from "react";
import { BsArrowRight as RightArrow } from "react-icons/bs";
import { HiOutlineBell as BellIcon } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-16 w-full shadow-grey-8 tracking-tight">
      <div className="flex items-center">
        <div className="text-3xl font-light text-dark mr-10">
          My <span className="font-medium">Profile</span>
        </div>
        <button className="flex items-center text-base font-normal whitespace-pre py-4 px-6 text-dark border border-dark rounded-3xl border-opacity-10 focus:outline-none">
          Go to marketplace
          <RightArrow className="text-xl ml-4" />
        </button>
      </div>
      <div className="flex">
        <img className="mr-6" src="/img/avatar-image2.svg" alt="avatar_image" />
        <div className="flex flex-col font-light opacity-75 mr-8">
          <span className="text-left text-sm">welcome</span>
          <span className="text-lg font-medium">Andrey Babak</span>
        </div>
        <div className="flex relative items-center border border-dark rounded-full border-opacity-10 p-3">
          <div className="absolute rounded-full p-1 bg-error right-8 top-8"></div>
          <BellIcon className="text-dark text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
