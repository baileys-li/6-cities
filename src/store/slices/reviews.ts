import { createSelector, createSlice } from '@reduxjs/toolkit'

import type { Review } from '../../types/review'

import { saveItems } from '../../utils/request-status'
import { compareDates } from '../../utils/time'
import { fetchComments, postComment } from '../thunks/comments'

interface ReviewState {
	items: Review[]
}

const initialState: ReviewState = {
	items: []
}

export const reviewSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(fetchComments.fulfilled, saveItems)
		builder.addCase(postComment.fulfilled, (state, action) => {
			state.items.push(action.payload)
		})
	},
	initialState,
	name: 'reviews',
	reducers: {},
	selectors: {
		reviews: createSelector(
			(state: ReviewState) => state.items,
			reviews => [...reviews].sort(compareDates)
		)
	}
})

export const selectReviews = reviewSlice.selectors.reviews
export const favoritesActions = {
	fetchComments,
	postComment
}
