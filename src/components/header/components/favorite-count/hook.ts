import { useEffect } from 'react'

import { useActionCreators, useFavorites } from '../../../../hooks'
import { favoritesActions } from '../../../../store/slices/favorites'

export function useFavoriteCount() {
	const { count, isIdle } = useFavorites()
	const { fetchFavorites } = useActionCreators(favoritesActions)

	useEffect(() => {
		if (isIdle) {
			fetchFavorites()
		}
	}, [isIdle, fetchFavorites])

	return count
}
