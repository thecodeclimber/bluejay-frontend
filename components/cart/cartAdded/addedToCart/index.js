import React, { useContext } from "react";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";
import { Context } from "../../../../hooks/store";
import { setCart } from "../../../../hooks/cart/actions";

const AddedToCart = () => {
  const { cartState, dispatchCart } = useContext(Context);

  const decreaseQuantity = (id) => {
    const cartData = [...cartState.cart];
    const index = cartData.findIndex((product) => product.id === id);
    cartData[index].quantity =
      cartData[index].quantity > 1 ? cartData[index].quantity - 1 : 1;
    dispatchCart(setCart(cartData));
  };

  const increaseQuantity = (id) => {
    const cartData = [...cartState.cart];
    const index = cartData.findIndex((product) => product.id === id);
    cartData[index].quantity = cartData[index].quantity + 1;
    dispatchCart(setCart(cartData));
  };

  return (
    <div>
      {cartState.cart.length > 0 &&
        cartState.cart.map((data, index) => {
          const { id, name, price, primary_image, quantity } = data || {};
          return (
            <div key={index}>
              <div className="text-dark flex px-5 mt-5 mb-4">
                <img
                  src={primary_image?.url_standard}
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
                        onClick={() => decreaseQuantity(id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <SubtractIcon className="text-base" />
                      </div>
                      <div className="text-base px-4">
                        {quantity < 10 && 0}
                        {quantity}
                      </div>
                      <div
                        onClick={() => increaseQuantity(id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <PlusIcon className="text-base" />
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-medium">${quantity * price}</div>
                </div>
              </div>
              {index !== cartState.cart.length - 1 && (
                <hr className="opacity-05 text-dark mx-5" />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default AddedToCart;
