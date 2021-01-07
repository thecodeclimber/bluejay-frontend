import React, { useState } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { useStateCallback, validateEmail } from "../../../../utils/helper";
import URLS from "../../../../utils/urls";
import { httpPost } from "../../../../utils/https";
import { setModal } from "../../../../redux/user/actions";

const ForgotPassword = (props) => {
  const { setModal } = props;
  const state = {
    email: "",
    isLoading: false,
    isValidate: false,
  };
  const [formData, setFormData] = useState(state);
  const [isSubmit, setIsSubmit] = useStateCallback(false);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkValidations = () => {
    const errorStructure = {
      errorEmail: "",
    };
    if (!isSubmit) return errorStructure;
    if (!formData.email.trim()) {
      errorStructure.errorEmail = "Please enter email";
    } else if (!validateEmail(formData.email)) {
      errorStructure.errorEmail = "Please enter valid email";
    }
    if (!errorStructure.errorEmail) {
      formData.isValidate = true;
    } else {
      formData.isValidate = false;
    }
    return errorStructure;
  };

  const sendEmail = () => {
    setIsSubmit({ isSubmit: true }, (stateData) => {
      if (stateData.isSubmit) {
        const { isValidate } = formData;
        if (!isValidate) return;
        const params = {
          email: formData.email,
        };
        setFormData({ ...formData, isLoading: true });
        httpPost(URLS.NEXT.AUTH.FORGOT_PASSWORD, params, {
          traceName: "login customer",
        }).then(
          (res) => {
            if (res.errors && Object.keys(res.errors).length > 0) {
              alert(res.errors[Object.keys(res.errors)[0]]);
              setFormData({ ...formData, isLoading: false });
            } else {
              setIsSubmit(false);
              setFormData({
                ...formData,
                email: "",
                isLoading: false,
              });
              alert(
                "Reset password link send successfully to your email account"
              );
              setModal();
            }
          },
          (err) => {
            setFormData({ ...formData, isLoading: false });
          }
        );
      }
    });
  };
  const { errorEmail } = checkValidations();

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-30 bg-opacity-75 py-5 justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div
          className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto z-50"
          static="true"
        >
          <div className="flex justify-end">
            <CloseIcon
              className="text-dark text-opacity-50 text-xl cursor-pointer"
              onClick={() => setModal()}
            />
          </div>
          <div className="font-medium mb-2 text-3xl text-sm leading-8 text-center">
            Forgot Password
          </div>
          <div className="text-dark opacity-75 text-sm font-light py-5 leading-4">
            Lorem Ipsum is simply dummy text of the printing & typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <div className="flex-col space-y-3">
            <div>
              <input
                type="text"
                value={formData.email}
                onChange={handleFormData}
                name="email"
                placeholder="Email"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.email,
                  }
                )}
              />
              {errorEmail && (
                <div className="text-error text-sm mt-1 pl-4">{errorEmail}</div>
              )}
            </div>
            <button
              onClick={sendEmail}
              disabled={formData.isLoading}
              className={classnames(
                "font-medium w-full py-3 items-center rounded bg-primary text-white focus:outline-none mb-4",
                {
                  "cursor-not-allowed bg-opacity-70": formData.isLoading,
                }
              )}
            >
              {formData.isLoading ? "Loading..." : "Send"}
            </button>
            <button
              className="font-medium w-full py-3 items-center rounded bg-white text-dark border border-dark border-opacity-25 opacity-50 focus:outline-none mb-6"
              onClick={() => setModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {!formData.isLoading && (
        <div
          className="fixed top-0 h-full w-full z-20"
          onClick={() => setModal()}
        />
      )}
    </div>
  );
};

ForgotPassword.propTypes = {
  setModal: func,
};

export default connect(null, {
  setModal,
})(ForgotPassword);
