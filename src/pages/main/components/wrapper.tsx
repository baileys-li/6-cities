import { clsx } from 'clsx';
import { type ReactNode, memo } from 'react';

import { Layout } from '../../../components/layout';
import { Tabs } from './tabs';

const HEADLINE = 'Cities';

interface WrapperProps {
	children: ReactNode;
	isEmpty: boolean;
}
const MemoTabs = memo(Tabs);

export const Wrapper = ({ children, isEmpty }: WrapperProps) => (
	<Layout className={clsx('page page--gray page--main', {
		'page__main--index-empty': isEmpty,
	})}
	>
		<main className="page__main page__main--index">
			<h1 className="visually-hidden">{HEADLINE}</h1>
			<MemoTabs />
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
