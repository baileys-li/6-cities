import { useLoaderData } from 'react-router-dom';

import type { CityName } from '../../../constants';

import { useDocumentTitle } from '../../../hooks';
import { useCityOffers, useLoadOffers } from '../hooks';
import { EmptySection } from './empty-section';
import { Headline } from './headline';
import { ListWithMap } from './list-with-map';
import { Wrapper } from './wrapper';

export function MainPage() {
	const city = useLoaderData() as CityName;
	useDocumentTitle(city);
	const { isLoading, isSuccess } = useLoadOffers();
	const { hasOffers, offers } = useCityOffers(city);

	return (
		<Wrapper isEmpty={!hasOffers}>
			{isLoading && <div>Loading...</div>}
			{isSuccess && !hasOffers && <EmptySection city={city} />}
			{isSuccess && hasOffers && (
				<ListWithMap offers={offers}>
					<Headline city={city} count={offers.length} />
				</ListWithMap>
			)}
		</Wrapper>
	);
}
