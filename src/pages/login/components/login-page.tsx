import { Layout } from '../../../components/layout'
import { LoginForm } from './form'
import { RandomCity } from './radom-city'

export const LoginPage = () => (
	<Layout className="page page--gray page--login" hideNavigation title="Login">
		<main className="page__main page__main--login">
			<div className="page__login-container container">
				<section className="login">
					<h1 className="login__title">Sign in</h1>
					<LoginForm />
				</section>
				<RandomCity />
			</div>
		</main>
	</Layout>
)
