/**
 * Import Dependencies
 */
import { SET_CATEGORIES } from "./constants";

/**
 * Set categories
 *
 * @param {Array} data
 */
export const setCategories = (data = []) => {
  return { type: SET_CATEGORIES, data };
};
