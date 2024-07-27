import type { MutableRefObject } from 'react'

import leaflet, { type LeafletMap, TileLayer } from 'leaflet'
import { useEffect, useRef, useState } from 'react'

import type { ServerLocation } from '../../../types/location'

const enum TileOption {
	Attribute = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	Url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
}

export function useInitLeaflet(
	mapRef: MutableRefObject<HTMLElement | null>,
	location: ServerLocation = {
		latitude: 0,
		longitude: 0,
		zoom: 13
	}
): LeafletMap | null {
	const [map, setMap] = useState<LeafletMap | null>(null)
	const isRenderedRef = useRef<boolean>(false)

	useEffect(() => {
		if (mapRef.current !== null && !isRenderedRef.current) {
			const instance = leaflet.map(mapRef.current, {
				center: {
					lat: location.latitude,
					lng: location.longitude
				},
				zoom: location.zoom
			})

			const layer = new TileLayer(TileOption.Url, {
				attribution: TileOption.Attribute
			})

			instance.addLayer(layer)

			setMap(instance)
			isRenderedRef.current = true
		}
	}, [mapRef, location])

	return map
}
