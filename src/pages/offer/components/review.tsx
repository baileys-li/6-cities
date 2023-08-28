import type { Review } from '../../../types/review';

import { Rating } from '../../../components/rating/rating';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	year: 'numeric',
});

type ReviewItemProps = Pick<Review, 'comment' | 'date' | 'rating' | 'user'>;

export function ReviewItem({ comment, date, rating, user }: ReviewItemProps) {
	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img
						alt="Reviews avatar"
						className="reviews__avatar user__avatar"
						height={54}
						src={user.avatarUrl}
						width={54}
					/>
				</div>
				<span className="reviews__user-name">{user.name}</span>
			</div>
			<div className="reviews__info">
				<Rating bemBlock="reviews" rating={rating} />
				<p className="reviews__text">
					{comment}
				</p>
				<time className="reviews__time" dateTime={date}>
					{dateFormatter.format(new Date(date))}
				</time>
			</div>
		</li>
	);
}
