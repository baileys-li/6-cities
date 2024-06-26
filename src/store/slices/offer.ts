import { createSlice } from '@reduxjs/toolkit'

import type { FullOffer, ServerOffer } from '../../types/offer'

import { login } from '../thunks/auth'
import { changeFavorite } from '../thunks/favorites'
import { getNearBy, getOffer } from '../thunks/offers'

interface OffersSlice {
	info: Record<FullOffer['id'], FullOffer>
	nearby: ServerOffer[]
}

const initialState: OffersSlice = {
	info: {},
	nearby: []
}

export const offerSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(getOffer.fulfilled, (state, action) => {
			const offer = action.payload
			state.info[offer.id] = offer
		})

		builder.addCase(getNearBy.fulfilled, (state, action) => {
			state.nearby = action.payload
		})
		builder.addCase(changeFavorite.fulfilled, (state, action) => {
			const { id, isFavorite } = action.payload
			if (id in state.info) {
				state.info[id].isFavorite = isFavorite
			}
		})
		builder.addCase(login.fulfilled, state => {
			state.info = {}
		})
	},
	initialState,
	name: 'offer',
	reducers: {},
	selectors: {
		nearby: state => state.nearby,
		offerHash: state => state.info
	}
})

export const offerActions = { ...offerSlice.actions }
