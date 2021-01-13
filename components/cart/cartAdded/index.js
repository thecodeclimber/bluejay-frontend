import React from "react";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { GoCheck as CheckedIcon } from "react-icons/go";
import AddedToCart from "./addedToCart";
import AdditionalProducts from "./additionalProducts";

const CartAdded = (props) => {
  const { closeCartDrawer } = props;

  return (
    <div className="font-ubuntu tracking-tight max-w-550">
      <div className="px-5 py-4 bg-primary flex justify-between items-center">
        <div className="text-xl font-light text-white">Basket</div>
        <div onClick={closeCartDrawer}>
          <CloseIcon className="text-white text-xl cursor-pointer" />
        </div>
      </div>
      <div className="px-5 flex pt-5">
        <div className="mr-5 pt-2">
          <CheckedIcon className="text-success text-xl" />
        </div>
        <div className="text-base text-black flex items-center justify-between w-full">
          <div>
            <div className="font-medium leading-5 mb-1">Added to cart</div>
            <div className="font-light">1 item</div>
          </div>
          <div className="font-medium">$86.31</div>
        </div>
      </div>
      <hr className="mt-3 opacity-05 text-dark mx-5 pb-2" />
      <AddedToCart />
      <hr className="mt-11 opacity-10 text-dark mx-5" />
      <AdditionalProducts />
      <hr className="mt-1 mb-5 opacity-05 text-dark mx-5" />
      <div className="px-5">
        <div className="flex justify-between text-dark mb-3">
          <div className="text-base font-light opacity-75">Subtotal</div>
          <div className="text-base font-medium opacity-90">$33.00</div>
        </div>
        <div className="flex justify-between text-dark mb-5">
          <div className="text-base font-light opacity-75">Shipping</div>
          <div className="text-base font-medium opacity-90">FREE</div>
        </div>
        <div className="flex justify-between text-dark">
          <div className="text-xl font-light">Total</div>
          <div className="text-xl font-medium">$108.00</div>
        </div>
      </div>
      <hr className="mt-5 mb-6 opacity-05 text-dark mx-5" />
      <div className="flex px-5 pb-6">
        <button className="p-3 w-full mr-5 rounded border border-dark border-opacity-10 text-dark text-base focus:outline-none font-medium">
          Go to Cart
        </button>
        <button className="p-3 w-full ml-5 rounded bg-primary text-white text-base focus:outline-none font-medium">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartAdded;
