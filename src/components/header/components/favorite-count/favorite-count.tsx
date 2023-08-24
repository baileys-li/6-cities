import { useFavoriteCount } from './hook';

export function FavoriteCount() {
	const favoriteCount = useFavoriteCount();
	return <span className="header__favorite-count">{favoriteCount}</span>;
}
