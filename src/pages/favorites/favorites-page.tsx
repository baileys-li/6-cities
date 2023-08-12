import { clsx } from 'clsx';

import type { ServerOffer } from '../../types/offer';

import { Layout } from '../../components/layout';
import { useAppSelector } from '../../hooks';
import { FavoritesEmpty } from './empty';
import { FavoritesList } from './list';

export function FavoritesPage() {
	const favorites = useAppSelector((state) => state.favorites.items);

	const cities: string[] = [];

	const offersByCity: Record<string, ServerOffer[]> = {};

	for (const offer of favorites) {
		const city = offer.city.name;
		if (city in offersByCity) {
			offersByCity[city].push(offer);
			continue;
		}

		cities.push(city);
		offersByCity[city] = [offer];
		continue;
	}

	const hasFavorites = cities.length > 0;

	return (
		<Layout
			className={clsx('page', {
				'page--favorites-empty': !hasFavorites,
			})}
			title='Favorites'
		>
			{hasFavorites ? (
				<FavoritesList cities={cities} offersByCity={offersByCity} />
			) : (
				<FavoritesEmpty />
			)}

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
		</Layout>
	);
}
