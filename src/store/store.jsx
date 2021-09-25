import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducer.jsx';

export const store = createStore(usersReducer, composeWithDevTools());
