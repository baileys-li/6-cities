import type { CityName } from '../constants';

interface ServerLocation {
	latitude: number;
	longitude: number;
	zoom: number;
}

interface City {
	location: ServerLocation;
	name: CityName;
}

interface ServerOffer {
	city: City;
	id: string;
	isFavorite: boolean;
	isPremium: boolean;
	location: ServerLocation;
	previewImage: string;
	price: number;
	rating: number;
	title: string;
	type: string;
}

type FullOffer = Omit<ServerOffer, 'previewImage'> & {
	bedrooms: number;
	description: string;
	goods: string[];
	host: {
		avatarUrl: string;
		isPro: boolean;
		name: string;
	};
	images: string[];
	maxAdults: number;
};

export type { City, FullOffer, ServerLocation, ServerOffer };
