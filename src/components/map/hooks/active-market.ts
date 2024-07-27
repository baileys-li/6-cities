import type { Marker } from 'leaflet'
import type { MutableRefObject } from 'react'

import { useEffect } from 'react'

import { store } from '../../../store'
import { offersSelectors } from '../../../store/slices/offers'
import { PinIcon } from '../icons'

function subscribeToActiveId(onChange: (updatedId: string, previousId: string) => void) {
	let previousId: string = ''

	const cleanUp = store.subscribe(() => {
		const newActiveId = offersSelectors.activeId(store.getState())
		if (previousId === newActiveId) {
			return
		}

		onChange(newActiveId, previousId)
		previousId = newActiveId
	})

	return cleanUp
}

export function useActiveMarker(markers: MutableRefObject<Record<string, Marker>>) {
	useEffect(
		() =>
			subscribeToActiveId((newActiveId, previousId) => {
				const prevMarker = markers.current[previousId]
				prevMarker?.setIcon(PinIcon.Default)

				const newMarker = markers.current[newActiveId]
				newMarker?.setIcon(PinIcon.Active)
			}),
		[markers]
	)
}
