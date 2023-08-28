import type { CITIES } from '../constants';
import type { ServerLocation } from './location';

type CityName = (typeof CITIES)[number]['name'];
type CityId = (typeof CITIES)[number]['id'];

interface City {
	location: ServerLocation;
	name: CityName;
}

export type { City, CityId, CityName };
