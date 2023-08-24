import { createSelector } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';
import type { Store } from '../../types/store';

import { getRandomElement, randomSort } from '../../utils/random';
import { selectActiveId } from './offers';

const enum Default {
	Size = 3,
}

const selectPrefetchedOffers = (state: Pick<Store, 'offer'>) =>
	state.offer.info;

const selectOffer = createSelector(
	selectActiveId,
	selectPrefetchedOffers,
	(id, cache) => {
		if (id === null || !(id in cache)) {
			return null;
		}

		return cache[id];
	}
);

const selectNearby = (state: Store) => state.offer.nearby;

export const selectRandomNearbySlice = createSelector(
	selectNearby,
	selectActiveId,
	(nearbyOffers, activeId) => {
		if (Default.Size + 1 >= nearbyOffers.length) {
			return [...nearbyOffers].sort(randomSort);
		}

		const sortedElements: ServerOffer[] = [];

		while ((Default.Size as number) > sortedElements.length) {
			let element = getRandomElement(nearbyOffers);
			while (sortedElements.includes(element) || element.id === activeId) {
				element = getRandomElement(nearbyOffers);
			}
			sortedElements.push(element);
		}

		return sortedElements;
	}
);

export { selectOffer, selectPrefetchedOffers };
