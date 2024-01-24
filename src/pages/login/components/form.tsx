import { Form, useNavigation } from 'react-router-dom'

export function LoginForm() {
	const { state } = useNavigation()
	return (
		<Form action="/login" className="login__form form" method="post">
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
				<input className="login__input form__input" name="password" pattern="^(?=.*[a-zA-Z])(?=.*\d).+$" placeholder="Password" required type="password" />
			</div>
			<button className="login__submit form__submit button" disabled={state !== 'idle'} type="submit">
				Sign in
			</button>
		</Form>
	)
}
