/**
 * Import Dependencies
 */
import { SET_CATEGORIES, SET_IS_FETCHING_CATEGORIES } from "./constants";

/**
 * Set categories
 *
 * @param {Array} data
 */
export const setCategories = (data = []) => {
  return { type: SET_CATEGORIES, data };
};

/**
 * Set is fetching categories
 *
 * @param {Boolean} data
 */
export const setIsFetchingCategories = (data = false) => {
  return { type: SET_IS_FETCHING_CATEGORIES, data };
};
