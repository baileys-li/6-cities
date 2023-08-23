import { clsx } from 'clsx';
import { type ReactNode, memo } from 'react';

import { Header } from '../../../components/header/header';
import { Tabs } from './tabs';

const HEADLINE = 'Cities';

interface WrapperProps {
	children: ReactNode;
	isEmpty: boolean;
}

const MemoHeader = memo(Header);
const MemoTabs = memo(Tabs);

export const Wrapper = ({ children, isEmpty }: WrapperProps) => (
	<div
		className={clsx('page page--gray page--main', {
			'page__main--index-empty': isEmpty,
		})}
	>
		<MemoHeader />
		<main className="page__main page__main--index">
			<h1 className="visually-hidden">{HEADLINE}</h1>
			<MemoTabs />
			<div className="cities">
				{children}
			</div>
		</main>
	</div>
);
