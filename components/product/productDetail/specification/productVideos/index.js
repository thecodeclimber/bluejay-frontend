import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/watch?v=jNgP6d9HraI",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/watch?v=jNgP6d9HraI",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
  },
];

const ProductVideos = () => {
  const [videos] = useState(data);
  const [videoUrl, setVideoUrl] = useState(data[0].videoUrl);

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

  const handleVideo = (id) => {
    console.log(id);
    const getVideos = [...videos];
    const video = getVideos.find((video) => video.id === id);
    console.log(video);
    setVideoUrl(video.videoUrl);
  };

  return (
    <div className="max-w-310">
      <div className="rounded-lg overflow-hidden">
        <ReactPlayer url={videoUrl} controls width="315px" height="180px" />
      </div>
      <div className="relative overflow-hidden flex items-center py-6 ">
        <Slider {...settings} className="max-w-300 " ref={slider}>
          {videos.length > 0 &&
            videos.map((item, index) => (
              <div
                key={index}
                className="max-w-100 rounded-lg overflow-hidden"
                onClick={() => handleVideo(item.id)}
              >
                <ReactPlayer url={item.videoUrl} width="90px" height="60px" />
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
