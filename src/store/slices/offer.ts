import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { getNearBy, getOffer } from '../thunks/offers';

interface OffersSlice {
	info: FullOffer | null;
	nearby: ServerOffer[];
	status: RequestStatus;
}

const initialState: OffersSlice = {
	info: null,
	nearby: [],
	status: RequestStatus.Idle,
};

export const offerSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getOffer.fulfilled, (state, action) => {
			state.info = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(getOffer.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(getOffer.pending, (state) => {
			state.status = RequestStatus.Loading;
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

export const offerActions = {...offerSlice.actions};
