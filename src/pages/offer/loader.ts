import type { LoaderFunctionArgs } from 'react-router-dom';

import { store } from '../../store';
import { offersActions } from '../../store/slices/offers';
import { fetchOffer, fetchOfferExtra } from '../../utils/load-offfer';

export interface OfferPageLoaderResponse {
	isLoading: boolean;
}

export function loadOfferPageData({ params }: LoaderFunctionArgs) {
	const id = params.id!;
	store.dispatch(offersActions.setActiveOffer(id));

	const offerState = store.getState().offer;
	const isSuccess = id in offerState.info;
	if (!isSuccess) {
		return Promise.all([
			fetchOffer(id),
			fetchOfferExtra(id)
		]);
	}

	return fetchOfferExtra(id);
}
