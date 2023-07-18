import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { AppRoute } from './constants/routes';
import { mockAuthStatus } from './mocks/auth';
import { mockOffers } from './mocks/offer';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { LoginPage } from './pages/login/login-page';
import { MainPage } from './pages/main/main-page';
import { OfferPage } from './pages/offer/offer-page';

const authorizationStatus = mockAuthStatus();

const mockedOffers = mockOffers();

const router = createBrowserRouter([
	{
		element: <MainPage offers={mockedOffers} />,
		path: AppRoute.Main,
	},

	{
		children: [
			{
				element: <FavoritesPage />,
				index: true,
			},
		],
		element: <PrivateRoute status={authorizationStatus} />,
		path: AppRoute.Favorites,
	},

	{
		children: [
			{
				element: <LoginPage />,
				index: true,
			},
		],
		element: <PublicRoute status={authorizationStatus} />,
		path: AppRoute.Login,
	},

	{
		element: <OfferPage />,
		path: AppRoute.Offer,
	},
	{
		element: <Page404 />,
		path: '*',
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
