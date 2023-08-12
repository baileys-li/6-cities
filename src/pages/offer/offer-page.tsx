import { Navigate, useLoaderData } from 'react-router-dom';

import type { OfferPageLoaderResponse } from './loader';

import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { Header } from '../../components/header/header';
import { Map } from '../../components/map/map';
import { PlaceCard } from '../../components/place-card/place-card';
import { PremiumMark } from '../../components/premium-mark/premium-mark';
import { Price } from '../../components/price/price';
import { Rating } from '../../components/rating/rating';
import { RequestStatus } from '../../constants';
import { useAppSelector, useDocumentTitle } from '../../hooks';
import { Features } from './features';
import { Gallery } from './gallery';
import { Goods } from './goods';
import { Host } from './host';
import { ReviewItem } from './review';
import { ReviewForm } from './review-form';

const enum Default {
	MaxGallery = 6,
}

export function OfferPage() {
	useDocumentTitle('Offer Example');

	const { isAuthorized } = useLoaderData() as OfferPageLoaderResponse;

	const offer = useAppSelector((state) => state.offer.info);
	const status = useAppSelector((state) => state.offer.status);
	const nearbyOffers = useAppSelector((state) => state.offer.nearby);

	if (status === RequestStatus.Loading) {
		return <div>Loading...</div>;
	}

	if (status === RequestStatus.Failed) {
		return <Navigate to='/404' />;
	}

	const {
		bedrooms,
		description,
		goods,
		host,
		images,
		isFavorite,
		isPremium,
		location,
		maxAdults,
		price,
		rating,
		title,
		type,
	} = offer!;

	return (
		<div className="page">
			<Header isAuthorized={isAuthorized} />
			<main className="page__main page__main--offer">
				<section className="offer">
					<Gallery images={images.slice(0, Default.MaxGallery)} title={title} />
					<div className="offer__container container">
						<div className="offer__wrapper">
							{isPremium && <PremiumMark bemBlock="offer" />}
							<div className="offer__name-wrapper">
								<h1 className="offer__name">{title}</h1>
								<FavoriteButton
									bemBlock="offer"
									isFavorite={isFavorite}
									width={31}
								/>
							</div>
							<Rating bemBlock="offer" rating={rating} showValue />
							<Features bedrooms={bedrooms} maxAdults={maxAdults} type={type} />
							<Price bemBlock="offer" price={price} />
							<Goods goods={goods} />
							<Host description={description} host={host} />
							<section className="offer__reviews reviews">
								<h2 className="reviews__title">
									Reviews · <span className="reviews__amount">1</span>
								</h2>
								<ul className="reviews__list">
									<ReviewItem
										comment="A quiet cozy and picturesque that hides behind a a river
										by the unique lightness of Amsterdam. The building is
										green and from 18th century."
										user={{
											avatarUrl: 'img/avatar-max.jpg',
											isPro: false,
											name: 'Max',
										}}
										date="2019-04-24"
										rating={4}
									/>
								</ul>
								{isAuthorized && <ReviewForm />}
							</section>
						</div>
					</div>
					<Map
						className="offer__map"
						location={location}
						offers={nearbyOffers}
					/>
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">
							Other places in the neighbourhood
						</h2>
						<div className="near-places__list places__list">
							{nearbyOffers.map((nearbyOffer) => (
								<PlaceCard
									extraBemBlock="near-places"
									key={nearbyOffer.id}
									{...nearbyOffer}
								/>
							))}
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
