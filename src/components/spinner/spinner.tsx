import css from './spinner.module.css'

export const Spinner = () => (
	<div className={css.wrapper}>
		<svg
			aria-label="Content is loading."
			aria-live="assertive"
			className={css.spinner}
			height={66}
			role="alert"
			stroke="#4481c3"
			viewBox="0 0 66 66"
			width={66}
		>
			<circle className={css.path} cx={33} cy={33} fill="none" r={30} strokeLinecap="round" strokeWidth={6} />
		</svg>
	</div>
)
