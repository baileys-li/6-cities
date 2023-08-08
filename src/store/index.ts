import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { offersSlice } from './slices/offers';

const reducer = combineReducers({
	[offersSlice.name]: offersSlice.reducer,
});

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: createAPI(),
			},
		}),
	reducer,
});
