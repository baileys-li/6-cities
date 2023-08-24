import { clsx } from 'clsx';

import { useActionCreators } from '../../hooks';
import { favoritesActions } from '../../store/slices/favorites';

interface FavoriteButtonProps {
	bemBlock?: 'offer' | 'place-card';
	isFavorite?: boolean;
	offerId: string;
	width?: number;
}

const enum Default {
	HeightCoefficient = 18 / 17,
}

export function FavoriteButton({
	bemBlock = 'place-card',
	isFavorite = false,
	offerId,
	width = 18,
}: FavoriteButtonProps) {
	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const buttonClass = `${bemBlock}__bookmark-button`;
	const favoriteClass = clsx(
		buttonClass,
		{
			[`${buttonClass}--active`]: isFavorite,
		},
		'button'
	);

	const height = width * Default.HeightCoefficient;

	const { changeFavorite } = useActionCreators(favoritesActions);
	function handleClick() {
		changeFavorite({
			offerId,
			status: Number(!isFavorite),
		});
	}

	return (
		<button className={favoriteClass} onClick={handleClick} type="button">
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
