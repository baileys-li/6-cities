interface ServerLocation {
	latitude: number;
	longitude: number;
	zoom: number;
}

interface ServerOffer {
	city: {
		location: ServerLocation;
		name: string;
	};
	id: string;
	isFavorite: boolean;
	isPremium: boolean;
	location: ServerLocation;
	previewImage: string;
	price: number;
	rating: 0 | 1 | 2 | 3 | 4 | 5;
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

export type { FullOffer, ServerLocation, ServerOffer };
