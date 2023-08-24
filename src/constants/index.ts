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
		name: 'Paris',
	},
	{
		id: 'cologne',
		name: 'Cologne',
	},
	{
		id: 'brussels',
		name: 'Brussels',
	},
	{
		id: 'amsterdam',
		name: 'Amsterdam',
	},
	{
		id: 'hamburg',
		name: 'Hamburg',
	},
	{
		id: 'dusseldorf',
		name: 'Dusseldorf',
	},
] as const;

type CityName = typeof CITIES[number]['name'];
type CityId = typeof CITIES[number]['id'];

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
	Refetching,
}

export {
	AuthorizationStatus,
	CITIES,
	Endpoint,
	FavoriteStatus,
	GOODS,
	OFFER_TYPES,
	RequestStatus
};

export type { CityId, CityName };
