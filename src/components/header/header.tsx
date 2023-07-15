import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { AppRoute } from '../../constants/routes';
import { Link } from '../link/link';

export function Header() {
	const { pathname } = useLocation();
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<Link
							className={classNames('header__logo-link', {
								'header__logo-link--active': pathname === AppRoute.Main,
							})}
							href={AppRoute.Main}
						>
							<img
								alt="6 cities logo"
								className="header__logo"
								height={41}
								src="img/logo.svg"
								width={81}
							/>
						</Link>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item user">
								<Link
									className="header__nav-link header__nav-link--profile"
									href={AppRoute.Favorites}
								>
									<div className="header__avatar-wrapper user__avatar-wrapper"></div>
									<span className="header__user-name user__name">
										Oliver.conner@gmail.com
									</span>
									<span className="header__favorite-count">3</span>
								</Link>
							</li>
							<li className="header__nav-item">
								<Link className="header__nav-link" href={AppRoute.Login}>
									<span className="header__signout">Sign out</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
