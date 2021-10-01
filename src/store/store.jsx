import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./usersReducer.jsx";
import messageListReducer from "./messageListReducer.jsx";
import chatPageReducer from "./chatPageReducer.jsx";

const rootReducers = combineReducers({
  messageListReducer,
  usersReducer,
  chatPageReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
