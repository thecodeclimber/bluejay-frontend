import React, { useRef, useState } from "react";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import Slider from "react-slick";
import { Transition } from "@headlessui/react";
import classnames from "classnames";
import ProductImageSlider from "../../productImageSlider";

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
  const [selectedImage, setSelectedImage] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

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
    const getImage = images.find((image) => image.id === id);
    setSelectedImage(getImage);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-310 mr-8 py-8">
      <div className="relative group cursor-pointer">
        <div
          className="absolute h-full w-full z-30 flex items-center justify-center top-0 opacity-0 hover:opacity-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/img/zoom-icon.png" alt="zoom-image" />
        </div>
        <img
          className="z-20 group-hover:opacity-25"
          src={selectedImage.img}
          width="350px"
          height="260px"
          alt="bolt-image"
        />
      </div>
      <div className="relative flex mt-16 ">
        <Slider {...settings} className="overflow-hidden z-10" ref={slider}>
          {images.length > 0 &&
            images.map((item, index) => (
              <div
                key={index}
                className={classnames(
                  "max-w-60  cursor-pointer focus:outline-none opacity-50 hover:opacity-100  z-10 ",
                  {
                    "opacity-100 border-b-2 border-primary shadow-grey-8":
                      selectedImage.img === item.img,
                  },
                  {
                    "opacity-100 border border-dark border-opacity-10":
                      selectedImage.img !== item.img,
                  }
                )}
              >
                <img
                  className={classnames(
                    "cursor-pointer focus:outline-none opacity-50  hover:opacity-100",
                    { "opacity-100": selectedImage.img === item.img }
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
      {isOpen && (
        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <ProductImageSlider
            selectedImage={selectedImage}
            productImages={images}
            closeModal={closeModal}
          />
        </Transition>
      )}
    </div>
  );
};

export default ProductImages;
