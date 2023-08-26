import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { FavoriteStatus, RequestStatus } from '../../constants';
import { setPending, setRejected, setSuccessWithItems } from '../../utils/request-status';
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
		builder.addCase(fetchFavorites.fulfilled, setSuccessWithItems);
		builder.addCase(fetchFavorites.rejected, setRejected);
		builder.addCase(fetchFavorites.pending, setPending);
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			switch (action.payload.status) {
				case FavoriteStatus.Added:
					state.items.push(action.payload.offer);
					break;
				case FavoriteStatus.Removed:
					state.items = state.items.filter(
						({ id }) => id !== action.payload.offer.id
					);
			}
		});
	},
	initialState,
	name: 'favorites',
	reducers: {},
});

export const favoritesActions = {
	changeFavorite,
	fetchFavorites,
};
