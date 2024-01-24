import { memo } from 'react'

import { Logo, Navigation } from './components'

export interface HeaderProps {
	hideNavigation?: boolean
}

const Header_ = ({ hideNavigation = false }: HeaderProps) => (
	<header className="header">
		<div className="container">
			<div className="header__wrapper">
				<div className="header__left">
					<Logo />
				</div>
				{!hideNavigation && <Navigation />}
			</div>
		</div>
	</header>
)

export const Header = memo(Header_)
