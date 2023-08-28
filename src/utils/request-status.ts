import type { PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus } from '../constants';

interface StateWithRequestStatus {
	status: RequestStatus;
}

interface StateWithItems<I> {
	items: I[];
}

function setRejected(state: StateWithRequestStatus) {
	state.status = RequestStatus.Failed;
}

function setPending(state: StateWithRequestStatus) {
	state.status = RequestStatus.Loading;
}

function saveItems<I>(state: StateWithItems<I>, action: PayloadAction<I[]>) {
	state.items = action.payload;
}

function setSuccessWithItems<I>(
	state: StateWithItems<I> & StateWithRequestStatus,
	action: PayloadAction<I[]>
) {
	saveItems(state, action);
	state.status = RequestStatus.Success;
}

export { saveItems, setPending, setRejected, setSuccessWithItems };
