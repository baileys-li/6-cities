import { clsx } from 'clsx';
import { memo } from 'react';

import type { ServerOffer } from '../../types/offer';

import { capitalize } from '../../utils/case';
import { prefetchOffer } from '../../utils/load-offfer';
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
	imageWidth?: number;
	setActive?: (id: ServerOffer['id'] | null) => void;
};

function PlaceCard_({
	extraBemBlock,
	id,
	imageWidth = 260,
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
		setActive?.(id);
		prefetchOffer(id);
	}

	function onMouseLeave() {
		setActive!(null);
	}

	return (
		<article
			className={clsx('place-card', {
				[`${extraBemBlock}__card`]: extraBemBlock,
			})}
			onMouseEnter={handleMouseEnter}
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
						height={imageWidth / 1.3}
						src={previewImage}
						width={imageWidth}
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
				<p className="place-card__type">{capitalize(type)}</p>
			</div>
		</article>
	);
}

export const PlaceCard = memo(PlaceCard_);
