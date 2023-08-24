import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';
import type { ThunkApi } from '../../types/store';

import { Endpoint } from '../../constants';

const getAllOffers = createAsyncThunk<ServerOffer[], undefined, ThunkApi>(
	'offers/getAll',
	async (_arg, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(Endpoint.Offers);
		return response.data;
	}
);

const getOffer = createAsyncThunk<FullOffer, string, ThunkApi>(
	'offers/getAll',
	async (offerID, { extra: api }) => {
		const response = await api.get<FullOffer>(`${Endpoint.Offers}/${offerID}`);
		return response.data;
	}
);

const getNearBy = createAsyncThunk<ServerOffer[], string, ThunkApi>(
	'offers/getNear',
	async (offerID, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(`${Endpoint.Offers}/${offerID}/nearby`);
		return response.data;
	}
);

export { getAllOffers, getNearBy, getOffer };
