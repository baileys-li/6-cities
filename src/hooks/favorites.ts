import { RequestStatus } from '../constants';
import {
	selectFavorites,
	selectFavoritesStatus,
} from '../store/selectors/favorites';
import { useAppSelector } from './store';

export function useFavorites() {
	const offers = useAppSelector(selectFavorites);
	const status = useAppSelector(selectFavoritesStatus);

	return {
		count: offers.length,
		isIdle: status === RequestStatus.Idle,
		isLoading: status === RequestStatus.Loading,
		isSuccess: status === RequestStatus.Success,
		offers,
	};
}
