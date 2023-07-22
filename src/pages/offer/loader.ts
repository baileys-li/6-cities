import type { LoaderFunctionArgs } from 'react-router-dom';

import type { FullOffer } from '../../types/offer';

import { AuthorizationStatus } from '../../constants';
import { mockStore } from '../../mocks';

export interface OfferPageLoaderResponse {
	isAuthorized: boolean;
	offer: FullOffer;
}

export function loadOfferPageData({
	params,
}: LoaderFunctionArgs): OfferPageLoaderResponse | Response {
	const id = params.id;

	if (id === undefined) {
		return new Response('Not found', { status: 404 });
	}
	const { auth, offers } = mockStore;

	const offer = offers.find((storeOffer) => storeOffer.id === id);

	if (offer === undefined) {
		return new Response('Not found', { status: 404 });
	}

	return {
		isAuthorized: auth === AuthorizationStatus.Auth,
		offer,
	};
}
