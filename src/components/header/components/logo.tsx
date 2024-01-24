import { useLocation } from 'react-router-dom'

import { CITIES } from '../../../constants'
import { AppRoute } from '../../../constants'
import { Link } from '../../link/link'

const IMAGE = <img alt="6 cities logo" className="header__logo" height={41} src="img/logo.svg" width={81} />

const mainPaths = CITIES.map(({ id }) => `/${id}`)

export function Logo() {
	const { pathname } = useLocation()
	const isActive = mainPaths.includes(pathname)

	if (isActive) {
		return <span className="header__logo-link header__logo-link--active">{IMAGE}</span>
	}

	return (
		<Link className="header__logo-link" href={AppRoute.Main}>
			{IMAGE}
		</Link>
	)
}
