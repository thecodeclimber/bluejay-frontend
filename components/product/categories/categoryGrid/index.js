import React from "react";
import classnames from "classnames";
import { FiHeart as HearIcon, FiPlus as PlusIcon } from "react-icons/fi/index";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri/index";
import Pagination from "../../../elements/pagination";

const categoryGrid = () => {
  const data = {};
  data.productItems = [
    {
      id: 1,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg4.png",
      title: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 2,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg3.png",
      title: "High-Profile Socket Head Screws",
      price: "$5.64",
    },
    {
      id: 3,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg1.png",
      title: "Conical Plastic Anchors",
      price: "$5.64",
    },
    {
      id: 4,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg4.png",
      title: "0-80 Alloy Steel \n Coarse Thread",
      price: "$5.64",
    },
    {
      id: 5,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg3.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 6,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg1.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },

    {
      id: 4,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg4.png",
      title: "0-80 Alloy Steel \n Coarse Thread",
      price: "$5.64",
    },
    {
      id: 5,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg3.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 6,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg1.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },
  ];

  return (
    <div className="font-ubuntu w-full pl-5 pb-12">
      <div className="flex flex-wrap">
        {data.productItems &&
          data.productItems.length > 0 &&
          data.productItems.map((item, index) => {
            return (
              <div
                key={index}
                className={classnames(
                  "sm:w-full md:w-1/2 px-3 lg:w-1/3 mb-6 pb-3",
                  {
                    "lg:pl-0 lg:pr-6": index % 3 === 0,
                    "lg:pr-0 lg:pl-6": (index + 1) % 3 === 0,
                  }
                )}
              >
                <div className="h-full flex flex-col justify-between bg-white border border-dark border-opacity-10 rounded px-6 py-5">
                  <div>
                    <div className="flex justify-between">
                      <div className="bg-green text-xs font-normal text-white rounded-2xl px-3 h-5 h-full">
                        New
                      </div>
                      <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                    </div>
                    <div className="max-w-250 mb-3">
                      <img className="w-full" src={item.img} />
                    </div>
                    <div className="font-medium text-center text-dark text-xl mb-3 whitespace-pre-line leading-7">
                      {item.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-primary text-center font-normal text-lg mb-5">
                      {item.price}
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10">
                        <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4">
                          <SubtractIcon className="text-black" />
                        </div>
                        <div className="text-dark">
                          {item.count < 10 && 0}
                          {item.count}
                        </div>
                        <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4">
                          <PlusIcon className="text-dark" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-4">
                      <span className="mr-4">
                        <img src="/img/add-to-cart.svg" alt="cart" />
                      </span>
                      <span className="font-medium font-base tracking-tight">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination />
    </div>
  );
};

export default categoryGrid;
