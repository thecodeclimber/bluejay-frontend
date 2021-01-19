import React, { useContext, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import getSymbolFromCurrency from "currency-symbol-map";
import { func } from "prop-types";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { Context } from "../../../../hooks/store";
import { setCart } from "../../../../hooks/cart/actions";
import { httpPut, httpDelete } from "../../../../utils/https";
import {
  setCartLocalStorage,
  formattingCartData,
  removeCartLocalStorage,
} from "../../../../utils/helper";
import URLS from "../../../../utils/urls";

let timer = "";

const AddedToCart = (props) => {
  const { closeCartDrawer } = props;
  const { cartState, dispatchCart } = useContext(Context);
  const [deletingItemId, setDeletingItemId] = useState("");
  const cartLength =
    (cartState.cart?.cart_items && cartState.cart.cart_items.length) || 0;
  const currencySymbol =
    (cartState.cart?.currency?.code &&
      getSymbolFromCurrency(cartState.cart.currency.code)) ||
    "$";

  const decreaseQuantity = (id, product_id) => {
    const cartItems = [...cartState.cart.cart_items];
    const index = cartItems.findIndex((data) => data.product_id === product_id);
    const decreasedQuantity = cartItems[index].quantity - 1;
    cartItems[index].quantity =
      cartItems[index].quantity > 1 ? decreasedQuantity : 1;
    const cartData = {
      ...cartState.cart,
      cart_items: cartItems,
    };
    dispatchCart(setCart(cartData));
    if (decreasedQuantity > 0) {
      handleCartQuantity(id, cartItems[index].quantity, product_id);
    }
  };

  const increaseQuantity = (id, product_id) => {
    const cartItems = [...cartState.cart.cart_items];
    const index = cartItems.findIndex((data) => data.product_id === product_id);
    cartItems[index].quantity = cartItems[index].quantity + 1;
    const cartData = {
      ...cartState.cart,
      cart_items: cartItems,
    };
    dispatchCart(setCart(cartData));
    handleCartQuantity(id, cartItems[index].quantity, product_id);
  };

  const handleCartQuantity = (itemId, quantity, product_id) => {
    const cartUrl = `${URLS.NEXT.CART.UPDATE}?cartId=${cartState.cart.id}&itemId=${itemId}`;
    const params = {
      quantity,
      product_id,
    };
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      httpPut(cartUrl, params, {
        traceName: "update_cart_quantity",
      }).then((res) => {
        const { errors, data } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(data?.id, data?.updated_time);
          const formattedCart = formattingCartData(data);
          dispatchCart(setCart(formattedCart));
        }
      });
    }, 400);
  };

  const deleteCartItem = (id) => {
    const cartDeleteItemUrl = `${URLS.NEXT.CART.DELETE}?cartId=${cartState.cart.id}&itemId=${id}`;
    setDeletingItemId(id);
    httpDelete(cartDeleteItemUrl, {
      traceName: "delete_cart_item",
    }).then(
      (res) => {
        const { errors, data } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(data?.id, data?.updated_time);
          const cartData = formattingCartData(data);
          dispatchCart(setCart(cartData));
        }
        if (!res) {
          removeCartLocalStorage();
        }
        setDeletingItemId("");
      },
      (err) => {
        setDeletingItemId("");
      }
    );
  };

  return (
    <div>
      {cartLength > 0 &&
        cartState.cart.cart_items.map((data, index) => {
          const {
            id,
            name,
            image_url,
            quantity,
            product_id,
            extended_sale_price,
          } = data || {};
          return (
            <div key={index}>
              <div className="text-dark flex px-5 mt-5 mb-4 group">
                <img
                  src={image_url}
                  alt={`img-${index}`}
                  width="50px"
                  className="mr-6 object-contain"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="text-base mb-3 font-normal leading-5">
                      <Link href="/product/[id]" as={`/product/${product_id}`}>
                        <a
                          onClick={closeCartDrawer}
                          className="text-dark hover:text-primary"
                        >
                          {name}
                        </a>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => decreaseQuantity(id, product_id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <SubtractIcon className="text-base" />
                      </div>
                      <div className="text-base px-4">
                        {quantity < 10 && 0}
                        {quantity}
                      </div>
                      <div
                        onClick={() => increaseQuantity(id, product_id)}
                        className="border border-light p-1 rounded-md cursor-pointer"
                      >
                        <PlusIcon className="text-base" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      {currencySymbol}
                      {(extended_sale_price &&
                        extended_sale_price.toFixed(2)) ||
                        0}
                    </div>
                    <div
                      className={classnames(
                        "ml-4 cursor-pointer hidden group-hover:block",
                        {
                          "opacity-50 cursor-not-allowed ":
                            deletingItemId === id,
                        }
                      )}
                      onClick={() =>
                        deletingItemId !== id && deleteCartItem(id)
                      }
                    >
                      <DeleteIcon className="text-xl" />
                    </div>
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

AddedToCart.defaultProps = {
  closeCartDrawer: () => {},
};

AddedToCart.propTypes = {
  closeCartDrawer: func,
};

export default AddedToCart;
