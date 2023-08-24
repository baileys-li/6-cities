import type { PayloadAction} from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { User } from '../../types/user';

import { RequestStatus } from '../../constants';
import { AuthorizationStatus} from '../../constants';
import { checkAuth, login, logout } from '../thunks/auth';

interface UserSlice {
	info: User | null;
	requestStatus: RequestStatus;
	status: AuthorizationStatus;
}


const initialState: UserSlice = {
	info: null,
	requestStatus: RequestStatus.Idle,
	status: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserSlice, action: PayloadAction<User>) {
	state.info = action.payload;
	state.status = AuthorizationStatus.Auth;
	state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UserSlice) {
	state.requestStatus = RequestStatus.Failed;
	state.status = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserSlice) {
	state.requestStatus = RequestStatus.Loading;
}

export const userSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(checkAuth.fulfilled, processSuccess);
		builder.addCase(checkAuth.rejected, processFailed);
		builder.addCase(checkAuth.pending, processLoading);
		builder.addCase(login.fulfilled, processSuccess);
		builder.addCase(login.rejected, processFailed);
		builder.addCase(login.pending, processLoading);
		builder.addCase(logout.fulfilled, (state) => {
			state.info = null;
			state.status = AuthorizationStatus.NoAuth;
		});
	},
	initialState,
	name: 'user',
	reducers: {},
});

export const userActions = {...userSlice.actions, checkAuth, login, logout};
