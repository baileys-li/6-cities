import { useMemo, useState } from 'react';

import type { ServerOffer } from '../../../types/offer';

import { PlaceCard } from '../../../components/place-card/place-card';
import { PlaceCardSkeleton } from '../../../components/place-card/place-card.skeleton';
import { useActionCreators } from '../../../hooks';
import { offersActions } from '../../../store/slices/offers';
import { Headline } from './headline';
import { SortForm, SortOption } from './sort';

interface ListWithMapProps {
	isLoading?: boolean;
	offers: ServerOffer[];
}

const enum Default {
	SkeletonsCount = 10,
}

const SKELETONS = Array.from({ length: Default.SkeletonsCount }, (_, index) => (
	<PlaceCardSkeleton extraBemBlock="cities" key={index} />
));

export function ListWithMap({ isLoading = false, offers }: ListWithMapProps) {
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
		<section className="cities__places places">
			<h2 className="visually-hidden">Places</h2>
			<Headline count={offers.length} />
			<SortForm current={activeSort} setter={setSort} />
			<div className="cities__places-list places__list tabs__content">
				{isLoading && SKELETONS}
				{sortedOffers.map(
					({
						id,
						isFavorite,
						isPremium,
						previewImage,
						price,
						rating,
						title,
						type,
					}) => (
						<PlaceCard
							extraBemBlock="cities"
							id={id}
							isFavorite={isFavorite}
							isPremium={isPremium}
							key={id}
							previewImage={previewImage}
							price={price}
							rating={rating}
							setActive={setActiveOffer}
							title={title}
							type={type}
						/>
					)
				)}
			</div>
		</section>
	);
}
