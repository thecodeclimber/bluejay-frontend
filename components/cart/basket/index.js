import React from "react";
import CartItems from "./cartItems";
import SaveForLater from "./saveForLater";
import Shipping from "./shipping";
import Total from "./total";
import CustomerPurchase from "../../product/productDetail/customerPurchase";

const Basket = () => {
  return (
    <div className="font-ubuntu">
      <div className="container mx-auto text-3xl tracking-tight text-dark">
        <span className="font-light">Basket: </span>
        <span className="font-medium">4 positions</span>
      </div>
      <hr className="mt-5 mb-8 opacity-10 bg-dark" />
      <div className="flex container mx-auto">
        <div className="w-full pr-8">
          <CartItems />
          <div className="container mx-auto">
            <hr className="my-10 opacity-10 bg-dark" />
          </div>
          <SaveForLater />
        </div>
        <div className="min-w-450">
          <div className="mb-8">
            <Shipping />
          </div>
          <div>
            <Total />
          </div>
        </div>
      </div>
      <hr className="mt-8 mb-11 opacity-10 bg-dark" />
      <div>
        <CustomerPurchase />
      </div>
    </div>
  );
};

export default Basket;
