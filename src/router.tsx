import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppRoute, CITIES } from './constants';
import { PrivateRoute, PublicRoute } from './pages/access-route';
import { FavoritesPage } from './pages/favorites';
import { LoginPage, handleLogin } from './pages/login';
import { MainPage, loadMainPageData } from './pages/main';
import { NotFound } from './pages/not-found/not-found';
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
						element: <Navigate to="/404 " />,
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
						path: AppRoute.Favorites,
					},
				],
				element: <PrivateRoute />,
			},
			{
				children: [
					{
						action: handleLogin,
						element: <LoginPage />,
						index: true,
						path: AppRoute.Login,
					},
				],
				element: <PublicRoute />,
			},
		],
		errorElement: <NotFound />,
	},
]);
