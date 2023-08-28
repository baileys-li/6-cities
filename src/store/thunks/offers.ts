import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../types/offer';
import type { ThunkApi } from '../../types/store';

import { Endpoint } from '../../constants';

const fetchAllOffers = createAsyncThunk<ServerOffer[], undefined, ThunkApi>(
	'fetchOffers/all',
	async (_arg, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(Endpoint.Offers);
		return response.data;
	}
);

const getOffer = createAsyncThunk<FullOffer, string, ThunkApi>(
	'fetchOffers/one',
	async (offerID, { extra: api }) => {
		const response = await api.get<FullOffer>(`${Endpoint.Offers}/${offerID}`);
		return response.data;
	}
);

const getNearBy = createAsyncThunk<ServerOffer[], string, ThunkApi>(
	'fetchOffers/near',
	async (offerID, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(`${Endpoint.Offers}/${offerID}/nearby`);
		return response.data;
	}
);

export { fetchAllOffers, getNearBy, getOffer };
