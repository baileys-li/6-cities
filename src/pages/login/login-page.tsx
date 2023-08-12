import { Layout } from '../../components/layout';
import { Link } from '../../components/link/link';
import { LoginForm } from './form';

export const LoginPage = () => (
	<Layout className="page page--gray page--login" hideNavigation title="Login">
		<main className="page__main page__main--login">
			<div className="page__login-container container">
				<section className="login">
					<h1 className="login__title">Sign in</h1>
					<LoginForm />
				</section>
				<section className="locations locations--login locations--current">
					<div className="locations__item">
						<Link className="locations__item-link" href="/amsterdam">
							<span>Amsterdam</span>
						</Link>
					</div>
				</section>
			</div>
		</main>
	</Layout>
);
