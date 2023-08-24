import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../../types/store';

type FavoriteState = Pick<Store, 'favorites'>;

const selectFavorites = (state: FavoriteState) => state.favorites.items;
const selectFavoritesStatus = (state: FavoriteState) => state.favorites.status;
const selectFavoritesStatusAndCount = createSelector(
	selectFavorites,
	selectFavoritesStatus,
	(items, status) => ({ count: items.length, status })
);

export {
	selectFavorites,
	selectFavoritesStatus,
	selectFavoritesStatusAndCount,
};
