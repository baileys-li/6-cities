import { useLoaderData } from 'react-router-dom';

import type { CityName } from '../../../constants';

import { useCityOffers, useLoadOffers } from '../hooks';
import { EmptySection } from './empty-section';
import { ListWithMap } from './list-with-map';
import { Wrapper } from './wrapper';

export function MainPage() {
	const city = useLoaderData() as CityName;
	const { isLoading } = useLoadOffers();
	const { hasOffers, offers } = useCityOffers(city);

	const showEmpty = !isLoading && !hasOffers;

	return (
		<Wrapper isEmpty={!hasOffers}>
			{showEmpty ? (
				<EmptySection city={city} />
			) : (
				<ListWithMap isLoading={isLoading} offers={offers} />
			)}
		</Wrapper>
	);
}
