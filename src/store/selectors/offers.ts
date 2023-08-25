import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../../types/store';

import { RequestStatus } from '../../constants';

type OffersState = Pick<Store, 'offers'>;

const selectActiveId = (state: OffersState) => state.offers.activeOffer;
const selectOffers = (state: OffersState) => state.offers.items;
const selectOffersStatus = (state: OffersState) => state.offers.status;
const selectOffersState = createSelector(
	selectOffers,
	selectOffersStatus,
	(offers, status) => ({ isLoading: status === RequestStatus.Loading, offers })
);

export { selectActiveId, selectOffers, selectOffersState, selectOffersStatus };
