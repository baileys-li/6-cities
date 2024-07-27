import { clsx } from 'clsx'
import { layerGroup } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { memo, useRef } from 'react'

import type { CityName } from '../../types/city'
import type { ServerLocation } from '../../types/offer'
import type { GenericOffer } from './hooks/update-markers'

import { CITIES } from '../../constants'
import { useActiveMarker } from './hooks/active-market'
import { useInitLeaflet } from './hooks/init-leaflet'
import { useUpdateLocation } from './hooks/update-location'
import { useUpdateMarkers } from './hooks/update-markers'

interface MapProps {
	city?: CityName
	className?: string
	offers: GenericOffer[]
}

const locationByCity = CITIES.reduce(
	(acc, { location, name }) => {
		acc[name] = location
		return acc
	},
	{} as Record<CityName, ServerLocation>
)

function Map_({ city = 'Paris', className, offers }: MapProps): JSX.Element {
	const mapRef = useRef(null)
	const location = locationByCity[city]
	const map = useInitLeaflet(mapRef, location)
	const layer = useRef(layerGroup())
	const markers = useUpdateMarkers(map, offers, layer)
	useUpdateLocation(map, location, layer)
	useActiveMarker(markers)

	return <div className={clsx(className, 'map')} ref={mapRef}></div>
}

export const Map = memo(Map_)
