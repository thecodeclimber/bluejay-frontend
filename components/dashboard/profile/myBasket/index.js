import React from "react";
import { AiOutlineShoppingCart as ShoppingCartIcon } from "react-icons/ai";

const MyBasket = () => {
  return (
    <div className="relative flex items-center h-full w-8/12 p-8 mr-10 bg-my-basket rounded-lg bg-no-repeat bg-cover overflow-hidden tracking-tight">
      <div className="flex flex-col">
        <div className="text-white text-2xl font-light whitespace-pre pb-6">
          My
          <span className="font-medium"> Basket</span>
        </div>
        <div className="text-lg text-white font-light opacity-75 pb-2">
          3 positions
        </div>
        <div className="text-white text-2xl font-medium whitespace-pre pb-6">
          1 280.00 <span className="text-xl">USD</span>
        </div>
        <div className="flex justify-between items-center py-3 whitespace-pre px-5 text-white border hover:bg-white hover:text-primary border-white rounded cursor-pointer">
          <ShoppingCartIcon className="text-lg" /> Go to basket
        </div>
      </div>
      <div className="absolute right-0 mr-12 mt-40">
        <img src="/img/shopping-bag-image.png" />
      </div>
    </div>
  );
};

export default MyBasket;
