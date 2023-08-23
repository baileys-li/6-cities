import type { Store } from '../../types/store';

type OffersState = Pick<Store, 'offers'>;

const selectActiveId = (state: OffersState) => state.offers.activeOffer;
const selectOffers = (state: OffersState) => state.offers.items;
const selectOffersStatus = (state: OffersState) => state.offers.status;

export { selectActiveId, selectOffers, selectOffersStatus };
