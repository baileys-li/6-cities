import { memo, useMemo, useState } from 'react';

import type { ServerOffer } from '../../../types/offer';

import { Map } from '../../../components/map/map';
import { PlaceCard } from '../../../components/place-card/place-card';
import { useActionCreators } from '../../../hooks';
import { offersActions } from '../../../store/slices/offers';
import { Headline } from './headline';
import { SortForm, SortOption } from './sort';

const MemoMap = memo(Map);

interface ListWithMapProps {
	offers: ServerOffer[];
}

export function ListWithMap({ offers }: ListWithMapProps) {
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
				<Headline count={offers.length} />
				<SortForm current={activeSort} setter={setSort} />
				<div className="cities__places-list places__list tabs__content">

					{sortedOffers.map(({id, isFavorite, isPremium, previewImage, price, rating, title, type}) => (
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
					))}
				</div>
			</section>
			<div className="cities__right-section">
				<MemoMap className="cities__map" offers={offers} />
			</div>
		</div>
	);
}
