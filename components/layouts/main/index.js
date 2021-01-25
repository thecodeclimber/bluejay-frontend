import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { setModal } from "../../../hooks/modal/actions";
import { setCart, setSaveForLaterCart } from "../../../hooks/cart/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import { Context } from "../../../hooks/store";
import {
  getCartData,
  setCartLocalStorage,
  formattingCartData,
} from "../../../utils/helper";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";
import Auth from "./auth";

const MainLayout = (props) => {
  const router = useRouter();
  const { children } = props;
  const { modalState, dispatchModal, dispatchCart } = useContext(Context);

  useEffect(() => {
    const { reset, token } = router.query || {};
    if (reset && token && modalState.activeModal !== MODAL_TYPES.NEW_PASSWORD) {
      dispatchModal(setModal(MODAL_TYPES.NEW_PASSWORD));
    }
    fetchCartData();
  }, []);

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
