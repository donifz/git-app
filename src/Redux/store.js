import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import repoReducer from "./repoReducer";

const reducers = combineReducers({
  repoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
