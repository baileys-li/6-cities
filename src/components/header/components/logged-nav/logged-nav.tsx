import { AppRoute } from '../../../../constants';
import { useAppSelector } from '../../../../hooks';
import { selectUser } from '../../../../store/selectors/user';
import { Link } from '../../../link/link';
import { FavoriteCount } from '../favorite-count/favorite-count';
import { useHandleLogout } from './hook';

export function LoggedNavigation() {
	const user = useAppSelector(selectUser)!;
	const handleLogout = useHandleLogout();

	return (
		<ul className="header__nav-list">
			<li className="header__nav-item user">
				<Link
					className="header__nav-link header__nav-link--profile"
					href={AppRoute.Favorites}
				>
					<div
						className="header__avatar-wrapper user__avatar-wrapper"
						style={{
							backgroundImage: `url(${user.avatarUrl})`,
							borderRadius: '50%',
						}}
					/>
					<span className="header__user-name user__name">
						{user.email}
					</span>
					<FavoriteCount />
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
