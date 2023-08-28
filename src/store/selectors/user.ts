import { createSelector } from '@reduxjs/toolkit';

import type { Store } from '../../types/store';

import { AuthorizationStatus } from '../../constants';

type UserSlice = Pick<Store, 'user'>;
const selectAuthStatus = (state: UserSlice) => state.user.status;
const selectUser = (state: UserSlice) => state.user.info;

const selectIsAuth = createSelector(selectAuthStatus, (status) => status === AuthorizationStatus.Auth);


export { selectAuthStatus, selectIsAuth, selectUser };
