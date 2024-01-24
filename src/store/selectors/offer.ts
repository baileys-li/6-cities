import { createSelector } from '@reduxjs/toolkit'

import type { ServerOffer } from '../../types/offer'

import { randomElement } from '../../utils/random'
import { offerSlice } from '../slices/offer'
import { offersSelectors } from '../slices/offers'

const enum Default {
	Size = 3
}

const selectOffer = createSelector(offersSelectors.activeId, offerSlice.selectors.offerHash, (id, cache) => {
	if (id === null || !(id in cache)) {
		return null
	}

	return cache[id]
})

const selectRandomNearbySlice = createSelector(offerSlice.selectors.nearby, offersSelectors.activeId, (nearbyOffers, activeId) => {
	const size = Math.min(Default.Size, nearbyOffers.length - 1)
	const sortedElements: ServerOffer[] = []

	while (size > sortedElements.length) {
		let element = randomElement(nearbyOffers)
		while (sortedElements.includes(element) || element.id === activeId) {
			element = randomElement(nearbyOffers)
		}
		sortedElements.push(element)
	}

	return sortedElements
})

export { selectOffer, selectRandomNearbySlice }
