import React, { useContext, useState } from "react";
import { shape } from "prop-types";
import classnames from "classnames";
import { BsFillBookmarkFill as BookmarkFillIcon } from "react-icons/bs";
import { FiBookmark as BookmarkUnFillIcon } from "react-icons/fi";
import { Context } from "../../../../../hooks/store";
import { setSaveForLaterCart } from "../../../../../hooks/cart/actions";
import WishlistIcon from "../../../../elements/wishlistIcon";
import { httpDelete, httpPost } from "../../../../../utils/https";
import {
  setCartLocalStorage,
  formattingCartData,
  removeCartLocalStorage,
  getFormattedCartParams,
} from "../../../../../utils/helper";
import URLS from "../../../../../utils/urls";

const ProductSpecification = (props) => {
  const { productDetail } = props;
  const { cartState, dispatchCart } = useContext(Context);
  const [isSaveForLaterLoading, setIsSaveForLaterLoading] = useState(false);
  const saveForLaterCartLength =
    (cartState.saveForLaterCart?.cart_items &&
      cartState.saveForLaterCart.cart_items.length) ||
    0;

  const getSaveForLater = () => {
    if (saveForLaterCartLength === 0) return {};
    const cartData = cartState.saveForLaterCart.cart_items.find(
      (item) => item.product_id === productDetail.id
    );
    return cartData || {};
  };

  const cartData = getSaveForLater();

  const deleteSaveForLater = () => {
    const saveForCartDeleteItemUrl = `${URLS.NEXT.CART.DELETE}?cartId=${cartState.saveForLaterCart.id}&itemId=${cartData.id}`;
    setIsSaveForLaterLoading(true);
    httpDelete(saveForCartDeleteItemUrl, {
      traceName: "delete_save_for_later_cart_item",
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
        setIsSaveForLaterLoading(false);
      },
      (err) => {
        setIsSaveForLaterLoading(false);
      }
    );
  };

  const saveForLater = () => {
    const params = getFormattedCartParams(productDetail, true);
    setIsSaveForLaterLoading(true);
    httpPost(URLS.NEXT.CART.ADD, params, {
      traceName: "add_to_save_for_later_cart",
    }).then(
      (res) => {
        const { errors, cart } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(cart?.data?.id, cart?.data?.updated_time, true);
          const formattedCartData = formattingCartData(cart?.data);
          dispatchCart(setSaveForLaterCart(formattedCartData));
        }
        setIsSaveForLaterLoading(false);
      },
      (err) => {
        setIsSaveForLaterLoading(false);
      }
    );
  };

  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <div className="text-dark text-3xl tracking-tight pb-6 font-medium">
          {productDetail?.name}
        </div>
        <div className="flex justify-between items-center">
          {cartData?.id ? (
            <BookmarkFillIcon
              className={classnames("text-xl text-primary mr-8", {
                "fill-current text-primary cursor-not-allowed opacity-50": isSaveForLaterLoading,
              })}
              onClick={() => !isSaveForLaterLoading && deleteSaveForLater()}
            />
          ) : (
            <BookmarkUnFillIcon
              className={classnames("cursor-pointer text-xl mr-8", {
                "fill-current text-primary cursor-not-allowed opacity-50": isSaveForLaterLoading,
                "text-grey opacity-65": !isSaveForLaterLoading,
              })}
              onClick={() => !isSaveForLaterLoading && saveForLater()}
            />
          )}
          <WishlistIcon product={productDetail} />
        </div>
      </div>
      <hr className="text-dark opacity-10" />
    </div>
  );
};

ProductSpecification.defaultProps = {
  productDetail: {},
};

ProductSpecification.propTypes = {
  productDetail: shape({}),
};

export default ProductSpecification;
