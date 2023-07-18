import { faker } from '@faker-js/faker';
import classNames from 'classnames';

import { Header } from '../../components/header/header';
import { PlaceCard } from '../../components/place-card/place-card';
import { CITIES } from '../../constants';
import { useDocumentTitle } from '../../hooks';
import { mockOfferItem } from '../../mocks/offer';

const enum Default {
	Amount = 0,
}
export type MainPageProps = {
	offersAmount?: number;
};
export function MainPage({ offersAmount = Default.Amount }: MainPageProps) {
	const offers = Array.from({ length: offersAmount }, mockOfferItem);
	useDocumentTitle(`${offersAmount} places to stay in Amsterdam`);

	return (
		<div className="page page--gray page--main">
			<Header isAuthorized={faker.datatype.boolean()} />
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
