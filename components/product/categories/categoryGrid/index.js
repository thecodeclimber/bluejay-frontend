import React from "react";
import { FiHeart as HearIcon } from "react-icons/fi/index";

const categoryGrid = () => {
  const data = {};
  data.productItems = [
    {
      id: 1,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg1.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 2,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg2.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },
    {
      id: 3,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg3.png",
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
      img: "/img/boltImg1.png",
      title: "Carriage Bolts 1/4-20 \n UNC Steel Zinc",
      price: "$5.64",
    },
    {
      id: 6,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg2.png",
      title: "High-Profile Socket \n Head Screws",
      price: "$5.64",
    },
    {
      id: 7,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg3.png",
      title: "Conical Plastic Anchors",
      price: "$5.64",
    },
    {
      id: 8,
      totalPrice: "",
      count: 1,
      img: "/img/boltImg4.png",
      title: "0-80 Alloy Steel \n Coarse Thread",
      price: "$5.64",
    },
  ];

  return (
    <div className="font-ubuntu w-full pl-5">
      <div className="flex justify-between flex-wrap">
        {data.productItems &&
          data.productItems.length > 0 &&
          data.productItems.map((items, index) => (
            <div
              key={index}
              className="bg-white border border-dark border-opacity-10 rounded min-w-300 px-6 py-5 mb-6"
            >
              <div className="flex justify-between">
                <div className="bg-success text-xs flex items-center font-normal text-white rounded-2xl font-light px-4">
                  New
                </div>
                <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default categoryGrid;
