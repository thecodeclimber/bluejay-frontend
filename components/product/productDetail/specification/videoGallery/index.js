import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import Slider from "react-slick";

const VideoGallery = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const data = {};
  data.videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      id: 6,
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
  ];

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
      <div className="relative flex items-center py-6 ">
        <Slider {...settings} className="max-w-300 pr-2 " ref={slider}>
          {data.videos.map((url, index) => (
            <div key={index} className="max-w-100 rounded-lg overflow-hidden">
              <ReactPlayer
                url={url.videoUrl}
                controls="true"
                width="100px"
                height="60px"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute right-0 flex items-center h-full">
          <SlideRightArrow
            className="text-lg z-20 text-grey cursor-pointer opacity-75"
            onClick={moveRight}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
