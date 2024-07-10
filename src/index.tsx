import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './polyfills'
import { router } from './router'
import { getToken } from './services/token'
import { store } from './store'
import { userActions } from './store/slices/user'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

store.dispatch(userActions[getToken() ? 'checkAuth' : 'setUnAuth']())

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		<Toaster position="top-right" />
	</React.StrictMode>
)
