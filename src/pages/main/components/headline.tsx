import { pluralIntl } from '../../../utils/intl';

interface HeadlineProps {
	city: string;
	count: number;
}

const getPlaceWord = (count: number) => {
	const pluralKey = pluralIntl.select(count);
	if (pluralKey === 'one') {
		return 'place';
	}
	return 'places';
};

export const Headline = ({ city, count }: HeadlineProps) => (
	<b className="places__found">
		{count} {getPlaceWord(count)} to stay in {city}
	</b>
);
