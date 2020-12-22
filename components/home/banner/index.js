import React from "react";
import { IoIosArrowDropleftCircle as LeftArrow } from "react-icons/io";
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";

const Banner = () => {
  return (
    <div className="container mx-auto pt-8 font-ubuntu">
      <div className="relative">
        <div className="flex justify-between ">
          <div className="absolute flex items-center justify-center h-full left-0 ml-16">
            <LeftArrow className="text-4xl text-white opacity-70 cursor-pointer" />
          </div>
          <div className="absolute flex items-center h-full right-0 mr-16">
            <RightArrow className="text-4xl text-white opacity-70 cursor-pointer" />
          </div>
        </div>

        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="text-center">
            <div className="text-white mb-8">SPECIAL OFFER</div>
            <div className="text-white text-4xl tracking-tight font-light mb-8">
              GET UP TO <span className="font-medium">50% OFF</span>
            </div>
            <button className="rounded bg-primary tracking-tight text-white py-3 px-8 text-lg">
              Check it out
            </button>
          </div>
        </div>

        <img src="/img/banner-image.png" alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
