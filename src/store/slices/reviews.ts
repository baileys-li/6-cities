import { createSlice } from '@reduxjs/toolkit';

import type { Review } from '../../types/review';

import { RequestStatus } from '../../constants';
import { fetchComments, postComment } from '../thunks/comments';

interface ReviewState {
	items: Review[];
	status: RequestStatus;
}

const initialState: ReviewState = {
	items: [],
	status: RequestStatus.Idle,
};

export const reviewSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(fetchComments.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(fetchComments.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(fetchComments.pending, (state) => {
			state.status = RequestStatus.Loading;
		});
		builder.addCase(postComment.fulfilled, (state, action) => {
			state.items.push(action.payload);
		});
	},
	initialState,
	name: 'reviews',
	reducers: {},
});

export const favoritesActions = {
	...reviewSlice.actions,
	fetchComments,
	postComment
};
