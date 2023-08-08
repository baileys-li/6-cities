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
	{id: 'paris', name: 'Paris'},
	{id: 'cologne', name: 'Cologne'},
	{id: 'brussels', name: 'Brussels'},
	{id: 'amsterdam', name: 'Amsterdam'},
	{id: 'hamburg', name: 'Hamburg'},
	{id: 'dusseldorf', name: 'Dusseldorf'},
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

const enum Endpoint {
	Login = '/login',
	Offers = '/offers'
}

export { AuthorizationStatus, CITIES, Endpoint, GOODS, OFFER_TYPES, TemporalData };
