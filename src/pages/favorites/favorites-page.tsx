import { clsx } from 'clsx';

import { Layout } from '../../components/layout';
import { Spinner } from '../../components/spinner/spinner';
import { RequestStatus } from '../../constants';
import { useAppSelector } from '../../hooks';
import { selectFavorites, selectFavoritesStatus } from '../../store/selectors/favorites';
import { FavoritesEmpty } from './components/empty';
import { FavoritesList } from './components/list';

export function FavoritesPage() {
	const favorites = useAppSelector(selectFavorites);
	const status = useAppSelector(selectFavoritesStatus);
	const isLoading = status === RequestStatus.Loading;
	const hasFavorites = favorites.length > 0;

	return (
		<Layout
			className={clsx('page', {
				'page--favorites-empty': !hasFavorites,
			})}
			title="Favorites"
		>
			{isLoading && <Spinner />}
			{!isLoading && hasFavorites && <FavoritesList offers={favorites} /> }
			{!isLoading && !hasFavorites && <FavoritesEmpty />}

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
