import type { ServerOffer } from '../../../types/offer';

import { PlaceCard } from '../../../components/place-card/place-card';

export function FavoritesList({ offers }: { offers: ServerOffer[] }) {
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
	return (
		<main className="page__main page__main--favorites">
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
											imageWidth={150}
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
	);
}
