import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getUserData } from "../../../utils/helper";
import { setUser } from "../../../hooks/user/actions";
import { setModal } from "../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import { Context } from "../../../hooks/store";
import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";
import Auth from "./auth";

const MainLayout = (props) => {
  const router = useRouter();
  const { children } = props;
  const [modalState, dispatchModal] = useContext(Context).modal;
  const [userState, dispatchUser] = useContext(Context).user;

  useEffect(() => {
    const { reset, token } = router.query || {};
    if (reset && token && modalState.activeModal !== MODAL_TYPES.NEW_PASSWORD) {
      dispatchModal(setModal(MODAL_TYPES.NEW_PASSWORD));
    }
    const userData = getUserData(userState);
    if (userData) dispatchUser(setUser(userData));
  }, [router]);

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
