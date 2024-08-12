import type { PlaceCardOfferKeys, PlaceCardOwnProps } from './place-card'

import { PlaceCard } from './place-card'

export function PlaceList({
	extraBemBlock = 'cities',
	imageWidth = 260,
	offers,
	onMouseEnter,
	onMouseLeave
}: PlaceCardOwnProps & {
	offers: PlaceCardOfferKeys[]
}) {
	return offers.map(({ id, isFavorite, isPremium, previewImage, price, rating, title, type }) => (
		<PlaceCard
			extraBemBlock={extraBemBlock}
			id={id}
			imageWidth={imageWidth}
			isFavorite={isFavorite}
			isPremium={isPremium}
			key={id}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			previewImage={previewImage}
			price={price}
			rating={rating}
			title={title}
			type={type}
		/>
	))
}
