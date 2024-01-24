import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FavoriteStatus } from '../../constants';
import type { ServerOffer } from '../../types/offer';
import type { ThunkApi } from '../../types/store';

import { Endpoint } from '../../constants';

const fetchFavorites = createAsyncThunk<ServerOffer[], undefined, ThunkApi>(
	'favorite/fetchAll',
	async (_arg, { extra: api }) => {
		const response = await api.get<ServerOffer[]>(Endpoint.Favorite);
		return response.data;
	}
);

interface ChangeProps {
	offerId: string;
	status: FavoriteStatus;
}

const changeFavorite = createAsyncThunk<ServerOffer, ChangeProps, ThunkApi>(
	'favorite/change',
	async ({ offerId, status }, { extra: api }) => {
		const response = await api.post<ServerOffer>(
			`${Endpoint.Favorite}/${offerId}/${status}`
		);
		return response.data;
	}
);

export { changeFavorite, fetchFavorites };
