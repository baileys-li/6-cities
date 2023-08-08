import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { offerSlice } from './slices/offer';
import { offersSlice } from './slices/offers';

const reducer = combineReducers({
	[offerSlice.name]: offerSlice.reducer,
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
