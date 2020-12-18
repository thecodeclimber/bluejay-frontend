import React, { useRef, useState } from "react";
import Image from "next/Image";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import Slider from "react-slick";

const ImagGallery = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const data = {};
  data.image = [
    {
      id: 1,
      img: "/img/img-1.svg",
    },
    {
      id: 2,
      img: "/img/img-2.svg",
    },
    {
      id: 3,
      img: "/img/img-3.svg",
    },
    {
      id: 4,
      img: "/img/img-4.svg",
    },
    {
      id: 5,
      img: "/img/img-1.svg",
    },
    {
      id: 6,
      img: "/img/img-2.svg",
    },
    {
      id: 7,
      img: "/img/img-3.svg",
    },
    {
      id: 8,
      img: "/img/img-4.svg",
    },
  ];

  const moveRight = () => {
    slider.current.slickNext();
  };

  return (
    <div className="pr-8 pt-10">
      <img className="max-w-300 pb-16" src="/img/img_1.svg" />
      <div className=" flex items-center justify-between pt-8">
        <div className="relative flex justify-between pr-6">
          <Slider
            {...settings}
            className="overflow-hidden max-w-300"
            ref={slider}
          >
            {data.image.map((dataImg, index) => (
              <Image key={index} src={dataImg.img} width="60" height="60" />
            ))}
          </Slider>
          <div className="absolute right-0 flex items-center h-full ">
            <SlideRightArrow
              className="text-lg z-20 text-grey cursor-pointer opacity-75"
              onClick={moveRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagGallery;
