import classNames from 'classnames';
import { Navigate, useParams } from 'react-router-dom';

import { Header } from '../../components/header/header';
import { Link } from '../../components/link/link';
import { CITIES } from '../../constants';
import { useAppSelector } from '../../hooks';
import { EmptySection } from './empty-section';
import { ListWithMap } from './list-with-map';

export function MainPage() {
	const { city } = useParams();
	const offers = useAppSelector((state) => state.offers.items);

	if (city === undefined) {
		return <Navigate to={`/${CITIES[0].id}`} />;
	}

	const cityInfo = CITIES.find(({ id }) => id === city);

	if (cityInfo === undefined) {
		return <Navigate to="/404" />;
	}

	const filteredOffers = offers.filter(({ city: { name } }) => name === cityInfo.name);
	const hasOffers = filteredOffers.length > 0;

	return (
		<div
			className={classNames('page page--gray page--main', {
				'page__main--index-empty': !hasOffers,
			})}
		>
			<Header />
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{CITIES.map(({ id, name }) => (
								<li className="locations__item" key={id}>
									<Link
										className={classNames(
											'locations__item-link',
											{
												'tabs__item--active': id === city,
											},
											'tabs__item'
										)}
										href={`/${id}`}
									>
										<span>{name}</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="cities">
					{hasOffers ? (
						<ListWithMap offers={filteredOffers} />
					) : (
						<EmptySection />
					)}
				</div>
			</main>
		</div>
	);
}
