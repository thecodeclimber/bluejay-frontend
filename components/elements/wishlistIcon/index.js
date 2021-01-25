import React, { useState, useContext } from "react";
import classnames from "classnames";
import { shape } from "prop-types";
import { FiHeart as FavoriteIcon } from "react-icons/fi";
import { httpPost, httpDelete } from "../../../utils/https";
import { Context } from "../../../hooks/store";
import { setModal } from "../../../hooks/modal/actions";
import { setUserWishlists } from "../../../hooks/user/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import URLS from "../../../utils/urls";

const WishlistIcon = (props) => {
  const { product } = props || {};
  const { userState, dispatchModal, dispatchUser } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const handleWishlistsItem = (product, isFavorite) => {
    if (!userState.user?.id) {
      dispatchModal(setModal(MODAL_TYPES.LOGIN));
      return;
    }
    setIsLoading(true);
    if (isFavorite) {
      const deleteUrl = `${URLS.NEXT.WISHLIST.DELETE}?product_id=${product.id}`;
      httpDelete(deleteUrl, {
        traceName: "delete_wishlist",
      }).then((res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          if (userState.wishlists && userState.wishlists.length > 0) {
            const filteredWishlists = userState.wishlists.filter(
              (data) => data.id !== product.id
            );
            dispatchUser(setUserWishlists(filteredWishlists));
          }
        }
        setIsLoading(false);
      });
      return;
    }
    const params = {
      product_id: product.id,
    };
    httpPost(URLS.NEXT.WISHLIST.ADD, params, {
      traceName: "add_wishlist",
    }).then((res) => {
      if (res.errors && Object.keys(res.errors).length > 0) {
        alert(res.errors[Object.keys(res.errors)[0]]);
      } else {
        dispatchUser(setUserWishlists(res || []));
      }
      setIsLoading(false);
    });
  };

  const isFavorite = userState.wishlists.some((data) => data.id === product.id);
  return (
    <FavoriteIcon
      className={classnames("text-xl cursor-pointer", {
        "fill-current text-primary": isFavorite,
        "text-grey opacity-70": !isFavorite,
        "fill-current opacity-50 text-primary cursor-not-allowed": isLoading,
      })}
      onClick={() => !isLoading && handleWishlistsItem(product, isFavorite)}
    />
  );
};

WishlistIcon.propTypes = {
  product: shape({}),
};

export default WishlistIcon;
