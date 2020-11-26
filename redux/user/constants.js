const PREFIX = "redux/user/";

/**
 * Redux Constants
 */
export const SET_USER = `${PREFIX}SET_USER`;
export const SET_MODAL = `${PREFIX}SET_MODAL`;

export const USER_STRUCTURE = {
  isFetching: false,
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  roles: '',
  token: '',
  refreshToken: '',
  tempEmail: '',
};

export const MODAL_TYPES = {
  REGISTRATION: "Registration",
  LOGIN: "Login",
  FORGOT_PASSWORD: "ForgotPassword",
  NEW_PASSWORD: "NewPassword",
};