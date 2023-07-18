import { useLoaderData } from 'react-router-dom';

import type { ServerOffer } from '../../types/offer';

import { Header } from '../../components/header/header';
import { PlaceCard } from '../../components/place-card/place-card';
import { useDocumentTitle } from '../../hooks';
import { mockStore } from '../../mocks';

interface LoaderResponse {
	cities: string[];
	offersByCity: Record<string, ServerOffer[]>;
}

export function FavoritesPage() {
	const { cities, offersByCity } = useLoaderData() as LoaderResponse;
	useDocumentTitle('Favorites');
	return (
		<div className="page">
			<Header isAuthorized />
			<main className="page__main page__main--favorites">
				offer
				<div className="page__favorites-container container">
					<section className="favorites">
						<h1 className="favorites__title">Saved listing</h1>
						<ul className="favorites__list">
							{cities.map((city) => (
								<li className="favorites__locations-items" key={city}>
									<div className="favorites__locations locations locations--current">
										<div className="locations__item">
											<a className="locations__item-link" href="#">
												<span>{city}</span>
											</a>
										</div>
									</div>
									<div className="favorites__places">
										{offersByCity[city].map((offer) => (
											<PlaceCard
												{...offer}
												extraBemBlock="favorites"
												key={offer.id}
											/>
										))}
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
			<footer className="footer container">
				<a className="footer__logo-link" href="main.html">
					<img
						alt="6 cities logo"
						className="footer__logo"
						height={33}
						src="img/logo.svg"
						width={64}
					/>
				</a>
			</footer>
		</div>
	);
}

export function loader(): LoaderResponse {
	const { offers } = mockStore;

	const cities: string[] = [];

	const offersByCity: Record<string, ServerOffer[]> = {};

	for (const offer of offers) {
		if (!offer.isFavorite) {
			continue;
		}

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
		offersByCity,
	};
}
