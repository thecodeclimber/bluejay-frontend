import { string, func, shape } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Transition } from "@headlessui/react";
import Registration from "./registration";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import NewPassword from "./newPassword";
import { setModal, setUser } from "../../../../redux/user/actions";
import { getModal, getUser } from "../../../../redux/user/selectors";
import { USER_STRUCTURE } from "../../../../redux/user/constants";
import { MODAL_TYPES } from "../../../../redux/user/constants";
import { removeUserLocalStorage } from "../../../../utils/helper";

const Auth = (props) => {
  const { activeModal, setModal, setUser, user } = props;
  const { id } = user || {};
  const handleSignOut = () => {
    removeUserLocalStorage();
    setUser(USER_STRUCTURE);
  }

  return (
    <div className="container mx-auto py-3">
      <div className="">
        {id && <button
          className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none mr-3"
          onClick={handleSignOut}
        >
          SignOut
        </button>
        }
        {!id && <>
          <button
            className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none mr-3"
            onClick={() => setModal(MODAL_TYPES.REGISTRATION)}
          >
            Registration
        </button>
          <button
            className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none mr-3"
            onClick={() => setModal(MODAL_TYPES.LOGIN)}
          >
            Login
        </button>
        </>
        }

        <button
          className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none mr-3"
          onClick={() => setModal(MODAL_TYPES.FORGOT_PASSWORD)}
        >
          Forgot Password
        </button>
        <button
          className="inline-flex py-2 items-center px-4 border-r border-solid rounded bg-primary text-white border-alpha-05 sm:text-sm focus:outline-none"
          onClick={() => setModal(MODAL_TYPES.NEW_PASSWORD)}
        >
          New Password
        </button>
      </div>

      {activeModal === MODAL_TYPES.REGISTRATION &&
        <Transition
          show={activeModal === MODAL_TYPES.REGISTRATION}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Registration />
        </Transition>}

      {activeModal === MODAL_TYPES.LOGIN &&
        <Transition
          show={activeModal === MODAL_TYPES.LOGIN}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <Login />
        </Transition>}

      {activeModal === MODAL_TYPES.FORGOT_PASSWORD &&
        <Transition
          show={activeModal === MODAL_TYPES.FORGOT_PASSWORD}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <ForgotPassword />
        </Transition>}

      {activeModal === MODAL_TYPES.NEW_PASSWORD &&
        <Transition
          show={activeModal === MODAL_TYPES.NEW_PASSWORD}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="h-full"
        >
          <NewPassword />
        </Transition>}
    </div>
  );
};


Auth.propTypes = {
  activeModal: string,
  setModal: func,
  setUser: func,
  user: shape({}),
};

const mapStateToProps = createStructuredSelector({
  activeModal: getModal(),
  user: getUser(),
});

export default connect(mapStateToProps, {
  setModal,
  setUser,
})(Auth);