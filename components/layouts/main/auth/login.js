import React, { useEffect, useState, useContext } from "react";
import classnames from "classnames";
import { TiTick as CheckedIcon } from "react-icons/ti";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { httpPost } from "../../../../utils/https";
import {
  getUserData,
  useStateCallback,
  setUserLocalStorage,
} from "../../../../utils/helper";
import { setUser } from "../../../../hooks/user/actions";
import { setModal } from "../../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../../hooks/modal/constants";
import { Context } from "../../../../hooks/store";
import URLS from "../../../../utils/urls";

const Login = () => {
  const state = {
    email: "",
    password: "",
    isRemember: false,
    isLoading: false,
    isValidate: false,
  };
  const [formData, setFormData] = useState(state);
  const [isSubmit, setIsSubmit] = useStateCallback(false);
  const [, dispatchModal] = useContext(Context).modal;
  const [userState, dispatchUser] = useContext(Context).user;

  useEffect(() => {
    const { tempEmail } = userState.user || {};
    if (tempEmail) setFormData({ ...formData, email: tempEmail });
  }, []);

  const handleModal = () => {
    dispatchUser(setUser({ ...userState.user, tempEmail: "" }));
    dispatchModal(setModal());
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCheckbox = () => {
    setFormData({ ...formData, isRemember: !formData.isRemember });
  };

  const checkValidations = () => {
    const errorStructure = {
      errorEmail: "",
      errorPassword: "",
    };
    if (!isSubmit) return errorStructure;

    if (!formData.email.trim()) {
      errorStructure.errorEmail = "Please enter email";
    }
    if (!formData.password) {
      errorStructure.errorPassword = "Please enter password";
    }
    if (!errorStructure.errorEmail && !errorStructure.errorPassword) {
      formData.isValidate = true;
    } else {
      formData.isValidate = false;
    }
    return errorStructure;
  };

  const handleLogin = () => {
    setIsSubmit({ isSubmit: true }, (stateData) => {
      if (stateData.isSubmit) {
        const { isValidate } = formData;
        if (!isValidate) return;
        const params = {
          email: formData.email,
          password: formData.password,
        };
        setFormData({ ...formData, isLoading: true });
        httpPost(URLS.NEXT.AUTH.LOGIN, params, {
          traceName: "login customer",
        }).then(
          (res) => {
            if (res.errors && Object.keys(res.errors).length > 0) {
              alert(res.errors[Object.keys(res.errors)[0]]);
              setFormData({ ...formData, isLoading: false });
            } else {
              alert("You are logged in successfully");
              setIsSubmit(false);
              setFormData({
                ...formData,
                email: "",
                password: "",
                isLoading: false,
              });
              const data = { token: res.token, user: res.user };
              setUserLocalStorage(data);
              const userData = getUserData(userState);
              dispatchUser(setUser(userData));
              dispatchModal(setModal());
            }
          },
          (err) => {
            setFormData({ ...formData, isLoading: false });
          }
        );
      }
    });
  };

  const { errorEmail, errorPassword } = checkValidations();

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-30 bg-opacity-75 py-5 justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div
          className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto"
          static="true"
        >
          <div className="flex justify-end">
            <CloseIcon
              className="text-dark text-opacity-50 text-xl cursor-pointer"
              onClick={handleModal}
            />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center mb-10">
            Login Account
          </div>
          <div className="mb-6">
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
          <div className="mb-6">
            <input
              type="password"
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
            {errorPassword && (
              <div className="text-error text-sm mt-1 pl-4">
                {errorPassword}
              </div>
            )}
          </div>
          <div className="mb-6 flex items-center">
            <div
              className={classnames(
                "border border-dark rounded border-opacity-10 mr-4",
                {
                  "bg-dark": formData.isRemember,
                }
              )}
              onClick={toggleCheckbox}
            >
              <CheckedIcon className="text-white text-xl" />
            </div>
            <div className="text-sm flex justify-between w-full">
              <span>Remember me</span>
              <span
                className="text-primary cursor-pointer"
                onClick={() =>
                  dispatchModal(setModal(MODAL_TYPES.FORGOT_PASSWORD))
                }
              >
                Forgot Password?
              </span>
            </div>
          </div>
          <button
            onClick={handleLogin}
            disabled={formData.isLoading}
            className={classnames(
              "font-medium w-full py-3 items-center rounded bg-primary text-white focus:outline-none mb-4",
              {
                "cursor-not-allowed bg-opacity-70": formData.isLoading,
              }
            )}
          >
            {formData.isLoading ? "Loading..." : "Login"}
          </button>
          <button className="font-medium w-full py-3 items-center rounded bg-white text-dark border border-dark border-opacity-25 opacity-50 focus:outline-none mb-6">
            Create new Account
          </button>
          <hr className="mb-6 opacity-10 bg-dark" />
          <button className="w-full py-3 items-center rounded bg-blue text-white focus:outline-none mb-4">
            <span className="font-light">Sign in with </span>
            <span className="font-medium">Facebook</span>
          </button>
          <button className="font-medium w-full py-3 items-center rounded bg-orange text-white focus:outline-none mb-3">
            <span className="font-light">Sign in with </span>
            <span className="font-medium">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
