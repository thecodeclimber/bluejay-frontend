import React, { useState, useContext } from "react";
import classnames from "classnames";
import { bool, shape } from "prop-types";
import {
  FiHeart as FavoriteIcon,
  FiStar as FavoriteStarIcon,
} from "react-icons/fi";
import { httpPost, httpDelete } from "../../../utils/https";
import { Context } from "../../../hooks/store";
import { setModal } from "../../../hooks/modal/actions";
import { setUserWishlists } from "../../../hooks/user/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import URLS from "../../../utils/urls";

const WishlistIcon = (props) => {
  const { product, isFromCart, isSaveForLater } = props || {};
  const { userState, dispatchModal, dispatchUser } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const isFavorite =
    (userState?.wishlists &&
      userState.wishlists.length > 0 &&
      userState.wishlists.some((data) => data?.id === product?.id)) ||
    false;

  const handleWishlistsItem = () => {
    if (!userState.user?.id) return dispatchModal(setModal(MODAL_TYPES.LOGIN));
    if (isFavorite) return deleteWishlist();
    addWishList();
  };

  const deleteWishlist = () => {
    const deleteUrl = `${URLS.NEXT.WISHLIST.DELETE}?product_id=${product.id}`;
    setIsLoading(true);
    httpDelete(deleteUrl, {
      traceName: "delete_wishlist",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          dispatchUser(setUserWishlists(res || []));
        }
        setIsLoading(false);
      },
      (err) => setIsLoading(false)
    );
  };

  const addWishList = () => {
    const params = {
      product_id: product.id,
    };
    setIsLoading(true);
    httpPost(URLS.NEXT.WISHLIST.ADD, params, {
      traceName: "add_wishlist",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          dispatchUser(setUserWishlists(res || []));
        }
        setIsLoading(false);
      },
      (err) => setIsLoading(false)
    );
  };

  return (
    <>
      {isFromCart || isSaveForLater ? (
        <div
          className={classnames("flex items-center ml-5 text-primary", {
            "cursor-not-allowed opacity-25": isLoading,
            "cursor-pointer": !isLoading,
          })}
          onClick={() => !isLoading && handleWishlistsItem()}
        >
          <span className="mr-4">
            {isSaveForLater ? (
              <FavoriteStarIcon
                className={classnames("cursor-pointer text-base", {
                  "fill-current text-primary": isFavorite,
                  "text-primary": !isFavorite,
                })}
              />
            ) : (
              <FavoriteIcon
                className={classnames("cursor-pointer", {
                  "fill-current text-primary": isFavorite,
                  "text-primary": !isFavorite,
                })}
              />
            )}
          </span>
          <span className="text-sm">Add to Favorites</span>
        </div>
      ) : (
        <FavoriteIcon
          className={classnames("text-xl cursor-pointer", {
            "fill-current text-primary": isFavorite,
            "text-grey opacity-70": !isFavorite,
            "fill-current opacity-50 text-primary cursor-not-allowed": isLoading,
          })}
          onClick={() => !isLoading && handleWishlistsItem()}
        />
      )}
    </>
  );
};

WishlistIcon.defaultProps = {
  product: {},
  isFromCart: false,
  isSaveForLater: false,
};

WishlistIcon.propTypes = {
  product: shape({}),
  isFromCart: bool,
  isSaveForLater: bool,
};

export default WishlistIcon;
