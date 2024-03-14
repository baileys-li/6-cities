import { clsx } from 'clsx'
import { Marker, layerGroup } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { memo, useEffect, useMemo, useRef } from 'react'

import type { CityName } from '../../types/city'
import type { ServerOffer } from '../../types/offer'

import { CITIES } from '../../constants'
import { useAppSelector, useMap } from '../../hooks'
import { offersSelectors } from '../../store/slices/offers'
import { activeIcon, defaultIcon } from './icons'

type GenericOffer = Pick<ServerOffer, 'city' | 'id' | 'location'>
interface MapProps {
	city?: CityName
	className?: string
	offers: GenericOffer[]
}

function Map_({ city = 'Paris', className, offers }: MapProps): JSX.Element {
	const mapRef = useRef(null)
	const location = useMemo(() => CITIES.find(({ name }) => name === city)?.location, [city])
	const map = useMap(mapRef, location)
	const activeId = useAppSelector(offersSelectors.activeId)
	const layer = useRef(layerGroup())

	useEffect(() => {
		if (map) {
			offers.forEach(offer =>
				new Marker(
					{
						lat: offer.location.latitude,
						lng: offer.location.longitude
					},
					{
						icon: activeId === offer.id ? activeIcon : defaultIcon
					}
				).addTo(layer.current)
			)

			const savedLayer = layer.current
			return () => {
				savedLayer.clearLayers()
			}
		}
	}, [map, offers, activeId])

	useEffect(() => {
		if (map && location) {
			layer.current.addTo(map)
			map.panTo([location.latitude, location.longitude])
		}
	}, [location, map])

	return <div className={clsx(className, 'map')} ref={mapRef}></div>
}

export const Map = memo(Map_)
