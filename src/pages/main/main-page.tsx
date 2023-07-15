import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { PlaceCard } from '../../components/place-card/place-card';
import { CITIES } from '../../constants';
import { AppRoute } from '../../constants/routes';
import { mockOfferItem } from '../../mocks/offer';

const enum Default {
	Amount = 0,
}
export type MainPageProps = {
	offersAmount?: number;
};
export function MainPage({ offersAmount = Default.Amount }: MainPageProps) {
	const offers = Array.from({ length: offersAmount }, mockOfferItem);
	return (
		<div className="page page--gray page--main">
			<Helmet>
				<title>{`6 cities: ${offersAmount} places to stay in Amsterdam`}</title>
			</Helmet>
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__left">
							<a className="header__logo-link header__logo-link--active">
								<img
									alt="6 cities logo"
									className="header__logo"
									height={41}
									src="img/logo.svg"
									width={81}
								/>
							</a>
						</div>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-item user">
									<Link
										className="header__nav-link header__nav-link--profile"
										to={AppRoute.Favorites}
									>
										<div className="header__avatar-wrapper user__avatar-wrapper"></div>
										<span className="header__user-name user__name">
											Oliver.conner@gmail.com
										</span>
										<span className="header__favorite-count">3</span>
									</Link>
								</li>
								<li className="header__nav-item">
									<a className="header__nav-link" href="#">
										<span className="header__signout">Sign out</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{CITIES.map((city) => (
								<li className="locations__item" key={city}>
									<a
										className={classNames(
											'locations__item-link',
											{
												'tabs__item--active': city === 'Amsterdam',
											},
											'tabs__item'
										)}
										href="#"
									>
										<span>{city}</span>
									</a>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">
								{offersAmount} places to stay in Amsterdam
							</b>
							<form action="#" className="places__sorting" method="get">
								<span className="places__sorting-caption">Sort by</span>
								<span className="places__sorting-type" tabIndex={0}>
									Popular
									<svg className="places__sorting-arrow" height={4} width={7}>
										<use xlinkHref="#icon-arrow-select" />
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li
										className="places__option places__option--active"
										tabIndex={0}
									>
										Popular
									</li>
									<li className="places__option" tabIndex={0}>
										Price: low to high
									</li>
									<li className="places__option" tabIndex={0}>
										Price: high to low
									</li>
									<li className="places__option" tabIndex={0}>
										Top rated first
									</li>
								</ul>
							</form>
							<div className="cities__places-list places__list tabs__content">
								{offers.map((offer) => (
									<PlaceCard {...offer} key={offer.id} />
								))}
							</div>
						</section>
						<div className="cities__right-section">
							<section className="cities__map map" />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
