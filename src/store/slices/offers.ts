import type { PayloadAction} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../constants';
import { setPending, setRejected, setSuccessWithItems } from '../../utils/request-status';
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
		builder.addCase(fetchAllOffers.fulfilled, setSuccessWithItems);
		builder.addCase(fetchAllOffers.rejected, setRejected);
		builder.addCase(fetchAllOffers.pending, setPending);
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			const offerToChange = action.payload;
			const foundOffer = state.items.find((offer) => offer.id === offerToChange.id);

			if (foundOffer) {
				foundOffer.isFavorite = offerToChange.isFavorite;
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

	selectors: {
		activeId: (state) => state.activeOffer,
		isLoading: (state) => state.status === RequestStatus.Loading,
		offers: (state) => state.items
	}
});

export const offersSelectors = offersSlice.selectors;
export const offersActions = {...offersSlice.actions, fetchAllOffers};
