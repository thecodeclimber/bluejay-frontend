import React, { useContext } from "react";
import { Transition } from "@headlessui/react";
import Registration from "./registration";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import NewPassword from "./newPassword";
import { MODAL_TYPES } from "../../../../hooks/modal/constants";
import { Context } from "../../../../hooks/store";

const Auth = () => {
  const [modalState] = useContext(Context).modal;

  return (
    <div className="container mx-auto py-3">
      {modalState.activeModal === MODAL_TYPES.REGISTRATION && (
        <Transition
          show={true}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Registration />
        </Transition>
      )}

      {modalState.activeModal === MODAL_TYPES.LOGIN && (
        <Transition
          show={true}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Login />
        </Transition>
      )}

      {modalState.activeModal === MODAL_TYPES.FORGOT_PASSWORD && (
        <Transition
          show={true}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <ForgotPassword />
        </Transition>
      )}

      {modalState.activeModal === MODAL_TYPES.NEW_PASSWORD && (
        <Transition
          show={true}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <NewPassword />
        </Transition>
      )}
    </div>
  );
};

export default Auth;
