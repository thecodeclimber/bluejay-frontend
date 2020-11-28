import { useState } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  AiFillEye as EyeIcon,
  AiFillEyeInvisible as InvisibleEyeIcon
} from "react-icons/ai";
import {
  VscChromeClose as CloseIcon
} from "react-icons/vsc";
import { setModal } from "../../../../redux/user/actions";

const NewPassword = (props) => {
  const { setModal } = props;
  const state = {
    password: "1231454797",
    repeatPassword: "",
    isPasswordVisible: false,
  };
  const [formData, setFormData] = useState(state);
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const togglePasswordVisibility = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-10 bg-opacity-75  justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto" static="true">
          <div className="flex justify-end">
            <CloseIcon className="text-dark text-opacity-50 text-xl cursor-pointer" onClick={() => setModal()} />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center">New Password</div>
          <div className="text-dark opacity-75 text-sm font-light py-6 leading-4">
            Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <div className="mb-6 relative">
            <input type={formData.isPasswordVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleFormData}
              name="password"
              placeholder="Password"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 pl-4 pr-12 font-normal focus:outline-none", {
                "font-medium": formData.password,
              })}
            />
            {!formData.isPasswordVisible &&
              <EyeIcon
                className="absolute right-0 top-0 text-dark text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isPasswordVisible")}
              />
            }
            {formData.isPasswordVisible &&
              <InvisibleEyeIcon
                className="absolute right-0 top-0 text-dark text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isPasswordVisible")}
              />
            }
          </div>
          <div className="mb-6">
            <input type="password"
              value={formData.repeatPassword}
              onChange={handleFormData}
              name="repeatPassword"
              placeholder="Repeat Password"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": formData.repeatPassword,
              })}
            />
          </div>
          <button
            className="font-medium w-full py-3 items-center rounded bg-primary text-white border-alpha-05 focus:outline-none mb-3"
          >
            Login
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

NewPassword.propTypes = {
  setModal: func
};

export default connect(null, {
  setModal,
})(NewPassword);
