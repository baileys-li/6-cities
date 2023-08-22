import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../../../types/store';

import { getRandomSlice } from '../../../utils/random';

const enum Default {
	Size = 3,
}

const selectNearby = (state: Store) => state.offer.nearby;

export const selectRandomNearbySlice = createSelector(
	selectNearby,
	(nearbyOffers) => getRandomSlice(nearbyOffers, Default.Size)
);
