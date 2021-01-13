import React, { useRef } from "react";
import classnames from "classnames";
import { FiHeart as HeartIcon } from "react-icons/fi/index";
import Slider from "react-slick";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io/index";
import { IoIosArrowBack as SlideLeftArrow } from "react-icons/io/index";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri/index";
import { FiPlus as PlusIcon } from "react-icons/fi";
import ProductSlider from "../../../elements/productSlider";

const data = [
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

const CustomerPurchase = () => {
  return (
    <div className="container mx-auto pb-6">
      <div className="flex justify-center text-3xl text-dark font-light whitespace-pre mb-12">
        Customers <span className="font-medium">Also Purchased</span>
      </div>
      <ProductSlider products={data} />
    </div>
  );
};

export default CustomerPurchase;
