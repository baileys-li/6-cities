import { RequestStatus } from '../constants'
import { favoritesSelectors } from '../store/slices/favorites'
import { useAppSelector } from './store'

export function useFavorites() {
	const offers = useAppSelector(favoritesSelectors.favorites)
	const status = useAppSelector(favoritesSelectors.status)

	return {
		count: offers.length,
		isIdle: status === RequestStatus.Idle,
		isLoading: status === RequestStatus.Loading,
		isSuccess: status === RequestStatus.Success,
		offers
	}
}
