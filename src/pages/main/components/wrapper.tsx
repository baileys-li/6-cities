import type { ReactNode } from 'react';

import { clsx } from 'clsx';

import { Layout } from '../../../components/layout';
import { Tabs } from './tabs';

interface WrapperProps {
	children: ReactNode;
	isEmpty: boolean;
}

export const Wrapper = ({ children, isEmpty }: WrapperProps) => (
	<Layout className={clsx('page page--gray page--main', {
		'page__main--index-empty': isEmpty,
	})}
	>
		<main className="page__main page__main--index">
			<h1 className="visually-hidden">Cities</h1>
			<Tabs />
			<div className="cities">
				<div
					className={clsx('cities__places-container container', {
						'cities__places-container--empty': isEmpty,
					})}
				>
					{children}
				</div>
			</div>
		</main>
	</Layout>
);
