import type { LoaderFunctionArgs } from 'react-router-dom';

import { CITIES } from '../../constants';

export const loadMainPageData = ({ params }: LoaderFunctionArgs) => {
	const slug = params.city!;
	const city = CITIES.find(({ id }) => id === slug);

	if (city === undefined) {
		throw new Response('Not Found', { status: 404 });
	}

	return city.name;
};

