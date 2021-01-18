import { SET_CART, SET_SAVE_FOR_LATER_CART } from "./constants";

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
const cartReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.data };
    case SET_SAVE_FOR_LATER_CART:
      return { ...state, saveForLaterCart: action.data };
    default:
      return state;
  }
};

export default cartReducer;
