import React, { useContext } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";
import { Context } from "../../../../hooks/store";
import { setCart } from "../../../../hooks/cart/actions";

const AddedToCart = () => {
  const { cartState, dispatchCart } = useContext(Context);
  const cartLength =
    (cartState.cart?.cart_items && cartState.cart.cart_items.length) || 0;
  const currencySymbol =
    (cartState.cart?.currency?.code &&
      getSymbolFromCurrency(cartState.cart.currency.code)) ||
    "$";

  const decreaseQuantity = (id) => {
    const cartItems = [...cartState.cart.cart_items];
    const index = cartItems.findIndex((data) => data.product_id === id);
    cartItems[index].quantity =
      cartItems[index].quantity > 1 ? cartItems[index].quantity - 1 : 1;
    const cartData = {
      ...cartState.cart,
      cart_items: cartItems,
    };
    dispatchCart(setCart(cartData));
  };

  const increaseQuantity = (id) => {
    const cartItems = [...cartState.cart.cart_items];
    const index = cartItems.findIndex((data) => data.product_id === id);
    cartItems[index].quantity = cartItems[index].quantity + 1;
    const cartData = {
      ...cartState.cart,
      cart_items: cartItems,
    };
    dispatchCart(setCart(cartData));
  };

  return (
    <div>
      {cartLength > 0 &&
        cartState.cart.cart_items.map((data, index) => {
          const {
            id,
            name,
            sale_price,
            image_url,
            quantity,
            product_id,
            extended_sale_price,
          } = data || {};
          return (
            <div key={index}>
              <div className="text-dark flex px-5 mt-5 mb-4">
                <img
                  src={image_url}
                  alt={`img-${index}`}
                  width="50px"
                  className="mr-6 object-contain"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="text-base mb-3 font-normal leading-5">
                      {name}
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => decreaseQuantity(product_id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <SubtractIcon className="text-base" />
                      </div>
                      <div className="text-base px-4">
                        {quantity < 10 && 0}
                        {quantity}
                      </div>
                      <div
                        onClick={() => increaseQuantity(product_id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <PlusIcon className="text-base" />
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-medium">
                    {currencySymbol}
                    {extended_sale_price}
                  </div>
                </div>
              </div>
              {index !== cartLength - 1 && (
                <hr className="opacity-05 text-dark mx-5" />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default AddedToCart;
