import { useAppSelector } from '../../../hooks';
import { selectOffers } from '../../../store/selectors/offers';

export function useCityOffers(city: string) {
	const offers = useAppSelector(selectOffers);
	const filteredOffers = offers.filter(
		({ city: { name } }) => name === city
	);
	return {
		hasOffers: Boolean(filteredOffers.length),
		offers: filteredOffers,
	};
}
