import React, { useState, useContext } from "react";
import classnames from "classnames";
import { shape, func, string, bool } from "prop-types";
import {
  formattingCartData,
  getFormattedCartParams,
  setCartLocalStorage,
  removeCartLocalStorage,
} from "../../../utils/helper";
import { VscBookmark as BookmarkIcon } from "react-icons/vsc";
import { httpPost } from "../../../utils/https";
import { Context } from "../../../hooks/store";
import { setCart, setSaveForLaterCart } from "../../../hooks/cart/actions";
import URLS from "../../../utils/urls";

const AddToCart = (props) => {
  const {
    product,
    handleData,
    tempCartId,
    isSaveForLater,
    isFromProductDetailPage,
    isDeleteSaveForLater,
  } = props;
  const { dispatchCart } = useContext(Context);
  const [isProductLoading, setIsProductLoading] = useState();

  const addToCart = () => {
    let productDetail = { ...product };
    if (tempCartId) {
      productDetail = {
        ...productDetail,
        tempCartId,
        tempItemId: product.id,
        id: product.product_id,
      };
    }
    const params = getFormattedCartParams(productDetail, isSaveForLater);
    setIsProductLoading(true);
    httpPost(URLS.NEXT.CART.ADD, params, {
      traceName: isSaveForLater ? "add_to_save_for_later_cart" : "add_to_cart",
    }).then(
      (res) => {
        const { errors, cart, tempCart } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          if (isSaveForLater) {
            setCartLocalStorage(cart?.data?.id, cart?.data?.updated_time, true);
            const formattedCartData = formattingCartData(cart?.data);
            dispatchCart(setSaveForLaterCart(formattedCartData));
            setCartLocalStorage(
              tempCart?.data?.id,
              tempCart?.data?.updated_time
            );
            const formattedTempCartData = formattingCartData(tempCart?.data);
            dispatchCart(setCart(formattedTempCartData));
            if (!tempCart?.data?.id) {
              removeCartLocalStorage();
            }
          } else {
            setCartLocalStorage(cart?.data?.id, cart?.data?.updated_time);
            const cartData = formattingCartData(cart?.data);
            dispatchCart(setCart(cartData));
            if (!tempCartId) handleData({ isOpenDrawer: true });
            if (tempCartId) {
              setCartLocalStorage(
                tempCart?.data?.id,
                tempCart?.data?.updated_time,
                true
              );
              const formattedTempCartData = formattingCartData(tempCart?.data);
              dispatchCart(setSaveForLaterCart(formattedTempCartData));
              if (!tempCart?.data?.id) {
                removeCartLocalStorage(true);
              }
            }
          }
        }
        setIsProductLoading(false);
      },
      (err) => {
        setIsProductLoading(false);
      }
    );
  };

  return (
    <>
      {isFromProductDetailPage && (
        <>
          {isDeleteSaveForLater ? (
            <BookmarkFillIcon className="text-xl text-primary mr-10" />
          ) : (
            <BookmarkUnFillIcon className="text-xl text-grey opacity-70 mr-10" />
          )}
        </>
      )}
      {!isFromProductDetailPage && (
        <>
          {tempCartId ? (
            <div
              onClick={() => !isProductLoading && addToCart(product)}
              className={classnames(
                "flex items-center cursor-pointer text-primary",
                {
                  "cursor-not-allowed opacity-25": isProductLoading,
                }
              )}
            >
              <span className="mr-4">
                {isSaveForLater ? (
                  <BookmarkIcon className="text-lg" />
                ) : (
                  <img
                    src="/img/Cart.svg"
                    alt="cart-img"
                    width="16px"
                    className="fill-current text-dark"
                  />
                )}
              </span>
              <span className="text-sm">
                {isSaveForLater ? "Save for Later" : "Add to Cart"}
              </span>
            </div>
          ) : (
            <div
              onClick={() => !isProductLoading && addToCart(product)}
              className={classnames(
                "flex items-center justify-center cursor-pointer text-white bg-primary rounded py-4 mb-10",
                {
                  "opacity-70 cursor-not-allowed": isProductLoading,
                }
              )}
            >
              <img className="mr-4" src="/img/add-to-cart.svg" alt="cart" />
              <span className="font-medium font-base tracking-tight">
                {isProductLoading ? "Loading..." : "Add to Cart"}
              </span>
            </div>
          )}
        </>
      )}
    </>
  );
};

AddToCart.defaultProps = {
  product: {},
  handleData: () => {},
  isSaveForLater: false,
  isFromProductDetailPage: false,
  isDeleteSaveForLater: false,
};

AddToCart.propTypes = {
  product: shape({}),
  handleData: func,
  tempCartId: string,
  isSaveForLater: bool,
  isFromProductDetailPage: bool,
  isDeleteSaveForLater: bool,
};

export default AddToCart;
