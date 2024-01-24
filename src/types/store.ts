import type { AxiosInstance } from 'axios'

import type { store } from '../store'

type Store = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

type ThunkApi = {
	dispatch: AppDispatch
	extra: AxiosInstance
	state: Store
}

export type { AppDispatch, Store, ThunkApi }
