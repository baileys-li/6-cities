import axios, { isAxiosError } from 'axios'
import { toast } from 'react-hot-toast'

import { getToken } from './token'

const enum Default {
	BaseUrl = 'https://16.design.htmlacademy.pro/six-cities/',
	Timeout = 5000
}

export const createAPI = () => {
	const api = axios.create({
		baseURL: Default.BaseUrl as const,
		timeout: Default.Timeout as const
	})

	api.interceptors.request.use(config => {
		const token = getToken()
		if (token && config.headers) {
			config.headers['X-Token'] = token
		}

		return config
	})

	api.interceptors.response.use(null, error => {
		if (isAxiosError(error)) {
			if (error.code === 'ERR_NETWORK') {
				toast.error('Network error')
			}

			if (error.response && error.response.status >= 500) {
				toast.error('Server error')
			}
		}
	})

	return api
}
