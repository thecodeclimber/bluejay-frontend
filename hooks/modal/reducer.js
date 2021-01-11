import { SET_MODAL } from "./constants";

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
const modalReducer = (state, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, activeModal: action.data };

    default:
      return state;
  }
};

export default modalReducer;
