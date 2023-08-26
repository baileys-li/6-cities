import { Footer } from '../../components/footer/footer';
import { Layout } from '../../components/layout';
import { Link } from '../../components/link/link';
import { AppRoute } from '../../constants';
import css from './404.module.css';

export const Page404 = () => (
	<Layout className="page page--favorites-empty" title="Not Found">
		<main className={css.page}>
			<h1>Page Not found</h1>
			<Link className="button form__submit" href={AppRoute.Main}>
				Go to Main page
			</Link>
		</main>
		<Footer />
	</Layout>
);
