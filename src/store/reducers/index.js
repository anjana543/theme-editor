import { combineReducers } from "redux";

import themeReducer from "./themeReducer";

/**
 * @description - Root reducer.
 */
const rootReducer = combineReducers({
  themeData: themeReducer,
});

export default rootReducer;
