export const PROJECT_NAME = '6 cities';

const enum TemporalData {
	OfferAmount = 4
}

const OFFER_TYPES = [
	'Private room',
	'Apartment',
	'House',
	'Hotel',
	'Cursed Old House',
	'Palace',
] as const;

const CITIES = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf',
] as const;

const GOODS = [
	'Wi-Fi',
	'Washing machine',
	'Towels',
	'Heating',
	'Coffee machine',
	'Baby seat',
	'Kitchen',
	'Dishwasher',
	'Cabel TV',
	'Fridge',
];

const enum AuthorizationStatus {
	Auth,
	NoAuth,
	Unknown,
}

export { AuthorizationStatus, CITIES, OFFER_TYPES, GOODS, TemporalData };
