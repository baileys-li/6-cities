import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { AppRoute } from './constants/routes';
import { mockStore } from './mocks';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { LoginPage } from './pages/login/login-page';
import { loader as AllOfferLoader, MainPage } from './pages/main/main-page';
import { loader as OfferLoader, OfferPage } from './pages/offer/offer-page';


const router = createBrowserRouter([
	{
		element: <MainPage />,
		loader: AllOfferLoader,
		path: AppRoute.Main
	},

	{
		children: [
			{
				element: <FavoritesPage />,
				index: true,
			},
		],
		element: <PrivateRoute status={mockStore.auth} />,
		path: AppRoute.Favorites,
	},

	{
		children: [
			{
				element: <LoginPage />,
				index: true,
			},
		],
		element: <PublicRoute status={mockStore.auth} />,
		path: AppRoute.Login,
	},

	{
		element: <OfferPage />,
		errorElement: <Page404 />,
		loader: OfferLoader,
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
