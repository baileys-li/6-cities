import { clsx } from 'clsx'

import { Footer } from '../../components/footer/footer'
import { Layout } from '../../components/layout'
import { Spinner } from '../../components/spinner/spinner'
import { useFavorites } from '../../hooks'
import { FavoritesEmpty, FavoritesList } from './components'

export function FavoritesPage() {
	const { isLoading, isSuccess, offers } = useFavorites()
	const showEmpty = isSuccess && offers.length === 0
	return (
		<Layout
			className={clsx('page', {
				'page--favorites-empty': showEmpty
			})}
			title="Favorites"
		>
			{isLoading && <Spinner />}
			{isSuccess && !showEmpty && <FavoritesList offers={offers} />}
			{showEmpty && <FavoritesEmpty />}
			<Footer />
		</Layout>
	)
}
