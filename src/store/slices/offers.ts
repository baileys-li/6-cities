import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { getAllOffers } from '../thunks/offers';

interface OffersSlice {
	items: ServerOffer[];
	status: RequestStatus;
}

const initialState: OffersSlice = {
	items: [],
	status: RequestStatus.Idle,
};

export const offersSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(getAllOffers.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(getAllOffers.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(getAllOffers.pending, (state) => {
			state.status = RequestStatus.Loading;
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
