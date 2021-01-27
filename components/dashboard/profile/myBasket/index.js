import React from "react";

const MyBasket = () => {
  return (
    <div className="relative flex justify-between items-center h-full mr-10 tracking-tight">
      <img
        className="absolute"
        className="h-auto"
        width="830px"
        src="/img/dashboard-image-1.svg"
      />
      <div className="absolute px-8 py-6">
        <div className="text-white text-2xl font-light whitespace-pre pb-5">
          My
          <span className="font-medium"> Basket</span>
        </div>
        <div className="text-lg text-white font-light opacity-75 pb-1">
          3 positions
        </div>
        <div className="text-white text-2xl font-medium whitespace-pre pb-6">
          1 280.00 <span className="text-xl">USD</span>
        </div>
        <div className="flex justify-between py-3 whitespace-pre px-5 text-white border border-white rounded cursor-pointer">
          <img src="/img/cart-icon.svg" /> Go to basket
        </div>
      </div>
      <div className="absolute right-4 top-4 pt-10">
        <img src="/img/shopping-bag-image.png" />
      </div>
    </div>
  );
};

export default MyBasket;
