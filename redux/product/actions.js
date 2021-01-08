/**
 * Import Dependencies
 */
import {
  SET_PRODUCT_DETAIL,
  SET_IS_FETCHING_PRODUCT_DETAIL,
} from "./constants";

/**
 * Set product detail
 *
 * @param {Object} data
 */
export const setProductDetail = (data = {}) => {
  return { type: SET_PRODUCT_DETAIL, data };
};

/**
 * Set is fetching product detail
 *
 * @param {Object} data
 */
export const setIsFetchingProductDetail = (data = false) => {
  return { type: SET_IS_FETCHING_PRODUCT_DETAIL, data };
};
