import type { Store } from '../../types/store';

type FavoriteState = Pick<Store, 'favorites'>;

const selectFavorites = (state: FavoriteState) => state.favorites.items;
const selectFavoritesStatus = (state: FavoriteState) => state.favorites.status;
export {
	selectFavorites,
	selectFavoritesStatus
};
