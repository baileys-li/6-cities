import type { Dispatch, SetStateAction } from 'react';

import { clsx } from 'clsx';

import type { ServerOffer } from '../../types/offer';

import { FavoriteButton } from '../favorite-button/favorite-button';
import { Link } from '../link/link';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Price } from '../price/price';
import { Rating } from '../rating/rating';

type OfferCardProps = Pick<
	ServerOffer,
	| 'id'
	| 'isFavorite'
	| 'isPremium'
	| 'previewImage'
	| 'price'
	| 'rating'
	| 'title'
	| 'type'
> & {
	extraBemBlock?: string;
	setActive?: Dispatch<SetStateAction<null | string>>;
};

export function PlaceCard({
	extraBemBlock,
	id,
	isFavorite,
	isPremium,
	previewImage,
	price,
	rating,
	setActive,
	title,
	type,
}: OfferCardProps) {
	const href = `/offer/${id}`;

	function handleMouseEnter() {
		setActive!(id);
	}

	function onMouseLeave() {
		setActive!(null);
	}

	return (
		<article
			className={clsx('place-card', {
				[`${extraBemBlock}__card`]: extraBemBlock,
			})}
			onMouseEnter={setActive && handleMouseEnter}
			onMouseLeave={setActive && onMouseLeave}
		>
			{isPremium && <PremiumMark bemBlock="place-card" />}
			<div
				className={clsx('place-card__image-wrapper', {
					[`${extraBemBlock}__image-wrapper`]: extraBemBlock,
				})}
			>
				<Link href={href}>
					<img
						alt="Place image"
						className="place-card__image"
						height={200}
						src={previewImage}
						width={260}
					/>
				</Link>
			</div>
			<div
				className={clsx('place-card__info', {
					[`${extraBemBlock}__card-info`]: extraBemBlock,
				})}
			>
				<div className="place-card__price-wrapper">
					<Price bemBlock="place-card" price={price} showSlash />
					<FavoriteButton isFavorite={isFavorite} offerId={id} />
				</div>
				<Rating bemBlock="place-card" rating={rating} />
				<h2 className="place-card__name">
					<Link href={href}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
}
