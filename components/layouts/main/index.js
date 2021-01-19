import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getUserData } from "../../../utils/helper";
import { setUser } from "../../../hooks/user/actions";
import { setModal } from "../../../hooks/modal/actions";
import { setCart, setSaveForLaterCart } from "../../../hooks/cart/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import { Context } from "../../../hooks/store";
import { setUserWishlists } from "../../../hooks/user/actions";
import {
  getCartData,
  setCartLocalStorage,
  formattingCartData,
} from "../../../utils/helper";
import { httpGet } from "../../../utils/https";
import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";
import Auth from "./auth";
import URLS from "../../../utils/urls";

const MainLayout = (props) => {
  const router = useRouter();
  const { children } = props;
  const {
    userState,
    dispatchUser,
    modalState,
    dispatchModal,
    dispatchCart,
  } = useContext(Context);

  useEffect(() => {
    const { reset, token } = router.query || {};
    if (reset && token && modalState.activeModal !== MODAL_TYPES.NEW_PASSWORD) {
      dispatchModal(setModal(MODAL_TYPES.NEW_PASSWORD));
    }
    const userData = getUserData(userState);
    if (userData) dispatchUser(setUser(userData));
    fetchCartData();
  }, []);

  useEffect(() => {
    if (userState.user?.id) fetchUserWishlists();
  }, [userState.user?.id]);

  const fetchUserWishlists = () => {
    const wishlistUrl = `${URLS.NEXT.WISHLIST.CUSTOMER}?id=${userState.user.id}`;
    httpGet(wishlistUrl, {
      traceName: "get_customer_wishlists",
    }).then((res) => {
      if (res.errors && Object.keys(res.errors).length > 0) {
        alert(res.errors[Object.keys(res.errors)[0]]);
      } else {
        dispatchUser(setUserWishlists(res || []));
      }
    });
  };

  const fetchCartData = () => {
    const cartData = getCartData();
    const saveForCartData = getCartData(true);
    if (!cartData && !saveForCartData) return;
    let cartUrl = URLS.NEXT.CART.CART;
    if (cartData?.cartId) {
      cartUrl += `?cartId=${cartData?.cartId}`;
    }
    if (saveForCartData?.cartId) {
      cartUrl += `${cartData?.cartId ? "&" : "?"}saveForLaterCartId=${
        saveForCartData?.cartId
      }`;
    }
    httpGet(cartUrl, {
      traceName: "get_cart",
    }).then((res) => {
      const { errors, cart, saveForLaterCart } = res || {};
      if (errors && Object.keys(errors).length > 0) {
        alert(errors[Object.keys(errors)[0]]);
      } else {
        setCartLocalStorage(cart?.data?.id, cart?.data?.updated_time);
        const formattedCart = formattingCartData(cart?.data);
        dispatchCart(setCart(formattedCart));
        setCartLocalStorage(
          saveForLaterCart?.data?.id,
          saveForLaterCart?.data?.updated_time,
          true
        );
        const formattedSaveForCartData = formattingCartData(
          saveForLaterCart?.data
        );
        dispatchCart(setSaveForLaterCart(formattedSaveForCartData));
      }
    });
  };

  return (
    <Base>
      <Navbar />
      <Auth />
      {children}
      <Footer />
    </Base>
  );
};

export default MainLayout;
