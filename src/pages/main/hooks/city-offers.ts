import { useMemo } from 'react';

import { useAppSelector } from '../../../hooks';
import { selectOffersState } from '../../../store/selectors/offers';

export function useCityOffers(city: string) {
	const { isLoading, offers } = useAppSelector(selectOffersState);

	const filteredOffers = useMemo(
		() => isLoading ? [] : offers.filter(({ city: { name } }) => name === city),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[city, isLoading]
	);
	return {
		hasOffers: Boolean(filteredOffers.length),
		isLoading,
		offers: filteredOffers,
	};
}
