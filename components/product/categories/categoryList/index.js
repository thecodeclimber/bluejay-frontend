import React from "react";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon, FiHeart as HearIcon } from "react-icons/fi";
import Pagination from "../../../elements/pagination";

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
    <div className="font-ubuntu w-full pl-5 pb-12">
      <div className="flex  flex-wrap mb-3">
        {data.productItems &&
          data.productItems.length > 0 &&
          data.productItems.map((item, index) => (
            <div key={index} className="w-full mb-5">
              <div className="relative block lg:flex justify-between bg-white border border-dark border-opacity-05 hover:border-opacity-0 hover:shadow-grey-8  rounded px-4 py-5">
                <div className="absolute left-0 top-0 ml-2 mt-2 flex items-center inline bg-green text-xs font-normal text-white rounded-2xl px-3 py-1 h-5">
                  New
                </div>
                <div className="flex items-center py-1 mb-3 lg:mb-0">
                  <div className="mr-4">
                    <img src={item.img} width="70px" />
                  </div>
                  <div>
                    <div className="text-dark font-light text-xs leading-5 tracking-tight">
                      ID: {item.productId}
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium text-center text-dark text-xl mr-6 leading-7 tracking-tight">
                        {item.title}
                      </div>
                      <div className="text-primary text-center font-normal text-lg mr-6 tracking-tight">
                        {item.price}
                      </div>
                      <div className="mr-6">
                        <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <div className="flex justify-between items-center  border rounded border-dark border-opacity-10 mr-4 leading-5">
                      <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4">
                        <SubtractIcon className="text-dark text-base" />
                      </div>
                      <div className="text-base text-dark min-w-60 text-center">
                        {item.count}
                      </div>
                      <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4">
                        <PlusIcon className="text-dark text-base" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-3 px-6 leading-7">
                      <span className="mr-4 w-5">
                        <img
                          src="/img/add-to-cart.svg"
                          alt="cart"
                          className="text-base"
                        />
                      </span>
                      <span className="font-medium text-base tracking-tight whitespace-pre">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default categoryList;
