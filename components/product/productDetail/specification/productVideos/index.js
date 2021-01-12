import React, { useRef, useState } from "react";
import { shape } from "prop-types";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import ReactPlayer from "react-player/lazy";
import Slider from "react-slick";

const ProductVideos = (props) => {
  const { productDetail } = props;
  const [currentVideo, setCurrentVideo] = useState({});
  const productVideosLength =
    (productDetail?.videos && productDetail.videos.length) || 0;

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: productVideosLength > 3 ? 3 : productVideosLength,
    slidesToScroll: 1,
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  const handleVideo = (id) => {
    const getVideos = [...productDetail.videos];
    const video = getVideos.find((video) => video.id === id);
    setCurrentVideo(video);
  };

  return (
    <div className="max-w-350">
      <div className="rounded-lg overflow-hidden">
        {productVideosLength > 0 && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${
              currentVideo?.video_id || productDetail.videos[0].video_id
            }`}
            controls={true}
            light={currentVideo?.video_id ? false : true}
            width="350px"
            height="180px"
            playing={currentVideo?.video_id}
          />
        )}
      </div>
      <div className="relative overflow-hidden flex items-center py-6 ">
        <div className="w-full">
          {productVideosLength > 0 && (
            <Slider {...settings} className="max-w-350 pr-4" ref={slider}>
              {productDetail.videos.map((video, index) => (
                <div className="focus:outline-none" key={index}>
                  <div
                    className="rounded-lg overflow-hidden focus:outline-none"
                    onClick={() => handleVideo(video.id)}
                  >
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${video.video_id}`}
                      light={true}
                      width="100px"
                      height="57px"
                      className="rounded-lg overflow-hidden pointer-events-none focus:outline-none"
                      playing={false}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
        {productVideosLength > 3 && (
          <div className="absolute right-0 flex items-center h-full">
            <SlideRightArrow
              className="text-lg z-20 text-dark cursor-pointer opacity-25"
              onClick={moveRight}
            />
          </div>
        )}
      </div>
    </div>
  );
};

ProductVideos.defaultProps = {
  productDetail: {},
};

ProductVideos.propTypes = {
  productDetail: shape({}),
};

export default ProductVideos;
