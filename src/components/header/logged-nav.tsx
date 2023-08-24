import { AppRoute } from '../../constants/routes';
import { useAppSelector } from '../../hooks';
import { Link } from '../link/link';
import { useFavoriteCount, useHandleLogout } from './hooks';

export function LoggedNavigation() {
	const user = useAppSelector((state) => state.user.info!);
	const favoriteCount = useFavoriteCount();
	const handleLogout = useHandleLogout();

	return (
		<ul className="header__nav-list">
			<li className="header__nav-item user">
				<Link
					className="header__nav-link header__nav-link--profile"
					href={AppRoute.Favorites}
				>
					<div
						style={{
							backgroundImage: `url(${user.avatarUrl})`,
							borderRadius: '50%',
						}}
						className="header__avatar-wrapper user__avatar-wrapper"
					/>
					<span className="header__user-name user__name">
						{user.email}
					</span>
					<span className="header__favorite-count">{favoriteCount}</span>
				</Link>
			</li>
			<li className="header__nav-item">
				<a
					className="header__nav-link"
					href="#"
					onClick={handleLogout}
				>
					<span className="header__signout">Sign out</span>
				</a>
			</li>
		</ul>
	);
}
