import { createSelector } from '@reduxjs/toolkit';

import type { Review } from '../../../types/review';
import type { Store } from '../../../types/store';

import { useAppSelector } from '../../../hooks';

const enum Default {
	Count = 10,
}

const getTime = (date: string) => new Date(date).getTime();
const compareDates = (first: Review, second: Review) =>
	getTime(second.date) - getTime(first.date);

const selectReviews = (state: Store) => state.reviews.items;
const selectSortedReviews = createSelector(selectReviews, (reviews) => [...reviews].sort(compareDates));

export function useReviews() {
	const reviews = useAppSelector(selectSortedReviews);
	return { reviews: reviews.slice(0, Default.Count), reviewsCount: reviews.length };
}
