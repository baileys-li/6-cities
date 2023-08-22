import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../types/store';

import { AuthorizationStatus } from '../constants';
import { useAppSelector } from './store';

const selectAuthStatus = (state: Store) => state.user.status;
const selectIsAuth = createSelector(selectAuthStatus, (status) => status === AuthorizationStatus.Auth);

export function useAuth() {
	return useAppSelector(selectIsAuth);
}
