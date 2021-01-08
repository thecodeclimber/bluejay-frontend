import React, { useRef, useState, useEffect } from "react";
import { array, func, shape } from "prop-types";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import Slider from "react-slick";

const ProductImageSlider = (props) => {
  const { closeModal, productImages, selectedImage, productDetail } = props;
  const [data, setData] = useState([]);
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const moveLeft = () => {
    slider.current.slickPrev();
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  useEffect(() => {
    const productImage = productImages.find(
      (image) => image.id === selectedImage.id
    );
    const restProductImages = productImages.filter(
      (image) => image.id !== selectedImage.id
    );
    setData([productImage, ...restProductImages]);
  }, []);

  return (
    <div className="bg-dark z-30 fixed inset-0 w-full h-full bg-opacity-90 justify-center items-center overflow-scroll ">
      {data.length > 0 && (
        <div className="py-8 px-16 overflow-y-hidden">
          <div className="flex items-center ">
            <div className="font-ubuntu bg-white rounded shadow-grey-8 py-5 px-8 w-full text-dark m-auto ">
              <div className="flex w-full items-center justify-between">
                <div className="text-dark font-medium text-3xl font-ubuntu">
                  {productDetail?.name}
                </div>
                <div className="flex justify-end">
                  <CloseIcon
                    className="text-dark text-opacity-50 text-xl cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
              </div>
              <hr className="opacity-10 bg-dark mt-5" />
              <div className="relative w-full ">
                <div className="absolute z-30 flex pb-40 h-full items-center left-0 ml-4">
                  <img
                    src="/img/left-arrow.svg"
                    className="text-dark opacity-25 cursor-pointer"
                    onClick={moveLeft}
                  />
                </div>
                <div className="absolute z-30 pb-40 flex h-full items-center right-0 mr-4">
                  <img
                    src="/img/right-arrow.svg"
                    className="text-dark opacity-25 cursor-pointer"
                    onClick={moveRight}
                  />
                </div>
                <div className="h-full w-full">
                  {data && data.length > 0 && (
                    <Slider {...settings} className="w-full" ref={slider}>
                      {data.map((dataItem, index) => (
                        <div key={index} className="focus:outline-none">
                          <div className="relative flex justify-center pt-6">
                            <img
                              width="600px"
                              height="360px"
                              src={dataItem.url_standard}
                              alt={`img-${index}`}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
                <hr className="opacity-10 bg-dark mt-5 mb-10" />
                <div className="flex justify-center items-center pb-4">
                  <div className="text-dark font-medium text-2xl tracking-tight mr-8">
                    ${productDetail?.price}
                  </div>
                  <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-4 px-10">
                    <img
                      className="mr-4"
                      src="/img/add-to-cart.svg"
                      alt="cart"
                    />
                    <span className="font-medium font-base tracking-tight">
                      Add to Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductImageSlider.defaultProps = {
  productDetail: {},
  productImages: [],
  selectedImage: {},
  closeModal: () => {},
};

ProductImageSlider.propTypes = {
  closeModal: func,
  productDetail: shape({}),
  productImages: array,
  selectedImage: shape({}),
};

export default ProductImageSlider;
