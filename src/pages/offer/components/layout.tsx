import { Outlet } from 'react-router-dom'

import { Layout } from '../../../components/layout'

export function OfferLayout() {
	return (
		<Layout className="page">
			<main className="page__main page__main--offer">
				<Outlet />
			</main>
		</Layout>
	)
}
