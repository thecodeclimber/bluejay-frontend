import React from "react";

const MyWishlist = () => {
  return (
    <div className="relative flex justify-between items-center h-full">
      <img src="/img/dashboard-image-2.png" width="365px" />
      <div className="absolute flex flex-col justify-between px-8 py-6">
        <div>
          <div className="text-white text-2xl font-light whitespace-pre pb-5">
            My
            <span className="font-medium"> Wish List</span>
          </div>
          <div className="text-lg text-white font-light opacity-75 pb-16">
            3 positions
          </div>
        </div>
        <div className="flex justify-between py-3 whitespace-pre px-5 text-white border border-white rounded cursor-pointer">
          <img src="/img/cart-icon.svg" /> More Details
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
