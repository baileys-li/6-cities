import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppRoute, CITIES } from './constants';
import { Page404 } from './pages/404/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage } from './pages/favorites';
import { LoginPage } from './pages/login/login-page';
import { MainPage, loadMainPageData } from './pages/main';
import { OfferLayout, OfferPage, loadOfferPageData } from './pages/offer';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Navigate to={`/${CITIES[0].id}`} />,
				index: true,
			},
			...CITIES.map(({ id, name }) => ({
				element: <MainPage city={name} />,
				loader: loadMainPageData,
				path: `/${id}`,
			})),
			{
				children: [
					{
						element: <Navigate to='/404 '/>,
						index: true,
					},
					{
						element: <OfferPage />,
						loader: loadOfferPageData,
						path: AppRoute.OfferId,
					},
				],
				element: <OfferLayout />,
				path: AppRoute.Offer,
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
		],
		errorElement: <Page404 />,
	},
]);
