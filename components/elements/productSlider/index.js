import React, { useRef, useState, useContext } from "react";
import { array, bool, func, number } from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import WishlistIcon from "../wishlistIcon/index";
import Slider from "react-slick";
import {
  IoIosArrowForward as SlideRightArrow,
  IoIosArrowBack as SlideLeftArrow,
} from "react-icons/io";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon, FiHeart as HeartIcon } from "react-icons/fi";
import { setCart } from "../../../hooks/cart/actions";
import { Context } from "../../../hooks/store";
import {
  formattingCartData,
  getFormattedCartParams,
  setCartLocalStorage,
} from "../../../utils/helper";
import { httpPost } from "../../../utils/https";
import Drawer from "../../elements/drawer";
import CartAdded from "../../cart/cartAdded";
import URLS from "../../../utils/urls";

const ProductSlider = (props) => {
  const { dots, products, isLoading, handleProducts, displayProducts } =
    props || {};
  const slider = useRef(null);
  const [loadingProductId, setLoadingProductId] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCartDrawer, setIsCartDrawer] = useState(false);
  const { dispatchCart } = useContext(Context);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      products.length > displayProducts ? displayProducts : products.length,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
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

  const decreaseQuantity = (id) => {
    const productsData = [...products];
    const index = productsData.findIndex((product) => product.id === id);
    productsData[index].quantity =
      productsData[index].quantity > 1 ? productsData[index].quantity - 1 : 1;
    handleProducts(productsData);
  };

  const increaseQuantity = (id) => {
    const productsData = [...products];
    const index = productsData.findIndex((product) => product.id === id);
    productsData[index].quantity = productsData[index].quantity + 1;
    handleProducts(productsData);
  };

  const addToCart = (product) => {
    const params = getFormattedCartParams(product);
    setLoadingProductId(product.id);
    httpPost(URLS.NEXT.CART.ADD, params, {
      traceName: "add_to_cart",
    }).then(
      (res) => {
        const { errors, cart } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(cart?.data?.id, cart?.data?.updated_time);
          const cartData = formattingCartData(cart?.data);
          dispatchCart(setCart(cartData));
          openCartDrawer();
        }
        setLoadingProductId("");
      },
      (err) => {
        setLoadingProductId("");
      }
    );
  };

  const openCartDrawer = () => {
    setIsCartDrawer(true);
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
          <div className="text-center w-full mt-10">Loading...</div>
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
                  {products.map((product, index) => {
                    return (
                      <div
                        className="mr-6 focus:outline-none py-10 h-full"
                        key={index}
                      >
                        <div
                          className={classnames(
                            "max-w-310  border h-full rounded border-dark border-opacity-10 mx-4 lg:px-5 bg-white hover:shadow-grey-8 hover:border-white"
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
                                src={product.primary_image?.url_thumbnail}
                                alt={`img-${index}`}
                              />
                              <div className="font-medium text-center text-xl mb-3 whitespace-pre-line tracking-tight leading-7">
                                <Link
                                  href="/product/[id]"
                                  as={`/product/${product.id}`}
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
                              <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10">
                                <div
                                  onClick={() => decreaseQuantity(product.id)}
                                  className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4"
                                >
                                  <SubtractIcon className="text-dark" />
                                </div>
                                <div>
                                  {product.quantity < 10 && 0}
                                  {product.quantity}
                                </div>
                                <div
                                  onClick={() => increaseQuantity(product.id)}
                                  className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4"
                                >
                                  <PlusIcon className="text-dark" />
                                </div>
                              </div>
                              <div
                                onClick={() =>
                                  loadingProductId !== product.id &&
                                  addToCart(product)
                                }
                                className={classnames(
                                  "flex items-center justify-center cursor-pointer text-white bg-primary rounded py-4",
                                  {
                                    "opacity-70 cursor-not-allowed":
                                      loadingProductId === product.id,
                                  }
                                )}
                              >
                                <img
                                  className="mr-4"
                                  src="/img/add-to-cart.svg"
                                  alt="cart"
                                />
                                <span className="font-medium font-base tracking-tight">
                                  {loadingProductId === product.id
                                    ? "Loading..."
                                    : "Add to Cart"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
};

ProductSlider.propTypes = {
  dots: bool,
  products: array,
  isLoading: bool,
  handleProducts: func,
  displayProducts: number,
};

export default ProductSlider;
