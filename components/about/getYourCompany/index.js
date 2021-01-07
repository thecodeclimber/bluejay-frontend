import React from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { setModal } from "../../../redux/user/actions";
import { MODAL_TYPES } from "../../../redux/user/constants";

const GetYourCompany = (props) => {
  const { setModal } = props;

  return (
    <div className="container mx-auto px-8 bg-account bg-cover bg-no-repeat py-8 rounded mb-16">
      <div className="border rounded border-opacity-10 border-white">
        <div className="text-3xl pt-10 pb-4 font-ubuntu text-white text-center">
          <span className="font-light">Get</span>{" "}
          <span className="font-medium">Your Company An Account</span>
        </div>
        <div className="flex justify-center mb-12">
          <button
            className="py-3 px-16 rounded bg-primary text-white text-base focus:outline-none"
            onClick={() => setModal(MODAL_TYPES.REGISTRATION)}
          >
            Get an Account
          </button>
        </div>
      </div>
    </div>
  );
};

GetYourCompany.propTypes = {
  setModal: func,
};

export default connect(null, {
  setModal,
})(GetYourCompany);
