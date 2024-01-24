import { memo } from 'react'

import type { CityName } from '../../../types/city'

import { useDocumentTitle } from '../../../hooks'
import { pluralIntl } from '../../../utils/intl'

interface HeadlineProps {
	city: CityName
	count?: number
}

const getPlaceWord = (count: number) => {
	const pluralKey = pluralIntl.select(count)
	if (pluralKey === 'one') {
		return `${count} place to stay`
	}
	return `${count} places to stay`
}

const Headline_ = ({ city, count }: HeadlineProps) => {
	const headline = `${count ? getPlaceWord(count) : 'Loading offers'} in ${city}`

	useDocumentTitle(headline)

	return <b className="places__found">{headline}</b>
}

export const Headline = memo(Headline_)
