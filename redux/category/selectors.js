/**
 * Import Dependencies
 */
import { createSelector } from "reselect";

/**
 * Select the portion of the root reducer
 */
export const CategoryReducer = () => (state) => state.get('category');

/**
 * Get categories
 *
 * @return {Object}
 */
export const getCategories = () =>
  createSelector(CategoryReducer(), (state) => {
    return state.get('categories').toJS();
  });