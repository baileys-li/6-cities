import type { LoaderFunctionArgs } from 'react-router-dom';

import { store } from '../../store';
import { offersActions } from '../../store/slices/offers';
import { fetchOfferPageData } from '../../utils/load-offfer';

export interface OfferPageLoaderResponse {
	isLoading: boolean;
}

export function loadOfferPageData({ params }: LoaderFunctionArgs) {
	const id = params.id;

	if (id === undefined) {
		return new Response('Not found', { status: 404 });
	}

	store.dispatch(offersActions.setActiveOffer(id));

	const offerState = store.getState().offer;
	const isSuccess = id in offerState.info;
	const isLoading = !isSuccess;
	if (isLoading) {
		fetchOfferPageData(id);
	}

	return {
		isLoading,
	};
}
