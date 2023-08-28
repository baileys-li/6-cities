import { useAppSelector } from '../../../hooks';
import { selectSortedReviews } from '../../../store/selectors/reviews';

const enum Default {
	Count = 10,
}

export function useReviews() {
	const reviews = useAppSelector(selectSortedReviews);
	return {
		reviews: reviews.slice(0, Default.Count),
		reviewsCount: reviews.length,
	};
}
