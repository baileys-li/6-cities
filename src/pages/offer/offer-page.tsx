import { useLoaderData } from 'react-router-dom';

import type { OfferPageLoaderResponse } from './loader';

import { Header } from '../../components/header/header';
import { PlaceCard } from '../../components/place-card/place-card';
import { useDocumentTitle } from '../../hooks';
import { ReviewForm } from './review-form';

export function OfferPage() {
	useDocumentTitle('Offer Example');

	const { isAuthorized, offer } = useLoaderData() as OfferPageLoaderResponse;

	return (
		<div className="page">
			<Header isAuthorized={isAuthorized} />
			<main className="page__main page__main--offer">
				<section className="offer">
					<div className="offer__gallery-container container">
						<div className="offer__gallery">
							{offer.images.map((image) => (
								<div className="offer__image-wrapper" key={image}>
									<img alt={offer.title} className="offer__image" src={image} />
								</div>
							))}
						</div>
					</div>
					<div className="offer__container container">
						<div className="offer__wrapper">
							{offer.isPremium && (
								<div className="offer__mark">
									<span>Premium</span>
								</div>
							)}

							<div className="offer__name-wrapper">
								<h1 className="offer__name">{offer.title}</h1>
								<button className="offer__bookmark-button button" type="button">
									<svg className="offer__bookmark-icon" height={33} width={31}>
										<use xlinkHref="#icon-bookmark" />
									</svg>
									<span className="visually-hidden">To bookmarks</span>
								</button>
							</div>
							<div className="offer__rating rating">
								<div className="offer__stars rating__stars">
									<span style={{ width: `${offer.rating * 20}%` }} />
									<span className="visually-hidden">Rating</span>
								</div>
								<span className="offer__rating-value rating__value">
									{offer.rating.toFixed(1)}
								</span>
							</div>
							<ul className="offer__features">
								<li className="offer__feature offer__feature--entire">
									{offer.type}
								</li>
								<li className="offer__feature offer__feature--bedrooms">
									{offer.bedrooms} Bedrooms
								</li>
								<li className="offer__feature offer__feature--adults">
									Max {offer.maxAdults} adults
								</li>
							</ul>
							<div className="offer__price">
								<b className="offer__price-value">€${offer.price}</b>
								<span className="offer__price-text">&nbsp;night</span>
							</div>
							<div className="offer__inside">
								<h2 className="offer__inside-title">What&apos;s inside</h2>
								<ul className="offer__inside-list">
									{offer.goods.map((good) => (
										<li className="offer__inside-item" key={good}>
											{good}
										</li>
									))}
								</ul>
							</div>
							<div className="offer__host">
								<h2 className="offer__host-title">Meet the host</h2>
								<div className="offer__host-user user">
									<div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
										<img
											alt="Host avatar"
											className="offer__avatar user__avatar"
											height={74}
											src={offer.host.avatarUrl}
											width={74}
										/>
									</div>
									<span className="offer__user-name">{offer.host.name}</span>
									{offer.host.isPro && (
										<span className="offer__user-status">Pro</span>
									)}
								</div>
								<div className="offer__description">
									<p className="offer__text">{offer.description}</p>
								</div>
							</div>
							<section className="offer__reviews reviews">
								<h2 className="reviews__title">
									Reviews · <span className="reviews__amount">1</span>
								</h2>
								<ul className="reviews__list">
									<li className="reviews__item">
										<div className="reviews__user user">
											<div className="reviews__avatar-wrapper user__avatar-wrapper">
												<img
													alt="Reviews avatar"
													className="reviews__avatar user__avatar"
													height={54}
													src="img/avatar-max.jpg"
													width={54}
												/>
											</div>
											<span className="reviews__user-name">Max</span>
										</div>
										<div className="reviews__info">
											<div className="reviews__rating rating">
												<div className="reviews__stars rating__stars">
													<span style={{ width: '80%' }} />
													<span className="visually-hidden">Rating</span>
												</div>
											</div>
											<p className="reviews__text">
												A quiet cozy and picturesque that hides behind a a river
												by the unique lightness of Amsterdam. The building is
												green and from 18th century.
											</p>
											<time className="reviews__time" dateTime="2019-04-24">
												April 2019
											</time>
										</div>
									</li>
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
								id='1'
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
								id='2'
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
								id='3'
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
