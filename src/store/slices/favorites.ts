import { createSlice } from '@reduxjs/toolkit'

import type { ServerOffer } from '../../types/offer'

import { RequestStatus } from '../../constants'
import { setPending, setRejected, setSuccessWithItems } from '../../utils/request-status'
import { changeFavorite, fetchFavorites } from '../thunks/favorites'
interface FavoritesState {
	items: ServerOffer[]
	status: RequestStatus
}

const initialState: FavoritesState = {
	items: [],
	status: RequestStatus.Idle
}

export const favoritesSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(fetchFavorites.fulfilled, setSuccessWithItems)
		builder.addCase(fetchFavorites.rejected, setRejected)
		builder.addCase(fetchFavorites.pending, setPending)
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			if (action.payload.isFavorite) {
				state.items.push(action.payload)
			} else {
				state.items = state.items.filter(({ id }) => id !== action.payload.id)
			}
		})
	},
	initialState,
	name: 'favorites',
	reducers: {},
	selectors: {
		favorites: state => state.items,
		status: state => state.status
	}
})

export const favoritesSelectors = favoritesSlice.selectors
export const favoritesActions = {
	changeFavorite,
	fetchFavorites
}
