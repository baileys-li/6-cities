import type { ChangeEvent, HTMLAttributes } from 'react'

import { clsx } from 'clsx'

const OPTIONS = [
	{ label: 'perfect', value: 5 },
	{ label: 'good', value: 4 },
	{ label: 'not bad', value: 3 },
	{ label: 'badly', value: 2 },
	{ label: 'terribly', value: 1 }
] as const

type FormRatingProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
	disabled?: boolean
	setRating?: (value: number) => void
}

interface OptionProps {
	disabled: boolean
	label: string
	value: number
}

function Option({ disabled, label, value }: OptionProps) {
	const id = `${value}-stars`

	return (
		<>
			<input className="form__rating-input visually-hidden" defaultValue={value} disabled={disabled} id={id} name="rating" type="radio" />
			<label aria-label={label} className="reviews__rating-label form__rating-label" htmlFor={id} title={label}>
				<svg aria-hidden className="form__star-image" height={33} width={37}>
					<use xlinkHref="#icon-star" />
				</svg>
			</label>
		</>
	)
}

export function FormRating({ className, disabled = false, setRating }: FormRatingProps) {
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setRating?.(Number(event.target.value))
	}
	return (
		<div className={clsx('form__rating', className)} onChange={handleChange}>
			{OPTIONS.map(option => (
				<Option key={option.label} {...option} disabled={disabled} />
			))}
		</div>
	)
}
