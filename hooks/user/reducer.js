import { SET_USER } from "../../hooks/user/constants";

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

    default:
      return state;
  }
};

export default userReducer;
