import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import type { LoaderResponse } from './loader';

import { Header } from '../../components/header/header';
import { Link } from '../../components/link/link';
import { EmptySection } from './empty-section';
import { ListWithMap } from './list-with-map';

export function MainPage() {
	const { cities, isAuthorized, offersByCity } =
		useLoaderData() as LoaderResponse;
	const [selectedCity, setCity] = useState(cities[0]);

	const { hash } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (hash.length === 0) {
			return navigate(`#${selectedCity.toLowerCase()}`);
		}
		const cityLowerCase = hash.slice(1);
		setCity(cityLowerCase[0].toUpperCase() + cityLowerCase.slice(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hash]);

	const currentOffers = offersByCity[selectedCity];
	const hasOffers = currentOffers.length > 0;

	return (
		<div
			className={classNames('page page--gray page--main', {
				'page__main--index-empty': !hasOffers,
			})}
		>
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
					{hasOffers ? (
						<ListWithMap offers={currentOffers} />
					) : (
						<EmptySection />
					)}
				</div>
			</main>
		</div>
	);
}
