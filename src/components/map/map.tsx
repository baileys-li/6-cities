
import { clsx } from 'clsx';
import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import type { ServerLocation, ServerOffer } from '../../types/offer';

import { useMap } from '../../hooks';
import { activeIcon, defaultIcon } from './icons';

interface MapProps {
	activeId?: null | string;
	className?: string;
	location: ServerLocation;
	offers: ServerOffer[];
}

export function Map({
	activeId = null,
	className,
	location,
	offers,
}: MapProps): JSX.Element {
	const mapRef = useRef(null);
	const map = useMap(mapRef, location);

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

	return <div className={clsx(className, 'map')} ref={mapRef}></div>;
}
