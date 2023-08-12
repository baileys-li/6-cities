import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkApi } from '../../types/store';
import type { User } from '../../types/user';

import { Endpoint } from '../../constants';

const checkAuth = createAsyncThunk<User, undefined, ThunkApi>(
	'auth/checkAuth',
	async (_arg, { extra: api }) => {
		const response = await api.get<User>(Endpoint.Login);
		return response.data;
	}
);

interface LoginData {
	email: string;
	password: string;
}

const login = createAsyncThunk<User, LoginData, ThunkApi>(
	'auth/login',
	async (body, { extra: api }) => {
		const response = await api.post<User>(Endpoint.Login, body);
		return response.data;
	}
);

const logout = createAsyncThunk<unknown, undefined, ThunkApi>(
	'auth/logout',
	async (_, { extra: api }) => {
		await api.delete(Endpoint.Logout);
	}
);

export {checkAuth, login, logout};
