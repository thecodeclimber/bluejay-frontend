/**
 * Import Dependencies
 */
import { fromJS } from "immutable";
import {
  SET_USER,
  SET_MODAL,
  USER_STRUCTURE,
} from "./constants";

/**
 * Set Initial State
 */
export const initialState = fromJS({
  user: USER_STRUCTURE,
  modal: '',
});

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('user', fromJS(action.data));
    case SET_MODAL:
      return state.set('modal', fromJS(action.data));

    default:
      return state;
  }
}

/**
 * Export the reducer
 */
export default UserReducer;
