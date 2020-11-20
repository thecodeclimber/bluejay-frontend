/**
 * Import Dependencies
 */
import { createSelector } from 'reselect';

/**
 * Select the portion of the root reducer
 */
export const UserReducer = () => (state) => state.get('user');

/**
 * Get user
 *
 * @return {Object}
 */
export const getUser = () =>
  createSelector(UserReducer(), (state) => {
    return state.get('user').toJS();
  });
