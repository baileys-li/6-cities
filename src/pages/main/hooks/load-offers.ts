import { useEffect } from 'react';

import { RequestStatus } from '../../../constants';
import {
	useActionCreators,
	useAppSelector,
} from '../../../hooks';
import { selectOffersStatus } from '../../../store/selectors/offers';
import { offersActions } from '../../../store/slices/offers';

export function useLoadOffers() {
	const status = useAppSelector(selectOffersStatus);
	const { fetchAllOffers } = useActionCreators(offersActions);

	useEffect(() => {
		if (status === RequestStatus.Idle) {
			fetchAllOffers();
		}
	}, [fetchAllOffers, status]);

	return {
		isLoading:
			status === RequestStatus.Idle || status === RequestStatus.Loading,
		isSuccess: status === RequestStatus.Success,
	};
}
