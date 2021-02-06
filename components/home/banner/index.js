import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDropleftCircle as LeftArrow } from "react-icons/io";
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import Slider from "react-slick";
import classnames from "classnames";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";

const Banner = () => {
  const slider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannersData, setBannersData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  useEffect(() => {
    const bannerUrl = `${URLS.NEXT.BANNER.BANNERS}`;
    httpGet(bannerUrl, {
      traceName: "get_banners",
    }).then((res) => {
      if (res.errors && Object.keys(res.errors).length > 0) {
        alert(res.errors[Object.keys(res.errors)[0]]);
      } else {
        setBannersData(res);
      }
    });
  }, []);

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
    <div className="container mx-auto pt-6 font-ubuntu mb-16">
      <div className="relative w-full">
        <div className="absolute z-10 flex pb-20 h-full items-center left-0 ml-16 focus:outline-none">
          <LeftArrow
            className="text-4xl text-white opacity-70 cursor-pointer focus:outline-none"
            onClick={moveLeft}
          />
        </div>
        <div className="absolute z-10 pb-20 flex h-full items-center right-0 mr-16 focus:outline-none">
          <RightArrow
            className="text-4xl text-white opacity-70 cursor-pointer focus:outline-none"
            onClick={moveRight}
          />
        </div>
        <div className="h-full w-full ">
          <Slider {...settings} className="w-full" ref={slider}>
            {bannersData.length > 0 &&
              bannersData.map((dataItem, index) => (
                <div className="h-full w-full" key={index}>
                  <div className="relative flex justify-center">
                    {console.log(dataItem.content)}
                    <div
                      className="text-white text-4xl tracking-tight font-light font-ubuntu pb-8 rounded-lg overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: `${dataItem.content}`,
                      }}
                    ></div>
                    <div className="absolute h-full w-full top-0 text-center flex justify-center items-center">
                      <div className="p-40">
                        <div className="text-white pb-4 tracking-widest text-xl font-ubuntu font-medium">
                          SPECIAL OFFER
                        </div>
                        <div
                          className="text-white text-4xl tracking-tight font-light font-ubuntu pb-8"
                          dangerouslySetInnerHTML={{
                            __html: `${dataItem.name}`,
                          }}
                        ></div>
                        <button className="rounded bg-primary tracking-tight text-white py-2 px-8 text-lg focus:outline-none">
                          <a href="https://www.google.com/" target="_blank">
                            {" "}
                            Check it out
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          <div className="pt-10 z-30 flex justify-center items-center">
            {bannersData.length > 0 &&
              bannersData.map((item, index) => {
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
