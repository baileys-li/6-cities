import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthorizationStatus, TemporalData } from './constants';
import { AppRoute } from './constants/routes';
import { Page404 } from './pages/404';
import { PrivateRoute, PublicRoute } from './pages/AccessRoute';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { LoginPage } from './pages/login/login-page';
import { MainPage } from './pages/main/main-page';
import { OfferPage } from './pages/offer/offer-page';

export function App() {
	const authorizationStatus = AuthorizationStatus.Auth;
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<MainPage offersAmount={TemporalData.OfferAmount} />}
					path={AppRoute.Main}
				/>
				<Route
					element={
						<PrivateRoute status={authorizationStatus}>
							<FavoritesPage />
						</PrivateRoute>
					}
					path={AppRoute.Favorites}
				/>
				<Route
					element={
						<PublicRoute status={authorizationStatus}>
							<LoginPage />
						</PublicRoute>
					}
					path={AppRoute.Login}
				/>
				<Route element={<OfferPage />} path={AppRoute.Offer} />
				<Route element={<Page404 />} path="*" />
			</Routes>
		</BrowserRouter>
	);
}
