import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { FavoriteStatus, RequestStatus } from '../../constants';
import { changeFavorite, fetchFavorites } from '../thunks/favorites';

interface FavoritesState {
	items: ServerOffer[];
	status: RequestStatus;
}

const initialState: FavoritesState = {
	items: [],
	status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(fetchFavorites.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(fetchFavorites.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(fetchFavorites.pending, (state) => {
			state.status = RequestStatus.Loading;
		});
		builder.addCase(changeFavorite.fulfilled, (state) => {
			state.status = RequestStatus.Idle;
		});
	},
	initialState,
	name: 'favorites',
	reducers: {},
});

export const favoritesActions = {
	...favoritesSlice.actions,
	changeFavorite,
	fetchFavorites,
};
