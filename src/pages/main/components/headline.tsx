import { memo } from 'react';
import { useLoaderData } from 'react-router-dom';

import type { CityName } from '../../../constants';

import { useDocumentTitle } from '../../../hooks';
import { pluralIntl } from '../../../utils/intl';

interface HeadlineProps {
	count?: number;
}

const getPlaceWord = (count: number) => {
	const pluralKey = pluralIntl.select(count);
	if (pluralKey === 'one') {
		return `${count} place to stay`;
	}
	return `${count} places to stay`;
};

const Headline_ = ({ count }: HeadlineProps) => {
	const city = useLoaderData() as CityName;
	const headline = `${count ? getPlaceWord(count) : 'Loading offers'} in ${city}`;

	useDocumentTitle(headline);

	return (
		<b className="places__found">
			{headline}
		</b>
	);
};

export const Headline = memo(Headline_);
