import type { ReactNode} from 'react';

import { useMemo, useState } from 'react';

import type { ServerOffer } from '../../../types/offer';

import { PlaceCardSkeleton, createMapper } from '../../../components/place-card';
import { useActionCreators } from '../../../hooks';
import { offersActions } from '../../../store/slices/offers';
import { SortOption } from '../constants';
import { SortForm } from './sort';

interface ListWithMapProps {
	children: ReactNode;
	isLoading?: boolean;
	offers: ServerOffer[];
}

const enum Default {
	SkeletonsCount = 10,
}

const SKELETONS = Array.from({ length: Default.SkeletonsCount }, (_, index) => (
	<PlaceCardSkeleton extraBemBlock="cities" key={index} />
));

export function ListWithMap({ children, isLoading = false, offers }: ListWithMapProps) {
	const { setActiveOffer } = useActionCreators(offersActions);
	const [activeSort, setSort] = useState(SortOption.Popular);
	const mapper = createMapper({ setActive: setActiveOffer });

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
		<section className="cities__places places">
			<h2 className="visually-hidden">Places</h2>
			{children}
			<SortForm current={activeSort} setter={setSort} />
			<div className="cities__places-list places__list tabs__content">
				{isLoading && SKELETONS}
				{sortedOffers.map(mapper)}
			</div>
		</section>
	);
}
