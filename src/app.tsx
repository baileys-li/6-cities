import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoute } from './constants/routes';
import { mockStore } from './mocks';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { loader as FavoritesLoader, FavoritesPage } from './pages/favorites/favorites-page';
import { LoginPage } from './pages/login/login-page';
import { MainPage, loadMainPageData } from './pages/main';
import { loader as OfferLoader, OfferPage } from './pages/offer/offer-page';

const router = createBrowserRouter([
	{
		children: [
			{
				element: <MainPage />,
				loader: loadMainPageData,
				path: AppRoute.Main,
			},
			{
				children: [
					{
						element: <FavoritesPage />,
						index: true,
						loader: FavoritesLoader
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
				loader: OfferLoader,
				path: AppRoute.Offer,
			},
		],
		errorElement: <Page404 />,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
