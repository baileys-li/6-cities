import { memo } from 'react'

interface RatingProps {
	bemBlock: 'offer' | 'place-card' | 'reviews'
	rating: number
	showValue?: boolean
}
const Rating_ = ({ bemBlock, rating, showValue = false }: RatingProps) => (
	<div className={`${bemBlock}__rating rating`}>
		<div className={`${bemBlock}__stars rating__stars`}>
			<span style={{ width: `${Math.round(rating) * 20}%` }} />
			<span className="visually-hidden">Rating</span>
		</div>
		{showValue && <span className={`${bemBlock}__rating-value rating__value`}>{rating.toFixed(1)}</span>}
	</div>
)

export const Rating = memo(Rating_)
