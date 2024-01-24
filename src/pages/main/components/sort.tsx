import { clsx } from 'clsx'
import { memo } from 'react'

import type { SortOption } from '../constants'

import { useBoolean } from '../../../hooks'
import { SORT_OPTIONS } from '../constants'

interface SortFormProps {
	current: SortOption
	setter: (option: SortOption) => void
}

function SortForm_({ current, setter }: SortFormProps) {
	const { isOn, toggle } = useBoolean(false)
	return (
		<form action="#" className="places__sorting" method="get" onClick={toggle}>
			<span className="places__sorting-caption">Sort by </span>
			<span className="places__sorting-type" tabIndex={0}>
				{SORT_OPTIONS[current]}
				<svg className="places__sorting-arrow" height={4} width={7}>
					<use xlinkHref="#icon-arrow-select" />
				</svg>
			</span>
			<ul
				className={clsx('places__options', 'places__options--custom', {
					'places__options--opened': isOn
				})}
			>
				{SORT_OPTIONS.map((option, index) => (
					<li
						className={clsx('places__option', {
							'places__option--active': (index as SortOption) === current
						})}
						key={option}
						onClick={() => setter(index)}
						tabIndex={0}
					>
						{option}
					</li>
				))}
			</ul>
		</form>
	)
}

export const SortForm = memo(SortForm_)
