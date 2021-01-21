import { SET_CATEGORIES } from "./constants";

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
const categoryReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.data };

    default:
      return state;
  }
};

export default categoryReducer;
