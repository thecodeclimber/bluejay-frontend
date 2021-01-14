import React, { useContext, useEffect } from "react";
import Link from "next/link";
import getSymbolFromCurrency from "currency-symbol-map";
import { bool, func } from "prop-types";
import { useRouter } from "next/router";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { GoCheck as CheckedIcon } from "react-icons/go";
import AddedToCart from "./addedToCart";
import AdditionalProducts from "./additionalProducts";
import { Context } from "../../../hooks/store";

const CartAdded = (props) => {
  const router = useRouter();
  const { closeCartDrawer, isNewItem } = props;
  const { cartState } = useContext(Context);
  const cartLength =
    (cartState.cart?.cart_items && cartState.cart.cart_items.length) || 0;
  const currencySymbol =
    (cartState.cart?.currency?.code &&
      getSymbolFromCurrency(cartState.cart.currency.code)) ||
    "$";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToCart = () => {
    router.push("/cart");
    closeCartDrawer();
  };

  return (
    <div className="font-ubuntu tracking-tight max-w-550">
      <div className="px-5 py-4 bg-primary flex justify-between items-center">
        <div className="text-xl font-light text-white">Basket</div>
        <div onClick={closeCartDrawer}>
          <CloseIcon className="text-white text-xl cursor-pointer" />
        </div>
      </div>
      {cartLength === 0 && (
        <div className="flex justify-center">
          <div className="text-base flex items-center px-8 py-3 focus:outline-none cursor-pointer">
            <div className="flex-none">
              <img
                src="/img/Cart.svg"
                width="27px"
                className="object-contain"
              />
            </div>
            <div className="ml-8 flex-none">
              <div className="font-medium">Your Basket is empty</div>
              <div className="text-primary">
                <Link href="/">
                  <a>Keep Shopping</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {isNewItem && (
        <>
          <div className="px-5 flex pt-5">
            <div className="mr-5 pt-2">
              <CheckedIcon className="text-success text-xl" />
            </div>
            <div className="text-base text-black flex items-center justify-between w-full">
              <div>
                <div className="font-medium leading-5 mb-1">Added to cart</div>
                <div className="font-light">
                  {cartLength} {cartLength > 1 ? "items" : "item"}
                </div>
              </div>
              <div className="font-medium">
                {currencySymbol}
                {cartState.cart?.cart_amount}
              </div>
            </div>
          </div>
          <hr className="mt-3 opacity-05 text-dark mx-5 pb-2" />
        </>
      )}
      <AddedToCart />
      {cartLength !== 0 && <hr className="mt-11 opacity-10 text-dark mx-5" />}
      <AdditionalProducts />
      <hr className="mt-1 mb-5 opacity-05 text-dark mx-5" />
      <div className="px-5">
        <div className="flex justify-between text-dark mb-3">
          <div className="text-base font-light opacity-75">Subtotal</div>
          <div className="text-base font-medium opacity-90">
            {currencySymbol}
            {cartState.cart?.cart_amount || 0}
          </div>
        </div>
        <div className="flex justify-between text-dark mb-5">
          <div className="text-base font-light opacity-75">Shipping</div>
          <div className="text-base font-medium opacity-90">FREE</div>
        </div>
        <div className="flex justify-between text-dark">
          <div className="text-xl font-light">Total</div>
          <div className="text-xl font-medium">
            {currencySymbol}
            {cartState.cart?.cart_amount || 0}
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-6 opacity-05 text-dark mx-5" />
      <div className="flex px-5 pb-6">
        <button
          onClick={goToCart}
          className="p-3 w-full mr-5 rounded border border-dark border-opacity-10 text-dark text-base focus:outline-none font-medium"
        >
          Go to Cart
        </button>
        <button className="p-3 w-full ml-5 rounded bg-primary text-white text-base focus:outline-none font-medium">
          Check Out
        </button>
      </div>
    </div>
  );
};

CartAdded.defaultProps = {
  closeCartDrawer: () => {},
  isNewItem: false,
};

CartAdded.propTypes = {
  closeCartDrawer: func,
  isNewItem: bool,
};

export default CartAdded;
