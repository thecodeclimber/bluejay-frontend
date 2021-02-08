import React from "react";
import { AiOutlineShoppingCart as ShoppingCartIcon } from "react-icons/ai";

const MyWishlist = () => {
  return (
    <div className="flex items-center bg-my-wishlist bg-no-repeat rounded-lg bg-cover p-8 overflow-hidden h-full w-4/12">
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-white text-2xl font-light whitespace-pre pb-5">
            My
            <span className="font-medium"> Wish List</span>
          </div>
          <div className="text-lg text-white font-light opacity-75 pb-20">
            3 positions
          </div>
        </div>
        <div className="flex justify-between items-center py-3 whitespace-pre px-5 text-white border hover:bg-white hover:text-dark border-white rounded cursor-pointer">
          <ShoppingCartIcon className="text-lg" /> More Details
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;