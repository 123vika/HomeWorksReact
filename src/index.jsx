import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store'; //persistor,
// import { PersistGate } from 'redux-presist/integration/react';

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate persistor={persistor}> */}
		<App />
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
);
