import React, { useContext, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import getSymbolFromCurrency from "currency-symbol-map";
import { setUserWishlists } from "../../../../hooks/user/actions";
import { FiHeart as HeartIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { Context } from "../../../../hooks/store";
import { setCart } from "../../../../hooks/cart/actions";
import { httpDelete, httpPut, httpPost } from "../../../../utils/https";
import {
  formattingCartData,
  setCartLocalStorage,
  removeCartLocalStorage,
} from "../../../../utils/helper";
import URLS from "../../../../utils/urls";
import ProductQuantity from "../../../elements/productQuantity";
import AddToCart from "../../../elements/addToCart";

let timer = "";

const CartItems = () => {
  const { cartState, dispatchCart } = useContext(Context);
  const { userState, dispatchModal, dispatchUser } = useContext(Context);
  const [deletingItemId, setDeletingItemId] = useState("");
  const [loadingWishlistId, setLoadingWishlistId] = useState("");
  const cartLength =
    (cartState.cart?.cart_items && cartState.cart.cart_items.length) || 0;
  const currencySymbol =
    (cartState.cart?.currency?.code &&
      getSymbolFromCurrency(cartState.cart.currency.code)) ||
    "$";

  const handleQuantity = (items, data) => {
    const cartData = {
      ...cartState.cart,
      cart_items: items,
    };
    dispatchCart(setCart(cartData));
    handleCartQuantity(data.id, data.quantity, data.product_id);
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

  const handleWishlistsItem = (product, isFavorite) => {
    if (!userState.user?.id) {
      dispatchModal(setModal(MODAL_TYPES.LOGIN));
      return;
    }
    setLoadingWishlistId(product.product_id);
    if (isFavorite) {
      const deleteUrl = `${URLS.NEXT.WISHLIST.DELETE}?product_id=${product.product_id}`;
      httpDelete(deleteUrl, {
        traceName: "delete_wishlist",
      }).then(
        (res) => {
          if (res.errors && Object.keys(res.errors).length > 0) {
            alert(res.errors[Object.keys(res.errors)[0]]);
          } else {
            if (userState.wishlists && userState.wishlists.length > 0) {
              const filteredWishlists = userState.wishlists.filter(
                (data) => data.id !== product.product_id
              );
              dispatchUser(setUserWishlists(filteredWishlists));
            }
          }
          setLoadingWishlistId("");
        },
        (err) => {
          setLoadingWishlistId("");
        }
      );
      return;
    }
    const params = {
      product_id: product.product_id,
    };
    httpPost(URLS.NEXT.WISHLIST.ADD, params, {
      traceName: "add_wishlist",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          const productData = {
            id: product.product_id,
            name: product.name,
            price: product.sale_price,
            image: product?.image_url || "",
          };
          dispatchUser(setUserWishlists([productData, ...userState.wishlists]));
        }
        setLoadingWishlistId("");
      },
      (err) => {
        setLoadingWishlistId("");
      }
    );
  };

  return (
    <div className="container mx-auto font-ubuntu">
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
            <div className="ml-8 mr-32 flex-none">
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
      {cartLength > 0 &&
        cartState.cart.cart_items.map((data, index) => {
          const {
            id,
            name,
            sale_price,
            image_url,
            product_id,
            extended_sale_price,
          } = data || {};
          const isFavorite = userState.wishlists.some(
            (item) => item.id === product_id
          );
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
                      <div className="font-normal leading-5 mb-2">
                        <Link
                          href="/product/[id]"
                          as={`/product/${product_id}`}
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
                      products={cartState.cart.cart_items}
                      product={data}
                      handleProducts={(items) => handleQuantity(items, data)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center pr-5">
                  <div className="flex font-medium p-5 tracking-tight">
                    <AddToCart
                      product={data}
                      tempCartId={cartState.cart.id}
                      isSaveForLater={true}
                    />
                    <div className="py-1">
                      <div className="border-r border-dark border-opacity-10 ml-5 h-full" />
                    </div>

                    <div
                      className={classnames(
                        "flex items-center ml-5 text-primary",
                        {
                          "cursor-not-allowed opacity-25":
                            loadingWishlistId === product_id,
                          "cursor-pointer": loadingWishlistId !== product_id,
                        }
                      )}
                      onClick={() =>
                        loadingWishlistId !== product_id &&
                        handleWishlistsItem(data, isFavorite)
                      }
                    >
                      <span className="mr-4">
                        <HeartIcon
                          className={classnames("cursor-pointer", {
                            "fill-current text-primary": isFavorite,
                            "text-primary": !isFavorite,
                          })}
                        />
                      </span>
                      <span className="text-sm">Add to Favorites</span>
                    </div>
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

export default CartItems;
