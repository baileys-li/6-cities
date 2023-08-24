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

	return (
		<Wrapper isEmpty={!hasOffers}>
			{isLoading && <div>Loading...</div>}
			{!isLoading && !hasOffers && <EmptySection city={city} />}
			{!isLoading && hasOffers && <ListWithMap offers={offers} />}
		</Wrapper>
	);
}
