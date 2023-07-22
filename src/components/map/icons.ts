import { Icon } from 'leaflet';

const enum Source {
	Active = '/img/pin-active.svg',
	Default = '/img/pin.svg',
}

const defaultIcon = new Icon({
	iconAnchor: [20, 40],
	iconSize: [40, 40],
	iconUrl: Source.Default,
});

const activeIcon = new Icon({
	iconAnchor: [20, 40],
	iconSize: [40, 40],
	iconUrl: Source.Active,
});

export { activeIcon, defaultIcon };
