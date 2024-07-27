import { Icon } from 'leaflet'

const enum Source {
	Active = '/img/pin-active.svg',
	Default = '/img/pin.svg'
}

const ICON_SIZE = {
	iconAnchor: [13.5, 39] as [number, number],
	iconSize: [27, 39] as [number, number]
}

export const PinIcon = {
	Active: new Icon({
		...ICON_SIZE,
		iconUrl: Source.Active
	}),
	Default: new Icon({
		...ICON_SIZE,
		iconUrl: Source.Default
	})
}
