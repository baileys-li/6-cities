import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../../types/store';

import { compareDates } from '../../utils/time';

type ReviewSlice = Pick<Store, 'reviews'>;

const selectReviews = (state: ReviewSlice) => state.reviews.items;

const selectSortedReviews = createSelector(selectReviews, (reviews) =>
	[...reviews].sort(compareDates)
);

export { selectReviews, selectSortedReviews};
