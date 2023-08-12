import { Layout } from '../components/layout';
import { Link } from '../components/link/link';
import { AppRoute } from '../constants/routes';

export const Page404 = () => (
	<Layout className="page page--favorites-empty" title='Not Found'>
		<main
			style={{
				display: 'grid',
				placeItems: 'center',
			}}
			className="page__main page__main--favorites page__main--favorites-empty"
		>
			<h1>Page Not found</h1>
		</main>
		<footer className="footer">
			<Link className="footer__logo-link" href={AppRoute.Main}>
				<img
					alt="6 cities logo"
					className="footer__logo"
					height={33}
					src="img/logo.svg"
					width={64}
				/>
			</Link>
		</footer>
	</Layout>
);
