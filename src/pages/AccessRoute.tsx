import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '../components/spinner/spinner';
import { AuthorizationStatus } from '../constants';
import { AppRoute } from '../constants/routes';
import { useAppSelector } from '../hooks';

// eslint-disable-next-line react/display-name
const createAccessRoute = (accessStatus: AuthorizationStatus, navigateRoute: string) => () => {
	const status = useAppSelector((state) => state.user.status);
	if (status === AuthorizationStatus.Unknown) {
		return <Spinner />;
	}
	if (status === accessStatus) {
		return <Outlet />;
	}

	return <Navigate to={navigateRoute} />;
};

export const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);
export const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Main);
