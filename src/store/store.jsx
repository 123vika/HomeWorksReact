import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './usersReducer.jsx';
import messageListReducer from './messageListReducer.jsx';
import chatPageReducer from './chatPageReducer.jsx';
import thunk from 'redux-thunk';

//persist у меня на компьютере не захотел работать. Я писала тебе.
// Если увидешь проблему, напиши, пожалуйста.

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

const rootReducers = combineReducers({
	messageListReducer,
	usersReducer,
	chatPageReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(
	// persistedReducer,
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk))
);

// export const persistor = persistStore(store);
