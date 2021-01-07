import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import { IoMdPlay as PlayIcon } from "react-icons/io";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    videoUrl: "/img/video-image.svg",
  },
  {
    id: 2,
    videoUrl: "/img/video-image.svg",
  },
  {
    id: 3,
    videoUrl: "/img/video-image.svg",
  },
  {
    id: 4,
    videoUrl: "/img/video-image.svg",
  },
  {
    id: 5,
    videoUrl: "/img/video-image.svg",
  },
  {
    id: 6,
    videoUrl: "/img/video-image.svg",
  },
];

const ProductVideos = () => {
  const [videos] = useState(data);

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  return (
    <div className="max-w-310">
      <div className="rounded-lg overflow-hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls
          width="315px"
          height="180px"
        />
      </div>
      <div className="relative overflow-hidden flex items-center py-6 ">
        <Slider {...settings} className="max-w-300 " ref={slider}>
          {videos.length > 0 &&
            videos.map((item, index) => (
              <div key={index} className="relative max-w-100 overflow-hidden">
                <div className="absolute flex justify-center items-center top-0 w-full h-full cursor-pointer ">
                  <PlayIcon className="text-base text-white" />
                </div>
                <img
                  src={item.videoUrl}
                  width="90px"
                  height="60px"
                  alt="bolt-video"
                />
              </div>
            ))}
        </Slider>
        <div className="absolute right-0 flex items-center h-full">
          <SlideRightArrow
            className="text-lg z-20 text-dark cursor-pointer opacity-25"
            onClick={moveRight}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
