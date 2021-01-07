import React, { useEffect } from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";
import Auth from "./auth";
import { setModal, setUser } from "../../../redux/user/actions";
import { getModal } from "../../../redux/user/selectors";
import { MODAL_TYPES } from "../../../redux/user/constants";
import { getUserData } from "../../../utils/helper";
import { useRouter } from "next/router";

const MainLayout = (props) => {
  const router = useRouter();
  const { children, activeModal, setModal, setUser } = props;

  useEffect(() => {
    const { reset, token } = router.query || {};
    if (reset && token && activeModal !== MODAL_TYPES.NEW_PASSWORD) {
      setModal(MODAL_TYPES.NEW_PASSWORD);
    }
    const userData = getUserData();
    if (userData) setUser(userData);
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

MainLayout.propTypes = {
  activeModal: string,
  setModal: func,
  setUser: func,
};

const mapStateToProps = createStructuredSelector({
  activeModal: getModal(),
});

export default connect(mapStateToProps, {
  setModal,
  setUser,
})(MainLayout);
