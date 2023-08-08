import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { getAllOffers } from '../thunks/offers';

interface OffersSlice {
	items: ServerOffer[];
	status: 'failed' | 'idle' | 'loading' | 'succeeded';
}

const initialState: OffersSlice = {
	items: [],
	status: 'idle',
};

export const offersSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getAllOffers.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(getAllOffers.rejected, (state) => {
			state.status = 'failed';
		});
		builder.addCase(getAllOffers.pending, (state) => {
			state.status = 'loading';
		});
	},
	initialState,
	name: 'offers',
	reducers: {
		clear(state) {
			state.items = [];
		},
	},
});

export const offersActions = {...offersSlice.actions, getAllOffers};
