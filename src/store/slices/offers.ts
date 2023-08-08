import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';
import type { ThunkApi } from '../../types/store';

import { Endpoint } from '../../constants';
import { mockAllOfferInfo } from '../../mocks/offer';

interface OffersSlice {
	items: ServerOffer[];
	status: 'failed' | 'idle' | 'loading' | 'succeeded';
}

const initialState: OffersSlice = {
	items: Array.from({ length: 50 }, mockAllOfferInfo),
	status: 'idle',
};

export const getAllOffers = createAsyncThunk<ServerOffer[], undefined, ThunkApi>(
	'offers/getAll',
	async (_arg, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(Endpoint.Offers);
		return response.data;
	}
);

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
