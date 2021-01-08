/**
 * Import Dependencies
 */
import { fromJS } from "immutable";
import {
  SET_PRODUCT_DETAIL,
  SET_IS_FETCHING_PRODUCT_DETAIL,
} from "./constants";

/**
 * Set Initial State
 */
export const initialState = fromJS({
  productDetail: {},
  isFetchingProductDetail: false,
});

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return state.set("productDetail", fromJS(action.data));
    case SET_IS_FETCHING_PRODUCT_DETAIL:
      return state.set("isFetchingProductDetail", fromJS(action.data));
    default:
      return state;
  }
}

/**
 * Export the reducer
 */
export default ProductReducer;
