import { memo } from 'react';

import { AppRoute } from '../../constants';
import { Link } from '../link/link';

const Footer_ = () => (
	<footer className="footer container">
		<Link className="footer__logo-link" href={AppRoute.Main}>
			<img
				alt="6 cities logo"
				className="footer__logo"
				height={33}
				src="img/logo.svg"
				width={64}
			/>
		</Link>
	</footer>
);

export const Footer = memo(Footer_);
