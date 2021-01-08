/**
 * Import Dependencies
 */
import { createSelector } from "reselect";

/**
 * Select the portion of the root reducer
 */
export const ProductReducer = () => (state) => state.get("product");

/**
 * Get product detail
 *
 * @return {Object}
 */
export const getProductDetail = () =>
  createSelector(ProductReducer(), (state) => {
    return state.get("productDetail").toJS();
  });

/**
 * Get is fetching product detail
 *
 * @return {Object}
 */
export const getIsFetchingProductDetail = () =>
  createSelector(ProductReducer(), (state) => {
    return state.get("isFetchingProductDetail").toJS();
  });
