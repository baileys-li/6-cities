interface Review {
	comment: string;
	date: string;
	id: string;
	rating: number;
	user: {
		avatarUrl: string;
		isPro: boolean;
		name: string;
	};
}

export type { Review };
