import { useState } from 'react';

import { FormRating } from '../../components/form-rating/form-rating';

export function ReviewForm() {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState('');

	return (
		<form action="#" className="reviews__form form" method="post">
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
					disabled
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
