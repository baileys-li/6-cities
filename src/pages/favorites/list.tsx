import type { FavoritePageLoaderResponse } from './loader';

import { PlaceCard } from '../../components/place-card/place-card';

export const FavoritesList = ({
	cities,
	offersByCity,
}: FavoritePageLoaderResponse) => (
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
