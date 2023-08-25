import type { FormEvent } from 'react';

import { toast } from 'react-hot-toast';

import { useActionCreators } from '../../../hooks';
import { userActions } from '../../../store/slices/user';

type HTMLLoginForm = HTMLFormElement & {
	email: HTMLInputElement;
	password: HTMLInputElement;
};

export function LoginForm() {
	const { login } = useActionCreators(userActions);

	function handleSubmit(event: FormEvent<HTMLLoginForm>) {
		event.preventDefault();
		const form = event.currentTarget;

		toast.promise(
			login({
				email: form.email.value,
				password: form.password.value,
			}).unwrap(),
			{
				error: <b>Failed.</b>,
				loading: 'Loging...',
				success: <b>Successed login!</b>,
			}
		);
	}
	return (
		<form className="login__form form" method="post" onSubmit={handleSubmit}>
			<div className="login__input-wrapper form__input-wrapper">
				<label className="visually-hidden">E-mail</label>
				<input
					className="login__input form__input"
					name="email"
					pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
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
					pattern='^(?=.*[a-zA-Z])(?=.*\d).+$'
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
