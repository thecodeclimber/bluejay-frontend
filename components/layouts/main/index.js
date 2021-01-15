import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getUserData } from "../../../utils/helper";
import { setUser } from "../../../hooks/user/actions";
import { setModal } from "../../../hooks/modal/actions";
import { setCart } from "../../../hooks/cart/actions";
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

  const fetchCartData = () => {
    const cartData = getCartData();
    if (!cartData || !cartData?.cartId) return;
    const cartUrl = `${URLS.NEXT.CART.CART}/${cartData.cartId}`;
    httpGet(cartUrl, {
      traceName: "get_cart",
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
