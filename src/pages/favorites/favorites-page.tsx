import { clsx } from 'clsx';

import { Layout } from '../../components/layout';
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/selectors/favorites';
import { FavoritesEmpty } from './empty';
import { FavoritesList } from './list';

export function FavoritesPage() {
	const favorites = useAppSelector(selectFavorites);
	const hasFavorites = favorites.length > 0;

	return (
		<Layout
			className={clsx('page', {
				'page--favorites-empty': !hasFavorites,
			})}
			title="Favorites"
		>
			{hasFavorites ? <FavoritesList offers={favorites} /> : <FavoritesEmpty />}

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
