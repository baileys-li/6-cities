import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import type { FullOffer } from '../../types/offer';

import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../constants';
import { useDocumentTitle } from '../../hooks';
import { mockStore } from '../../mocks';
import { ReviewForm } from './review-form';

interface LoaderResponse {
	isAuthorized: boolean;
	offer: FullOffer;
}

export function OfferPage() {
	useDocumentTitle('Offer Example');

	const { isAuthorized, offer } = useLoaderData() as LoaderResponse;

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
								<b className="offer__price-value">€${offer.type}</b>
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
									<p className="offer__text" >
										{offer.description}
									</p>
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
								<ReviewForm />
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
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											alt="Place image"
											className="place-card__image"
											height={200}
											src="img/room.jpg"
											width={260}
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€80</b>
											<span className="place-card__price-text">
												/&nbsp;night
											</span>
										</div>
										<button
											className="place-card__bookmark-button place-card__bookmark-button--active button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												height={19}
												width={18}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">In bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Wood and stone place</a>
									</h2>
									<p className="place-card__type">Private room</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											alt="Place image"
											className="place-card__image"
											height={200}
											src="img/apartment-02.jpg"
											width={260}
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€132</b>
											<span className="place-card__price-text">
												/&nbsp;night
											</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												height={19}
												width={18}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Canal View Prinsengracht</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="place-card__mark">
									<span>Premium</span>
								</div>
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											alt="Place image"
											className="place-card__image"
											height={200}
											src="img/apartment-03.jpg"
											width={260}
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€180</b>
											<span className="place-card__price-text">
												/&nbsp;night
											</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												height={19}
												width={18}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '100%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Nice, cozy, warm big bed apartment</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export function loader({
	params,
}: LoaderFunctionArgs): LoaderResponse | Response {
	const id = params.id;

	if (id === undefined) {
		return new Response('Not found', { status: 404 });
	}
	const { auth, offers } = mockStore;

	const offer = offers.find((storeOffer) => storeOffer.id === id);

	if (offer === undefined) {
		return new Response('Not found', { status: 404 });
	}

	return {
		isAuthorized: auth === AuthorizationStatus.Auth,
		offer,
	};
}
