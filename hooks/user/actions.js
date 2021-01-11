/**
 * Import Dependencies
 */
import { SET_USER } from "./constants";

/**
 * Set user
 *
 * @param {Object} data
 */
export const setUser = (data = {}) => {
  return { type: SET_USER, data };
};
