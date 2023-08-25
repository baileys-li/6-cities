import clsx from 'clsx';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { CITIES } from '../../../constants';

function Tabs_() {
	return (
		<div className="tabs">
			<section className="locations container">
				<ul className="locations__list tabs__list">
					{CITIES.map(({ id, name }) => (
						<li className="locations__item" key={id}>
							<NavLink
								className={({ isActive }) =>
									clsx(
										'locations__item-link',
										{
											'tabs__item--active': isActive,
										},
										'tabs__item'
									)}
								to={`/${id}`}
							>
								<span>{name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export const Tabs = memo(Tabs_);
