import { useAuth } from '../../../hooks';
import { useReviews } from '../hooks/reviews';
import { ReviewItem } from './review';
import { ReviewForm } from './review-form';


export function Reviews() {
	const { reviews, reviewsCount } = useReviews();
	const isAuthorized = useAuth();
	return (
		<section className="offer__reviews reviews">
			<h2 className="reviews__title">
				Reviews · <span className="reviews__amount">{reviewsCount}</span>
			</h2>
			<ul className="reviews__list">
				{reviews.map((review) => (
					<ReviewItem key={review.id} {...review} />
				))}
			</ul>
			{isAuthorized && <ReviewForm />}
		</section>
	);
}
