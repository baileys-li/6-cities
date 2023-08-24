import { createSlice } from '@reduxjs/toolkit';

import type { Review } from '../../types/review';

import { RequestStatus } from '../../constants';
import { commentsThunks } from '../thunks/comments';

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
		builder.addCase(commentsThunks.fetchComments.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = RequestStatus.Success;
		});
		builder.addCase(commentsThunks.fetchComments.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(commentsThunks.fetchComments.pending, (state) => {
			state.status = RequestStatus.Loading;
		});
		builder.addCase(commentsThunks.postComment.fulfilled, (state, action) => {
			state.items.push(action.payload);
		});
		builder.addCase(commentsThunks.postComment.rejected, (state) => {
			state.status = RequestStatus.Failed;
		});
		builder.addCase(commentsThunks.postComment.pending, (state) => {
			state.status = RequestStatus.Loading;
		});
	},
	initialState,
	name: 'reviews',
	reducers: {},
});

export const favoritesActions = {
	...reviewSlice.actions,
	...commentsThunks
};
