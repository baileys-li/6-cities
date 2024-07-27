import type { LayerGroup, LeafletMap } from 'leaflet'
import type { MutableRefObject } from 'react'

import { useEffect } from 'react'

import type { ServerLocation } from '../../../types/location'

export function useUpdateLocation(map: LeafletMap | null, location: ServerLocation, layer: MutableRefObject<LayerGroup>) {
	useEffect(() => {
		if (map && location) {
			layer.current.addTo(map)
			map.panTo([location.latitude, location.longitude])
		}
	}, [layer, location, map])
}
