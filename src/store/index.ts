import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { favoritesSlice } from './slices/favorites';
import { offerSlice } from './slices/offer';
import { offersSlice } from './slices/offers';
import { reviewSlice } from './slices/reviews';
import { userSlice } from './slices/user';

const reducer = combineReducers({
	[favoritesSlice.name]: favoritesSlice.reducer,
	[offerSlice.name]: offerSlice.reducer,
	[offersSlice.name]: offersSlice.reducer,
	[reviewSlice.name]: reviewSlice.reducer,
	[userSlice.name]: userSlice.reducer,
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
