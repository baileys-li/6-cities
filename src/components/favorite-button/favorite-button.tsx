import { clsx } from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../constants/routes';
import { useActionCreators, useAuth } from '../../hooks';
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

function FavoriteButton_({
	bemBlock = 'place-card',
	isFavorite = false,
	offerId,
	width = 18,
}: FavoriteButtonProps) {
	const [isOn, setOn] = useState(isFavorite);
	const { changeFavorite } = useActionCreators(favoritesActions);
	const isAuthorized = useAuth();
	const navigate = useNavigate();

	const isActive = isAuthorized && isOn;

	const favoriteLabel = `${isActive ? 'In' : 'To'} bookmarks`;
	const buttonClass = `${bemBlock}__bookmark-button`;

	const favoriteClass = clsx(
		buttonClass,
		{
			[`${buttonClass}--active`]: isActive,
		},
		'button'
	);

	const height = width * Default.HeightCoefficient;

	function handleClick() {
		if (!isAuthorized) {
			return navigate(AppRoute.Login);
		}

		changeFavorite({
			offerId,
			status: Number(!isOn),
		});
		setOn((prev) => !prev);
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

export const FavoriteButton = FavoriteButton_;
