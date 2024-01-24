import { Navigate, Outlet } from 'react-router-dom'

import { Spinner } from '../components/spinner/spinner'
import { AuthorizationStatus } from '../constants'
import { AppRoute } from '../constants'
import { useAppSelector } from '../hooks'
import { userSelectors } from '../store/slices/user'

const createAccessRoute = (accessStatus: AuthorizationStatus, navigateRoute: string) =>
	function AccessRoute() {
		const status = useAppSelector(userSelectors.status)
		if (status === AuthorizationStatus.Unknown) {
			return <Spinner />
		}
		if (status === accessStatus) {
			return <Outlet />
		}

		return <Navigate to={navigateRoute} />
	}

export const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login)
export const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Main)
