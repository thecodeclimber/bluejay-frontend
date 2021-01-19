/**
 * Import Dependencies
 */
import { SET_CART, SET_SAVE_FOR_LATER_CART } from "./constants";

/**
 * Set cart
 *
 * @param {Object} data
 */
export const setCart = (data = {}) => {
  return { type: SET_CART, data };
};

/**
 * Set save for later cart
 *
 * @param {Object} data
 */
export const setSaveForLaterCart = (data = {}) => {
  return { type: SET_SAVE_FOR_LATER_CART, data };
};
