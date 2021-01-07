import { useEffect, useState } from "react";
import { func, shape } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import classnames from "classnames";
import { TiTick as CheckedIcon } from "react-icons/ti";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import URLS from "../../../../utils/urls";
import { httpPost } from "../../../../utils/https";
import {
  useStateCallback,
  setUserLocalStorage,
} from "../../../../utils/helper";
import { setModal, setUser } from "../../../../redux/user/actions";
import { getUser } from "../../../../redux/user/selectors";
import { MODAL_TYPES } from "../../../../redux/user/constants";

const Login = (props) => {
  const state = {
    email: "",
    password: "",
    isRemember: false,
    isLoading: false,
    isValidate: false,
  };
  const { user, setUser, setModal } = props;
  const [formData, setFormData] = useState(state);
  const [isSubmit, setIsSubmit] = useStateCallback(false);

  useEffect(() => {
    const { tempEmail } = user || {};
    if (tempEmail) setFormData({ ...formData, email: tempEmail });
  }, []);

  const handleModal = () => {
    const { user, setUser } = props;
    setUser({ ...user, tempEmail: "" });
    setModal();
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
              const userData = setUserLocalStorage(data);
              setUser(userData);
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

  const { errorEmail, errorPassword } = checkValidations();

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
              onClick={handleModal}
            />
          </div>
          <div className="font-medium text-3xl text-sm leading-8 text-center mb-8">
            Login Account
          </div>
          <div className="flex-col space-y-2">
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
            <div>
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
            <div className=" flex items-center">
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
                  onClick={() => setModal(MODAL_TYPES.FORGOT_PASSWORD)}
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
            <hr className="opacity-10 bg-dark" />
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
      {!formData.isLoading && (
        <div
          className="fixed top-0 h-full w-full z-20"
          onClick={() => setModal()}
        />
      )}
    </div>
  );
};

Login.propTypes = {
  setModal: func,
  setUser: func,
  user: shape({}),
};

const mapStateToProps = createStructuredSelector({
  user: getUser(),
});

export default connect(mapStateToProps, {
  setModal,
  setUser,
})(Login);
