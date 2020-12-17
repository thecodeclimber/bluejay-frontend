import React, { useRef, useState } from "react";
import classnames from "classnames";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai/index";
import { FiHeart as HeartIcon } from "react-icons/fi/index";
import Slider from "react-slick";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io/index";
import { IoIosArrowBack as SlideLeftArrow } from "react-icons/io/index";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri/index";
import { FiPlus as PlusIcon } from "react-icons/fi";

const customerPurchase = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const data = {};
  data.purchase = [
    {
      id: 1,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 2,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg2.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },
    {
      id: 3,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg3.png",
      title: "Conical Plastic Anchors",
      price: "$5.64",
    },
    {
      id: 4,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg4.png",
      title: "0-80 Alloy Steel \n Coarse Thread",
      price: "$5.64",
    },
    {
      id: 5,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 6,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg2.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },
    {
      id: 7,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg3.png",
      title: "Conical Plastic Anchors",
      price: "$5.64",
    },
    {
      id: 8,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg4.png",
      title: "0-80 Alloy Steel \n Coarse Thread",
      price: "$5.64",
    },
  ];

  const moveLeft = () => {
    slider.current.slickPrev();
  };

  const moveRight = () => {
    slider.current.slickNext();
  };

  return (
    <div className="container mx-auto pb-6">
      <div className="flex justify-center text-3xl text-dark font-light whitespace-pre mb-12">
        Customers <span className="font-medium">Also Purchased</span>
      </div>
      <div className="relative">
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
        <div className="container mx-auto flex justify-between">
          <Slider {...settings} className="overflow-hidden" ref={slider}>
            {data.purchase.map((purchaseItem, index) => (
              <div className="mr-6 focus:outline-none h-full" key={index}>
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
                        <HeartIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                      </div>
                      <img className="m-auto mb-5" src={purchaseItem.img} />
                      <div className=" font-medium text-center text-dark text-xl mb-3 whitespace-pre-line leading-7">
                        {purchaseItem.title}
                      </div>
                    </div>

                    <div>
                      <div className="text-primary  text-center font-normal text-lg mb-4">
                        {purchaseItem.price}
                      </div>
                      <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10">
                        <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4">
                          <SubtractIcon className="text-dark" />
                        </div>
                        <div>{purchaseItem.count}</div>
                        <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4">
                          <PlusIcon className="text-dark" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-4">
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default customerPurchase;
