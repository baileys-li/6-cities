
import type { CityId, CityName } from '../../../types/city';
import type { ServerOffer } from '../../../types/offer';

import { Link } from '../../../components/link/link';
import { createMapper } from '../../../components/place-card';
import { CITIES } from '../../../constants';

const cityToSlug = {} as Record<CityName, `/${CityId}`>;

for (const city of CITIES) {
	cityToSlug[city.name] = `/${city.id}`;
}

const mapper = createMapper({ extraBemBlock: 'favorites', imageWidth: 150 });

export function FavoritesList({ offers }: { offers: ServerOffer[] }) {
	const cities: CityName[] = [];

	const offersByCity = {} as Record<CityName, ServerOffer[]>;

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
										<Link className="locations__item-link" href={cityToSlug[city]}>
											<span>{city}</span>
										</Link>
									</div>
								</div>
								<div className="favorites__places">
									{offersByCity[city].map(mapper)}
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
