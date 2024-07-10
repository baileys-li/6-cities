import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import type { User } from '../../types/user'

import { AuthorizationStatus } from '../../constants'
import { checkAuth, login, logout } from '../thunks/auth'

interface UserSlice {
	info: User | null
	status: AuthorizationStatus
}

const initialState: UserSlice = {
	info: null,
	status: AuthorizationStatus.Unknown
}

function processSuccess(state: UserSlice, action: PayloadAction<User>) {
	state.info = action.payload
	state.status = AuthorizationStatus.Auth
}

function processFailed(state: UserSlice) {
	state.status = AuthorizationStatus.NoAuth
}

function setUnAuth(state: UserSlice) {
	state.info = null
	state.status = AuthorizationStatus.NoAuth
}

export const userSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(checkAuth.fulfilled, processSuccess)
		builder.addCase(checkAuth.rejected, processFailed)
		builder.addCase(login.fulfilled, processSuccess)
		builder.addCase(login.rejected, processFailed)
		builder.addCase(logout.fulfilled, setUnAuth)
	},
	initialState,
	name: 'user',
	reducers: {
		setUnAuth
	},
	selectors: {
		isAuth: state => state.status === AuthorizationStatus.Auth,
		status: state => state.status,
		user: state => state.info
	}
})

export const userSelectors = userSlice.selectors
export const userActions = { ...userSlice.actions, checkAuth, login, logout }
