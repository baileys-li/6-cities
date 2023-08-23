
import { clsx } from 'clsx';
import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import type { CityName } from '../../constants';
import type { ServerOffer } from '../../types/offer';

import { useAppSelector, useMap } from '../../hooks';
import { selectActiveId } from '../../store/selectors/offers';
import { activeIcon, defaultIcon } from './icons';

type GenericOffer = Pick<ServerOffer, 'city' | 'id' | 'location'>
interface MapProps {
	className?: string;
	offers: GenericOffer[];
}

export function Map({

	className,
	offers,
}: MapProps): JSX.Element {
	const mapRef = useRef(null);
	const city = offers[0].city;
	const cityName = city.name as CityName;
	const cityNameRef = useRef<CityName>(city.name as CityName);
	const map = useMap(mapRef, city);
	const activeId = useAppSelector(selectActiveId);
	useEffect(() => {
		if (map) {
			const markerLayer = layerGroup().addTo(map);
			offers.forEach((offer) => {
				const marker = new Marker({
					lat: offer.location.latitude,
					lng: offer.location.longitude,
				});

				marker
					.setIcon(activeId === offer.id ? activeIcon : defaultIcon)
					.addTo(markerLayer);
			});

			return () => {
				map.removeLayer(markerLayer);
			};
		}
	}, [map, offers, activeId]);

	useEffect(() => {
		if (map && cityNameRef.current !== cityName) {
			map.panTo([city.location.latitude, city.location.longitude]);
			cityNameRef.current = cityName;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cityName, cityNameRef, map]);

	return <div className={clsx(className, 'map')} ref={mapRef}></div>;
}
