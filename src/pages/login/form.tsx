import type { FormEvent } from 'react';

import { useActionCreators } from '../../hooks';
import { userActions } from '../../store/slices/user';

type HTMLLoginForm = HTMLFormElement & {
	email: HTMLInputElement;
	password: HTMLInputElement;
}

export function LoginForm() {
	const {login} = useActionCreators(userActions);

	function handleSubmit(event: FormEvent<HTMLLoginForm>) {
		event.preventDefault();
		const form = event.currentTarget;

		login({
			email: form.email.value,
			password: form.password.value,
		});
	}
	return (
		<form className="login__form form" method="post" onSubmit={handleSubmit}>
			<div className="login__input-wrapper form__input-wrapper">
				<label className="visually-hidden">E-mail</label>
				<input
					className="login__input form__input"
					name="email"
					placeholder="Email"
					required
					type="email"
				/>
			</div>
			<div className="login__input-wrapper form__input-wrapper">
				<label className="visually-hidden">Password</label>
				<input
					className="login__input form__input"
					name="password"
					placeholder="Password"
					required
					type="password"
				/>
			</div>
			<button className="login__submit form__submit button" type="submit">
				Sign in
			</button>
		</form>
	);
}
