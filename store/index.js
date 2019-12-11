import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import index from "./modules/index";

export function initializeStore(initialState) {
  return createStore(
    combineReducers(index),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
