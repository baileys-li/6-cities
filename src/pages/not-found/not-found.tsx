import { Footer } from '../../components/footer/footer';
import { Layout } from '../../components/layout';
import { Link } from '../../components/link/link';
import { AppRoute } from '../../constants';
import css from './not-found.module.css';

export const NotFound = () => (
	<Layout className="page page--favorites-empty" title="Not Found">
		<main className={css.page}>
			<h1>404: Page Not found</h1>
			<Link className="button form__submit" href={AppRoute.Main}>
				Go to Main page
			</Link>
		</main>
		<Footer />
	</Layout>
);
