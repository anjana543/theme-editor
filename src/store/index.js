import { createStore } from "redux";

import rootReducer from "./reducers";

// Configures redux store.
export default function configureStore() {
  return createStore(rootReducer);
}
