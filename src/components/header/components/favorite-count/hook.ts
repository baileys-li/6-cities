import { useEffect } from 'react';

import { RequestStatus } from '../../../../constants';
import { useActionCreators, useAppSelector } from '../../../../hooks';
import { selectFavoritesStatusAndCount } from '../../../../store/selectors/favorites';
import { favoritesActions } from '../../../../store/slices/favorites';

export function useFavoriteCount() {
	const favorites = useAppSelector(selectFavoritesStatusAndCount);
	const { fetchFavorites } = useActionCreators(favoritesActions);

	useEffect(() => {
		if (favorites.status === RequestStatus.Idle) {
			fetchFavorites();
		}
	}, [favorites.status, fetchFavorites]);

	return favorites.count;
}
