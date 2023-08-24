export const PROJECT_NAME = '6 cities';

const OFFER_TYPES = [
	'Private room',
	'Apartment',
	'House',
	'Hotel',
	'Cursed Old House',
	'Palace',
] as const;

const CITIES = [
	{
		id: 'paris',
		location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
		name: 'Paris',
	},
	{
		id: 'cologne',
		location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
		name: 'Cologne',
	},
	{
		id: 'brussels',
		location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
		name: 'Brussels',
	},
	{
		id: 'amsterdam',
		location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
		name: 'Amsterdam',
	},
	{
		id: 'hamburg',
		location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
		name: 'Hamburg',
	},
	{
		id: 'dusseldorf',
		location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
		name: 'Dusseldorf',
	},
] as const;

type CityName = (typeof CITIES)[number]['name'];
type CityId = (typeof CITIES)[number]['id'];

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
	Comments = '/comments',
	Favorite = '/favorite',
	Login = '/login',
	Logout = '/logout',
	Offers = '/offers',
}

const enum FavoriteStatus {
	Added = 1,
	Removed = 0,
}

const enum RequestStatus {
	Idle,
	Loading,
	Success,
	Failed,
	Refetch,
}

export {
	AuthorizationStatus,
	CITIES,
	Endpoint,
	FavoriteStatus,
	GOODS,
	OFFER_TYPES,
	RequestStatus,
};

export type { CityId, CityName };
