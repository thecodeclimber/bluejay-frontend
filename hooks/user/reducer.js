import { SET_USER, SET_USER_WISHLISTS } from "../../hooks/user/constants";

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.data };
    case SET_USER_WISHLISTS:
      return { ...state, wishlists: action.data };

    default:
      return state;
  }
};

export default userReducer;
