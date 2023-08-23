import type { ReactNode } from 'react';

import { useMemo, useState } from 'react';

import type { ServerOffer } from '../../../types/offer';

import { Map } from '../../../components/map/map';
import { PlaceCard } from '../../../components/place-card/place-card';
import { useActionCreators } from '../../../hooks';
import { offersActions } from '../../../store/slices/offers';
import { SortForm, SortOption } from './sort';

interface ListWithMapProps {
	children: ReactNode;
	offers: ServerOffer[];
}

export function ListWithMap({ children, offers }: ListWithMapProps) {
	const { setActiveOffer } = useActionCreators(offersActions);
	const [activeSort, setSort] = useState(SortOption.Popular);

	const sortedOffers = useMemo(() => {
		switch (activeSort) {
			case SortOption.PriceLowToHigh:
				return [...offers].sort((a, b) => a.price - b.price);
			case SortOption.PriceHighToLow:
				return [...offers].sort((a, b) => b.price - a.price);
			case SortOption.TopRatedFirst:
				return [...offers].sort((a, b) => b.rating - a.rating);
			default:
				return offers;
		}
	}, [offers, activeSort]);

	return (
		<div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				{children}
				<SortForm current={activeSort} setter={setSort} />
				<div className="cities__places-list places__list tabs__content">

					{sortedOffers.map((offer) => (
						<PlaceCard
							{...offer}
							extraBemBlock="cities"
							key={offer.id}
							setActive={setActiveOffer}
						/>
					))}
				</div>
			</section>
			<div className="cities__right-section">
				<Map className="cities__map" offers={offers} />
			</div>
		</div>
	);
}
