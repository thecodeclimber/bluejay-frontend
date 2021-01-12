/**
 * Import Dependencies
 */
import { SET_CART } from "./constants";

/**
 * Set cart
 *
 * @param {Array} data
 */
export const setCart = (data = []) => {
  return { type: SET_CART, data };
};
