import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import classnames from "classnames";
import { TiTick as CheckedIcon } from "react-icons/ti";
import {
  AiFillEye as EyeIcon,
  AiFillEyeInvisible as InvisibleEyeIcon,
} from "react-icons/ai";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { httpPost } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import {
  validateEmail,
  validateNumberAndCharacter,
  useStateCallback,
} from "../../../../utils/helper";
import { setUser } from "../../../../hooks/user/actions";
import { setModal } from "../../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../../hooks/modal/constants";
import { Context } from "../../../../hooks/store";

const Registration = () => {
  const state = {
    name: "",
    email: "",
    countryCode: "",
    stateOrProvince: "",
    city: "",
    postalCode: "",
    address: "",
    password: "",
    confirmPassword: "",
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
    isTermAndConditions: false,
    isLoading: false,
    isValidate: false,
  };
  const [formData, setFormData] = useState(state);
  const [isSubmit, setIsSubmit] = useStateCallback(false);
  const { userState, dispatchUser, dispatchModal } = useContext(Context);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCheckbox = () => {
    setFormData({
      ...formData,
      isTermAndConditions: !formData.isTermAndConditions,
    });
  };

  const togglePasswordVisibility = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const checkValidations = () => {
    const errorStructure = {
      errorName: "",
      errorEmail: "",
      errorCountryCode: "",
      errorStateOrProvince: "",
      errorCity: "",
      errorPostalCode: "",
      errorAddress: "",
      errorPassword: "",
      errorConfirmPassword: "",
    };
    if (!isSubmit) return errorStructure;
    if (!formData.name.trim()) {
      errorStructure.errorName = "Please enter name";
    }
    if (!formData.countryCode.trim()) {
      errorStructure.errorCountryCode = "Please select country";
    }
    if (!formData.stateOrProvince.trim()) {
      errorStructure.errorStateOrProvince = "Please select state or province";
    }
    if (!formData.city.trim()) {
      errorStructure.errorCity = "Please enter city";
    }
    if (!formData.postalCode.trim()) {
      errorStructure.errorPostalCode = "Please enter postal code";
    }
    if (!formData.address.trim()) {
      errorStructure.errorAddress = "Please enter address";
    }
    if (!formData.email.trim()) {
      errorStructure.errorEmail = "Please enter email";
    } else if (!validateEmail(formData.email)) {
      errorStructure.errorEmail = "Please enter valid email";
    }
    if (!formData.password) {
      errorStructure.errorPassword = "Please enter password";
    } else if (formData.password.length < 7) {
      errorStructure.errorPassword = "Password must be at least 7 characters";
    } else if (!validateNumberAndCharacter(formData.password)) {
      errorStructure.errorPassword =
        "Password contain at least one letter, one number and one special character.";
    }
    if (!formData.confirmPassword) {
      errorStructure.errorConfirmPassword = "Please enter confirm password";
    } else if (formData.password != formData.confirmPassword) {
      errorStructure.errorConfirmPassword = "Please enter same password";
    }
    if (
      !errorStructure.errorName &&
      !errorStructure.errorEmail &&
      !errorStructure.errorPassword &&
      !errorStructure.errorConfirmPassword &&
      !errorStructure.errorCountryCode &&
      !errorStructure.errorStateOrProvince &&
      !errorStructure.errorCity &&
      !errorStructure.errorPostalCode &&
      !errorStructure.errorAddress
    ) {
      formData.isValidate = true;
    } else {
      formData.isValidate = false;
    }
    return errorStructure;
  };

  const createAccount = () => {
    setIsSubmit({ isSubmit: true }, (stateData) => {
      if (stateData.isSubmit) {
        const { isValidate } = formData;
        if (!isValidate) return;
        const params = {
          first_name: formData.name,
          last_name: formData.name,
          email: formData.email,
          address: {
            first_name: formData.name,
            last_name: formData.name,
            city: formData.city,
            country_code: formData.countryCode,
            state_or_province: formData.stateOrProvince,
            address1: formData.address,
            postal_code: formData.postalCode,
          },
          authentication: {
            new_password: formData.password,
          },
        };

        setFormData({ ...formData, isLoading: true });
        httpPost(URLS.NEXT.AUTH.REGISTER, params, {
          traceName: "create customer",
        }).then(
          (res) => {
            if (res.errors && Object.keys(res.errors).length > 0) {
              alert(res.errors[Object.keys(res.errors)[0]]);
              setFormData({ ...formData, isLoading: false });
            } else {
              alert("Account created successfully");
              dispatchUser(
                setUser({ ...userState.user, tempEmail: formData.email })
              );
              setIsSubmit(false);
              setFormData({
                ...formData,
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                isPasswordVisible: false,
                isConfirmPasswordVisible: false,
                isTermAndConditions: false,
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

  const {
    errorName,
    errorEmail,
    errorCountryCode,
    errorStateOrProvince,
    errorCity,
    errorPostalCode,
    errorAddress,
    errorPassword,
    errorConfirmPassword,
  } = checkValidations();

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-30 bg-opacity-75 justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div
          static="true"
          className="font-ubuntu bg-white rounded shadow-grey-8 py-4 px-8 max-w-400 w-full text-dark m-auto   z-50"
        >
          <div className="flex justify-end">
            <CloseIcon
              className="text-dark text-opacity-50 text-xl cursor-pointer"
              onClick={() => dispatchModal(setModal())}
            />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center mb-6">
            New Account
          </div>
          <div className="flex-col space-y-3">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={handleFormData}
                name="name"
                placeholder="Name"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.name,
                  }
                )}
              />
              {errorName && (
                <div className="text-error text-sm mt-1 pl-4">{errorName}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={handleFormData}
                name="email"
                placeholder="E-mail"
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
            <div>
              <Menu as="div" className="relative">
                <input
                  type="text"
                  value={formData.countryCode}
                  onChange={handleFormData}
                  name="countryCode"
                  placeholder="Country Code"
                  className={classnames(
                    "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                    {
                      "font-medium": formData.countryCode,
                    }
                  )}
                />
              </Menu>
              {errorCountryCode && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorCountryCode}
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                value={formData.stateOrProvince}
                onChange={handleFormData}
                name="stateOrProvince"
                placeholder="State or Province"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.stateOrProvince,
                  }
                )}
              />
              {errorStateOrProvince && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorStateOrProvince}
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                value={formData.city}
                onChange={handleFormData}
                name="city"
                placeholder="City"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.city,
                  }
                )}
              />
              {errorCity && (
                <div className="text-error text-sm mt-1 pl-4">{errorCity}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                value={formData.postalCode}
                onChange={handleFormData}
                name="postalCode"
                placeholder="Postal code"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none",
                  {
                    "font-medium": formData.postalCode,
                  }
                )}
              />
              {errorPostalCode && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorPostalCode}
                </div>
              )}
            </div>
            <div>
              <input
                name="address"
                placeholder="Address"
                rows="3"
                className={classnames(
                  "w-full border border-dark rounded border-opacity-10 px-4 py-2 font-normal focus:outline-none",
                  {
                    "font-medium": formData.address,
                  }
                )}
                value={formData.address}
                onChange={handleFormData}
              />
              {errorAddress && (
                <div className="text-error text-sm pl-4">{errorAddress}</div>
              )}
            </div>
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
                  className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                  onClick={() => togglePasswordVisibility("isPasswordVisible")}
                />
              )}
              {formData.isPasswordVisible && (
                <InvisibleEyeIcon
                  className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                  onClick={() => togglePasswordVisibility("isPasswordVisible")}
                />
              )}
              {errorPassword && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorPassword}
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type={formData.isConfirmPasswordVisible ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleFormData}
                name="confirmPassword"
                placeholder="Confirm password"
                className={classnames(
                  "w-full border border-dark h-12 rounded border-opacity-10 pl-4 pr-12 font-normal focus:outline-none",
                  {
                    "font-medium": formData.confirmPassword,
                  }
                )}
              />
              {!formData.isConfirmPasswordVisible && (
                <EyeIcon
                  className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility("isConfirmPasswordVisible")
                  }
                />
              )}
              {formData.isConfirmPasswordVisible && (
                <InvisibleEyeIcon
                  className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility("isConfirmPasswordVisible")
                  }
                />
              )}
              {errorConfirmPassword && (
                <div className="text-error text-sm mt-1 pl-4">
                  {errorConfirmPassword}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <div
                className={classnames(
                  "border border-dark rounded border-opacity-10 mr-4",
                  {
                    "bg-dark": formData.isTermAndConditions,
                  }
                )}
                onClick={toggleCheckbox}
              >
                <CheckedIcon className="text-white text-xl" />
              </div>
              <div className="text-sm">
                I accept{" "}
                <a href="#" className="text-primary">
                  Terms & Conditions
                </a>{" "}
              </div>
            </div>
            <button
              onClick={createAccount}
              className={classnames(
                "font-medium w-full py-3 items-center rounded bg-primary text-white border-alpha-05 focus:outline-none mb-3",
                {
                  "cursor-not-allowed bg-opacity-70": formData.isLoading,
                }
              )}
              disabled={formData.isLoading}
            >
              {formData.isLoading ? "Loading..." : "Create Account"}
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

export default Registration;
