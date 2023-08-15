import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

import { RequestStatus } from '../../constants';
import { AppRoute } from '../../constants/routes';
import {
	useActionCreators,
	useAppSelector,
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
	const { changeFavorite } = useActionCreators(favoritesActions);
	const status = useAppSelector((state) => state.favorites.status);

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

		changeFavorite({
			offerId,
			status: Number(!isOn),
		});
		toggle();
	}

	return (
		<button
			className={favoriteClass}
			disabled={status === RequestStatus.Loading}
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
