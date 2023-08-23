import type { Store } from '../../types/store';

type OffersState = Pick<Store, 'offers'>;

const selectOffers = (state: OffersState) => state.offers.items;
const selectOffersStatus = (state: OffersState) => state.offers.status;

export { selectOffers, selectOffersStatus };
