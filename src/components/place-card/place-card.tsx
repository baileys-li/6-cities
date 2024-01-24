import { clsx } from 'clsx'
import { memo } from 'react'

import type { ServerOffer } from '../../types/offer'

import { AppRoute } from '../../constants'
import { capitalize } from '../../utils/case'
import { fetchOffer } from '../../utils/load-offfer'
import { FavoriteButton } from '../favorite-button/favorite-button'
import { Link } from '../link/link'
import { PremiumMark } from '../premium-mark/premium-mark'
import { Price } from '../price/price'
import { Rating } from '../rating/rating'

type PlaceCardOfferKeys = Pick<ServerOffer, 'id' | 'isFavorite' | 'isPremium' | 'previewImage' | 'price' | 'rating' | 'title' | 'type'>

interface PlaceCardOwnProps {
	extraBemBlock?: string
	imageWidth?: number
	setActive?: (id: ServerOffer['id'] | null) => void
}

type OfferCardProps = PlaceCardOfferKeys & PlaceCardOwnProps

const scrollTop = () => scrollTo({ behavior: 'smooth', top: 0 })

function PlaceCard_({ extraBemBlock, id, imageWidth = 260, isFavorite, isPremium, previewImage, price, rating, setActive, title, type }: OfferCardProps) {
	const href = `${AppRoute.Offer}/${id}`

	function handleMouseEnter() {
		setActive?.(id)
		fetchOffer(id)
	}

	function onMouseLeave() {
		setActive!(null)
	}

	return (
		<article
			className={clsx('place-card', {
				[`${extraBemBlock}__card`]: extraBemBlock
			})}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={setActive && onMouseLeave}
		>
			{isPremium && <PremiumMark bemBlock="place-card" />}
			<div
				className={clsx('place-card__image-wrapper', {
					[`${extraBemBlock}__image-wrapper`]: extraBemBlock
				})}
			>
				<Link href={href} onClick={scrollTop}>
					<img alt="Place image" className="place-card__image" height={imageWidth / 1.3} src={previewImage} width={imageWidth} />
				</Link>
			</div>
			<div
				className={clsx('place-card__info', {
					[`${extraBemBlock}__card-info`]: extraBemBlock
				})}
			>
				<div className="place-card__price-wrapper">
					<Price bemBlock="place-card" price={price} showSlash />
					<FavoriteButton isFavorite={isFavorite} offerId={id} />
				</div>
				<Rating bemBlock="place-card" rating={rating} />
				<h2 className="place-card__name">
					<Link href={href} onClick={scrollTop}>
						{title}
					</Link>
				</h2>
				<p className="place-card__type">{capitalize(type)}</p>
			</div>
		</article>
	)
}

export const PlaceCard = memo(PlaceCard_)
export type { PlaceCardOfferKeys, PlaceCardOwnProps }
