import { clsx } from 'clsx'
import Skeleton from 'react-loading-skeleton'

import { FavoriteButton } from '../favorite-button/favorite-button'
import { Rating } from '../rating/rating'

interface OfferCardProps {
	extraBemBlock?: string
	imageWidth?: number
}

export function PlaceCardSkeleton({ extraBemBlock, imageWidth = 260 }: OfferCardProps) {
	return (
		<article
			className={clsx('place-card', {
				[`${extraBemBlock}__card`]: extraBemBlock
			})}
		>
			<div
				className={clsx('place-card__image-wrapper', {
					[`${extraBemBlock}__image-wrapper`]: extraBemBlock
				})}
			>
				<Skeleton className="place-card__image" height={imageWidth / 1.3} width={imageWidth} />
			</div>

			<div
				className={clsx('place-card__info', {
					[`${extraBemBlock}__card-info`]: extraBemBlock
				})}
			>
				<div className="place-card__price-wrapper">
					<Skeleton className="place-card__price" height={'1em'} width={'6em'} />
					<FavoriteButton offerId={''} />
				</div>
				<Rating bemBlock="place-card" rating={0} />
				<Skeleton className="place-card__name" height={'1em'} width={'6em'} />
				<Skeleton className="place-card__type" height={'0.8em'} width={'6em'} />
			</div>
		</article>
	)
}
