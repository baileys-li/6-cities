import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';

import { login } from '../thunks/auth';
import { changeFavorite } from '../thunks/favorites';
import { getNearBy, getOffer } from '../thunks/offers';

interface OffersSlice {
	info: Record<FullOffer['id'], FullOffer>;
	nearby: ServerOffer[];
}

const initialState: OffersSlice = {
	info: {},
	nearby: []
};

export const offerSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getOffer.fulfilled, (state, action) => {
			const offer = action.payload;
			state.info[offer.id] = offer;
		});

		builder.addCase(getNearBy.fulfilled, (state, action) => {
			state.nearby = action.payload;
		});
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			const offer = action.payload.offer.id;
			const isFavorite = Boolean(action.payload.status);
			if (offer in state.info) {
				state.info[offer].isFavorite = isFavorite;
			}
		});
		builder.addCase(login.fulfilled, (state) => {
			state.info = {};
		});
	},
	initialState,
	name: 'offer',
	reducers: {},
});

export const offerActions = {...offerSlice.actions};
