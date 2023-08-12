import { Header } from '../../components/header/header';
import { useDocumentTitle } from '../../hooks';
import { LoginForm } from './form';

export function LoginPage() {
	useDocumentTitle('Login');

	return (
		<div className="page page--gray page--login">
			<Header hideNavigation />
			<main className="page__main page__main--login">
				<div className="page__login-container container">
					<section className="login">
						<h1 className="login__title">Sign in</h1>
						<LoginForm />
					</section>
					<section className="locations locations--login locations--current">
						<div className="locations__item">
							<a className="locations__item-link" href="#">
								<span>Amsterdam</span>
							</a>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
