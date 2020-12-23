import React from "react";
import CartItems from "./cartItems";
import SaveForLater from "./saveForLater";

const Basket = () => {
  return (
    <div className="font-ubuntu">
      <div className="container mx-auto text-3xl tracking-tight text-dark">
        <span className="font-light">Basket: </span>
        <span className="font-medium">4 positions</span>
      </div>
      <hr className="mt-5 mb-8 opacity-10 bg-dark" />
      <div>
        <CartItems />
        <div className="container mx-auto">
          <hr className="my-10 opacity-10 bg-dark" />
        </div>
        <SaveForLater />
      </div>
    </div>
  );
};

export default Basket;
