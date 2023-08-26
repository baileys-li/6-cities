import type { City } from './city';
import type { ServerLocation } from './location';
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
