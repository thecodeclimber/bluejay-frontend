import React, { useRef, useState } from "react";
import { array, bool, func, number } from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import WishlistIcon from "../wishlistIcon/index";
import Slider from "react-slick";
import {
  IoIosArrowForward as SlideRightArrow,
  IoIosArrowBack as SlideLeftArrow,
} from "react-icons/io";
import Drawer from "../../elements/drawer";
import CartAdded from "../../cart/cartAdded";
import ProductQuantity from "../productQuantity";
import AddToCart from "../addToCart";
import ProductLoader from "../productLoader";

const ProductSlider = (props) => {
  const {
    dots,
    products,
    isLoading,
    handleProducts,
    displayProducts,
    loaderLength,
  } = props || {};
  const slider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCartDrawer, setIsCartDrawer] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      products.length > displayProducts ? displayProducts : products.length,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };
  const loaderSettings = {
    ...settings,
    slidesToShow: loaderLength,
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

  const handleCart = ({ isOpenDrawer = false }) => {
    setIsCartDrawer(isOpenDrawer);
  };

  const closeCartDrawer = () => {
    setIsCartDrawer(false);
  };

  return (
    <div className="container mx-auto pb-6 tracking-tight">
      <Drawer isOpen={isCartDrawer} closeDrawer={closeCartDrawer}>
        <CartAdded closeCartDrawer={closeCartDrawer} isNewItem={true} />
      </Drawer>
      <div className="relative">
        {isLoading && (
          <Slider {...loaderSettings} className="overflow-hidden" ref={slider}>
            {Array(6)
              .fill()
              .map((d, index) => (
                <div className="py-10 px-4" key={index}>
                  <ProductLoader />
                </div>
              ))}
          </Slider>
        )}
        {!isLoading && (
          <>
            {products.length === 0 && (
              <div className="text-dark text-center mt-6">
                No data available
              </div>
            )}
            {products.length > displayProducts && (
              <>
                <div className="absolute -left-30 flex items-center h-full pb-32 mt-8">
                  <SlideLeftArrow
                    className="text-2xl z-20 text-dark cursor-pointer"
                    onClick={moveLeft}
                  />
                </div>
                <div className="absolute -right-30 flex items-center h-full pb-32 mt-8">
                  <SlideRightArrow
                    className="text-2xl z-20 text-dark cursor-pointer"
                    onClick={moveRight}
                  />
                </div>
              </>
            )}
            <div className="container mx-auto flex justify-between">
              {products.length > 0 && (
                <Slider {...settings} className="overflow-hidden" ref={slider}>
                  {products.map((product, index) => (
                    <div
                      className="mr-6 focus:outline-none py-10 h-full"
                      key={index}
                    >
                      <div
                        className={classnames(
                          "max-w-310 border h-full rounded border-dark border-opacity-10 mx-4 lg:px-5 bg-white hover:shadow-grey-8 hover:border-white"
                        )}
                      >
                        <div className="py-6 flex-col justify-between h-full">
                          <div className="h-full">
                            <div className="relative flex justify-between -mb-6 h-full">
                              <div className="bg-green text-xs flex items-center font-normal text-white rounded-2xl h-full px-3 h-5">
                                New
                              </div>
                              <div>
                                <WishlistIcon product={product} />
                              </div>
                            </div>
                            <img
                              className="m-auto mb-5"
                              src={
                                product.primary_image?.url_thumbnail ||
                                "/img/no-image.png"
                              }
                              alt={`img-${index}`}
                            />
                            <div className="font-medium text-center text-xl mb-3 whitespace-pre-line tracking-tight leading-7">
                              <Link
                                href="/product/[slug]"
                                as={`/product${product?.custom_url?.url}${product?.id}`}
                              >
                                <a className="text-dark hover:text-primary">
                                  {product.name}
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="text-primary  text-center font-normal text-lg mb-4 tracking-tight">
                              $
                              {(product?.price && product.price.toFixed(2)) ||
                                0}
                            </div>
                            <div className="mb-4">
                              <ProductQuantity
                                products={products}
                                product={product}
                                handleProducts={handleProducts}
                              />
                            </div>
                            <AddToCart
                              product={product}
                              handleData={handleCart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
            {dots && (
              <div className="flex justify-center items-center">
                {products.length > 0 &&
                  products.map((product, index) => {
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
            )}
          </>
        )}
      </div>
    </div>
  );
};

ProductSlider.defaultProps = {
  dots: false,
  isLoading: false,
  products: [],
  handleProducts: () => {},
  displayProducts: 4,
  loaderLength: 4,
};

ProductSlider.propTypes = {
  dots: bool,
  products: array,
  isLoading: bool,
  handleProducts: func,
  displayProducts: number,
  loaderLength: number,
};

export default ProductSlider;
