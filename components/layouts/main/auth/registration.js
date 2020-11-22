import { useState } from "react";
import classnames from "classnames";
import {
  TiTick as CheckedIcon
} from "react-icons/ti";
import {
  AiFillEye as EyeIcon,
  AiFillEyeInvisible as InvisibleEyeIcon
} from "react-icons/ai";
import {
  VscChromeClose as CloseIcon
} from "react-icons/vsc";
import { httpPost } from '../../../../utils/https';
import URLS from '../../../../utils/urls';

const Registration = (props) => {
  const { closeModal } = props;
  const state = {
    name: 'Andrey Babak',
    email: '',
    password: '',
    confirmPassword: '',
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
    isTermAndConditions: false,
    isSubmit: false,
  };
  const [formData, setFormData] = useState(state);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const toggleCheckbox = () => {
    setFormData({ ...formData, isTermAndConditions: !formData.isTermAndConditions });
  }

  const togglePasswordVisibility = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  }

  const checkValidations = () => {
    const errorStructure = {
      errorName: '',
      errorEmail: '',
      errorPassword: '',
      errorConfirmPassword: '',
      isSubmit: false,
    }

    if (!isSubmit) return errorStructure;
  }

  const createAccount = () => {
    const attributeParams = [
      {
        "name": `attr-${Date.now() + 100}`,
        "type": "date"
      }
    ];

    httpPost(URLS.CUSTOMERS.ATTRIBUTES, attributeParams,
      { trace_name: 'create customer attribute' }).then(
        (res) => { console.log('res', res) },
        (err) => { console.log('err', err) }
      )
  }

  return (
    <div className="bg-dark fixed inset-0 w-100 h-100 z-10 bg-opacity-75  justify-center items-center overflow-y-auto">
      <div className="flex items-center h-full">
        <div className="font-ubuntu bg-white rounded shadow-grey-8 py-6 px-8 max-w-400 w-full text-dark m-auto" static="true">
          <div className="flex justify-end">
            <CloseIcon className="text-dark text-opacity-50 text-xl cursor-pointer" onClick={closeModal} />
          </div>
          <div className="font-medium mb-3 text-3xl text-sm leading-8 text-center mb-10">New Account</div>
          <div className="mb-6">
            <input type="text"
              value={formData.name}
              onChange={handleFormData}
              name="name"
              placeholder="Name"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": formData.name,
              })}
            />
          </div>
          <div className="mb-6">
            <input type="email"
              value={formData.email}
              onChange={handleFormData}
              name="email"
              placeholder="E-mail"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": formData.email,
              })}
            />
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
                className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isPasswordVisible")}
              />
            }
            {formData.isPasswordVisible &&
              <InvisibleEyeIcon
                className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isPasswordVisible")}
              />
            }
          </div>
          <div className="mb-6 relative">
            <input type={formData.isConfirmPasswordVisible ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleFormData}
              name="confirmPassword"
              placeholder="Confirm password"
              className={classnames("w-full border border-dark h-12 rounded border-opacity-10 pl-4 pr-12 font-normal focus:outline-none", {
                "font-medium": formData.confirmPassword,
              })}
            />
            {!formData.isConfirmPasswordVisible &&
              <EyeIcon
                className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isConfirmPasswordVisible")}
              />
            }
            {formData.isConfirmPasswordVisible &&
              <InvisibleEyeIcon
                className="absolute right-0 top-0 text-dark text-opacity-50 text-lg h-12 mr-5 cursor-pointer"
                onClick={() => togglePasswordVisibility("isConfirmPasswordVisible")}
              />
            }
          </div>
          <div className="mb-6 flex items-center">
            <div
              className={classnames("border border-dark rounded border-opacity-10 mr-4", {
                "bg-dark": formData.isTermAndConditions,
              })}
              onClick={toggleCheckbox}>
              <CheckedIcon className="text-white text-xl" />
            </div>
            <div className="text-sm">I accept <a href="#" className="text-primary">Terms & Conditions</a> </div>
          </div>
          <button
            onClick={createAccount}
            className="font-medium w-full py-3 items-center rounded bg-primary text-white border-alpha-05 focus:outline-none mb-3"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
