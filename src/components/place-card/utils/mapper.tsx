import type { PlaceCardOfferKeys, PlaceCardOwnProps } from '../place-card'

import { PlaceCard } from '../place-card'

export const createMapper =
	({ extraBemBlock = 'cities', imageWidth = 260, setActive }: PlaceCardOwnProps) =>
	// eslint-disable-next-line react/display-name
	({ id, isFavorite, isPremium, previewImage, price, rating, title, type }: PlaceCardOfferKeys) => (
		<PlaceCard
			extraBemBlock={extraBemBlock}
			id={id}
			imageWidth={imageWidth}
			isFavorite={isFavorite}
			isPremium={isPremium}
			key={id}
			previewImage={previewImage}
			price={price}
			rating={rating}
			setActive={setActive}
			title={title}
			type={type}
		/>
	)
