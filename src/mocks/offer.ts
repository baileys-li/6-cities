import { faker } from '@faker-js/faker';

import type { ServerLocation, ServerOffer } from '../types/offer';

import { CITIES, OFFER_TYPES } from '../constants';

const mockLocation = (): ServerLocation => ({
	latitude: faker.location.latitude(),
	longitude: faker.location.longitude(),
	zoom: faker.number.int({ max: 10, min: 1 }),
});

export const mockOfferItem = (): ServerOffer => ({
	city: {
		location: mockLocation(),
		name: faker.helpers.arrayElement(CITIES),
	},
	id: crypto.randomUUID(),
	isFavorite: faker.datatype.boolean(),
	isPremium: faker.datatype.boolean(),
	location: mockLocation(),
	previewImage: faker.image.urlLoremFlickr({ category: 'apartment' }),
	price: faker.number.int({ max: 10000, min: 100 }),
	rating: faker.number.int({ max: 5, min: 0 }) as ServerOffer['rating'],
	title: faker.location.streetAddress(),
	type: faker.helpers.arrayElement(OFFER_TYPES)
});
