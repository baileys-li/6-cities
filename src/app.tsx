import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CITIES } from './constants';
import { AppRoute } from './constants/routes';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage } from './pages/favorites';
import { LoginPage } from './pages/login/login-page';
import { MainPage, loadMainPageData } from './pages/main';
import { OfferPage, loadOfferPageData } from './pages/offer/';

const router = createBrowserRouter([
	{
		children: [
			{
				element: <Navigate to={`/${CITIES[0].id}`} />,
				path: AppRoute.Main,
			},
			{
				element: <MainPage />,
				loader: loadMainPageData,
				path: AppRoute.City,
			},
			{
				children: [
					{
						element: <FavoritesPage />,
						index: true,
					},
				],
				element: <PrivateRoute />,
				path: AppRoute.Favorites,
			},
			{
				children: [
					{
						element: <LoginPage />,
						index: true,
					},
				],
				element: <PublicRoute />,
				path: AppRoute.Login,
			},
			{
				element: <OfferPage />,
				loader: loadOfferPageData,
				path: AppRoute.Offer,
			},
			{
				element: <Page404 />,
				path: AppRoute.NotFound,
			},
		],
		errorElement: <Page404 />,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
