import type { CityName } from '../../../types/city'

import { Map } from '../../../components/map/map'
import { useCityOffers } from '../hooks'
import { EmptySection } from './empty-section'
import { Headline } from './headline'
import { SortedList } from './sorted-list'
import { Wrapper } from './wrapper'

interface MainPageProps {
	city: CityName
}

export function MainPage({ city }: MainPageProps) {
	const { hasOffers, isLoading, offers } = useCityOffers(city)
	const showEmpty = !isLoading && !hasOffers

	return (
		<Wrapper isEmpty={showEmpty}>
			{showEmpty ? (
				<EmptySection city={city} />
			) : (
				<SortedList isLoading={isLoading} offers={offers}>
					<Headline city={city} count={offers.length} />
				</SortedList>
			)}
			<div className="cities__right-section">{!showEmpty && <Map city={city} className="cities__map" offers={offers} />}</div>
		</Wrapper>
	)
}
