import { useMemo } from 'react'

import type { CityName } from '../../../types/city'

import { useAppSelector } from '../../../hooks'
import { offersSelectors } from '../../../store/slices/offers'

export function useCityOffers(city: CityName) {
	const isLoading = useAppSelector(offersSelectors.isLoading)
	const offers = useAppSelector(offersSelectors.offers)

	const offersByCity = useMemo(() => Object.groupBy(offers, ({ city }) => city.name), [offers])
	const currentOffers = offersByCity[city] || []

	return {
		hasOffers: Boolean(currentOffers.length),
		isLoading,
		offers: currentOffers
	}
}
