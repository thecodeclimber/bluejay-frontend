import { useEffect, useState } from "react";
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classnames from "classnames";
import {
  TiTick as CheckedIcon
} from "react-icons/ti";
import {
  VscChromeClose as CloseIcon
} from "react-icons/vsc";
import { setModal, setUser } from "../../../../redux/user/actions";
import { getUser } from "../../../../redux/user/selectors";

const Login = (props) => {
  const state = {
    email: '',
    password: '',
    isRemember: false,
  };
  const { user, setUser, setModal } = props;
  const [formData, setFormData] = useState(state);

  useEffect(() => {
    const { tempEmail } = user || {};
    setFormData({ ...formData, email: tempEmail });

    return () => {
      setUser({ ...user, tempEmail: '' });
    };
  }, []);


  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCheckbox = () => {
    setFormData({ ...formData, isRemember: !formData.isRemember });
  };

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-10 bg-opacity-75 py-5 justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto" static="true">
          <div className="flex justify-end">
            <CloseIcon className="text-dark text-opacity-50 text-xl cursor-pointer" onClick={() => setModal()} />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center mb-10">Login Account</div>
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
          <div className="mb-6">
            <input type="password"
              value={formData.password}
              onChange={handleFormData}
              name="password"
              placeholder="Password"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 pl-4 pr-12 font-normal focus:outline-none", {
                "font-medium": formData.password,
              })}
            />
          </div>
          <div className="mb-6 flex items-center">
            <div
              className={classnames("border border-dark rounded border-opacity-10 mr-4", {
                "bg-dark": formData.isRemember,
              })}
              onClick={toggleCheckbox}>
              <CheckedIcon className="text-white text-xl" />
            </div>
            <div className="text-sm flex justify-between w-full"><span>Remember me</span><a href="#" className="text-primary">Forgot Password?</a> </div>
          </div>
          <button
            className="font-medium w-full py-3 items-center rounded bg-primary text-white focus:outline-none mb-4"
          >
            Login
            </button>
          <button
            className="font-medium w-full py-3 items-center rounded bg-white text-dark border border-dark border-opacity-25 opacity-50 focus:outline-none mb-6"
          >
            Create new Account
            </button>
          <hr className="mb-6 opacity-10 bg-dark" />
          <button
            className="w-full py-3 items-center rounded bg-blue text-white focus:outline-none mb-4"
          >
            <span className="font-light">
              Sign in with{' '}
            </span>
            <span className="font-medium">
              Facebook
              </span>
          </button>
          <button
            className="font-medium w-full py-3 items-center rounded bg-orange text-white focus:outline-none mb-3"
          >
            <span className="font-light">
              Sign in with{' '}
            </span>
            <span className="font-medium">
              Google
              </span>
          </button>
        </div>
      </div>
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
