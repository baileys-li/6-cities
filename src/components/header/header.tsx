import type { MouseEvent } from 'react';

import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../constants/routes';
import { useActionCreators, useAppSelector, useAuth } from '../../hooks';
import { userActions } from '../../store/slices/user';
import { Link } from '../link/link';

interface HeaderProps {
	hideNavigation?: boolean;
}

export function Header({ hideNavigation = false }: HeaderProps) {
	const user = useAppSelector((state) => state.user.info);
	const isAuthorized = useAuth();
	const { logout } = useActionCreators(userActions);

	const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		logout();
	};
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'header__logo-link header__logo-link--active'
									: 'header__logo-link'}
							to={AppRoute.Main}
						>
							<img
								alt="6 cities logo"
								className="header__logo"
								height={41}
								src="img/logo.svg"
								width={81}
							/>
						</NavLink>
					</div>
					{!hideNavigation && (
						<nav className="header__nav">
							{isAuthorized ? (
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<Link
											className="header__nav-link header__nav-link--profile"
											href={AppRoute.Favorites}
										>
											<div
												style={{
													backgroundImage: `url(${user!.avatarUrl})`,
													borderRadius: '50%',
												}}
												className="header__avatar-wrapper user__avatar-wrapper"
											>
											</div>
											<span className="header__user-name user__name">
												{user!.email}
											</span>
											<span className="header__favorite-count">3</span>
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
							) : (
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<Link
											className="header__nav-link header__nav-link--profile"
											href={AppRoute.Login}
										>
											<div className="header__avatar-wrapper user__avatar-wrapper"></div>
											<span className="header__login">Sign in</span>
										</Link>
									</li>
								</ul>
							)}
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}
