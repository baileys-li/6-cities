import { useAppSelector } from '../../../hooks'
import { selectReviews } from '../../../store/slices/reviews'

const enum Default {
	Count = 10
}

export function useReviews() {
	const reviews = useAppSelector(selectReviews)
	return {
		reviews: reviews.slice(0, Default.Count),
		reviewsCount: reviews.length
	}
}
