import type { FormEvent} from 'react';

import { useState } from 'react';

import { FormRating } from '../../components/form-rating/form-rating';
import { useActionCreators } from '../../hooks';
import { commentsThunks } from '../../store/thunks/comments';

interface Props {
	offerId: string;
}

export function ReviewForm({offerId}: Props) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState('');
	const { postComment } = useActionCreators(commentsThunks);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		postComment({
			body: {
				comment: review,
				rating,
			},
			offerId,
		});
	}

	return (
		<form action="#" className="reviews__form form" method="post" onSubmit={handleSubmit}>
			<label className="reviews__label form__label" htmlFor="review">
				Your review
			</label>
			<FormRating className="reviews__rating-form" setRating={setRating} />
			<textarea
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				onChange={(event) => setReview(event.target.value)}
				placeholder="Tell how was your stay, what you like and what can be improved"
				value={review}
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
					To submit review please make sure to set{' '}
					<span className="reviews__star">rating</span> and describe your stay
					with at least <b className="reviews__text-amount">50 characters</b>.
				</p>
				<button
					className="reviews__submit form__submit button"
					// disabled
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
