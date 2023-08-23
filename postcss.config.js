import env from 'postcss-preset-env';
import calc from 'postcss-calc';
import sortMQ from 'postcss-sort-media-queries';

const plugins = [
	env({
		stage: 0,
		features: {
			'image-set-function': false,
		}
	}),
	calc({ precision: 3 })
];

process.env.NODE_ENV === 'production' && plugins.push(
	sortMQ({
		sort: 'mobile-first'
	})
);

export default {
	plugins
};
