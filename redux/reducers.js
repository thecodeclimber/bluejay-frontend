/**
 * Import Dependencies
 */
import { combineReducers } from 'redux-immutable';

/**
 * Import Reducers
 * All Reducers used in the App must be declared here!
 */
import UserReducer from './user/reducer';
import CategoryReducer from './category/reducer';

/**
 * Combine the Reducers
 */
const reducers = combineReducers({
  user: UserReducer,
  category: CategoryReducer,
});

/**
 * Export the combined Reducers
 */
export default reducers;
