import type { LoaderFunctionArgs } from 'react-router-dom';

import { AuthorizationStatus } from '../../constants';
import { mockStore } from '../../mocks';
import { store } from '../../store';
import { getNearBy, getOffer } from '../../store/thunks/offers';
export interface OfferPageLoaderResponse {
	isAuthorized: boolean;
}

export function loadOfferPageData({
	params,
}: LoaderFunctionArgs): OfferPageLoaderResponse | Response {
	const id = params.id;

	if (id === undefined) {
		return new Response('Not found', { status: 404 });
	}
	const { auth } = mockStore;

	Promise.all([
		store.dispatch(getOffer(id)),
		store.dispatch(getNearBy(id)),
	]);

	return {
		isAuthorized: auth === AuthorizationStatus.Auth,
	};
}
