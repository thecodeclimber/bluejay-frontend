/**
 * Import Dependencies
 */
import { SET_USER, SET_MODAL } from "./constants";

/**
 * Set user
 *
 * @param {Object} data
 */
export const setUser = (data = {}) => {
  return { type: SET_USER, data };
};

/**
 * Set modal
 *
 * @param {String} data
 */
export const setModal = (data = "") => {
  return { type: SET_MODAL, data };
};
