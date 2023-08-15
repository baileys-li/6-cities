import type { Review } from '../../../types/review';

import { useAppSelector } from '../../../hooks';

const getTime = (date: string) => new Date(date).getTime();
const compareDates = (first: Review, second: Review) =>
	getTime(second.date) - getTime(first.date);

export function useReviews() {
	const reviews = useAppSelector((state) => state.reviews.items);
	const sortedReviews = [...reviews].sort(compareDates);
	return { reviews: sortedReviews.slice(0, 10), reviewsCount: reviews.length };
}
