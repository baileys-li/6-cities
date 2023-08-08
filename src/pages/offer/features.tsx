import type { FullOffer } from '../../types/offer';

type FeaturesProps = Pick<FullOffer, 'bedrooms' | 'maxAdults' | 'type'>;

export const Features = ({ bedrooms, maxAdults, type }: FeaturesProps) => (
	<ul className="offer__features">
		<li className="offer__feature offer__feature--entire">{type}</li>
		<li className="offer__feature offer__feature--bedrooms">
			{bedrooms} Bedrooms
		</li>
		<li className="offer__feature offer__feature--adults">
			Max {maxAdults} adults
		</li>
	</ul>
);
