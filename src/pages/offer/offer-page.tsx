import { useLoaderData } from 'react-router-dom';

import type { OfferPageLoaderResponse } from './loader';

import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { Header } from '../../components/header/header';
import { PlaceCard } from '../../components/place-card/place-card';
import { PremiumMark } from '../../components/premium-mark/premium-mark';
import { Price } from '../../components/price/price';
import { Rating } from '../../components/rating/rating';
import { useDocumentTitle } from '../../hooks';
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

	const { isAuthorized, offer } = useLoaderData() as OfferPageLoaderResponse;

	const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, rating, title, type} = offer;

	return (
		<div className="page">
			<Header isAuthorized={isAuthorized} />
			<main className="page__main page__main--offer">
				<section className="offer">
					<Gallery
						images={images.slice(0, Default.MaxGallery)}
						title={title}
					/>
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
							<Rating bemBlock='offer' rating={rating} showValue />
							<Features bedrooms={bedrooms} maxAdults={maxAdults} type={type} />
							<Price bemBlock="offer" price={offer.price} />
							<Goods goods={goods} />
							<Host description={description} host={host} />
							<section className="offer__reviews reviews">
								<h2 className="reviews__title">
									Reviews · <span className="reviews__amount">1</span>
								</h2>
								<ul className="reviews__list">
									<ReviewItem
										comment='A quiet cozy and picturesque that hides behind a a river
										by the unique lightness of Amsterdam. The building is
										green and from 18th century.'
										user={{
											avatarUrl: 'img/avatar-max.jpg',
											isPro: false,
											name: 'Max'
										}}
										date='2019-04-24'
										rating={4}
									/>
								</ul>
								{isAuthorized && <ReviewForm />}
							</section>
						</div>
					</div>
					<section className="offer__map map" />
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">
							Other places in the neighbourhood
						</h2>
						<div className="near-places__list places__list">
							<PlaceCard
								extraBemBlock="near-places"
								id="1"
								isFavorite
								isPremium={false}
								previewImage="img/room.jpg"
								price={80}
								rating={4}
								title="Wood and stone place"
								type="Private room"
							/>
							<PlaceCard
								extraBemBlock="near-places"
								id="2"
								isFavorite={false}
								isPremium={false}
								previewImage="img/apartment-02.jpg"
								price={132}
								rating={4}
								title="Canal View Prinsengracht"
								type="Apartment"
							/>
							<PlaceCard
								extraBemBlock="near-places"
								id="3"
								isFavorite
								isPremium
								previewImage="img/apartment-03.jpg"
								price={180}
								rating={5}
								title="Nice, cozy, warm big bed apartment"
								type="Apartment"
							/>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
