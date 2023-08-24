import { useEffect } from 'react';

import { RequestStatus } from '../../../../constants';
import { useActionCreators, useAppSelector } from '../../../../hooks';
import { favoritesActions } from '../../../../store/slices/favorites';

export function useFavoriteCount() {
	const status = useAppSelector((state) => state.favorites.status);
	const count = useAppSelector((state) => state.favorites.items.length);
	const { fetchFavorites } = useActionCreators(favoritesActions);

	useEffect(() => {
		if (status === RequestStatus.Idle) {
			fetchFavorites();
		}
	}, [status, fetchFavorites]);

	return count;
}
