import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FullOffer } from '../../types/offer';
import type { Review } from '../../types/review';
import type { ThunkApi } from '../../types/store';

import { Endpoint } from '../../constants';

const fetchComments = createAsyncThunk<Review[], FullOffer['id'], ThunkApi>(
	'comments/fetch',
	async (offerId, { extra: api }) => {
		const response = await api.get<Review[]>(`${Endpoint.Comments}/${offerId}`);
		return response.data;
	}
);

interface PostCommentProps {
	body: {
		comment: string;
		rating: number;
	};
	offerId: FullOffer['id'];
}

const postComment = createAsyncThunk<Review, PostCommentProps, ThunkApi>(
	'comments/post',
	async ({ body, offerId }, { extra: api }) => {
		const response = await api.post<Review>(
			`${Endpoint.Comments}/${offerId}`,
			body
		);
		return response.data;
	}
);

export { fetchComments, postComment };
