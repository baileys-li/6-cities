import { useState } from 'react';

import type { ServerOffer } from '../../types/offer';

import {Map} from '../../components/map/map';
import { PlaceCard } from '../../components/place-card/place-card';

interface ListWithMapProps {
	offers: ServerOffer[];
}

export function ListWithMap({offers}: ListWithMapProps) {
	const [activeOffer, setOffer] = useState<null | string>(null);

	return (
		<div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				<b className="places__found">
					{offers.length} places to stay in Amsterdam
				</b>
				<form action="#" className="places__sorting" method="get">
					<span className="places__sorting-caption">Sort by</span>
					<span className="places__sorting-type" tabIndex={0}>
						Popular
						<svg className="places__sorting-arrow" height={4} width={7}>
							<use xlinkHref="#icon-arrow-select" />
						</svg>
					</span>
					<ul className="places__options places__options--custom places__options--opened">
						<li className="places__option places__option--active" tabIndex={0}>
							Popular
						</li>
						<li className="places__option" tabIndex={0}>
							Price: low to high
						</li>
						<li className="places__option" tabIndex={0}>
							Price: high to low
						</li>
						<li className="places__option" tabIndex={0}>
							Top rated first
						</li>
					</ul>
				</form>
				<div className="cities__places-list places__list tabs__content">
					{offers.map((offer) => (
						<PlaceCard
							{...offer}
							extraBemBlock="cities"
							key={offer.id}
							setActive={setOffer}
						/>
					))}
				</div>
			</section>
			{/*  */}
			<div className="cities__right-section">
				<Map activeId={activeOffer} className='cities__map' location={offers[0].location} offers={offers} />
			</div>
		</div>
	);
}
