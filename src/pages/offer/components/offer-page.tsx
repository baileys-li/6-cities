import { FavoriteButton } from '../../../components/favorite-button/favorite-button';
import { Map } from '../../../components/map/map';
import { PlaceCard } from '../../../components/place-card/place-card';
import { PremiumMark } from '../../../components/premium-mark/premium-mark';
import { Price } from '../../../components/price/price';
import { Rating } from '../../../components/rating/rating';
import { Spinner } from '../../../components/spinner/spinner';
import { useAppSelector, useDocumentTitle } from '../../../hooks';
import {
	selectOffer,
	selectRandomNearbySlice,
} from '../../../store/selectors/offer';
import { Reviews } from './Reviews';
import { Features } from './features';
import { Gallery } from './gallery';
import { Goods } from './goods';
import { Host } from './host';

export function OfferPage() {
	const offer = useAppSelector(selectOffer)!;
	const nearbyOffers = useAppSelector(selectRandomNearbySlice);
	useDocumentTitle(offer?.title || '');

	if (offer === null) {
		return <Spinner />;
	}

	const {
		bedrooms,
		city,
		description,
		goods,
		host,
		id,
		images,
		isFavorite,
		isPremium,
		maxAdults,
		price,
		rating,
		title = '',
		type = '',
	} = offer;

	return (
		<>
			<section className="offer">
				<Gallery images={images} title={title} />
				<div className="offer__container container">
					<div className="offer__wrapper">
						{isPremium && <PremiumMark bemBlock="offer" />}
						<div className="offer__name-wrapper">
							<h1 className="offer__name">{title}</h1>

							<FavoriteButton
								bemBlock="offer"
								isFavorite={isFavorite}
								offerId={id}
								width={31}
							/>
						</div>
						<Rating bemBlock="offer" rating={rating} showValue />
						<Features bedrooms={bedrooms} maxAdults={maxAdults} type={type} />
						<Price bemBlock="offer" price={price} />
						<Goods goods={goods} />
						<Host description={description} host={host} />
						<Reviews />
					</div>
				</div>
				<Map
					city={city.name}
					className="offer__map"
					offers={[...nearbyOffers, offer]}
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
		</>
	);
}
