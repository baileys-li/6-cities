import { memo } from 'react';

import type { FullOffer } from '../../../types/offer';

import { capitalize } from '../../../utils/case';
import { pluralIntl } from '../../../utils/intl';

type FeaturesProps = Pick<FullOffer, 'bedrooms' | 'maxAdults' | 'type'>;

const formatBedroom = (count: number) => {
	const pluralKey = pluralIntl.select(count);
	switch (pluralKey) {
		case 'one':
			return `${count} Bedroom`;
		default:
			return `${count} Bedrooms`;
	}
};

const formatAdults = (count: number) => {
	const pluralKey = pluralIntl.select(count);
	switch (pluralKey) {
		case 'one':
			return `Max ${count} adult`;
		default:
			return `Max ${count} adults`;
	}
};

const Features_ = ({ bedrooms, maxAdults, type }: FeaturesProps) => (
	<ul className="offer__features">
		<li className="offer__feature offer__feature--entire">
			{capitalize(type)}
		</li>
		<li className="offer__feature offer__feature--bedrooms">
			{formatBedroom(bedrooms)}
		</li>
		<li className="offer__feature offer__feature--adults">
			{formatAdults(maxAdults)}
		</li>
	</ul>
);

export const Features = memo(Features_);
