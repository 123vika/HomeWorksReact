import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './usersReducer.jsx';
import messageListReducer from './messageListReducer.jsx';

const reducers = combineReducers({
  usersReducer,
  messageListReducer,
});

export const store = createStore(reducers, composeWithDevTools());
