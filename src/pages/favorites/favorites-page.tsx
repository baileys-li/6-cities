import classNames from 'classnames';
import { useLoaderData } from 'react-router-dom';

import type { FavoritePageLoaderResponse } from './loader';

import { Header } from '../../components/header/header';
import { useDocumentTitle } from '../../hooks';
import { FavoritesEmpty } from './empty';
import { FavoritesList } from './list';

export function FavoritesPage() {
	const { cities, offersByCity } =
		useLoaderData() as FavoritePageLoaderResponse;
	useDocumentTitle('Favorites');

	const hasFavorites = cities.length > 0;

	return (
		<div
			className={classNames('page', {
				'page--favorites-empty': !hasFavorites,
			})}
		>
			<Header isAuthorized />
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
		</div>
	);
}
