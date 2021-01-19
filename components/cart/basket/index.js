import React, { useContext } from "react";
import CartItems from "./cartItems";
import SaveForLater from "./saveForLater";
import Shipping from "./shipping";
import Total from "./total";
import CustomerPurchase from "../../product/productDetail/customerPurchase";
import { Context } from "../../../hooks/store";

const Basket = () => {
  const { cartState } = useContext(Context);
  const cartLength =
    (cartState.cart?.cart_items && cartState.cart.cart_items.length) || 0;
  return (
    <div className="font-ubuntu">
      <div className="container mx-auto text-3xl tracking-tight text-dark pt-8">
        <span className="font-light">Basket: </span>
        <span className="font-medium">{cartLength} positions</span>
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