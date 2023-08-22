import type { FormEvent } from 'react';

import { useEffect, useRef, useState } from 'react';

import { FormRating } from '../../components/form-rating/form-rating';
import { useActionCreators } from '../../hooks';
import { commentsThunks } from '../../store/thunks/comments';

interface Props {
	offerId: string;
}

type HTMLReviewForm = HTMLFormElement & {
	rating: RadioNodeList;
	review: HTMLTextAreaElement;
};

export function ReviewForm({ offerId }: Props) {
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);
	const [isFormDisabled, setFormDisabled] = useState(false);
	const { postComment } = useActionCreators(commentsThunks);
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
	}

	function handleSuccess() {
		setFormDisabled(false);
		formRef.current?.reset();
	}

	useEffect(() => () => formRef.current?.reset(), [offerId]);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const form = event.currentTarget as HTMLReviewForm;
		event.preventDefault();
		setSubmitDisabled(true);
		setFormDisabled(true);

		postComment({
			body: {
				comment: form.review.value,
				rating: Number(form.rating.value),
			},
			offerId,
		})
			.unwrap()
			.then(handleSuccess, handleError);
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
