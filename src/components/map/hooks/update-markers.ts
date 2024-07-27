import type { LayerGroup, LeafletMap } from 'leaflet'
import type { MutableRefObject } from 'react'

import { Marker } from 'leaflet'
import { useEffect, useRef } from 'react'

import type { ServerOffer } from '../../../types/offer'

import { store } from '../../../store'
import { offersSelectors } from '../../../store/slices/offers'
import { PinIcon } from '../icons'

export type GenericOffer = Pick<ServerOffer, 'id' | 'location'>

export function useUpdateMarkers(map: LeafletMap | null, offers: GenericOffer[], layerRef: MutableRefObject<LayerGroup>) {
	const markers = useRef<Record<string, Marker>>({})

	useEffect(() => {
		if (map === null) {
			return
		}

		const activeId = offersSelectors.activeId(store.getState())

		for (const offer of offers) {
			const marker = new Marker(
				{
					lat: offer.location.latitude,
					lng: offer.location.longitude
				},
				{
					icon: PinIcon[offer.id === activeId ? 'Active' : 'Default']
				}
			)
			marker.addTo(layerRef.current)
			markers.current[offer.id] = marker
		}

		const savedLayer = layerRef.current
		return () => {
			savedLayer.clearLayers()
		}
	}, [map, offers, layerRef])

	return markers
}
