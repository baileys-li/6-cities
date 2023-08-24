import { memo } from 'react';

import type { CityName } from '../../../constants';

import { Map } from '../../../components/map/map';
import { useCityOffers, useLoadOffers } from '../hooks';
import { EmptySection } from './empty-section';
import { Headline } from './headline';
import { ListWithMap } from './list-with-map';
import { Wrapper } from './wrapper';

const MemoMap = memo(Map);

interface MainPageProps {
	city: CityName;
}

export function MainPage({ city }: MainPageProps) {
	const { isLoading } = useLoadOffers();
	const { hasOffers, offers } = useCityOffers(city);

	const showEmpty = !isLoading && !hasOffers;

	return (
		<Wrapper isEmpty={!hasOffers}>
			{showEmpty ? (
				<EmptySection city={city} />
			) : (
				<ListWithMap isLoading={isLoading} offers={offers}>
					<Headline city={city} count={offers.length} />
				</ListWithMap>
			)}
			<div className="cities__right-section">
				{!showEmpty && (
					<MemoMap city={city} className="cities__map" offers={offers} />
				)}
			</div>
		</Wrapper>
	);
}
