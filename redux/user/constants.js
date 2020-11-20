const PREFIX = `redux/user/`;

/**
 * Redux Constants
 */
export const SET_USER = `${PREFIX}SET_USER`;

export const USER_STRUCTURE = {
  isFetching: false,
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  roles: '',
  token: '',
  refreshToken: '',
};
