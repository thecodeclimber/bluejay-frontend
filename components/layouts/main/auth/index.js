import { useState } from "react";
import { Transition } from "@headlessui/react";
import Registration from './registration'
import Login from './login'

const ModalType = {
  Registration: "Registration",
  Login: "Login",
  ForgotPassword: "ForgotPassword",
  NewPassword: "NewPassword",
};


const Auth = () => {
  const [activeModal, setActiveModal] = useState("");

  const handleModal = (name = "") => {
    setActiveModal(name);
  }

  const closeModal = () => {
    setActiveModal("");
  }

  return (
    <div className="container mx-auto py-3">
      <div className="">
        <button
          className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none mr-3"
          onClick={() => handleModal(ModalType.Registration)}
        >
          Registration
        </button>
        <button
          className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none"
          onClick={() => handleModal(ModalType.Login)}
        >
          Login
        </button>
      </div>

      {activeModal === ModalType.Registration &&
        <Transition
          show={activeModal === ModalType.Registration}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Registration closeModal={closeModal} />
        </Transition>}

      {activeModal === ModalType.Login &&
        <Transition
          show={activeModal === ModalType.Login}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Login closeModal={closeModal} />
        </Transition>}
    </div>
  )
};

export default Auth;
