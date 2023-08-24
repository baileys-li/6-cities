import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { getNearBy, getOffer } from '../thunks/offers';

interface OffersSlice {
	info: Record<FullOffer['id'], FullOffer>;
	nearby: ServerOffer[];
	status: RequestStatus;
}

const initialState: OffersSlice = {
	info: {},
	nearby: [],
	status: RequestStatus.Idle,
};

export const offerSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getOffer.fulfilled, (state, action) => {
			const offer = action.payload;
			state.info[offer.id] = offer;
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
	reducers: {},
});

export const offerActions = {...offerSlice.actions};
