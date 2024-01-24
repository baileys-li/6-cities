import { useMemo } from 'react'

import { useAppSelector } from '../../../hooks'
import { offersSelectors } from '../../../store/slices/offers'

export function useCityOffers(city: string) {
	const isLoading = useAppSelector(offersSelectors.isLoading)
	const offers = useAppSelector(offersSelectors.offers)

	const filteredOffers = useMemo(
		() => (isLoading ? [] : offers.filter(({ city: { name } }) => name === city)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[city, isLoading]
	)
	return {
		hasOffers: Boolean(filteredOffers.length),
		isLoading,
		offers: filteredOffers
	}
}
