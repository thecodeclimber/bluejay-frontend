import React, { useRef, useState, useEffect } from "react";
import { shape } from "prop-types";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import { Transition } from "@headlessui/react";
import Slider from "react-slick";
import classnames from "classnames";
import ProductImageSlider from "./productImageSlider";

const ProductImages = (props) => {
  const { productDetail } = props;
  const productImagesLength =
    (productDetail?.images && productDetail.images.length) || 0;
  const [selectedImage, setSelectedImage] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: productImagesLength > 4 ? 4 : productImagesLength,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (productImagesLength > 0 && Object.keys(selectedImage).length === 0) {
      setSelectedImage(productDetail.images[0]);
    }
  });

  const moveRight = () => {
    slider.current.slickNext();
  };

  const handleImage = (id) => {
    const getImage = productDetail.images.find((image) => image.id === id);
    setSelectedImage(getImage);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-350 py-8">
      <div className="relative group cursor-pointer">
        <div
          className="absolute h-full w-full z-10 flex items-center justify-center top-0 opacity-0 hover:opacity-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/img/zoom-icon.png" alt="zoom-image" />
        </div>
        <img
          className="z-20 group-hover:opacity-25"
          src={selectedImage.url_standard}
          width="350px"
          height="260px"
          alt="img"
        />
      </div>
      <div className="relative flex mt-16">
        <div className="w-full">
          {productImagesLength > 0 && (
            <Slider {...settings} className="overflow-hidden z-10" ref={slider}>
              {productDetail.images.map((item, index) => (
                <div
                  key={index}
                  className={classnames(
                    "max-w-60 min-w-60 cursor-pointer focus:outline-none opacity-50 hover:opacity-100  z-10",
                    {
                      "opacity-100 border-b-2 border-primary shadow-grey-8":
                        selectedImage.url_standard === item.url_standard,
                    },
                    {
                      "opacity-100 border border-dark border-opacity-10":
                        selectedImage.url_standard !== item.url_standard,
                    }
                  )}
                >
                  <img
                    className={classnames(
                      "cursor-pointer focus:outline-none opacity-50  hover:opacity-100",
                      {
                        "opacity-100":
                          selectedImage.url_standard === item.url_standard,
                      }
                    )}
                    src={item.url_standard}
                    width="60px"
                    height="60px"
                    onClick={() => handleImage(item.id)}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        {productImagesLength > 4 && (
          <div className="absolute -right-8 flex items-center h-full ">
            <SlideRightArrow
              className="text-lg z-20 text-dark  cursor-pointer opacity-25"
              onClick={moveRight}
            />
          </div>
        )}
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
            productImages={productDetail?.images || []}
            closeModal={closeModal}
            productDetail={productDetail}
          />
        </Transition>
      )}
    </div>
  );
};

ProductImages.defaultProps = {
  productDetail: {},
};

ProductImages.propTypes = {
  productDetail: shape({}),
};

export default ProductImages;
