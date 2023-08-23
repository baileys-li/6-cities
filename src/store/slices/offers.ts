import type { PayloadAction} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { fetchAllOffers } from '../thunks/offers';

interface OffersSlice {
	activeOffer: null | string;
	items: ServerOffer[];
	status: RequestStatus;
}

const initialState: OffersSlice = {
	activeOffer: null,
	items: [],
	status: RequestStatus.Idle,
};

export const offersSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(fetchAllOffers.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(fetchAllOffers.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(fetchAllOffers.pending, (state) => {
			state.status = RequestStatus.Loading;
		});
	},
	initialState,
	name: 'offers',
	reducers: {
		setActiveOffer: (state, action: PayloadAction<OffersSlice['activeOffer']>) => {
			state.activeOffer = action.payload;
		}
	},
});

export const offersActions = {...offersSlice.actions, fetchAllOffers};
