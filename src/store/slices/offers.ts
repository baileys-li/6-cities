import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { mockAllOfferInfo } from '../../mocks/offer';

interface OffersSlice {
	items: ServerOffer[];
}

const initialState: OffersSlice = { items: Array.from({ length: 50 }, mockAllOfferInfo) };

export const offersSlice = createSlice({
	initialState,
	name: 'offers',
	reducers: {
		clear(state) {
			state.items = [];
		},
		setUp(state, action: PayloadAction<ServerOffer[]>) {
			state.items = action.payload;
		},
	},
});

export const offersActions = offersSlice.actions;
