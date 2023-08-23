import { AppRoute } from '../../constants/routes';
import { useAuth } from '../../hooks';
import { Link } from '../link/link';
import { Logo } from './Logo';
import { LoggedNavigation } from './logged-nav';

export interface HeaderProps {
	hideNavigation?: boolean;
}

export function Header({ hideNavigation = false }: HeaderProps) {
	const isAuthorized = useAuth();

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<Logo />
					</div>
					{!hideNavigation && (
						<nav className="header__nav">
							{isAuthorized ? (
								<LoggedNavigation />
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
