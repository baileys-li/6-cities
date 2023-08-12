import { clsx } from 'clsx';
import { useLoaderData } from 'react-router-dom';

import type { FavoritePageLoaderResponse } from './loader';

import { Layout } from '../../components/layout';
import { FavoritesEmpty } from './empty';
import { FavoritesList } from './list';

export function FavoritesPage() {
	const { cities, offersByCity } =
		useLoaderData() as FavoritePageLoaderResponse;

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
