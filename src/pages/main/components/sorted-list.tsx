import type { MouseEvent, ReactNode } from 'react'

import { useCallback, useMemo, useState } from 'react'

import type { ServerOffer } from '../../../types/offer'

import { PlaceCardSkeleton, PlaceList } from '../../../components/place-card'
import { useActionCreators } from '../../../hooks'
import { offersActions } from '../../../store/slices/offers'
import { SortOption } from '../constants'
import { SortForm } from './sort'

interface ListWithMapProps {
	children: ReactNode
	isLoading?: boolean
	offers: ServerOffer[]
}

const enum Default {
	SkeletonsCount = 10
}

const SKELETONS = Array.from({ length: Default.SkeletonsCount }, (_, index) => <PlaceCardSkeleton extraBemBlock="cities" key={index} />)

export function SortedList({ children, isLoading = false, offers }: ListWithMapProps) {
	const { setActiveOffer } = useActionCreators(offersActions)
	const [activeSort, setSort] = useState(SortOption.Popular)

	const handleMouseEnter = useCallback(
		(evt: MouseEvent<HTMLDivElement>) => {
			const target = evt.currentTarget
			const id = target.dataset.id

			if (id) {
				setActiveOffer(id)
			}
		},
		[setActiveOffer]
	)

	const handleMouseLeave = useCallback(() => {
		setActiveOffer('')
	}, [setActiveOffer])

	const sortedOffers = useMemo(() => {
		switch (activeSort) {
			case SortOption.PriceLowToHigh:
				return [...offers].sort((a, b) => a.price - b.price)
			case SortOption.PriceHighToLow:
				return [...offers].sort((a, b) => b.price - a.price)
			case SortOption.TopRatedFirst:
				return [...offers].sort((a, b) => b.rating - a.rating)
			default:
				return offers
		}
	}, [offers, activeSort])

	return (
		<section className="cities__places places">
			<h2 className="visually-hidden">Places</h2>
			{children}
			<SortForm current={activeSort} setter={setSort} />
			<div className="cities__places-list places__list tabs__content">
				{isLoading && SKELETONS}
				<PlaceList offers={sortedOffers} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
			</div>
		</section>
	)
}
