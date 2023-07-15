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

export { CITIES, OFFER_TYPES, TemporalData };
