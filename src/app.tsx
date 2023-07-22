import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoute } from './constants/routes';
import { mockStore } from './mocks';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage, loadFavoriteData } from './pages/favorites';
import { LoginPage } from './pages/login/login-page';
import { MainPage, loadMainPageData } from './pages/main';
import { OfferPage, loadOfferPageData } from './pages/offer/';

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
						loader: loadFavoriteData,
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
				loader: loadOfferPageData,
				path: AppRoute.Offer,
			},
		],
		errorElement: <Page404 />,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
