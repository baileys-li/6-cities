import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';

import { getAllOffers, getNearBy, getOffer } from '../thunks/offers';

interface OffersSlice {
	info: FullOffer | null;
	nearby: ServerOffer[];
	status: 'failed' | 'idle' | 'loading' | 'succeeded';
}

const initialState: OffersSlice = {
	info: null,
	nearby: [],
	status: 'idle',
};

export const offerSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getOffer.fulfilled, (state, action) => {
			state.info = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(getOffer.rejected, (state) => {
			state.status = 'failed';
		});
		builder.addCase(getOffer.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(getNearBy.fulfilled, (state, action) => {
			state.nearby = action.payload;
		});
	},
	initialState,
	name: 'offer',
	reducers: {
		clear(state) {
			state.info = null;
			state.nearby = [];
		},
	},
});

export const offerActions = {...offerSlice.actions, getAllOffers};
