import type { MainPageProps } from './pages/main/main-page';

import { MainPage } from './pages/main/main-page';

type AppProps = MainPageProps;

export function App({offersAmount}: AppProps) {
	return <MainPage offersAmount={offersAmount}/>;
}
