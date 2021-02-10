import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import {
  AiFillEye as EyeIcon,
  AiFillEyeInvisible as InvisibleEyeIcon,
} from "react-icons/ai";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import {
  useStateCallback,
  validateNumberAndCharacter,
} from "../../../../utils/helper";
import { httpPut } from "../../../../utils/https";
import { MESSAGES } from "../../../../utils/constants";
import URLS from "../../../../utils/urls";
import { useRouter } from "next/router";
import { setModal } from "../../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../../hooks/modal/constants";
import { Context } from "../../../../hooks/store";

const NewPassword = () => {
  const router = useRouter();
  const { dispatchModal } = useContext(Context);

  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      router.push("/");
    };
  }, []);

  const state = {
    password: "",
    repeatPassword: "",
    isPasswordVisible: false,
    isLoading: false,
    isValidate: false,
  };
  const [formData, setFormData] = useState(state);
  const [isSubmit, setIsSubmit] = useStateCallback(false);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const checkValidations = () => {
    const errorStructure = {
      errorPassword: "",
      errorRepeatPassword: "",
    };
    if (!isSubmit) return errorStructure;
    if (!formData.password) {
      errorStructure.errorPassword = "Please enter password";
    } else if (formData.password.length < 7) {
      errorStructure.errorPassword = "Password must be at least 7 characters";
    } else if (!validateNumberAndCharacter(formData.password)) {
      errorStructure.errorPassword =
        "Password contain at least one letter, one number and one special character.";
    }
    if (!formData.repeatPassword) {
      errorStructure.errorRepeatPassword = "Please enter repeat password";
    } else if (formData.password != formData.repeatPassword) {
      errorStructure.errorRepeatPassword = "Please enter same password";
    }
    if (!errorStructure.errorPassword && !errorStructure.errorRepeatPassword) {
      formData.isValidate = true;
    } else {
      formData.isValidate = false;
    }
    return errorStructure;
  };

  const changePassword = () => {
    setIsSubmit({ isSubmit: true }, (stateData) => {
      if (stateData.isSubmit) {
        const { isValidate } = formData;
        if (!isValidate) return;

        const params = {
          authentication: {
            new_password: formData.password,
          },
        };
        const { query } = router || {};
        if (!query.token && !query.reset) {
          alert(MESSAGES.SOMETHING_WENT_WRONG);
          return;
        }
        setFormData({ ...formData, isLoading: true });
        const headers = {
          Authorization: `Bearer ${query.token}`,
        };
        httpPut(URLS.NEXT.AUTH.CHANGE_PASSWORD, params, {
          traceName: "change password",
          headers,
        }).then(
          (res) => {
            if (res.errors && Object.keys(res.errors).length > 0) {
              alert(res.errors[Object.keys(res.errors)[0]]);
              setFormData({ ...formData, isLoading: false });
            } else {
              alert("Password changed successfully");
              setIsSubmit(false);
              setFormData({
                ...formData,
                password: "",
                repeatPassword: "",
                isLoading: false,
              });
              dispatchModal(setModal(MODAL_TYPES.LOGIN));
            }
          },
          (err) => {
            setFormData({ ...formData, isLoading: false });
          }
        );
      }
    });
  };

  const { errorPassword, errorRepeatPassword } = checkValidations();

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-30 bg-opacity-75  justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div
          className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto z-50"
          static="true"
        >
          <div className="flex justify-end">
            <CloseIcon
              className="text-dark text-opacity-50 text-xl cursor-pointer"
              onClick={() => dispatchModal(setModal())}
            />
          </div>
          <div className="font-medium mb-2 text-3xl text-sm leading-8 text-center">
            New Password
          </div>
          <div className="text-dark opacity-75 text-sm font-light py-6 leading-4">
            Lorem Ipsum is simply dummy text of the printing & typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <div className="flex-col space-y-2">
            <div className="relative">
              <input
                type={formData.isPasswordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleFormData}
                name="password"
                placeholder="Password"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 pl-4 pr-12 font-normal focus:outline-none",
                  {
                    "font-medium": formData.password,
                  }
                )}
              />
              {!formData.isPasswordVisible && (
                <EyeIcon
                  className="absolute right-0 top-0 text-dark text-lg h-12 mr-5 cursor-pointer"
                  onClick={() => togglePasswordVisibility("isPasswordVisible")}
                />
              )}
              {formData.isPasswordVisible && (
                <InvisibleEyeIcon
                  className="absolute right-0 top-0 text-dark text-lg h-12 mr-5 cursor-pointer"
                  onClick={() => togglePasswordVisibility("isPasswordVisible")}
                />
              )}
              {errorPassword && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorPassword}
                </div>
              )}
            </div>
            <div>
              <input
                type="password"
                value={formData.repeatPassword}
                onChange={handleFormData}
                name="repeatPassword"
                placeholder="Repeat Password"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.repeatPassword,
                  }
                )}
              />
              {errorRepeatPassword && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorRepeatPassword}
                </div>
              )}
            </div>
            <button
              className="font-medium w-full py-3 items-center rounded bg-primary text-white border-alpha-05 focus:outline-none mb-3"
              onClick={changePassword}
              className={classnames(
                "font-medium w-full py-3 items-center rounded bg-primary text-white border-alpha-05 focus:outline-none mb-3",
                {
                  "cursor-not-allowed bg-opacity-70": formData.isLoading,
                }
              )}
              disabled={formData.isLoading}
            >
              {formData.isLoading ? "Loading..." : "Change Password"}
            </button>
            <button
              className="font-medium w-full py-3 items-center rounded bg-white text-dark border border-dark border-opacity-25 opacity-50 focus:outline-none mb-6"
              onClick={() => dispatchModal(setModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {!formData.isLoading && (
        <div
          className="fixed top-0 h-full w-full z-20"
          onClick={() => dispatchModal(setModal())}
        />
      )}
    </div>
  );
};

export default NewPassword;
