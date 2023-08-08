import type { LoaderFunctionArgs } from 'react-router-dom';

import type { FullOffer } from '../../types/offer';

import { AuthorizationStatus } from '../../constants';
import { mockStore } from '../../mocks';
import { mockAllOfferInfo } from '../../mocks/offer';
import { store } from '../../store';

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
	const { auth } = mockStore;
	const offers = store.getState().offers.items;

	const offer = offers.find((storeOffer) => storeOffer.id === id);

	if (offer === undefined) {
		return new Response('Not found', { status: 404 });
	}

	return {
		isAuthorized: auth === AuthorizationStatus.Auth,
		offer: { ...mockAllOfferInfo(), ...offer },
	};
}
