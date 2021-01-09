/**
 * Import Dependencies
 */
import { combineReducers } from "redux-immutable";

/**
 * Import Reducers
 * All Reducers used in the App must be declared here!
 */
import CategoryReducer from "./category/reducer";

/**
 * Combine the Reducers
 */
const reducers = combineReducers({
  category: CategoryReducer,
});

/**
 * Export the combined Reducers
 */
export default reducers;
