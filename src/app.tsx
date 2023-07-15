import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TemporalData } from './constants';
import { AppRoute } from './constants/routes';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { LoginPage } from './pages/login/login-page';
import { MainPage } from './pages/main/main-page';
import { OfferPage } from './pages/offer/offer-page';

export function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route
						element={<MainPage offersAmount={TemporalData.OfferAmount} />}
						path={AppRoute.Main}
					/>
					<Route element={<FavoritesPage />} path={AppRoute.Favorites} />
					<Route element={<LoginPage />} path={AppRoute.Login} />
					<Route element={<OfferPage />} path={AppRoute.Offer} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}
