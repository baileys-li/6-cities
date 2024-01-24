const APP_NAME = '6 cities'

const AppRoute = {
	City: '/:city',
	Favorites: '/favorites',
	Login: '/login',
	Main: '/',
	NotFound: '/404',
	Offer: '/offer',
	OfferId: '/offer/:id'
} as const

const enum AuthorizationStatus {
	Auth,
	NoAuth,
	Unknown
}

const CITIES = [
	{
		id: 'paris',
		location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
		name: 'Paris'
	},
	{
		id: 'cologne',
		location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
		name: 'Cologne'
	},
	{
		id: 'brussels',
		location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
		name: 'Brussels'
	},
	{
		id: 'amsterdam',
		location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
		name: 'Amsterdam'
	},
	{
		id: 'hamburg',
		location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
		name: 'Hamburg'
	},
	{
		id: 'dusseldorf',
		location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
		name: 'Dusseldorf'
	}
] as const

const Endpoint = {
	Comments: '/comments',
	Favorite: '/favorite',
	Login: '/login',
	Logout: '/logout',
	Offers: '/offers'
}

const enum FavoriteStatus {
	Added = 1,
	Removed = 0
}

const enum RequestStatus {
	Idle,
	Loading,
	Success,
	Failed
}

export { APP_NAME, AppRoute, AuthorizationStatus, CITIES, Endpoint, FavoriteStatus, RequestStatus }
