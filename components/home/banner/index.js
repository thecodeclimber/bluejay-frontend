import React, { useRef, useState } from "react";
import { IoIosArrowDropleftCircle as LeftArrow } from "react-icons/io";
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import Slider from "react-slick";
import classnames from "classnames";

const data = [
  {
    title: "SPECIAL OFFER",
    description: " GET UP TO <b>50% OFF</b>",
    img: "/img/banner-image.png",
  },
  {
    title: "SPECIAL OFFER",
    description: " GET UP TO <b>30% OFF</b> ",
    img: "/img/banner-image.png",
  },
  {
    title: "SPECIAL OFFER",
    description: " GET UP TO <b>20% OFF</b>",
    img: "/img/banner-image.png",
  },
  {
    title: "SPECIAL OFFER",
    description: " GET UP TO <b>30% OFF</b> ",
    img: "/img/banner-image.png",
  },
  {
    title: "SPECIAL OFFER",
    description: " GET UP TO <b>50% OFF</b> ",
    img: "/img/banner-image.png",
  },
];

const Banner = () => {
  const slider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  const moveLeft = () => {
    slider.current.slickPrev();
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  const handleSlideGoTo = (index) => {
    slider.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <div className="container mx-auto pt-8 font-ubuntu mb-16">
      <div className="relative w-full">
        <div className="absolute z-30 flex pb-20 h-full items-center left-0 ml-16 focus:outline-none">
          <LeftArrow
            className="text-4xl text-white opacity-70 cursor-pointer focus:outline-none"
            onClick={moveLeft}
          />
        </div>
        <div className="absolute z-30 pb-20 flex h-full items-center right-0 mr-16 focus:outline-none">
          <RightArrow
            className="text-4xl text-white opacity-70 cursor-pointer focus:outline-none"
            onClick={moveRight}
          />
        </div>
        <div className="h-full w-full ">
          <Slider {...settings} className="w-full" ref={slider}>
            {data.length > 0 &&
              data.map((dataItem, index) => (
                <div className="h-full w-full" key={index}>
                  <div className="relative flex justify-center">
                    <img
                      className="min-h-300 h-full w-full"
                      src={dataItem.img}
                      alt="banner-image"
                    />
                    <div className="absolute h-full w-full top-0 text-center flex justify-center items-center">
                      <div className="p-40">
                        <div className="text-white pb-4 tracking-widest text-xl font-ubuntu font-medium">
                          {dataItem.title}
                        </div>
                        <div
                          className="text-white text-4xl tracking-tight font-light font-ubuntu pb-8"
                          dangerouslySetInnerHTML={{
                            __html: `${dataItem.description}`,
                          }}
                        ></div>
                        <button className="rounded bg-primary tracking-tight text-white py-2 px-8 text-lg focus:outline-none">
                          Check it out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          <div className="pt-10 z-30 flex justify-center items-center">
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <div
                    className={classnames("  rounded mx-4 cursor-pointer", {
                      "w-3.5 h-3.5 bg-primary opacity-100":
                        activeSlide === index,
                      "w-2 h-2 bg-dark opacity-25": activeSlide !== index,
                    })}
                    onClick={() => handleSlideGoTo(index)}
                    key={index}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
