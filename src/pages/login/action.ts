import { toast } from 'react-hot-toast'
import { type ActionFunctionArgs } from 'react-router-dom'

import { store } from '../../store'
import { login } from '../../store/thunks/auth'

export const handleLogin = async ({ request }: ActionFunctionArgs) => {
	if (request.method !== 'POST') {
		return null
	}

	const form = await request.formData()

	toast.promise(
		store
			.dispatch(
				login({
					email: form.get('email') as string,
					password: form.get('password') as string
				})
			)
			.unwrap(),
		{
			error: 'Failed.',
			loading: 'Logging...',
			success: 'Logged in!'
		}
	)

	return true
}
