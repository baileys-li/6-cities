import { Icon } from 'leaflet';

const enum Source {
	Active = '/img/pin-active.svg',
	Default = '/img/pin.svg',
}

const defaultIcon = new Icon({
	iconAnchor: [13.5, 39],
	iconSize: [27, 39],
	iconUrl: Source.Default,
});

const activeIcon = new Icon({
	iconAnchor: [13.5, 39],
	iconSize: [27, 39],
	iconUrl: Source.Active,
});

export { activeIcon, defaultIcon };
