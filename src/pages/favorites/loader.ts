import type { ServerOffer } from '../../types/offer';

import { mockStore } from '../../mocks';

export interface FavoritePageLoaderResponse {
	cities: string[];
	offersByCity: Record<string, ServerOffer[]>;
}


export function loadFavoriteData(): FavoritePageLoaderResponse {
	const { offers } = mockStore;

	const cities: string[] = [];

	const offersByCity: Record<string, ServerOffer[]> = {};

	for (const offer of offers) {
		if (!offer.isFavorite) {
			continue;
		}

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
		offersByCity,
	};
}
