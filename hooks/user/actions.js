/**
 * Import Dependencies
 */
import { SET_USER } from "./constants";
import { SET_USER_WISHLISTS } from "./constants";

/**
 * Set user
 *
 * @param {Object} data
 */
export const setUser = (data = {}) => {
  return { type: SET_USER, data };
};

/**
 * Set user wishlists
 *
 * @param {Array} data
 */
export const setUserWishlists = (data = []) => {
  return { type: SET_USER_WISHLISTS, data };
};
