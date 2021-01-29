import React, { useContext, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import getSymbolFromCurrency from "currency-symbol-map";
import { Context } from "../../../../hooks/store";
import { setSaveForLaterCart } from "../../../../hooks/cart/actions";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { httpPut, httpDelete } from "../../../../utils/https";
import {
  formattingCartData,
  setCartLocalStorage,
  removeCartLocalStorage,
  getProductUrl,
} from "../../../../utils/helper";
import URLS from "../../../../utils/urls";
import ProductQuantity from "../../../elements/productQuantity";
import AddToCart from "../../../elements/addToCart";
import WishlistIcon from "../../../elements/wishlistIcon";

let timer = "";

const saveForLater = () => {
  const { cartState, dispatchCart } = useContext(Context);
  const [deletingItemId, setDeletingItemId] = useState("");
  const saveForLaterCartLength =
    (cartState.saveForLaterCart?.cart_items &&
      cartState.saveForLaterCart.cart_items.length) ||
    0;
  const currencySymbol =
    (cartState.saveForLaterCart?.currency?.code &&
      getSymbolFromCurrency(cartState.saveForLaterCart.currency.code)) ||
    "$";

  const handleQuantity = (items, data) => {
    const cartData = {
      ...cartState.saveForLaterCart,
      cart_items: items,
    };
    dispatchCart(setSaveForLaterCart(cartData));
    handleCartQuantity(data.id, data.quantity, data.product_id);
  };

  const deleteCartItem = (id) => {
    const cartDeleteItemUrl = `${URLS.NEXT.CART.DELETE}?cartId=${cartState.saveForLaterCart.id}&itemId=${id}`;
    setDeletingItemId(id);
    httpDelete(cartDeleteItemUrl, {
      traceName: "delete_cart_item",
    }).then(
      (res) => {
        const { errors, data } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(data?.id, data?.updated_time, true);
          const cartData = formattingCartData(data);
          dispatchCart(setSaveForLaterCart(cartData));
        }
        if (!res) {
          removeCartLocalStorage(true);
        }
        setDeletingItemId("");
      },
      (err) => {
        setDeletingItemId("");
      }
    );
  };

  const handleCartQuantity = (itemId, quantity, product_id) => {
    const cartUrl = `${URLS.NEXT.CART.UPDATE}?cartId=${cartState.saveForLaterCart.id}&itemId=${itemId}`;
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
          setCartLocalStorage(data?.id, data?.updated_time, true);
          const formattedCart = formattingCartData(data);
          dispatchCart(setSaveForLaterCart(formattedCart));
        }
      });
    }, 400);
  };

  return (
    <div className="container mx-auto font-ubuntu">
      <div className="text-dark tracking-tight text-2xl mb-6">
        <span className="font-light">Saved </span>
        <span className="font-medium">for Later</span>
      </div>
      {saveForLaterCartLength === 0 && (
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
              <div className="font-medium">No Item saved for later</div>
              <div className="text-primary">
                <Link href="/">
                  <a>Keep Shopping</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {saveForLaterCartLength > 0 &&
        cartState.saveForLaterCart.cart_items.map((data, index) => {
          const {
            id,
            name,
            sale_price,
            image_url,
            product_id,
            extended_sale_price,
            url,
          } = data || {};
          const productUrl = getProductUrl(url);
          return (
            <div
              key={index}
              className="flex justify-between border border-dark border-opacity-10 rounded mb-6 hover:border-opacity-0 hover:shadow-grey-8 overflow-hidden"
            >
              <div className="w-full border-r border-dark border-opacity-10">
                <div className="flex justify-between items-center border-b border-dark border-opacity-10 w-full">
                  <div className="flex p-3 items-center">
                    <div className="mr-5">
                      <img src={image_url} alt={`img-${index}`} width="70px" />
                    </div>
                    <div className="text-base tracking-tight">
                      <div className="font-normal text-dark leading-5 mb-2">
                        <Link
                          href="/product/[slug]"
                          as={`/product/${productUrl}`}
                        >
                          <a className="text-dark hover:text-primary">{name}</a>
                        </Link>
                      </div>
                      <div className="font-medium text-primary">
                        {currencySymbol}
                        {(sale_price && sale_price.toFixed(2)) || 0}
                      </div>
                    </div>
                  </div>
                  <div className="pr-5">
                    <ProductQuantity
                      products={cartState.saveForLaterCart.cart_items}
                      product={data}
                      handleProducts={(items) => handleQuantity(items, data)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center pr-5">
                  <div className="flex text-primary font-medium p-5 tracking-tight">
                    <AddToCart
                      product={data}
                      tempCartId={cartState.saveForLaterCart.id}
                    />
                    <div className="py-1">
                      <div className="border-r border-dark border-opacity-10 ml-5 h-full" />
                    </div>
                    <WishlistIcon
                      product={{ id: product_id }}
                      isSaveForLater={true}
                    />
                  </div>
                  <div className="tracking-tight">
                    <span className="text-dark text-sm font-light mr-1">
                      total for this item:
                    </span>
                    <span className="font-medium text-primary text-sm text-lg">
                      {currencySymbol}
                      {(extended_sale_price &&
                        extended_sale_price.toFixed(2)) ||
                        0}
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => deletingItemId !== id && deleteCartItem(id)}
                className={classnames(
                  "flex items-center px-5 opacity-50 cursor-pointer hover:text-white",
                  {
                    "hover:opacity-100 text-dark hover:bg-primary":
                      deletingItemId !== id,
                    "opacity-50 bg-primary text-white hover:opacity-50 hover:bg-primary cursor-not-allowed":
                      deletingItemId === id,
                  }
                )}
              >
                <DeleteIcon className="text-xl" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default saveForLater;
