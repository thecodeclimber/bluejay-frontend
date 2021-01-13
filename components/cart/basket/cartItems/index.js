import React, { useContext } from "react";
import Link from "next/link";
import { FiPlus as PlusIcon } from "react-icons/fi";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { VscBookmark as BookmarkIcon } from "react-icons/vsc";
import { FaRegHeart as FavouriteIcon } from "react-icons/fa";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { Context } from "../../../../hooks/store";
import { setCart } from "../../../../hooks/cart/actions";

const CartItems = () => {
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

  const deleteCartItem = (id) => {
    const cartData = [...cartState.cart];
    const filteredCartItems = cartData.filter((product) => product.id !== id);
    dispatchCart(setCart(filteredCartItems));
  };

  return (
    <div className="container mx-auto font-ubuntu">
      {cartState.cart.length === 0 && (
        <div className="flex justify-center">
          <div className="text-base flex items-center px-8 py-3 focus:outline-none cursor-pointer">
            <div className="flex-none">
              <img
                src="/img/Cart.svg"
                width="27px"
                className="object-contain"
              />
            </div>
            <div className="ml-8 mr-32 flex-none">
              <div className="font-medium">Your Basket is empty</div>
              <div className="text-primary">
                <Link href="/">Keep Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartState.cart.length > 0 &&
        cartState.cart.map((data, index) => {
          const { id, name, price, primary_image, quantity } = data || {};
          return (
            <div
              key={index}
              className="flex justify-between border border-dark border-opacity-10 rounded mb-6 hover:border-opacity-0 hover:shadow-grey-8 overflow-hidden"
            >
              <div className="w-full border-r border-dark border-opacity-10">
                <div className="flex justify-between items-center border-b border-dark border-opacity-10 w-full">
                  <div className="flex p-3 items-center">
                    <div className="mr-5">
                      <img
                        src={primary_image?.url_standard}
                        alt={`img-${index}`}
                        width="70px"
                      />
                    </div>
                    <div className="text-base tracking-tight">
                      <div className="font-normal text-dark leading-5 mb-2">
                        {name}
                      </div>
                      <div className="font-medium text-primary">${price}</div>
                    </div>
                  </div>
                  <div className="pr-5">
                    <div className="flex justify-between items-center border rounded border-dark border-opacity-10">
                      <div
                        onClick={() => decreaseQuantity(id)}
                        className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4"
                      >
                        <SubtractIcon className="text-black" />
                      </div>
                      <div className="text-base text-dark min-w-60 text-center px-6">
                        {quantity < 10 && 0}
                        {quantity}
                      </div>
                      <div
                        onClick={() => increaseQuantity(id)}
                        className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4"
                      >
                        <PlusIcon className="text-dark" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pr-5">
                  <div className="flex text-primary font-medium p-5 tracking-tight">
                    <div className="flex items-center">
                      <span className="mr-4">
                        <BookmarkIcon className="text-lg" />
                      </span>
                      <span className="text-sm">Save for Later</span>
                    </div>
                    <div className="py-1">
                      <div className="border-r border-dark border-opacity-10 ml-5 h-full" />
                    </div>
                    <div className="flex items-center ml-5">
                      <span className="mr-4">
                        <FavouriteIcon />
                      </span>
                      <span className="text-sm">Add to Favorites</span>
                    </div>
                  </div>
                  <div className="tracking-tight">
                    <span className="text-dark text-sm font-light">
                      total for this item:
                    </span>{" "}
                    <span className="font-medium text-primary text-sm text-lg">
                      ${quantity * price}
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => deleteCartItem(id)}
                className="flex items-center px-5 opacity-50  cursor-pointer text-dark hover:opacity-100 hover:bg-primary hover:text-white"
              >
                <DeleteIcon className="text-xl" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartItems;
