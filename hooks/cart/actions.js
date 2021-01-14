/**
 * Import Dependencies
 */
import { SET_CART } from "./constants";

/**
 * Set cart
 *
 * @param {Object} data
 */
export const setCart = (data = {}) => {
  return { type: SET_CART, data };
};
