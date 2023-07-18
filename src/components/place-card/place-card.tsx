import type { Dispatch, SetStateAction } from 'react';

import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import type { ServerOffer } from '../../types/offer';

import { Link } from '../link/link';

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
	setActive?: Dispatch<SetStateAction<null | string>>;
};

export function PlaceCard({
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
	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const favoriteClass = classNames(
		'place-card__bookmark-button',
		{
			'place-card__bookmark-button--active': isFavorite,
		},
		'button'
	);

	const href = `/offer/${id}`;

	function handleMouseEnter() {
		setActive!(id);
	}

	function onMouseLeave() {
		setActive!(null);
	}

	return (
		<article className="cities__card place-card" onMouseEnter={setActive && handleMouseEnter} onMouseLeave={setActive && onMouseLeave}>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}

			<div className="cities__image-wrapper place-card__image-wrapper">
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
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<button className={favoriteClass} type="button">
						<svg className="place-card__bookmark-icon" height={19} width={18}>
							<use xlinkHref="#icon-bookmark" />
						</svg>
						<span className="visually-hidden">{favoriteLabel}</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link href={href}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
}
