import { AppRoute } from '../../../constants'
import { useAuth } from '../../../hooks'
import { Link } from '../../link/link'
import { LoggedNavigation } from './logged-nav/logged-nav'

export function Navigation() {
	const isAuthorized = useAuth()

	return (
		<nav className="header__nav">
			{isAuthorized ? (
				<LoggedNavigation />
			) : (
				<ul className="header__nav-list">
					<li className="header__nav-item user">
						<Link className="header__nav-link header__nav-link--profile" href={AppRoute.Login}>
							<div className="header__avatar-wrapper user__avatar-wrapper"></div>
							<span className="header__login">Sign in</span>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}
