/**
 * Import Dependencies
 */
import { fromJS } from "immutable";
import {
  SET_CATEGORIES
} from "./constants";

/**
 * Set Initial State
 */
export const initialState = fromJS({
  categories: [],
});

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return state.set('categories', fromJS(action.data));

    default:
      return state;
  }
}

/**
 * Export the reducer
 */
export default CategoryReducer;
