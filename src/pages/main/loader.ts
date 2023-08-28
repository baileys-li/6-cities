import { RequestStatus } from '../../constants';
import { store } from '../../store';
import { offersActions } from '../../store/slices/offers';

export function loadMainPageData() {
	if (store.getState().offers.status === RequestStatus.Idle) {
		store.dispatch(offersActions.fetchAllOffers());
	}

	return null;
}
