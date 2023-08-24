import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app';
import { store } from './store';
import { checkAuth } from './store/thunks/auth';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuth());

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
