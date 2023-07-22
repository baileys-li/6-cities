import type { ServerOffer } from '../../types/offer';

import { AuthorizationStatus } from '../../constants';
import { mockStore } from '../../mocks';

export interface LoaderResponse {
	cities: string[];
	isAuthorized: boolean;
	offersByCity: Record<string, ServerOffer[]>;
}

export function loadMainPageData(): LoaderResponse {
	const { auth, offers } = mockStore;
	const cities: string[] = [];

	const offersByCity: Record<string, ServerOffer[]> = {};
	for (const offer of offers) {
		const city = offer.city.name;
		if (city in offersByCity) {
			offersByCity[city].push(offer);
			continue;
		}

		cities.push(city);
		offersByCity[city] = [offer];
		continue;
	}

	return {
		cities: cities.sort(),
		isAuthorized: auth === AuthorizationStatus.Auth,
		offersByCity,
	};
}
