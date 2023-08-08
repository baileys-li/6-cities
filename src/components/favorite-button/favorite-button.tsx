import classNames from 'classnames';

interface FavoriteButtonProps {
	bemBlock?: 'offer' | 'place-card';
	isFavorite?: boolean;
	width?: number;
}

const enum Default {
	HeightCoefficient = 18 / 17,
}

export function FavoriteButton({
	bemBlock = 'place-card',
	isFavorite = false,
	width = 18,
}: FavoriteButtonProps) {
	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const buttonClass = `${bemBlock}__bookmark-button`;
	const favoriteClass = classNames(
		buttonClass,
		{
			[`${buttonClass}--active`]: isFavorite,
		},
		'button'
	);

	const height = width * Default.HeightCoefficient;

	return (
		<button className={favoriteClass} type="button">
			<svg
				className={`${bemBlock}__bookmark-icon`}
				height={height}
				width={width}
			>
				<use xlinkHref="#icon-bookmark" />
			</svg>
			<span className="visually-hidden">{favoriteLabel}</span>
		</button>
	);
}
