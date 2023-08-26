
import { clsx } from 'clsx';
import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect, useMemo, useRef } from 'react';

import type { CityName } from '../../types/city';
import type { ServerOffer } from '../../types/offer';

import { CITIES } from '../../constants';
import { useAppSelector, useMap } from '../../hooks';
import { selectActiveId } from '../../store/selectors/offers';
import { activeIcon, defaultIcon } from './icons';

type GenericOffer = Pick<ServerOffer, 'city' | 'id' | 'location'>
interface MapProps {
	city?: CityName;
	className?: string;
	offers: GenericOffer[];
}

function Map_({
	city = 'Paris',
	className,
	offers
}: MapProps): JSX.Element {
	const mapRef = useRef(null);
	const location = useMemo(() => CITIES.find(({name}) => name === city)?.location, [city]);
	const map = useMap(mapRef, location);
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
		if (map && location) {
			map.panTo([location.latitude, location.longitude]);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return <div className={clsx(className, 'map')} ref={mapRef}></div>;
}

export const Map = memo(Map_);
