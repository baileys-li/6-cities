import { clsx } from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../constants/routes';
import {
	useActionCreators,
	useAuth,
	useBoolean,
} from '../../hooks';
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
	const { isOn, toggle } = useBoolean(isFavorite);
	const [disable, setDisable] = useState(false);
	const { changeFavorite } = useActionCreators(favoritesActions);

	const favoriteLabel = `${isOn ? 'In' : 'To'} bookmarks`;
	const buttonClass = `${bemBlock}__bookmark-button`;

	const favoriteClass = clsx(
		buttonClass,
		{
			[`${buttonClass}--active`]: isOn,
		},
		'button'
	);

	const height = width * Default.HeightCoefficient;

	const isAuthorized = useAuth();
	const navigate = useNavigate();

	function handleClick() {
		if (!isAuthorized) {
			return navigate(AppRoute.Login);
		}
		setDisable(true);
		changeFavorite({
			offerId,
			status: Number(!isOn),
		}).then(() => setDisable(false));
		toggle();
	}

	return (
		<button
			className={favoriteClass}
			disabled={disable}
			onClick={handleClick}
			type="button"
		>
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
