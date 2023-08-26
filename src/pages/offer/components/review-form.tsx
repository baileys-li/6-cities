import type { FormEvent } from 'react';

import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

import { FormRating } from '../../../components/form-rating/form-rating';
import { useActionCreators } from '../../../hooks';
import { postComment } from '../../../store/thunks/comments';
import { useOfferId } from '../hooks/id';

type HTMLReviewForm = HTMLFormElement & {
	rating: RadioNodeList;
	review: HTMLTextAreaElement;
};

export function ReviewForm() {
	const offerId = useOfferId();
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);
	const [isFormDisabled, setFormDisabled] = useState(false);
	const { post } = useActionCreators({ post: postComment });
	const formRef = useRef<HTMLReviewForm>(null);

	function handleInput(event: FormEvent<HTMLFormElement>) {
		const form = event.currentTarget as HTMLReviewForm;
		const review = form.review.value;
		const rating = form.rating.value;
		setSubmitDisabled(
			review.length <= 50 || review.length > 300 || rating === '0'
		);
	}

	function handleError() {
		setFormDisabled(false);
		setSubmitDisabled(false);
		return 'Something went wrong';
	}

	function handleSuccess() {
		setFormDisabled(false);
		formRef.current?.reset();
		return 'Comment sent!';
	}

	useEffect(() => () => formRef.current?.reset(), [offerId]);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const form = event.currentTarget as HTMLReviewForm;
		event.preventDefault();
		setSubmitDisabled(true);
		setFormDisabled(true);
		toast.promise(
			post({
				body: {
					comment: form.review.value,
					rating: Number(form.rating.value),
				},
				offerId,
			}).unwrap(),
			{
				error: handleError,
				loading: 'Sending...',
				success: handleSuccess,
			}
		);
	}

	return (
		<form
			action="#"
			className="reviews__form form"
			method="post"
			onInput={handleInput}
			onSubmit={handleSubmit}
			ref={formRef}
		>
			<label className="reviews__label form__label" htmlFor="review">
				Your review
			</label>
			<FormRating className="reviews__rating-form" disabled={isFormDisabled} />
			<textarea
				className="reviews__textarea form__textarea"
				disabled={isFormDisabled}
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
					To submit review please make sure to set{' '}
					<span className="reviews__star">rating</span> and describe your stay
					with at least <b className="reviews__text-amount">50 characters</b>.
				</p>
				<button
					className="reviews__submit form__submit button"
					disabled={isSubmitDisabled}
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
