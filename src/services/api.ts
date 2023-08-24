import type { AxiosInstance } from 'axios';

import axios, { isAxiosError } from 'axios';
import { toast } from 'react-hot-toast';

import { getToken } from './token';

const enum Default {
	BaseUrl = 'https://13.design.pages.academy/six-cities',
	Timeout = 5000,
}

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: Default.BaseUrl as string,
		timeout: Default.Timeout as number,
	});

	api.interceptors.request.use((config) => {
		const token = getToken();
		if (token && config.headers) {
			config.headers['X-Token'] = token;
		}

		return config;
	});

	api.interceptors.response.use(null, (error) => {
		if (isAxiosError(error)) {
			if (error.code === 'ERR_NETWORK') {
				toast.error('Network error');
			}

			if (error.response && error.response.status >= 500) {
				toast.error('Server error');
			}
		}
	});

	return api;
};
