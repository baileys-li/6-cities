import { Navigate, Outlet } from 'react-router-dom';

import { AuthorizationStatus } from '../constants';
import { AppRoute } from '../constants/routes';

interface AccessRouteProps {
	status: AuthorizationStatus;
}


// eslint-disable-next-line react/display-name
const createAccessRoute = (accessStatus: AuthorizationStatus, navigateRoute: string) => ({ status}: AccessRouteProps) => {
	if (status === accessStatus) {
		return <Outlet />;
	}

	return <Navigate to={navigateRoute} />;
};

export const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);
export const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Main);
