import React, { useState } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  VscChromeClose as CloseIcon
} from "react-icons/vsc";
import { setModal } from "../../../../redux/user/actions";

const ForgotPassword = (props) => {
  const { setModal } = props;
  const state = {
    email: "andreybabak101@gmail.com",
  };
  const [formData, setFormData] = useState(state);
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-10 bg-opacity-75 py-5 justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto" static="true">
          <div className="flex justify-end">
            <CloseIcon className="text-dark text-opacity-50 text-xl cursor-pointer" onClick={() => setModal()} />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center">Forgot Password</div>
          <div className="text-dark opacity-75 text-sm font-light py-6 leading-4">
            Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <div className="mb-6">
            <input type="text"
              value={formData.email}
              onChange={handleFormData}
              name="email"
              placeholder="Email"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": formData.email,
              })}
            />
          </div>
          <button
            className="font-medium w-full py-3 items-center rounded bg-primary text-white focus:outline-none mb-4"
          >
            Send
          </button>
          <button
            className="font-medium w-full py-3 items-center rounded bg-white text-dark border border-dark border-opacity-25 opacity-50 focus:outline-none mb-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


ForgotPassword.propTypes = {
  setModal: func
};

export default connect(null, {
  setModal,
})(ForgotPassword);
