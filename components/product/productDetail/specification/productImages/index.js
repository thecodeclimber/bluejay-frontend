import React, { useRef, useState } from "react";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import Slider from "react-slick";
import classnames from "classnames";

const data = [
  {
    id: 1,
    img: "/img/bolt-image-1.svg",
  },
  {
    id: 2,
    img: "/img/bolt-image-2.svg",
  },
  {
    id: 3,
    img: "/img/bolt-image-3.svg",
  },
  {
    id: 4,
    img: "/img/bolt-image-4.svg",
  },
  {
    id: 5,
    img: "/img/bolt-image-1.svg",
  },
  {
    id: 6,
    img: "/img/bolt-image-2.svg",
  },
  {
    id: 7,
    img: "/img/bolt-image-3.svg",
  },
  {
    id: 8,
    img: "/img/bolt-image-4.svg",
  },
];

const ProductImages = () => {
  const [images] = useState(data);
  const [imageUrl, setImageUrl] = useState(data[0].img);

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  const handleImage = (id) => {
    const getImages = [...images];
    const image = getImages.find((image) => image.id === id);
    setImageUrl(image.img);
  };

  return (
    <div className="max-w-310 mr-8 py-8">
      <div className="relative group cursor-pointer">
        <div className="absolute h-full w-full z-30 flex items-center justify-center top-0 opacity-0 hover:opacity-100">
          <img src="/img/zoom.svg" alt="zoom-image" />
        </div>
        <img
          className="z-20 group-hover:opacity-25"
          src={imageUrl}
          width="350px"
          height="260px"
          alt="bolt-image"
        />
      </div>
      <div className="relative flex mt-16">
        <Slider {...settings} className="overflow-hidden " ref={slider}>
          {images.length > 0 &&
            images.map((item, index) => (
              <div
                key={index}
                className={classnames(
                  "max-w-60  cursor-pointer focus:outline-none opacity-50 hover:opacity-100 ",
                  {
                    "opacity-100 border-b-2 border-primary shadow-grey-8":
                      imageUrl === item.img,
                  },
                  {
                    "opacity-100 border border-dark border-opacity-10":
                      imageUrl !== item.img,
                  }
                )}
              >
                <img
                  className={classnames(
                    "cursor-pointer focus:outline-none opacity-50  hover:opacity-100",
                    { "opacity-100": imageUrl === item.img }
                  )}
                  src={item.img}
                  width="60px"
                  height="60px"
                  onClick={() => handleImage(item.id)}
                />
              </div>
            ))}
        </Slider>
        <div className="absolute -right-8 flex items-center h-full ">
          <SlideRightArrow
            className="text-lg z-20 text-dark  cursor-pointer opacity-25"
            onClick={moveRight}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
