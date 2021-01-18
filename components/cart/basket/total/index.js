import React, { useContext } from "react";
import { Context } from "../../../../hooks/store";
import getSymbolFromCurrency from "currency-symbol-map";

const Total = () => {
  const { cartState } = useContext(Context);
  const currencySymbol =
    (cartState.cart?.currency?.code &&
      getSymbolFromCurrency(cartState.cart.currency.code)) ||
    "$";
  return (
    <div className="border border-dark border-opacity-10 rounded py-5 px-6 tracking-tight font-ubuntu">
      <div className="text-xl mb-0 flex justify-between text-dark">
        <div className="font-light">Total</div>
        <div className="font-medium">
          {currencySymbol}
          {cartState.cart?.cart_amount || 0}
        </div>
      </div>
      <hr className="my-5 opacity-05 text-dark" />
      <div className="flex justify-between text-dark text-base mb-3">
        <div className="font-light opacity-75">Subtotal</div>
        <div className="font-medium opacity-90">$33.00</div>
      </div>
      <div className="flex justify-between text-dark text-base">
        <div className="font-light opacity-75">Shipping</div>
        <div className="font-medium opacity-90">$6.24</div>
      </div>
      <hr className="my-5 opacity-05 text-dark" />
      <button className="font-ubuntu text-base font-medium w-full bg-primary text-white rounded py-3 focus:outline-none">
        Check Out
      </button>
    </div>
  );
};

export default Total;
