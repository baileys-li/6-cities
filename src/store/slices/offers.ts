import type { PayloadAction} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { login } from '../thunks/auth';
import { changeFavorite } from '../thunks/favorites';
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

const refetch = (state: OffersSlice) => {
	if (state.status !== RequestStatus.Idle) {
		state.status = RequestStatus.Idle;
	}
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
			const isRefetch = state.status === RequestStatus.Refetch;
			state.status = isRefetch ? RequestStatus.Refetching : RequestStatus.Loading;
		});
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			const id = action.payload.offer.id;
			const isFavorite = Boolean(action.payload.status);
			const foundOffer = state.items.find((offer) => offer.id === id);

			if (foundOffer) {
				foundOffer.isFavorite = isFavorite;
			}
		});
		builder.addCase(login.fulfilled, refetch);
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
