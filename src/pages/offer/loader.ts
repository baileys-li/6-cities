import type { LoaderFunctionArgs } from 'react-router-dom';

import { store } from '../../store';
import { offersActions } from '../../store/slices/offers';
import { commentsThunks } from '../../store/thunks/comments';
import { getNearBy, getOffer } from '../../store/thunks/offers';
export interface OfferPageLoaderResponse {
	isAuthorized: boolean;
}

export function loadOfferPageData({
	params,
}: LoaderFunctionArgs) {
	const id = params.id;

	if (id === undefined) {
		return new Response('Not found', { status: 404 });
	}

	store.dispatch(offersActions.setActiveOffer(id));

	Promise.all([
		store.dispatch(getOffer(id)),
		store.dispatch(getNearBy(id)),
		store.dispatch(commentsThunks.fetchComments(id)),
	]);

	return null;
}
