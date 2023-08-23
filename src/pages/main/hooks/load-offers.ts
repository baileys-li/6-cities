import { useEffect } from 'react';

import { RequestStatus } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectOffersStatus } from '../../../store/selectors/offers';
import { fetchAllOffers } from '../../../store/thunks/offers';

export function useLoadOffers() {
	const status = useAppSelector(selectOffersStatus);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (status === RequestStatus.Idle) {
			dispatch(fetchAllOffers());
		}
	}, [dispatch, status]);

	return {
		isLoading:
			status === RequestStatus.Idle || status === RequestStatus.Loading,
		isSuccess: status === RequestStatus.Success,
	};
}
