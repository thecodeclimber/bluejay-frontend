import React from "react";
import classnames from "classnames";
import { FiHeart as HearIcon } from "react-icons/fi";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";

const categoryList = () => {
  const data = {};
  data.productItems = [
    {
      id: 1,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
    {
      id: 2,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
    {
      id: 3,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
    {
      id: 4,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
    {
      id: 5,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
    {
      id: 6,
      totalPrice: "",
      count: "01",
      img: "/img/boltImg1.png",
      title: "High-Profile Socket Head",
      price: "$5.64",
      productId: "SDSHHZ143",
    },
  ];

  return (
    <div className="font-ubuntu w-full pl-5">
      <div className="flex  flex-wrap">
        {data.productItems &&
          data.productItems.length > 0 &&
          data.productItems.map((item, index) => (
            <div
              key={index}
              className="w-full mb-5"
            >
              <div className="flex justify-between bg-white border border-dark border-opacity-10 rounded px-6 py-5">
                <div className="flex">
                  <div className="mb-3">
                    <div className="inline bg-green text-xs font-normal text-white rounded-2xl px-3 py-1 h-5">
                      New
                    </div>
                    <img src={item.img} width="70px" />
                  </div>
                  <div className="font-medium text-center text-dark text-xl mb-3 whitespace-pre-line leading-7">
                    {item.title}
                  </div>
                  <div className="text-primary text-center font-normal text-lg mb-5">
                    {item.price}
                  </div>
                  <div>
                    <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10 mr-6 leading-5">
                      <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4">
                        <SubtractIcon className="text-dark text-base" />
                      </div>
                      <div className="text-base text-dark min-w-60 text-center">{item.count}</div>
                      <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4">
                        <PlusIcon className="text-dark text-base" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-3 px-6 leading-7">
                      <span className="mr-4">
                        <img src="/img/add-to-cart.svg" alt="cart" className="text-base" />
                      </span>
                      <span className="font-medium text-base tracking-tight">
                        Add to Cart
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default categoryList;
