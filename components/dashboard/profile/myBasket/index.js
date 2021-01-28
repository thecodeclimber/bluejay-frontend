import React from "react";
import { AiOutlineShoppingCart as ShoppingCartIcon } from "react-icons/ai";

const MyBasket = () => {
  return (
    <div className="relative flex justify-between items-center h-full mr-10 tracking-tight">
      <img
        className="absolute"
        className="h-auto"
        width="830px"
        height="291px"
        src="/img/dashboard-image-1.svg"
      />
      <div className="absolute p-6">
        <div className="text-white text-2xl font-light whitespace-pre pb-5">
          My
          <span className="font-medium"> Basket</span>
        </div>
        <div className="text-lg text-white font-light opacity-75 pb-1">
          3 positions
        </div>
        <div className="text-white text-2xl font-medium whitespace-pre pb-5">
          1 280.00 <span className="text-xl">USD</span>
        </div>
        <div className="flex justify-between items-center py-3 whitespace-pre px-5 text-white border hover:bg-white hover:text-primary border-white rounded cursor-pointer">
          <ShoppingCartIcon className="text-lg" /> Go to basket
        </div>
      </div>
      <div className="absolute right-4 top-4 pt-4">
        <img src="/img/shopping-bag-image.png" />
      </div>
    </div>
  );
};

export default MyBasket;
