import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import type { ServerOffer } from '../../types/offer';

import { Header } from '../../components/header/header';
import { Link } from '../../components/link/link';
import { PlaceCard } from '../../components/place-card/place-card';
import { AuthorizationStatus } from '../../constants';
import { mockStore } from '../../mocks';


interface LoaderResponse {
	cities: string[];
	isAuthorized: boolean;
	offersByCity: Record<string, ServerOffer[]>;
}

export function MainPage() {
	const {cities, isAuthorized, offersByCity} = useLoaderData() as LoaderResponse;
	const [selectedCity, setCity] = useState(cities[0]);

	const [activeOffer, setOffer] = useState<null | string>(null);
	// eslint-disable-next-line no-console
	console.info(activeOffer);

	const {hash} = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (hash.length === 0) {
			return navigate(`#${selectedCity.toLowerCase()}`);
		}
		const cityLowerCase = hash.slice(1);
		setCity(cityLowerCase[0].toUpperCase() + cityLowerCase.slice(1));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hash]);

	return (
		<div className="page page--gray page--main">
			<Header isAuthorized={isAuthorized} />
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{cities.map((city) => (
								<li className="locations__item" key={city}>
									<Link
										className={classNames(
											'locations__item-link',
											{
												'tabs__item--active': city === selectedCity,
											},
											'tabs__item'
										)}
										href={`#${city.toLowerCase()}`}
									>
										<span>{city}</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">
								{offersByCity[selectedCity].length} places to stay in Amsterdam
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
									<li
										className="places__option places__option--active"
										tabIndex={0}
									>
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
								{offersByCity[selectedCity].map((offer) => (
									<PlaceCard {...offer} extraBemBlock='cities' key={offer.id} setActive={setOffer}/>
								))}
							</div>
						</section>
						<div className="cities__right-section">
							<section className="cities__map map" />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}


export function loader(): LoaderResponse {
	const {auth, offers} = mockStore;
	const cities: string[] = [];

	const offersByCity: Record<string, ServerOffer[]> = {};
	for (const offer of offers) {
		const city = offer.city.name;
		if (city in offersByCity) {
			offersByCity[city].push(offer);
			continue;
		}

		cities.push(city);
		offersByCity[city] = [offer];
		continue;
	}

	return {
		cities: cities.sort(),
		isAuthorized: auth === AuthorizationStatus.Auth,
		offersByCity
	};

}
