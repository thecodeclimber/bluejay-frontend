/**
 * Import Dependencies
 */
import { SET_MODAL } from "./constants";

/**
 * Set modal
 *
 * @param {String} data
 */
export const setModal = (data = "") => {
  return { type: SET_MODAL, data };
};
